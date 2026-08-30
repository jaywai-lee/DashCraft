import type { Meta, StoryObj } from "@storybook/react";
import { WidgetTypeFilterGroup } from "./WidgetTypeFilterGroup";
import { useState } from "react";
import { WidgetType } from "@/widgets/dashboard-grid/config/widgets.config";

const meta: Meta<typeof WidgetTypeFilterGroup> = {
  title: "Features/DashboardFilter/WidgetTypeFilterGroup",
  component: WidgetTypeFilterGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WidgetTypeFilterGroup>;

const DefaultComponent = () => {
  const [selectedType, setSelectedType] = useState<WidgetType | "all">("all");
  return (
    <div className="p-4 bg-background border rounded-xl w-fit">
      <WidgetTypeFilterGroup
        selectedType={selectedType}
        onSelect={setSelectedType}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
