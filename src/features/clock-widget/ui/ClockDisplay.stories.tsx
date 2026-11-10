import type { Meta, StoryObj } from "@storybook/react";
import { ClockDisplay } from "./ClockDisplay";

const meta: Meta<typeof ClockDisplay> = {
  title: "Features/ClockWidget/ClockDisplay",
  component: ClockDisplay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px] h-[180px] p-4 bg-card border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ClockDisplay>;

export const Default: Story = {
  args: {
    isExpanded: false,
  },
};

export const Expanded: Story = {
  decorators: [
    (Story) => (
      <div className="w-[500px] h-[300px] p-4 bg-card border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    isExpanded: true,
  },
};
