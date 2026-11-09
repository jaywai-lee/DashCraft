import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { WidgetErrorBoundary } from "./WidgetErrorBoundary";
import { Button } from "@/shared/ui/button";

const BuggyWidgetComponent = ({ shouldThrow }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error("위젯 렌더링 중 예기치 않은 오류가 발생했습니다!");
  }
  return (
    <div className="w-full h-full min-h-[140px] flex items-center justify-center p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/20 text-xs font-medium text-center">
      위젯 데이터가 정상적으로 작동 중입니다.
    </div>
  );
};

const InteractiveBoundaryDemo = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="space-y-3 w-full">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <span className="text-xs text-muted-foreground font-semibold">
          상태 테스트: {hasError ? "오류 상태" : "정상 상태"}
        </span>
        <Button
          size="sm"
          variant={hasError ? "primary" : "outline"}
          onClick={() => setHasError((prev) => !prev)}
          className="h-7 text-xs px-2"
        >
          {hasError ? "에러 해제" : "에러 트리거"}
        </Button>
      </div>

      <WidgetErrorBoundary onReset={() => setHasError(false)}>
        <BuggyWidgetComponent shouldThrow={hasError} />
      </WidgetErrorBoundary>
    </div>
  );
};

const meta: Meta<typeof WidgetErrorBoundary> = {
  title: "Shared/ErrorBoundary/WidgetErrorBoundary",
  component: WidgetErrorBoundary,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[320px] p-4 bg-card border border-border rounded-xl shadow-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WidgetErrorBoundary>;

export const NormalState: Story = {
  render: () => (
    <WidgetErrorBoundary>
      <BuggyWidgetComponent shouldThrow={false} />
    </WidgetErrorBoundary>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <WidgetErrorBoundary>
      <BuggyWidgetComponent shouldThrow={true} />
    </WidgetErrorBoundary>
  ),
};

export const Interactive: Story = {
  render: () => <InteractiveBoundaryDemo />,
};
