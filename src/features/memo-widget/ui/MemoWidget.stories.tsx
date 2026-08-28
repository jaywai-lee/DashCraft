import { Meta, StoryObj } from "@storybook/react";
import { MemoWidget } from "./MemoWidget";

const meta: Meta<typeof MemoWidget> = {
  title: "Features/MemoWidget",
  component: MemoWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MemoWidget>;

export const Default: Story = {
  args: {
    widgetId: "storybook-memo-1",
    isExpanded: false,
  },
  render: (args) => (
    <div className="w-[360px] p-2 border rounded-2xl bg-background shadow-sm">
      <MemoWidget {...args} />
    </div>
  ),
};

export const Expanded: Story = {
  args: {
    widgetId: "storybook-memo-2",
    isExpanded: true,
  },
  render: (args) => (
    <div className="w-[360px] p-2 border rounded-2xl bg-background shadow-sm">
      <MemoWidget {...args} />
    </div>
  ),
};
