import type { Meta, StoryObj } from "@storybook/react";
import { TodoStatusFilterGroup } from "./TodoStatusFilterGroup";
import { useState } from "react";
import { TodoStatusFilter } from "../model/useFilterStore";

const meta: Meta<typeof TodoStatusFilterGroup> = {
  title: "Features/DashboardFilter/TodoStatusFilterGroup",
  component: TodoStatusFilterGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoStatusFilterGroup>;

const DefaultComponent = () => {
  const [status, setStatus] = useState<TodoStatusFilter>("all");
  return (
    <div className="p-4 bg-background border rounded-xl w-fit">
      <TodoStatusFilterGroup status={status} onSelect={setStatus} />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
