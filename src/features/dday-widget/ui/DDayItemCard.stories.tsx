import type { Meta, StoryObj } from "@storybook/react";
import { DDayItemCard } from "./DDayItemCard";

const meta: Meta<typeof DDayItemCard> = {
  title: "Features/DDayWidget/DDayItemCard",
  component: DDayItemCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px] p-2 bg-muted/20 rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DDayItemCard>;

export const DMinus: Story = {
  args: {
    item: {
      id: "dday-1",
      title: "프로젝트 런칭",
      targetDate: "2026-12-31",
    },
    isExpanded: false,
    onRemove: (id) => alert(`삭제 클릭: ${id}`),
  },
};

export const DDayToday: Story = {
  args: {
    item: {
      id: "dday-2",
      title: "중요 발표회",
      targetDate: new Date().toISOString().split("T")[0],
    },
    isExpanded: false,
    onRemove: (id) => alert(`삭제 클릭: ${id}`),
  },
};

export const Expanded: Story = {
  args: {
    item: {
      id: "dday-3",
      title: "입사 기념일",
      targetDate: "2026-01-01",
    },
    isExpanded: true,
    onRemove: (id) => alert(`삭제 클릭: ${id}`),
  },
};
