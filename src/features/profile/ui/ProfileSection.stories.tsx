import type { Meta, StoryObj } from "@storybook/react";
import { ProfileSection } from "./ProfileSection";

const meta: Meta<typeof ProfileSection> = {
  title: "Features/Profile/ProfileSection",
  component: ProfileSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[480px] p-4 bg-background border border-border rounded-2xl shadow-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfileSection>;

export const Default: Story = {};
