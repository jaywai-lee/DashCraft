import type { Meta, StoryObj } from "@storybook/react";
import { BrandLogo } from "./BrandLogo";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof BrandLogo> = {
  title: "Shared/BrandLogo",
  component: BrandLogo,
  tags: ["autodocs"],
  args: {
    variant: "full",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof BrandLogo>;

export const LightFull: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
        <div className="p-6 bg-white rounded-xl border">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const DarkFull: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
        <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const IconOnly: Story = {
  args: {
    variant: "icon",
    size: "lg",
  },
};

export const ResponsiveHeader: Story = {
  args: {
    variant: "responsive",
    size: "md",
  },
};
