import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WidgetFrame } from "./WidgetFrame";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const meta: Meta<typeof WidgetFrame> = {
  title: "Entities/Widget/WidgetFrame",
  component: WidgetFrame,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="w-[340px] p-2 bg-muted/20 rounded-2xl">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WidgetFrame>;

export const Default1x1: Story = {
  args: {
    id: "widget-1",
    title: "할 일 목록",
    color: "default",
    width: 1,
    children: (
      <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground bg-muted/10 rounded-lg">
        1x1 위젯 컨텐츠 영역
      </div>
    ),
    onRemove: () => alert("삭제 클릭"),
    onUpdateTitle: (newTitle) => alert(`제목 변경: ${newTitle}`),
    onSelectColor: (color) => alert(`색상 변경: ${color}`),
    onToggleWidth: () => alert("크기 토글 클릭"),
    onMoveLeft: () => alert("왼쪽 이동"),
    onMoveRight: () => alert("오른쪽 이동"),
  },
};

export const Expanded2x2: Story = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="w-[680px] p-2 bg-muted/20 rounded-2xl">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
  args: {
    ...Default1x1.args,
    title: "확대된 2x2 메인 메모",
    color: "purple",
    width: 2,
    children: (
      <div className="w-full h-full flex items-center justify-center text-xs text-purple-500 bg-purple-500/10 rounded-lg">
        2x2 확장 위젯 컨텐츠 영역
      </div>
    ),
  },
};

export const ColoredThemes: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[700px]">
      <WidgetFrame id="w1" title="블루 테마" color="blue">
        <div className="text-xs p-2">Blue Theme Content</div>
      </WidgetFrame>
      <WidgetFrame id="w2" title="그린 테마" color="green">
        <div className="text-xs p-2">Green Theme Content</div>
      </WidgetFrame>
      <WidgetFrame id="w3" title="옐로우 테마" color="yellow">
        <div className="text-xs p-2">Yellow Theme Content</div>
      </WidgetFrame>
      <WidgetFrame id="w4" title="레드 테마" color="red">
        <div className="text-xs p-2">Red Theme Content</div>
      </WidgetFrame>
    </div>
  ),
};
