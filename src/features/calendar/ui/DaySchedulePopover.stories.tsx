import type { Meta, StoryObj } from "@storybook/react";
import { DaySchedulePopover } from "./DaySchedulePopover";
import { ScheduleItem } from "../model/types";

const mockSchedules: ScheduleItem[] = [
  { id: "1", title: "주간 팀 스크럼 회의", time: "10:00", color: "blue" },
  { id: "2", title: "DashCraft 디자인 리뷰", time: "14:30", color: "purple" },
  {
    id: "3",
    title: "Supabase DB 마이그레이션 점검",
    time: "17:00",
    color: "red",
  },
  { id: "4", title: "저녁 개인 운동", color: "green" },
];

const meta: Meta<typeof DaySchedulePopover> = {
  title: "Features/Calendar/DaySchedulePopover",
  component: DaySchedulePopover,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof DaySchedulePopover>;

export const Default: Story = {
  args: {
    dateStr: "2026-11-17",
    schedules: mockSchedules,
    isOpen: true,
    onClose: () => {},
    onEditSchedule: () => {},
    onAddSchedule: () => {},
    onDeleteSchedule: () => {},
  },
};

export const SingleSchedule: Story = {
  args: {
    dateStr: "2026-11-18",
    schedules: [mockSchedules[0]],
    isOpen: true,
    onClose: () => {},
    onEditSchedule: () => {},
    onAddSchedule: () => {},
    onDeleteSchedule: () => {},
  },
};
