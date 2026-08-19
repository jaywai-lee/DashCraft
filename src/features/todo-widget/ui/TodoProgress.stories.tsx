import type { Meta, StoryObj } from "@storybook/react";
import { TodoProgress } from "./TodoProgress";

const meta: Meta<typeof TodoProgress> = {
  title: "Features/TodoWidget/TodoProgress",
  component: TodoProgress,
  tags: ["autodocs"],
  argTypes: {
    percent: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TodoProgress>;

export const Default: Story = {
  args: {
    percent: 50,
  },
};

export const Empty: Story = {
  args: {
    percent: 0,
  },
};

export const Completed: Story = {
  args: {
    percent: 100,
  },
};
