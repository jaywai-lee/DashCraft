import type { Meta, StoryObj } from "@storybook/react";
import { PasswordChangeSection } from "./PasswordChangeSection";

const meta: Meta<typeof PasswordChangeSection> = {
  title: "Features/Settings/PasswordChangeSection",
  component: PasswordChangeSection,
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
type Story = StoryObj<typeof PasswordChangeSection>;

export const Default: Story = {};
