import { test, expect } from "@playwright/test";

test.describe("Auth & Session Flow E2E Tests", () => {
  test("미인증 사용자가 보호된 라우트(/dashboard) 접근 시 /login으로 리다이렉트되어야 한다", async ({
    page,
  }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/login/);
  });

  test("미인증 사용자가 설정 페이지(/settings) 접근 시 /login으로 리다이렉트되어야 한다", async ({
    page,
  }) => {
    await page.goto("/settings");
    await expect(page).toHaveURL(/\/login/);
  });

  test("로그인 폼 요소가 렌더링되고 회원가입 링크 이동이 정상 작동해야 한다", async ({
    page,
  }) => {
    await page.goto("/login");

    await expect(page.getByLabel(/이메일/i)).toBeVisible();
    await expect(page.getByLabel(/비밀번호/i)).toBeVisible();

    const signupLink = page.getByRole("link", { name: /회원가입/i });
    await expect(signupLink).toBeVisible();
    await signupLink.click();

    await expect(page).toHaveURL(/\/signup/);
  });
});
