import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  const email = process.env.E2E_USER_EMAIL;
  const password = process.env.E2E_USER_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "E2E_USER_EMAIL 또는 E2E_USER_PASSWORD 환경 변수가 설정되지 않았습니다. .env.e2e 파일을 확인해 주세요.",
    );
  }

  await page.goto("/login");

  await page.getByLabel(/이메일/i).fill(email);
  await page.getByLabel(/비밀번호/i).fill(password);
  await page.getByRole("button", { name: "로그인", exact: true }).click();

  await page.waitForURL(/\/dashboard/);
  await expect(page).toHaveURL(/\/dashboard/);

  await page.context().storageState({ path: authFile });
});
