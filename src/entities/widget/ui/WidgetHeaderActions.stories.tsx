import type { Meta, StoryObj } from "@storybook/react";
import { WidgetHeaderActions } from "./WidgetHeaderActions";
import { useState } from "react";
import { WidgetColor } from "../model/types";

const meta: Meta<typeof WidgetHeaderActions> = {
  title: "Entities/Widget/WidgetHeaderActions",
  component: WidgetHeaderActions,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WidgetHeaderActions>;

const InteractiveHeaderActions = () => {
  const [color, setColor] = useState<WidgetColor>("default");
  const [width, setWidth] = useState<number>(1);

  return (
    <div className="p-4 bg-card border rounded-xl flex items-center justify-between w-[280px]">
      <span className="text-xs font-semibold">헤더 액션 테스트</span>
      <WidgetHeaderActions
        id="test-header-actions"
        color={color}
        width={width}
        onMoveLeft={() => alert("왼쪽 이동")}
        onMoveRight={() => alert("오른쪽 이동")}
        onSelectColor={setColor}
        onToggleWidth={() => setWidth((prev) => (prev === 1 ? 2 : 1))}
        onRemove={() => alert("위젯 삭제")}
      />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveHeaderActions />,
};
