import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
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
    const { confirmEmail } = body;

    const normalizedInputEmail =
      typeof confirmEmail === "string" ? confirmEmail.trim().toLowerCase() : "";
    const normalizedUserEmail = user.email.trim().toLowerCase();

    if (!normalizedInputEmail || normalizedInputEmail !== normalizedUserEmail) {
      return NextResponse.json(
        { error: "확인 이메일 주소가 일치하지 않습니다." },
        { status: 400 },
      );
    }

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceRoleKey) {
      console.error(
        "[Account Delete API Error] SUPABASE_SERVICE_ROLE_KEY is not configured.",
      );
      return NextResponse.json(
        { error: "서버 오류가 발생했습니다." },
        { status: 500 },
      );
    }

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
      user.id,
    );

    if (deleteError) {
      console.error(
        "[Account Delete API Error] Delete user failed:",
        deleteError.message,
      );
      return NextResponse.json(
        { error: "계정 삭제에 실패했습니다." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "계정이 성공적으로 삭제되었습니다.",
    });
  } catch (err: unknown) {
    console.error("[Account Delete API Error] Unexpected exception:", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
