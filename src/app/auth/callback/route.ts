import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

const HOST_HEADER_PATTERN = /^[a-zA-Z0-9.-]+(?::\d{1,5})?$/;

function sanitizeNextPath(rawNext: string | null): string {
  if (!rawNext) return "/dashboard";
  return rawNext.startsWith("/") && !rawNext.startsWith("//")
    ? rawNext
    : "/dashboard";
}

function resolveRedirectOrigin(request: NextRequest): string {
  const { origin } = new URL(request.url);

  if (process.env.NODE_ENV === "development") {
    return origin;
  }

  const forwardedHost = request.headers
    .get("x-forwarded-host")
    ?.split(",")[0]
    ?.trim();

  if (!forwardedHost || !HOST_HEADER_PATTERN.test(forwardedHost)) {
    return origin;
  }

  const allowedHosts = process.env.ALLOWED_HOSTS?.split(",")
    .map((host) => host.trim())
    .filter(Boolean);

  if (
    allowedHosts &&
    allowedHosts.length > 0 &&
    !allowedHosts.includes(forwardedHost)
  ) {
    return origin;
  }

  const rawProto = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const forwardedProto =
    rawProto === "http" || rawProto === "https" ? rawProto : "https";

  return `${forwardedProto}://${forwardedHost}`;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = sanitizeNextPath(searchParams.get("next"));
  const redirectOrigin = resolveRedirectOrigin(request);

  if (code) {
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

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${redirectOrigin}${next}`);
    }
  }

  return NextResponse.redirect(
    `${redirectOrigin}/login?error=auth_callback_failed`,
  );
}
