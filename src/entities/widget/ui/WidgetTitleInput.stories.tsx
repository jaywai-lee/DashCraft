import type { Meta, StoryObj } from "@storybook/react";
import { WidgetTitleInput } from "./WidgetTitleInput";
import { useState } from "react";

const meta: Meta<typeof WidgetTitleInput> = {
  title: "Entities/Widget/WidgetTitleInput",
  component: WidgetTitleInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WidgetTitleInput>;

const InteractiveTitleInput = () => {
  const [title, setTitle] = useState("클릭하여 제목 수정");
  return (
    <div className="p-3 bg-muted/40 border rounded-lg w-[200px]">
      <WidgetTitleInput title={title} onUpdateTitle={setTitle} />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTitleInput />,
};
