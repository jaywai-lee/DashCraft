import type { Meta, StoryObj } from "@storybook/react";
import { FilterSearchInput } from "./FilterSearchInput";
import { useState } from "react";

const meta: Meta<typeof FilterSearchInput> = {
  title: "Features/DashboardFilter/FilterSearchInput",
  component: FilterSearchInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FilterSearchInput>;

const DefaultComponent = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-[360px] p-4 bg-background border rounded-xl">
      <FilterSearchInput value={value} onChange={setValue} />
    </div>
  );
};

const WithValueComponent = () => {
  const [value, setValue] = useState("여행");
  return (
    <div className="w-[360px] p-4 bg-background border rounded-xl">
      <FilterSearchInput value={value} onChange={setValue} />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};

export const WithValue: Story = {
  render: () => <WithValueComponent />,
};
