import type { Meta, StoryObj } from "@storybook/react";
import { TimePickerInput } from "./TimePickerInput";
import { useState } from "react";

const meta: Meta<typeof TimePickerInput> = {
  title: "Features/Calendar/TimePickerInput",
  component: TimePickerInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TimePickerInput>;

const InteractiveTimePicker = () => {
  const [time, setTime] = useState("09:30");
  return (
    <div className="p-4 border rounded-xl bg-card max-w-xs">
      <TimePickerInput value={time} onChange={setTime} />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTimePicker />,
};
