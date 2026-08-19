import type { Meta, StoryObj } from "@storybook/react";
import { TodoForm } from "./TodoForm";

const meta: Meta<typeof TodoForm> = {
  title: "Features/TodoWidget/TodoForm",
  component: TodoForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoForm>;

export const EmptyInput: Story = {
  args: {
    inputText: "",
    onChangeText: () => {},
    onSubmit: (e) => e.preventDefault(),
  },
};

export const FilledInput: Story = {
  args: {
    inputText: "리팩토링 및 Storybook 작성",
    onChangeText: () => {},
    onSubmit: (e) => e.preventDefault(),
  },
};
