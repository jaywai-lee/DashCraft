import type { Meta, StoryObj } from "@storybook/react";
import { CalendarHeader } from "./CalendarHeader";

const meta: Meta<typeof CalendarHeader> = {
  title: "Features/Calendar/CalendarHeader",
  component: CalendarHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CalendarHeader>;

export const Default: Story = {
  args: {
    currentDate: new Date(2026, 10, 1),
    onPrevYear: () => {},
    onPrevMonth: () => {},
    onNextYear: () => {},
    onNextMonth: () => {},
    onToday: () => {},
  },
};
