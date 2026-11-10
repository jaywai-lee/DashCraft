import type { Meta, StoryObj } from "@storybook/react";
import { TimerControls } from "./TimerControls";

const meta: Meta<typeof TimerControls> = {
  title: "Features/ClockWidget/TimerControls",
  component: TimerControls,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px] p-4 bg-card border border-border rounded-xl flex justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TimerControls>;

export const IdleState: Story = {
  args: {
    isRunning: false,
    isExpanded: false,
    isSoundEnabled: false,
    isNotificationEnabled: true,
    onToggleTimer: () => alert("타이머 토글"),
    onResetTimer: () => alert("타이머 리셋"),
    onToggleSound: () => alert("사운드 토글"),
    onToggleNotification: () => alert("알림 토글"),
  },
};

export const RunningState: Story = {
  args: {
    isRunning: true,
    isExpanded: false,
    isSoundEnabled: true,
    isNotificationEnabled: true,
    onToggleTimer: () => alert("타이머 토글"),
    onResetTimer: () => alert("타이머 리셋"),
    onToggleSound: () => alert("사운드 토글"),
    onToggleNotification: () => alert("알림 토글"),
  },
};
