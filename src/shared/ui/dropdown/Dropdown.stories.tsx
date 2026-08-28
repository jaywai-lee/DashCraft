import { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "./Dropdown";
import { Button } from "../button";
import { Calendar, Clock, FileText, ListTodo } from "lucide-react";

const meta: Meta<typeof Dropdown> = {
  title: "Shared/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <div className="p-10 flex justify-center min-h-[300px]">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="primary">위젯 추가 ▾</Button>
        </DropdownTrigger>
        <DropdownContent align="right">
          <DropdownItem onClick={() => {}}>
            <ListTodo className="w-4 h-4 text-primary" />
            <span>할 일 목록</span>
          </DropdownItem>
          <DropdownItem onClick={() => {}}>
            <Clock className="w-4 h-4 text-primary" />
            <span>시계 & 뽀모도로</span>
          </DropdownItem>
          <DropdownItem onClick={() => {}}>
            <Calendar className="w-4 h-4 text-primary" />
            <span>D-Day</span>
          </DropdownItem>
          <DropdownItem onClick={() => {}}>
            <FileText className="w-4 h-4 text-primary" />
            <span>메모</span>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};
