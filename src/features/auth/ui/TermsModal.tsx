"use client";

import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";

interface TermsModalProps {
  isOpen: boolean;
  type: "terms" | "privacy" | null;
  onClose: () => void;
}

export const TermsModal = ({ isOpen, type, onClose }: TermsModalProps) => {
  const isTerms = type === "terms";
  const title = isTerms ? "DashCraft 서비스 이용약관" : "개인정보 처리방침";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      maxWidth="md"
      footer={
        <Button variant="primary" size="sm" onClick={onClose}>
          확인
        </Button>
      }
    >
      <div className="text-left text-xs space-y-3 max-h-[300px] overflow-y-auto pr-1 text-muted-foreground leading-relaxed">
        {isTerms ? (
          <>
            <p className="font-semibold text-foreground">제 1 조 (목적)</p>
            <p>
              본 약관은 DashCraft(이하 &quot;서비스&quot;)가 제공하는 커스텀
              대시보드 웹 애플리케이션 서비스의 이용조건 및 절차에 관한 사항을
              규정함을 목적으로 합니다.
            </p>
            <p className="font-semibold text-foreground">
              제 2 조 (회원가입 및 계정)
            </p>
            <p>
              유저는 이메일 인증 또는 Google OAuth 계정을 통해 회원가입 후
              서비스를 이용할 수 있으며, 본인의 계정 정보를 타인에게 양도할 수
              없습니다.
            </p>
            <p className="font-semibold text-foreground">
              제 3 조 (데이터 보관 및 삭제)
            </p>
            <p>
              유저가 작성한 대시보드 위젯, 할 일, 메모, 일정 데이터는 Supabase
              보안 DB에 암호화되어 안전하게 보관되며, 계정 삭제 시 즉시 영구
              파기됩니다.
            </p>
          </>
        ) : (
          <>
            <p className="font-semibold text-foreground">
              1. 수집하는 개인정보 항목
            </p>
            <p>
              DashCraft는 회원가입 및 서비스 제공을 위해 최소한의
              개인정보(이메일 주소, 프로필 이미지 URL)만을 수집합니다.
            </p>
            <p className="font-semibold text-foreground">
              2. 개인정보의 수집 및 이용 목적
            </p>
            <p>
              수집된 개인정보는 사용자 식별, 세션 유지, 위젯 데이터 격리(RLS) 및
              서비스 관련 주요 알림 안내 목적으로만 활용됩니다.
            </p>
            <p className="font-semibold text-foreground">
              3. 개인정보의 보유 및 파기
            </p>
            <p>
              회원 탈퇴 요청 시 유저의 개인정보 및 작성 데이터는 복구 불가능한
              방법으로 지체 없이 영구 삭제됩니다.
            </p>
          </>
        )}
      </div>
    </Modal>
  );
};
