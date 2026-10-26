import type { Meta, StoryObj } from "@storybook/react";
import { AuthCard } from "./AuthCard";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";

const meta: Meta<typeof AuthCard> = {
  title: "Features/Auth/AuthCard",
  component: AuthCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthCard>;

export const Default: Story = {
  args: {
    title: "DashCraft 예시 카드",
    subtitle: "인증 폼을 위한 공통 카드 프레임 스토어입니다.",
    children: (
      <div className="space-y-3">
        <Input label="샘플 필드" placeholder="내용을 입력하세요" />
        <Button variant="primary" className="w-full">
          확인
        </Button>
      </div>
    ),
    footer: (
      <span className="text-xs text-muted-foreground">푸터 영역입니다.</span>
    ),
  },
};
