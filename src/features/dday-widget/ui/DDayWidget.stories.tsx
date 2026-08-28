import { Meta, StoryObj } from "@storybook/react";
import { DDayWidget } from "./DDayWidget";

const meta: Meta<typeof DDayWidget> = {
  title: "Features/DDayWidget",
  component: DDayWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DDayWidget>;

export const Default: Story = {
  args: {
    widgetId: "storybook-dday-1",
  },
  render: (args) => (
    <div className="w-[360px] p-4 border rounded-2xl bg-background shadow-sm">
      <DDayWidget {...args} />
    </div>
  ),
};
