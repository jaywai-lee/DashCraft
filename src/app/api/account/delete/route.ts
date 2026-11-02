import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options),
              );
            } catch {}
          },
        },
      },
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user || !user.email) {
      return NextResponse.json(
        { error: "인증되지 않은 요청입니다." },
        { status: 401 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const confirmEmail =
      typeof body.confirmEmail === "string" ? body.confirmEmail : "";

    if (confirmEmail.trim().toLowerCase() !== user.email.trim().toLowerCase()) {
      return NextResponse.json(
        { error: "확인 이메일 주소가 일치하지 않습니다." },
        { status: 400 },
      );
    }

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceRoleKey) {
      console.error(
        "[AccountDelete] SUPABASE_SERVICE_ROLE_KEY가 설정되지 않았습니다.",
      );
      return NextResponse.json(
        { error: "서버 설정 오류가 발생했습니다." },
        { status: 500 },
      );
    }

    const supabaseAdmin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    try {
      const { data: files, error: listError } = await supabaseAdmin.storage
        .from("avatars")
        .list(user.id);

      if (listError) {
        console.error("[AccountDelete] 아바타 목록 조회 실패:", listError);
      } else if (files && files.length > 0) {
        const filePaths = files.map((f) => `${user.id}/${f.name}`);
        const { error: removeError } = await supabaseAdmin.storage
          .from("avatars")
          .remove(filePaths);

        if (removeError) {
          console.error("[AccountDelete] 아바타 삭제 실패:", removeError);
        }
      }
    } catch (avatarErr) {
      console.error("[AccountDelete] 아바타 정리 중 예외 발생:", avatarErr);
    }

    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
      user.id,
    );

    if (deleteError) {
      console.error("[AccountDelete] deleteUser 실패:", deleteError);
      return NextResponse.json(
        { error: "계정 삭제 처리 중 오류가 발생했습니다." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[AccountDelete] 서버 내부 예외:", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
