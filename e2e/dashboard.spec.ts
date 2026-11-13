import { test, expect } from "@playwright/test";

test.describe("Dashboard Widget Lifecycle & DnD E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    const initialWidgetsPromise = page
      .waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/widgets") &&
          res.request().method() === "GET",
      )
      .catch(() => null);

    await page.goto("/dashboard");
    await expect(
      page.getByRole("button", { name: /^위젯 추가$/ }).first(),
    ).toBeVisible();

    await initialWidgetsPromise;

    const deleteButtons = page.getByRole("button", { name: "위젯 삭제" });
    while ((await deleteButtons.count()) > 0) {
      const currentCount = await deleteButtons.count();
      await deleteButtons.first().click();
      await expect(deleteButtons)
        .toHaveCount(currentCount - 1, { timeout: 5000 })
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

  test("위젯을 드래그 앤 드롭으로 재정렬하면 새로고침 후에도 순서가 유지되어야 한다", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: /^위젯 추가$/ })
      .first()
      .click();
    const [firstRes] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/widgets") &&
          res.request().method() === "POST" &&
          (res.status() === 201 || res.status() === 200),
      ),
      page.getByRole("button", { name: "할 일 목록" }).first().click(),
    ]);
    const firstData = await firstRes.json();
    const firstId = Array.isArray(firstData)
      ? firstData[0]?.widget_id
      : firstData?.widget_id;

    await page
      .getByRole("button", { name: /^위젯 추가$/ })
      .first()
      .click();
    const [secondRes] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/widgets") &&
          res.request().method() === "POST" &&
          (res.status() === 201 || res.status() === 200),
      ),
      page.getByRole("button", { name: "메모", exact: true }).first().click(),
    ]);
    const secondData = await secondRes.json();
    const secondId = Array.isArray(secondData)
      ? secondData[0]?.widget_id
      : secondData?.widget_id;

    const firstWidget = page.getByTestId(`widget-${firstId}`);
    const secondWidget = page.getByTestId(`widget-${secondId}`);
    await expect(firstWidget).toBeVisible();
    await expect(secondWidget).toBeVisible();

    const widgetCards = page.locator('[data-testid^="widget-"]');
    await expect(widgetCards.nth(0)).toHaveAttribute(
      "data-testid",
      `widget-${firstId}`,
    );
    await expect(widgetCards.nth(1)).toHaveAttribute(
      "data-testid",
      `widget-${secondId}`,
    );

    const dragHandle = firstWidget.getByRole("button", {
      name: /위젯 순서 이동/,
    });
    const handleBox = await dragHandle.boundingBox();
    const targetBox = await secondWidget.boundingBox();
    expect(handleBox).not.toBeNull();
    expect(targetBox).not.toBeNull();

    const startX = handleBox!.x + handleBox!.width / 2;
    const startY = handleBox!.y + handleBox!.height / 2;
    const endX = targetBox!.x + targetBox!.width / 2;
    const endY = targetBox!.y + targetBox!.height / 2;

    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(startX + 10, startY, { steps: 5 });
    await page.mouse.move(endX, endY, { steps: 15 });

    const [reorderRes] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/rpc/reorder_widgets") &&
          res.request().method() === "POST" &&
          res.ok(),
      ),
      page.mouse.up(),
    ]);
    expect(reorderRes.ok()).toBeTruthy();

    await expect(widgetCards.nth(0)).toHaveAttribute(
      "data-testid",
      `widget-${secondId}`,
    );
    await expect(widgetCards.nth(1)).toHaveAttribute(
      "data-testid",
      `widget-${firstId}`,
    );

    await page.reload();
    await expect(widgetCards.nth(0)).toHaveAttribute(
      "data-testid",
      `widget-${secondId}`,
    );
    await expect(widgetCards.nth(1)).toHaveAttribute(
      "data-testid",
      `widget-${firstId}`,
    );
  });
});
