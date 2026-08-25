import { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import { useState } from "react";
import { Button } from "../button";

const meta: Meta<typeof Modal> = {
  title: "Shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalInteractiveWrapper = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-[200px]">
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        모달 열기
      </Button>

      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footer={
          <>
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsOpen(false)}
            >
              취소
            </Button>
            <Button variant="danger" size="md" onClick={() => setIsOpen(false)}>
              초기화 진행
            </Button>
          </>
        }
      >
        <p className="text-xs text-muted-foreground">
          이 작업은 되돌릴 수 없으며, 로컬 저장소에 보관된 대시보드 상태가 초기
          상태로 되돌아갑니다.
        </p>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ModalInteractiveWrapper {...args} />,
  args: {
    title: "대시보드 초기화",
    description:
      "배치된 모든 위젯과 할 일 데이터가 삭제됩니다. 계속 진행하시겠습니까?",
    maxWidth: "md",
  },
};

export const SmallWidth: Story = {
  render: (args) => <ModalInteractiveWrapper {...args} />,
  args: {
    title: "작은 크기 모달",
    description: 'maxWidth가 "sm"으로 지정된 컴팩트 모달입니다',
    maxWidth: "sm",
  },
};
