import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "./route";

const mockExchangeCodeForSession = vi.fn();

vi.mock("next/headers", () => ({
  cookies: vi.fn(async () => ({
    getAll: () => [],
    set: vi.fn(),
  })),
}));

vi.mock("@supabase/ssr", () => ({
  createServerClient: () => ({
    auth: {
      exchangeCodeForSession: mockExchangeCodeForSession,
    },
  }),
}));

describe("GET /auth/callback", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("NODE_ENV", "production");
    delete process.env.ALLOWED_HOSTS;
    mockExchangeCodeForSession.mockResolvedValue({ error: null });
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("프로덕션 환경에서 x-forwarded-host가 있으면 해당 도메인으로 리다이렉트한다", async () => {
    const req = new NextRequest(
      "http://localhost:3000/auth/callback?code=valid-code&next=/calendar",
      {
        headers: {
          "x-forwarded-host": "dash-craft-henna.vercel.app",
          "x-forwarded-proto": "https",
        },
      },
    );

    const res = await GET(req);

    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(
      "https://dash-craft-henna.vercel.app/calendar",
    );
  });

  it("다중 프록시 체인의 x-forwarded-host에서 첫 번째 호스트만 사용한다", async () => {
    const req = new NextRequest(
      "http://localhost:3000/auth/callback?code=valid-code",
      {
        headers: {
          "x-forwarded-host": "dash-craft-henna.vercel.app, internal-edge",
          "x-forwarded-proto": "https, http",
        },
      },
    );

    const res = await GET(req);

    expect(res.headers.get("location")).toBe(
      "https://dash-craft-henna.vercel.app/dashboard",
    );
  });

  it("ALLOWED_HOSTS에 없는 변조된 x-forwarded-host는 무시하고 기본 origin으로 폴백한다", async () => {
    process.env.ALLOWED_HOSTS = "dash-craft-henna.vercel.app";

    const req = new NextRequest(
      "https://dash-craft-henna.vercel.app/auth/callback?code=valid-code",
      {
        headers: {
          "x-forwarded-host": "evil.example.com",
          "x-forwarded-proto": "https",
        },
      },
    );

    const res = await GET(req);

    expect(res.headers.get("location")).toBe(
      "https://dash-craft-henna.vercel.app/dashboard",
    );
  });

  it("next 파라미터가 프로토콜 상대 URL(//)이면 /dashboard로 폴백한다", async () => {
    const req = new NextRequest(
      "https://dash-craft-henna.vercel.app/auth/callback?code=valid-code&next=//evil.com",
      {
        headers: {
          "x-forwarded-host": "dash-craft-henna.vercel.app",
        },
      },
    );

    const res = await GET(req);

    expect(res.headers.get("location")).toBe(
      "https://dash-craft-henna.vercel.app/dashboard",
    );
  });

  it("개발 환경에서는 x-forwarded-host를 무시하고 로컬 origin을 유지한다", async () => {
    vi.stubEnv("NODE_ENV", "development");

    const req = new NextRequest(
      "http://localhost:3000/auth/callback?code=valid-code",
      {
        headers: {
          "x-forwarded-host": "dash-craft-henna.vercel.app",
        },
      },
    );

    const res = await GET(req);

    expect(res.headers.get("location")).toBe("http://localhost:3000/dashboard");
  });

  it("세션 교환 실패 또는 code 누락 시 x-forwarded-host 기준 로그인 에러 페이지로 리다이렉트한다", async () => {
    mockExchangeCodeForSession.mockResolvedValue({
      error: new Error("invalid code"),
    });

    const req = new NextRequest(
      "http://localhost:3000/auth/callback?code=expired-code",
      {
        headers: {
          "x-forwarded-host": "dash-craft-henna.vercel.app",
        },
      },
    );

    const res = await GET(req);

    expect(res.headers.get("location")).toBe(
      "https://dash-craft-henna.vercel.app/login?error=auth_callback_failed",
    );
  });
});
