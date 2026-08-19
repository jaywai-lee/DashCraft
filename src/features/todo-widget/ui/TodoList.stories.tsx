import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "./TodoList";

const meta: Meta<typeof TodoList> = {
  title: "Features/TodoWidget/TodoList",
  component: TodoList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoList>;

const mockTodos = [
  { id: "1", text: "Tailwind CSS v3 컬러 정의", completed: true },
  { id: "2", text: "Sub UI 컴포넌트 및 스토리 작성", completed: false },
  { id: "3", text: "TodoWidget 컨테이너 조립", completed: false },
];

export const Default: Story = {
  args: {
    todos: mockTodos,
    onToggle: () => {},
    onDelete: () => {},
  },
};

export const AllCompleted: Story = {
  args: {
    todos: mockTodos.map((t) => ({ ...t, completed: true })),
    onToggle: () => {},
    onDelete: () => {},
  },
};
