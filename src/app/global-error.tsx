"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error, {
      tags: { boundary: "global-error" },
    });
  }, [error]);

  return (
    <html lang="ko">
      <body className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
        <div className="max-w-md w-full rounded-2xl border bg-card p-6 text-center space-y-4 shadow-sm">
          <h2 className="text-lg font-bold">
            일시적인 시스템 오류가 발생했습니다
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            문제가 자동으로 기록되었습니다. 아래 버튼을 눌러 화면을 다시 불러와
            주세요.
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  );
}
