import type { Meta, StoryObj } from "@storybook/react";
import { ColorPalettePicker } from "./ColorPalettePicker";
import { useState } from "react";

const meta: Meta<typeof ColorPalettePicker> = {
  title: "Features/Calendar/ColorPalettePicker",
  component: ColorPalettePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorPalettePicker>;

const InteractiveColorPicker = () => {
  const [color, setColor] = useState("default");
  return (
    <div className="p-4 border rounded-xl bg-card max-w-xs">
      <ColorPalettePicker selectedColor={color} onChange={setColor} />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveColorPicker />,
};
