import type { Meta, StoryObj } from "@storybook/react";
import { WidgetColorPicker } from "./WidgetColorPicker";
import { useState } from "react";
import { WidgetColor } from "../model/types";

const meta: Meta<typeof WidgetColorPicker> = {
  title: "Entities/Widget/WidgetColorPicker",
  component: WidgetColorPicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WidgetColorPicker>;

const InteractiveColorPicker = () => {
  const [color, setColor] = useState<WidgetColor>("default");
  return (
    <div className="p-4 bg-card border rounded-xl w-[220px] flex items-center justify-between">
      <span className="text-xs text-muted-foreground">색상 선택:</span>
      <WidgetColorPicker color={color} onSelectColor={setColor} />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveColorPicker />,
};
