import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Mail, Lock, Search } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "이메일",
    placeholder: "name@example.com",
  },
};

export const WithIcon: Story = {
  args: {
    label: "이메일",
    icon: Mail,
    placeholder: "name@example.com",
  },
};

export const Password: Story = {
  args: {
    label: "비밀번호",
    type: "password",
    icon: Lock,
    placeholder: "••••••••",
  },
};

export const WithError: Story = {
  args: {
    label: "비밀번호",
    type: "password",
    icon: Lock,
    placeholder: "••••••••",
    error: "비밀번호는 최소 6자 이상이어야 합니다.",
  },
};

export const Disabled: Story = {
  args: {
    label: "검색",
    icon: Search,
    placeholder: "검색 불가 상태",
    disabled: true,
  },
};
