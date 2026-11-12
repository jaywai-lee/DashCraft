import { test, expect } from "@playwright/test";

test.describe("Calendar Schedule E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/calendar");
    await expect(page.locator(".grid").first()).toBeVisible();
  });

  test("캘린더 페이지가 정상적으로 렌더링되어야 한다", async ({ page }) => {
    await expect(page).toHaveURL(/\/calendar/);
  });

  test("신규 일정을 등록하고 캘린더 화면에 올바르게 표시되는지 확인한다", async ({
    page,
  }, testInfo) => {
    const scheduleTitle = `테스트 일정 ${Date.now()}`;

    const targetDates: Record<string, string> = {
      chromium: "21",
      firefox: "22",
      webkit: "23",
    };
    const targetDate = targetDates[testInfo.project.name] || "24";

    const dateCell = page
      .locator(".grid")
      .last()
      .getByText(targetDate, { exact: true })
      .first();
    await dateCell.click();

    const titleInput = page.getByPlaceholder("예: 팀 주간 회의");
    await expect(titleInput).toBeVisible();
    await titleInput.fill(scheduleTitle);

    const [response] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/schedules") &&
          res.request().method() === "POST" &&
          (res.status() === 201 || res.status() === 200),
      ),
      page.getByRole("button", { name: "추가", exact: true }).click(),
    ]);

    expect(response.ok()).toBeTruthy();

    await expect(page.getByText(scheduleTitle).first()).toBeVisible();
  });
});
