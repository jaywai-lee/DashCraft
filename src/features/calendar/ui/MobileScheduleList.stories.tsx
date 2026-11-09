import type { Meta, StoryObj } from "@storybook/react";
import { MobileScheduleList } from "./MobileScheduleList";
import { ScheduleItem } from "../model/types";

const mockSchedules: ScheduleItem[] = [
  { id: "1", title: "기획안 작성", time: "09:00", color: "default" },
  { id: "2", title: "점심 약속", time: "12:30", color: "yellow" },
  { id: "3", title: "코드 리뷰", color: "purple" },
];

const meta: Meta<typeof MobileScheduleList> = {
  title: "Features/Calendar/MobileScheduleList",
  component: MobileScheduleList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-sm p-4 bg-muted/20">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileScheduleList>;

export const WithSchedules: Story = {
  args: {
    selectedDateStr: "2026-11-17",
    schedules: mockSchedules,
    onAddSchedule: () => {},
    onEditSchedule: () => {},
    onDeleteSchedule: () => {},
  },
};

export const Empty: Story = {
  args: {
    selectedDateStr: "2026-11-18",
    schedules: [],
    onAddSchedule: () => {},
    onEditSchedule: () => {},
    onDeleteSchedule: () => {},
  },
};
