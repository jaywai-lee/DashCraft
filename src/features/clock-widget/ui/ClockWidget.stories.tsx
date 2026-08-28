import { Meta, StoryObj } from "@storybook/react";
import { ClockWidget } from "./ClockWidget";

const meta: Meta<typeof ClockWidget> = {
  title: "Features/ClockWidget",
  component: ClockWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClockWidget>;

export const Default: Story = {
  args: {
    widgetId: "storybook-clock-1",
  },
  render: (args) => (
    <div className="w-[360px] p-4 border rounded-2xl bg-background shadow-sm">
      <ClockWidget {...args} />
    </div>
  ),
};
