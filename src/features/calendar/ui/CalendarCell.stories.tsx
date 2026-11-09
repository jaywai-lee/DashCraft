import type { Meta, StoryObj } from "@storybook/react";
import { CalendarCell } from "./CalendarCell";
import { ScheduleItem } from "../model/types";

const mockSchedules: ScheduleItem[] = [
  { id: "1", title: "팀 회의", time: "10:00", color: "default" },
  { id: "2", title: "프로젝트 점검", time: "14:00", color: "green" },
  { id: "3", title: "디자인 시안 검토", color: "purple" },
  { id: "4", title: "퇴근 후 운동", color: "red" },
];

const meta: Meta<typeof CalendarCell> = {
  title: "Features/Calendar/CalendarCell",
  component: CalendarCell,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[160px] border border-border bg-card">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CalendarCell>;

export const Default: Story = {
  args: {
    date: new Date(2026, 10, 17),
    dateStr: "2026-11-17",
    isCurrentMonth: true,
    isToday: false,
    isSelected: false,
    daySchedules: [mockSchedules[0]],
    onSelectDate: () => {},
    onOpenModal: () => {},
    onOpenPopover: () => {},
    onEditSchedule: () => {},
    onRemoveSchedule: () => {},
  },
};

export const Today: Story = {
  args: {
    ...Default.args,
    isToday: true,
    isSelected: true,
  },
};

export const MultipleSchedulesWithPopoverChip: Story = {
  args: {
    ...Default.args,
    daySchedules: mockSchedules,
  },
};

export const OutsideMonth: Story = {
  args: {
    ...Default.args,
    isCurrentMonth: false,
    daySchedules: [],
  },
};
