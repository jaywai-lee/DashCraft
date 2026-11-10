import type { Meta, StoryObj } from "@storybook/react";
import { DDayForm } from "./DDayForm";

const meta: Meta<typeof DDayForm> = {
  title: "Features/DDayWidget/DDayForm",
  component: DDayForm,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[320px] p-4 bg-card border border-border rounded-xl shadow-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DDayForm>;

export const Default: Story = {
  args: {
    onAdd: (title, targetDate) =>
      alert(`디데이 생성 제출: ${title} (${targetDate})`),
  },
};
