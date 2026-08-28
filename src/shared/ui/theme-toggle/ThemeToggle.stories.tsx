import { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof ThemeToggle> = {
  title: "Shared/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="p-6 flex items-center justify-center bg-background text-foreground rounded-xl border">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const DarkModePreview: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
        <div className="p-6 flex items-center justify-center bg-slate-900 text-slate-50 rounded-xl border border-slate-800">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const LightModePreview: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
        <div className="p-6 flex items-center justify-center bg-white text-slate-900 rounded-xl border border-slate-200">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
