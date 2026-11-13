import { test, expect } from "@playwright/test";

const BROWSER_TARGET_DAY: Record<string, string> = {
  chromium: "12",
  firefox: "13",
  webkit: "14",
};

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
    browserName,
  }) => {
    const scheduleTitle = `테스트 일정 ${Date.now()}`;
    const targetDay = BROWSER_TARGET_DAY[browserName] ?? "15";
    const calendarGrid = page.locator(".grid").last();

    const existingTestSchedule = calendarGrid
      .getByText(/^테스트 일정 /)
      .first();
    while (await existingTestSchedule.isVisible().catch(() => false)) {
      await existingTestSchedule.click();

      const deleteBtn = page
        .locator(".fixed.inset-0.z-50")
        .getByRole("button", { name: "삭제", exact: true });
      await expect(deleteBtn).toBeVisible();

      await Promise.all([
        page.waitForResponse(
          (res) =>
            res.url().includes("/rest/v1/schedules") &&
            res.request().method() === "DELETE",
        ),
        deleteBtn.click(),
      ]);
      await expect(deleteBtn).toBeHidden();
    }

    const dateCell = calendarGrid.getByText(targetDay, { exact: true }).first();
    await dateCell.click();

    const titleInput = page.getByPlaceholder("예: 팀 주간 회의");
    await expect(titleInput).toBeVisible();
    await titleInput.fill(scheduleTitle);

    const [createResponse] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/schedules") &&
          res.request().method() === "POST" &&
          (res.status() === 201 || res.status() === 200),
      ),
      page.getByRole("button", { name: "추가", exact: true }).click(),
    ]);
    expect(createResponse.ok()).toBeTruthy();

    const createdSchedule = calendarGrid.getByText(scheduleTitle);
    await expect(createdSchedule).toBeVisible();

    await createdSchedule.click();
    const deleteModalBtn = page
      .locator(".fixed.inset-0.z-50")
      .getByRole("button", { name: "삭제", exact: true });
    await expect(deleteModalBtn).toBeVisible();
    await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/schedules") &&
          res.request().method() === "DELETE",
      ),
      deleteModalBtn.click(),
    ]);
    await expect(createdSchedule).toHaveCount(0);
  });
});
