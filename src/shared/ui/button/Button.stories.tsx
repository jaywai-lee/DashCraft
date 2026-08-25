import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Plus } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    isLoading: true,
    children: "로딩 중..",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: (
      <>
        <Plus className="w-4 h-4" />
        <span>위젯 추가</span>
      </>
    ),
  },
};
