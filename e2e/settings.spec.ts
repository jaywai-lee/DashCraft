import { test, expect } from "@playwright/test";

const TINY_PNG_BUFFER = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64",
);

test.describe("Settings & Theme E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/settings");
    await expect(
      page.getByRole("heading", { name: "계정 설정" }),
    ).toBeVisible();
  });

  test("현재 로그인된 사용자 이메일과 설정 섹션들이 정상 표시되어야 한다", async ({
    page,
  }) => {
    const userEmail = process.env.E2E_USER_EMAIL;
    if (userEmail) {
      await expect(page.getByText(userEmail)).toBeVisible();
    }
    await expect(
      page.getByRole("heading", { name: "프로필 정보" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "비밀번호 변경" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "위험 영역 (Danger Zone)" }),
    ).toBeVisible();
  });

  test("테마 토글 버튼 클릭 시 다크/라이트 모드가 전환되고 새로고침 후에도 유지되어야 한다", async ({
    page,
  }) => {
    const html = page.locator("html");
    const themeToggle = page.getByRole("button", { name: /모드로 전환/ });
    await expect(themeToggle).toBeVisible();

    const wasDark = await html.evaluate((el) => el.classList.contains("dark"));

    await themeToggle.click();
    if (wasDark) {
      await expect(html).not.toHaveClass(/dark/);
    } else {
      await expect(html).toHaveClass(/dark/);
    }

    await page.reload();
    if (wasDark) {
      await expect(html).not.toHaveClass(/dark/);
    } else {
      await expect(html).toHaveClass(/dark/);
    }

    await page.getByRole("button", { name: /모드로 전환/ }).click();
  });

  test("프로필 아바타 이미지를 업로드한 뒤 다시 삭제할 수 있어야 한다", async ({
    page,
  }) => {
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: "e2e-avatar.png",
      mimeType: "image/png",
      buffer: TINY_PNG_BUFFER,
    });

    await expect(
      page.getByText("프로필 이미지가 변경되었습니다."),
    ).toBeVisible();
    await expect(page.getByAltText("프로필 이미지")).toBeVisible();

    const deleteAvatarBtn = page
      .getByRole("button", { name: "삭제", exact: true })
      .first();
    await expect(deleteAvatarBtn).toBeVisible();
    await deleteAvatarBtn.click();

    await expect(
      page.getByText("프로필 이미지가 삭제되었습니다."),
    ).toBeVisible();
  });

  test("새 비밀번호와 확인 비밀번호가 다르면 변경 요청을 차단하고 에러 안내를 표시해야 한다", async ({
    page,
  }) => {
    const userEmail = process.env.E2E_USER_EMAIL;
    if (userEmail) {
      await expect(page.getByText(userEmail)).toBeVisible();
    }

    const newPwInput = page.getByLabel("새 비밀번호 (8자 이상)");
    const confirmPwInput = page.getByLabel("새 비밀번호 확인");

    await newPwInput.click();
    await newPwInput.pressSequentially("NewPassword123!");

    await confirmPwInput.click();
    await confirmPwInput.pressSequentially("MismatchPassword123!");

    const submitPasswordBtn = page.getByRole("button", {
      name: "비밀번호 변경 완료",
    });
    await expect(submitPasswordBtn).toBeEnabled();
    await submitPasswordBtn.click();

    await expect(page.getByText(/일치하지 않습니다/)).toBeVisible();
  });

  test("계정 삭제 모달에서 이메일이 일치하지 않으면 삭제 버튼이 비활성화되어야 한다", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "계정 삭제" }).click();

    await expect(
      page.getByRole("heading", { name: "계정 영구 삭제 확인" }),
    ).toBeVisible();

    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill("wrong-user@example.com");

    const confirmDeleteBtn = page.getByRole("button", {
      name: "삭제",
      exact: true,
    });
    await expect(confirmDeleteBtn).toBeDisabled();

    await page.getByRole("button", { name: "취소" }).click();
    await expect(
      page.getByRole("heading", { name: "계정 영구 삭제 확인" }),
    ).toHaveCount(0);
  });
});
