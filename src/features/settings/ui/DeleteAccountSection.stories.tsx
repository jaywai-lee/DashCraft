import type { Meta, StoryObj } from "@storybook/react";
import { DeleteAccountSection } from "./DeleteAccountSection";

const meta: Meta<typeof DeleteAccountSection> = {
  title: "Features/Settings/DeleteAccountSection",
  component: DeleteAccountSection,
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
type Story = StoryObj<typeof DeleteAccountSection>;

export const Default: Story = {
  args: {
    userEmail: "user@example.com",
  },
};
