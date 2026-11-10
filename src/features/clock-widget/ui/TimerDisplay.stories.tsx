import type { Meta, StoryObj } from "@storybook/react";
import { TimerDisplay } from "./TimerDisplay";

const meta: Meta<typeof TimerDisplay> = {
  title: "Features/ClockWidget/TimerDisplay",
  component: TimerDisplay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px] h-[200px] p-4 bg-card border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TimerDisplay>;

export const Default: Story = {
  args: {
    widgetId: "story-widget-1",
    isExpanded: false,
  },
};

export const Expanded: Story = {
  decorators: [
    (Story) => (
      <div className="w-[500px] h-[320px] p-4 bg-card border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    widgetId: "story-widget-1",
    isExpanded: true,
  },
};
