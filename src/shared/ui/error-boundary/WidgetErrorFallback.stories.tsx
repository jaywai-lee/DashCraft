import type { Meta, StoryObj } from "@storybook/react";
import { WidgetErrorFallback } from "./WidgetErrorFallback";

const meta: Meta<typeof WidgetErrorFallback> = {
  title: "Shared/ErrorBoundary/WidgetErrorFallback",
  component: WidgetErrorFallback,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[300px] h-[220px] p-2 bg-background border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WidgetErrorFallback>;

export const Default: Story = {
  args: {
    error: new Error("네트워크 연결이 불안정합니다."),
    onReset: () => alert("다시 시도 이벤트 실행"),
  },
};

export const LongErrorMessage: Story = {
  args: {
    error: new Error(
      "서버와의 통신 도중 알 수 없는 예외가 발생하여 데이터 로드에 실패했습니다. 지속될 경우 문의해 주세요.",
    ),
    onReset: () => alert("다시 시도 이벤트 실행"),
  },
};

export const WithoutErrorMessage: Story = {
  args: {
    error: null,
    onReset: () => alert("다시 시도 이벤트 실행"),
  },
};
