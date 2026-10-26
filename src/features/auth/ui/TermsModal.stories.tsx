import type { Meta, StoryObj } from "@storybook/react";
import { TermsModal } from "./TermsModal";
import { useState } from "react";
import { Button } from "@/shared/ui/button";

const meta: Meta<typeof TermsModal> = {
  title: "Features/Auth/TermsModal",
  component: TermsModal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TermsModal>;

const TermsModalInteractive = ({
  initialType,
}: {
  initialType: "terms" | "privacy";
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="p-4">
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        모달 열기
      </Button>
      <TermsModal
        isOpen={isOpen}
        type={initialType}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const ServiceTerms: Story = {
  render: () => <TermsModalInteractive initialType="terms" />,
};

export const PrivacyPolicy: Story = {
  render: () => <TermsModalInteractive initialType="privacy" />,
};
