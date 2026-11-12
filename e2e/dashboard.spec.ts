import { test, expect } from "@playwright/test";

test.describe("Dashboard Widget Lifecycle & DnD E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");

    await expect(
      page.getByRole("button", { name: /^위젯 추가$/ }).first(),
    ).toBeVisible();

    const deleteButtons = page.getByRole("button", { name: "위젯 삭제" });
    while ((await deleteButtons.count()) > 0) {
      const currentCount = await deleteButtons.count();
      await deleteButtons.first().click();
      await expect(deleteButtons)
        .toHaveCount(currentCount - 1, {
          timeout: 5000,
        })
        .catch(() => {});
    }
  });

  test("위젯 추가 드롭다운을 통해 신규 Todo 위젯을 정상적으로 생성해야 한다", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: /^위젯 추가$/ })
      .first()
      .click();

    const [response] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/widgets") &&
          res.request().method() === "POST" &&
          (res.status() === 201 || res.status() === 200),
      ),
      page.getByRole("button", { name: "할 일 목록" }).first().click(),
    ]);

    const resData = await response.json();
    const widgetId = Array.isArray(resData)
      ? resData[0]?.widget_id
      : resData?.widget_id;

    if (widgetId) {
      await expect(page.getByTestId(`widget-${widgetId}`)).toBeVisible();
    } else {
      await expect(page.getByText("할 일 목록").first()).toBeVisible();
    }
  });

  test("특정 위젯의 삭제 버튼을 클릭하면 해당 위젯이 화면에서 완벽히 제거되어야 한다", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: /^위젯 추가$/ })
      .first()
      .click();
    const [createResponse] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/widgets") &&
          res.request().method() === "POST" &&
          (res.status() === 201 || res.status() === 200),
      ),
      page.getByRole("button", { name: "할 일 목록" }).first().click(),
    ]);

    const resData = await createResponse.json();
    const createdWidgetId = Array.isArray(resData)
      ? resData[0]?.widget_id
      : resData?.widget_id;

    const targetWidget = page.getByTestId(`widget-${createdWidgetId}`);
    await expect(targetWidget).toBeVisible();

    const [deleteResponse] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/widgets") &&
          res.request().method() === "DELETE" &&
          (res.status() === 200 || res.status() === 204),
      ),
      targetWidget.getByRole("button", { name: "위젯 삭제" }).click(),
    ]);
    expect(deleteResponse.ok()).toBeTruthy();

    await expect(targetWidget).toHaveCount(0);
  });
});
