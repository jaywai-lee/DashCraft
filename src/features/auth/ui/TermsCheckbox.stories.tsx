import type { Meta, StoryObj } from "@storybook/react";
import { TermsCheckbox } from "./TermsCheckbox";
import { useState } from "react";

const meta: Meta<typeof TermsCheckbox> = {
  title: "Features/Auth/TermsCheckbox",
  component: TermsCheckbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TermsCheckbox>;

const InteractiveTermsCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="p-4 bg-background border rounded-xl w-[320px]">
      <TermsCheckbox
        id="terms-story-check"
        checked={checked}
        onChange={setChecked}
        onOpenTerms={() => alert("이용약관 클릭")}
        onOpenPrivacy={() => alert("개인정보처리방침 클릭")}
      />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTermsCheckbox />,
};
