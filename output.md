This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
.github/
  workflows/
    ci.yml
.husky/
  commit-msg
  pre-commit
.storybook/
  main.ts
  preview.ts
e2e/
  auth.setup.ts
  auth.spec.ts
  dashboard.spec.ts
public/
  .gitkeep
src/
  app/
    api/
      account/
        delete/
          route.ts
    auth/
      callback/
        route.ts
    calendar/
      page.tsx
    dashboard/
      page.tsx
    fonts/
      Pretendard-Bold.subset.woff2
      Pretendard-Medium.subset.woff2
      Pretendard-Regular.subset.woff2
      Pretendard-SemiBold.subset.woff2
    forgot-password/
      page.tsx
    login/
      page.tsx
    providers/
      AuthSync.tsx
      index.tsx
      ThemeProvider.tsx
    reset-password/
      page.tsx
    settings/
      page.tsx
    signup/
      page.tsx
    layout.tsx
    page.tsx
  entities/
    widget/
      model/
        constants.ts
        types.ts
      ui/
        WidgetColorPicker.stories.tsx
        WidgetColorPicker.tsx
        WidgetFrame.stories.tsx
        WidgetFrame.tsx
        WidgetHeaderActions.stories.tsx
        WidgetHeaderActions.tsx
        WidgetTitleInput.stories.tsx
        WidgetTitleInput.tsx
  features/
    auth/
      model/
        useForgotPasswordForm.test.ts
        useForgotPasswordForm.ts
        useLoginForm.test.ts
        useLoginForm.ts
        useResetPasswordForm.test.ts
        useResetPasswordForm.ts
        useSignupForm.test.ts
        useSignupForm.ts
      ui/
        AuthCard.stories.tsx
        AuthCard.tsx
        AuthFormView.tsx
        ForgotPasswordView.tsx
        ResetPasswordView.tsx
        SignupFormView.tsx
        TermsCheckbox.stories.tsx
        TermsCheckbox.tsx
        TermsModal.stories.tsx
        TermsModal.tsx
    calendar/
      api/
        scheduleRepository.ts
        useScheduleQuery.test.tsx
        useScheduleQuery.ts
      lib/
        holidays.test.ts
        holidays.ts
      model/
        constants.ts
        types.ts
        useCalendarNavigation.test.ts
        useCalendarNavigation.ts
        useCalendarSchedules.test.tsx
        useCalendarSchedules.ts
        useScheduleModal.test.ts
        useScheduleModal.ts
      ui/
        CalendarCell.stories.tsx
        CalendarCell.tsx
        CalendarHeader.stories.tsx
        CalendarHeader.tsx
        CalendarView.tsx
        ColorPalettePicker.stories.tsx
        ColorPalettePicker.tsx
        DaySchedulePopover.stories.tsx
        DaySchedulePopover.tsx
        MobileScheduleList.stories.tsx
        MobileScheduleList.tsx
        ScheduleModal.tsx
        TimePickerInput.stories.tsx
        TimePickerInput.tsx
    clock-widget/
      lib/
        audioNotifier.ts
      model/
        useClockConfig.test.tsx
        useClockConfig.ts
        useClockStore.test.ts
        useClockStore.ts
        usePomodoroTimer.test.tsx
        usePomodoroTimer.ts
        useTimerEffects.test.ts
        useTimerEffects.ts
      ui/
        ClockDisplay.stories.tsx
        ClockDisplay.tsx
        ClockWidget.stories.tsx
        ClockWidget.tsx
        TimerControls.stories.tsx
        TimerControls.tsx
        TimerDisplay.stories.tsx
        TimerDisplay.tsx
        TimerPhaseSelector.tsx
    command-palette/
      model/
        useCommandPalette.ts
        useCommandPaletteStore.ts
      ui/
        CommandPalette.tsx
    dashboard-filter/
      model/
        useFilterStore.test.ts
        useFilterStore.ts
      ui/
        DashboardFilterBar.tsx
        DateRangeFilterGroup.tsx
        FilterSearchInput.stories.tsx
        FilterSearchInput.tsx
        TodoStatusFilterGroup.stories.tsx
        TodoStatusFilterGroup.tsx
        WidgetTypeFilterGroup.stories.tsx
        WidgetTypeFilterGroup.tsx
    dday-widget/
      api/
        ddayRepository.ts
        useDDayQuery.test.tsx
        useDDayQuery.ts
      ui/
        DDayForm.stories.tsx
        DDayForm.tsx
        DDayItemCard.stories.tsx
        DDayItemCard.tsx
        DDayWidget.stories.tsx
        DDayWidget.tsx
    memo-widget/
      api/
        memoKeepalive.ts
        memoRepository.ts
        useMemoQuery.test.tsx
        useMemoQuery.ts
      model/
        useMemoEditor.test.ts
        useMemoEditor.ts
      ui/
        MemoWidget.stories.tsx
        MemoWidget.tsx
    profile/
      model/
        useProfileAvatar.test.ts
        useProfileAvatar.ts
      ui/
        ProfileSection.stories.tsx
        ProfileSection.tsx
    settings/
      model/
        useDeleteAccount.test.ts
        useDeleteAccount.ts
        usePasswordChangeForm.test.ts
        usePasswordChangeForm.ts
      ui/
        DeleteAccountSection.stories.tsx
        DeleteAccountSection.tsx
        PasswordChangeSection.stories.tsx
        PasswordChangeSection.tsx
        SettingsView.tsx
    todo-widget/
      api/
        todoRepository.ts
        useTodoQuery.test.tsx
        useTodoQuery.ts
      model/
        types.ts
        useTodo.test.tsx
        useTodo.ts
      ui/
        TodoForm.stories.tsx
        TodoForm.tsx
        TodoList.stories.tsx
        TodoList.tsx
        TodoProgress.stories.tsx
        TodoProgress.tsx
        TodoWidget.tsx
      index.ts
  shared/
    config/
      highlight.config.ts
      queryKeys.ts
    lib/
      react-query/
        optimisticHelper.test.tsx
        optimisticHelper.ts
      avatar.ts
      client.ts
      formatters.ts
      imageResizer.ts
      sanitize.ts
      useTextHighlighter.ts
      utils.ts
    types/
      database.types.ts
    ui/
      button/
        Button.stories.tsx
        Button.tsx
        index.ts
      dropdown/
        Dropdown.stories.tsx
        Dropdown.tsx
      error-boundary/
        WidgetErrorBoundary.stories.tsx
        WidgetErrorBoundary.tsx
        WidgetErrorFallback.stories.tsx
        WidgetErrorFallback.tsx
      highlight-picker/
        HighlightPicker.tsx
      input/
        Input.stories.tsx
        Input.tsx
      modal/
        index.ts
        Modal.stories.tsx
        Modal.tsx
      theme-toggle/
        ThemeToggle.stories.tsx
        ThemeToggle.tsx
  styles/
    globals.css
  widgets/
    dashboard/
      ui/
        ActiveWidgetCounter.tsx
        AddWidgetMenu.tsx
        DashboardHeader.tsx
        FilterToggleButton.tsx
    dashboard-grid/
      api/
        dashboardRepository.ts
        useDashboardQuery.test.tsx
        useDashboardQuery.ts
      config/
        widgets.config.ts
      lib/
        generateWidgetTitle.ts
        isWithinDateRange.ts
      model/
        useDashboardDnd.test.ts
        useDashboardDnd.ts
        useFilteredWidget.test.tsx
        useFilteredWidgets.ts
      ui/
        DashboardEmptyState.tsx
        DashboardGrid.tsx
        DashboardGridSkeleton.tsx
        SortableWidget.tsx
        WidgetContentRenderer.tsx
    header/
      ui/
        AppHeader.tsx
        UserDropdown.tsx
    landing/
      ui/
        LandingFeatures.tsx
        LandingFooter.tsx
        LandingHeader.tsx
        LandingHero.tsx
        LandingPreview.tsx
  css.d.ts
  middleware.ts
supabase/
  .temp/
    cli-latest
    linked-project.json
  migrations/
    20261028000000_init_dashcraft_schema.sql
    20261028000001_add_avatars_storage_bucket.sql
    20261102000000_update_avatars_storage_policy.sql
.dockerignore
.env.example
.gitignore
.lintstagedrc.js
.npmrc
commitlint.config.js
docker-compose.yml
Dockerfile
eslint.config.mjs
LICENSE
next.config.ts
package.json
playwright.config.ts
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
vitest.config.ts
````

# Files

## File: .husky/commit-msg
````
npx --no -- commitlint --edit "$1"
````

## File: .husky/pre-commit
````
npx lint-staged
````

## File: e2e/auth.setup.ts
````typescript
import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/이메일/i).fill("test@example.com");
  await page.getByLabel(/비밀번호/i).fill("password123!");
  await page.getByRole("button", { name: /^로그인$/i }).click();

  await page.waitForURL(/\/dashboard/);
  await expect(page).toHaveURL(/\/dashboard/);

  // 인증 세션 상태를 user.json 파일로 보관
  await page.context().storageState({ path: authFile });
});
````

## File: e2e/dashboard.spec.ts
````typescript
import { test, expect } from "@playwright/test";

test.describe("Dashboard Widget Lifecycle & DnD E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
    await page.waitForLoadState("networkidle");
  });

  test("위젯 추가 드롭다운을 통해 신규 Todo 위젯을 정상적으로 생성해야 한다", async ({
    page,
  }) => {
    await page
      .getByRole("button", { name: /^위젯 추가$/ })
      .first()
      .click();
    await page.getByRole("button", { name: "할 일 목록" }).first().click();

    await expect(page.getByText(/할 일 목록/).first()).toBeVisible();
  });

  test("위젯 삭제 버튼을 클릭하면 위젯이 화면에서 제거되어야 한다", async ({
    page,
  }) => {
    // 1. 테스트용 신규 위젯 추가 및 네트워크 완료 대기
    await page
      .getByRole("button", { name: /^위젯 추가$/ })
      .first()
      .click();
    const [createResponse] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/widgets") &&
          (res.status() === 201 || res.status() === 200),
      ),
      page.getByRole("button", { name: "할 일 목록" }).first().click(),
    ]);
    expect(createResponse.ok()).toBeTruthy();

    // 2. 추가된 위젯 삭제 버튼 및 부모 카드 타겟팅
    const deleteButtons = page.getByRole("button", { name: "위젯 삭제" });
    const lastDeleteButton = deleteButtons.last();

    // 3. 삭제 버튼 클릭 및 삭제 API 완료 대기
    const [deleteResponse] = await Promise.all([
      page.waitForResponse(
        (res) =>
          res.url().includes("/rest/v1/widgets") &&
          (res.status() === 200 || res.status() === 204),
      ),
      lastDeleteButton.click(),
    ]);
    expect(deleteResponse.ok()).toBeTruthy();

    // 4. Framer Motion exit 애니메이션 완료 후 DOM에서 완전히 제거(detached)되었는지 검증
    await expect(lastDeleteButton).not.toBeAttached({ timeout: 10000 });
  });
});
````

## File: src/css.d.ts
````typescript
declare module "*.css";
declare module "*.module.css";
````

## File: .lintstagedrc.js
````javascript
module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
};
````

## File: commitlint.config.js
````javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
````

## File: LICENSE
````
MIT License

Copyright (c) 2026 jaywai lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: postcss.config.mjs
````javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
````

## File: .storybook/main.ts
````typescript
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};

export default config;
````

## File: .storybook/preview.ts
````typescript
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
````

## File: e2e/auth.spec.ts
````typescript
import { test, expect } from "@playwright/test";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Auth & Session Flow E2E Tests", () => {
  test("미인증 사용자가 보호된 라우트(/dashboard) 접근 시 /login으로 리다이렉트되어야 한다", async ({
    page,
  }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/login/);
  });

  test("미인증 사용자가 설정 페이지(/settings) 접근 시 /login으로 리다이렉트되어야 한다", async ({
    page,
  }) => {
    await page.goto("/settings");
    await expect(page).toHaveURL(/\/login/);
  });

  test("로그인 폼 요소가 렌더링되고 회원가입 링크 이동이 정상 작동해야 한다", async ({
    page,
  }) => {
    await page.goto("/login");

    await expect(page.getByLabel(/이메일/i)).toBeVisible();
    await expect(page.getByLabel(/비밀번호/i)).toBeVisible();

    const signupLink = page.getByRole("link", { name: /회원가입/i });
    await expect(signupLink).toBeVisible();

    await signupLink.click();
    await page.waitForURL(/\/signup/);

    await expect(page).toHaveURL(/\/signup/);
  });
});
````

## File: public/.gitkeep
````

````

## File: src/app/forgot-password/page.tsx
````typescript
import { ForgotPasswordView } from "@/features/auth/ui/ForgotPasswordView";

export default function ForgotPasswordPage() {
  return <ForgotPasswordView />;
}
````

## File: src/app/providers/AuthSync.tsx
````typescript
"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/shared/lib/client";
import { setAccessToken } from "@/features/memo-widget/api/memoKeepalive";

export function AuthSync() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const supabase = createClient();
    let currentUserId: string | null = null;

    supabase.auth.getSession().then(({ data }) => {
      setAccessToken(data.session?.access_token ?? null);
      currentUserId = data.session?.user.id ?? null;
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setAccessToken(session?.access_token ?? null);
      const nextUserId = session?.user.id ?? null;

      const userChanged =
        currentUserId !== null &&
        nextUserId !== null &&
        currentUserId !== nextUserId;

      if (event === "SIGNED_OUT" || userChanged) {
        queryClient.clear();
        localStorage.removeItem("dashcraft-clock-runtime-v1");
      }

      if (
        event === "SIGNED_OUT" &&
        window.location.pathname.match(/^\/(dashboard|calendar|settings)/)
      ) {
        window.location.href = "/login";
      }

      currentUserId = nextUserId;
    });

    return () => subscription.unsubscribe();
  }, [queryClient]);

  return null;
}
````

## File: src/app/providers/ThemeProvider.tsx
````typescript
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
````

## File: src/app/reset-password/page.tsx
````typescript
import { ResetPasswordView } from "@/features/auth/ui/ResetPasswordView";

export default function ResetPasswordPage() {
  return <ResetPasswordView />;
}
````

## File: src/app/signup/page.tsx
````typescript
import { SignupFormView } from "@/features/auth/ui/SignupFormView";

export default function SignupPage() {
  return <SignupFormView />;
}
````

## File: src/app/page.tsx
````typescript
import { LandingFeatures } from "@/widgets/landing/ui/LandingFeatures";
import { LandingFooter } from "@/widgets/landing/ui/LandingFooter";
import { LandingHeader } from "@/widgets/landing/ui/LandingHeader";
import { LandingHero } from "@/widgets/landing/ui/LandingHero";
import { LandingPreview } from "@/widgets/landing/ui/LandingPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <LandingHeader />

      <main className="flex-1 w-full flex flex-col items-center px-6">
        <LandingHero />
        <LandingPreview />
        <LandingFeatures />
      </main>

      <LandingFooter />
    </div>
  );
}
````

## File: src/entities/widget/ui/WidgetColorPicker.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { WidgetColorPicker } from "./WidgetColorPicker";
import { useState } from "react";
import { WidgetColor } from "../model/types";

const meta: Meta<typeof WidgetColorPicker> = {
  title: "Entities/Widget/WidgetColorPicker",
  component: WidgetColorPicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WidgetColorPicker>;

const InteractiveColorPicker = () => {
  const [color, setColor] = useState<WidgetColor>("default");
  return (
    <div className="p-4 bg-card border rounded-xl w-[220px] flex items-center justify-between">
      <span className="text-xs text-muted-foreground">색상 선택:</span>
      <WidgetColorPicker color={color} onSelectColor={setColor} />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveColorPicker />,
};
````

## File: src/entities/widget/ui/WidgetFrame.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WidgetFrame } from "./WidgetFrame";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const meta: Meta<typeof WidgetFrame> = {
  title: "Entities/Widget/WidgetFrame",
  component: WidgetFrame,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="w-[340px] p-2 bg-muted/20 rounded-2xl">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WidgetFrame>;

export const Default1x1: Story = {
  args: {
    id: "widget-1",
    title: "할 일 목록",
    color: "default",
    width: 1,
    children: (
      <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground bg-muted/10 rounded-lg">
        1x1 위젯 컨텐츠 영역
      </div>
    ),
    onRemove: () => alert("삭제 클릭"),
    onUpdateTitle: (newTitle) => alert(`제목 변경: ${newTitle}`),
    onSelectColor: (color) => alert(`색상 변경: ${color}`),
    onToggleWidth: () => alert("크기 토글 클릭"),
    onMoveLeft: () => alert("왼쪽 이동"),
    onMoveRight: () => alert("오른쪽 이동"),
  },
};

export const Expanded2x2: Story = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="w-[680px] p-2 bg-muted/20 rounded-2xl">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
  args: {
    ...Default1x1.args,
    title: "확대된 2x2 메인 메모",
    color: "purple",
    width: 2,
    children: (
      <div className="w-full h-full flex items-center justify-center text-xs text-purple-500 bg-purple-500/10 rounded-lg">
        2x2 확장 위젯 컨텐츠 영역
      </div>
    ),
  },
};

export const ColoredThemes: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[700px]">
      <WidgetFrame id="w1" title="블루 테마" color="blue">
        <div className="text-xs p-2">Blue Theme Content</div>
      </WidgetFrame>
      <WidgetFrame id="w2" title="그린 테마" color="green">
        <div className="text-xs p-2">Green Theme Content</div>
      </WidgetFrame>
      <WidgetFrame id="w3" title="옐로우 테마" color="yellow">
        <div className="text-xs p-2">Yellow Theme Content</div>
      </WidgetFrame>
      <WidgetFrame id="w4" title="레드 테마" color="red">
        <div className="text-xs p-2">Red Theme Content</div>
      </WidgetFrame>
    </div>
  ),
};
````

## File: src/entities/widget/ui/WidgetHeaderActions.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { WidgetHeaderActions } from "./WidgetHeaderActions";
import { useState } from "react";
import { WidgetColor } from "../model/types";

const meta: Meta<typeof WidgetHeaderActions> = {
  title: "Entities/Widget/WidgetHeaderActions",
  component: WidgetHeaderActions,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WidgetHeaderActions>;

const InteractiveHeaderActions = () => {
  const [color, setColor] = useState<WidgetColor>("default");
  const [width, setWidth] = useState<number>(1);

  return (
    <div className="p-4 bg-card border rounded-xl flex items-center justify-between w-[280px]">
      <span className="text-xs font-semibold">헤더 액션 테스트</span>
      <WidgetHeaderActions
        id="test-header-actions"
        color={color}
        width={width}
        onMoveLeft={() => alert("왼쪽 이동")}
        onMoveRight={() => alert("오른쪽 이동")}
        onSelectColor={setColor}
        onToggleWidth={() => setWidth((prev) => (prev === 1 ? 2 : 1))}
        onRemove={() => alert("위젯 삭제")}
      />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveHeaderActions />,
};
````

## File: src/entities/widget/ui/WidgetTitleInput.stories.tsx
````typescript
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
````

## File: src/features/auth/model/useForgotPasswordForm.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { useForgotPasswordForm } from "./useForgotPasswordForm";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockResetPasswordForEmail = vi.fn();
const mockToastError = vi.fn();
const mockToastSuccess = vi.fn();

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
    success: (...args: unknown[]) => mockToastSuccess(...args),
  },
}));

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      resetPasswordForEmail: mockResetPasswordForEmail,
    },
  }),
}));

describe("useForgotPasswordForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("이메일을 입력하고 제출하면 resetPasswordForEmail이 호출되고 isSent 상태가 true로 전환되어야 한다", async () => {
    mockResetPasswordForEmail.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useForgotPasswordForm());

    act(() => {
      result.current.setEmail("user@example.com");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleResetRequest(fakeEvent);
    });

    expect(mockResetPasswordForEmail).toHaveBeenCalledWith(
      "user@example.com",
      expect.objectContaining({
        redirectTo: expect.stringContaining(
          "/auth/callback?next=/reset-password",
        ),
      }),
    );
    expect(result.current.isSent).toBe(true);
    expect(mockToastSuccess).toHaveBeenCalled();
  });
});
````

## File: src/features/auth/model/useForgotPasswordForm.ts
````typescript
"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

export const useForgotPasswordForm = () => {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleResetRequest = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });

    setIsLoading(false);

    if (error) {
      toast.error("비밀번호 재설정 요청 실패", { description: error.message });
      return;
    }

    setIsSent(true);
    toast.success("재설정 링크가 이메일로 발송되었습니다.");
  };

  return {
    email,
    setEmail,
    isLoading,
    isSent,
    handleResetRequest,
  };
};
````

## File: src/features/auth/ui/AuthCard.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { AuthCard } from "./AuthCard";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";

const meta: Meta<typeof AuthCard> = {
  title: "Features/Auth/AuthCard",
  component: AuthCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AuthCard>;

export const Default: Story = {
  args: {
    title: "DashCraft 예시 카드",
    subtitle: "인증 폼을 위한 공통 카드 프레임 스토어입니다.",
    children: (
      <div className="space-y-3">
        <Input label="샘플 필드" placeholder="내용을 입력하세요" />
        <Button variant="primary" className="w-full">
          확인
        </Button>
      </div>
    ),
    footer: (
      <span className="text-xs text-muted-foreground">푸터 영역입니다.</span>
    ),
  },
};
````

## File: src/features/auth/ui/ForgotPasswordView.tsx
````typescript
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { AuthCard } from "./AuthCard";
import { useForgotPasswordForm } from "../model/useForgotPasswordForm";
import { Mail, CheckCircle2, ArrowLeft } from "lucide-react";

export const ForgotPasswordView = () => {
  const { email, setEmail, isLoading, isSent, handleResetRequest } =
    useForgotPasswordForm();

  return (
    <AuthCard
      title="비밀번호 재설정"
      subtitle="가입 시 등록한 이메일로 재설정 링크를 보내드립니다"
      footer={
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>로그인 화면으로 돌아가기</span>
        </Link>
      }
    >
      {isSent ? (
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center space-y-3">
          <CheckCircle2 className="w-8 h-8 text-primary mx-auto shrink-0" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-foreground">
              재설정 메일이 발송되었습니다
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">{email}</span>{" "}
              주소로 전송된 비밀번호 재설정 링크를 확인해주세요.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleResetRequest} className="space-y-3.5">
          <Input
            label="이메일"
            type="email"
            required
            icon={Mail}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="name@example.com"
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isLoading}
            isLoading={isLoading}
            className="w-full text-xs h-9"
          >
            재설정 링크 발송
          </Button>
        </form>
      )}
    </AuthCard>
  );
};
````

## File: src/features/auth/ui/TermsCheckbox.stories.tsx
````typescript
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
````

## File: src/features/auth/ui/TermsCheckbox.tsx
````typescript
import React from "react";
import { cn } from "@/shared/lib/utils";

export interface TermsCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  className?: string;
}

export const TermsCheckbox = ({
  id,
  checked,
  onChange,
  onOpenTerms,
  onOpenPrivacy,
  className,
}: TermsCheckboxProps) => {
  return (
    <div className={cn("flex items-start gap-2 pt-1", className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-1 focus:ring-primary cursor-pointer shrink-0"
      />
      <label
        htmlFor={id}
        className="text-xs text-foreground/80 leading-normal cursor-pointer select-none"
      >
        <button
          type="button"
          onClick={onOpenTerms}
          className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          이용약관
        </button>
        <span className="px-1 text-muted-foreground">및</span>
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          개인정보처리방침
        </button>
        <span className="pl-0.5">에 동의합니다.</span>
      </label>
    </div>
  );
};
````

## File: src/features/auth/ui/TermsModal.stories.tsx
````typescript
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
````

## File: src/features/auth/ui/TermsModal.tsx
````typescript
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
````

## File: src/features/calendar/api/scheduleRepository.ts
````typescript
import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type ScheduleRow = Database["public"]["Tables"]["schedules"]["Row"];
export type ScheduleInsert =
  Database["public"]["Tables"]["schedules"]["Insert"];
export type ScheduleUpdate =
  Database["public"]["Tables"]["schedules"]["Update"];

export const scheduleRepository = {
  async fetchSchedulesByRange(
    startDate: string,
    endDate: string,
  ): Promise<ScheduleRow[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("schedules")
      .select("*")
      .gte("date_str", startDate)
      .lte("date_str", endDate)
      .order("time_str", { ascending: true, nullsFirst: true });

    if (error) throw error;
    return data ?? [];
  },

  async insertSchedule(schedule: ScheduleInsert): Promise<ScheduleRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("schedules")
      .insert(schedule)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateSchedule(
    scheduleId: string,
    updates: ScheduleUpdate,
  ): Promise<ScheduleRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("schedules")
      .update(updates)
      .eq("schedule_id", scheduleId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteSchedule(scheduleId: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("schedules")
      .delete()
      .eq("schedule_id", scheduleId);

    if (error) throw error;
  },
};
````

## File: src/features/calendar/api/useScheduleQuery.test.tsx
````typescript
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCalendarSchedules } from "../model/useCalendarSchedules";

const mockSchedulesData = [
  {
    id: "1",
    user_id: "u1",
    schedule_id: "s1",
    date_str: "2026-11-17",
    title: "팀 회의",
    time_str: "10:00",
    color: "green",
    created_at: "2026-11-17T00:00:00Z",
    updated_at: "2026-11-17T00:00:00Z",
  },
];

vi.mock("../api/useScheduleQuery", () => ({
  useSchedulesQuery: () => ({
    data: mockSchedulesData,
    isLoading: false,
    isError: false,
  }),
  useAddScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
  useUpdateScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
  useDeleteScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
}));

describe("useCalendarSchedules Hook", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("API 데이터를 날짜별 schedulesMap (Map<string, ScheduleItem[]>) 형태로 올바르게 변환해야 한다", async () => {
    const { result } = renderHook(
      () => useCalendarSchedules("2026-11-01", "2026-11-30"),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    const dayItems = result.current.schedulesMap.get("2026-11-17");
    expect(dayItems).toBeDefined();
    expect(dayItems?.length).toBe(1);
    expect(dayItems?.[0]).toEqual({
      id: "s1",
      title: "팀 회의",
      time: "10:00",
      color: "green",
    });
  });
});
````

## File: src/features/calendar/lib/holidays.test.ts
````typescript
import { describe, expect, it } from "vitest";
import { getKoreanHolidayInfo } from "./holidays";

describe("holidays lib - getKoreanHolidayInfo", () => {
  it("신정(1월 1일) 날짜 입력 시 해당 공휴일 정보를 반환해야 한다", () => {
    const newYearDate = new Date(2026, 0, 1);
    const info = getKoreanHolidayInfo(newYearDate);

    expect(info).not.toBeNull();
    expect(info?.name).toBe("신정");
  });

  it("크리스마스(12월 25일) 날짜 입력 시 공휴일 정보를 반환해야 한다", () => {
    const christmasDate = new Date(2026, 11, 25);
    const info = getKoreanHolidayInfo(christmasDate);

    expect(info).not.toBeNull();
    expect(info?.name).toBe("성탄절");
  });

  it("공휴일이 아닌 일반 평일의 경우 null을 반환해야 한다", () => {
    const normalDay = new Date(2026, 10, 17);
    const info = getKoreanHolidayInfo(normalDay);

    expect(info).toBeNull();
  });
});
````

## File: src/features/calendar/lib/holidays.ts
````typescript
interface HolidayInfo {
  name: string;
  isHoliday: boolean;
}

const FIXED_HOLIDAYS: Record<string, string> = {
  "01-01": "신정",
  "03-01": "삼일절",
  "05-05": "어린이날",
  "06-06": "현충일",
  "08-15": "광복절",
  "10-03": "개천절",
  "10-09": "한글날",
  "12-25": "성탄절",
};

const LUNAR_HOLIDAYS_MAP: Record<string, Record<string, string>> = {
  "2025": {
    "01-28": "설날 연휴",
    "01-29": "설날",
    "01-30": "설날 연휴",
    "05-05": "부처님오신날",
    "10-05": "추석 연휴",
    "10-06": "추석",
    "10-07": "추석 연휴",
    "10-08": "대체공휴일",
  },
  "2026": {
    "02-16": "설날 연휴",
    "02-17": "설날",
    "02-18": "설날 연휴",
    "05-24": "부처님오신날",
    "09-24": "추석 연휴",
    "09-25": "추석",
    "09-26": "추석 연휴",
  },
  "2027": {
    "02-06": "설날 연휴",
    "02-07": "설날",
    "02-08": "설날 연휴",
    "02-09": "대체공휴일",
    "05-13": "부처님오신날",
    "09-14": "추석 연휴",
    "09-15": "추석",
    "09-16": "추석 연휴",
  },
};

export const getKoreanHolidayInfo = (date: Date): HolidayInfo | null => {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const monthDay = `${month}-${day}`;

  if (FIXED_HOLIDAYS[monthDay]) {
    return { name: FIXED_HOLIDAYS[monthDay], isHoliday: true };
  }

  if (LUNAR_HOLIDAYS_MAP[year] && LUNAR_HOLIDAYS_MAP[year][monthDay]) {
    return { name: LUNAR_HOLIDAYS_MAP[year][monthDay], isHoliday: true };
  }

  return null;
};
````

## File: src/features/calendar/model/constants.ts
````typescript
export const SCHEDULE_COLOR_STYLES: Record<
  string,
  { bg: string; text: string; border: string; dot: string; timeBg: string }
> = {
  default: {
    bg: "bg-primary/10 hover:bg-primary/20",
    text: "text-primary",
    border: "border-primary/20",
    dot: "bg-primary",
    timeBg: "bg-primary/20",
  },
  green: {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/20",
    dot: "bg-emerald-500",
    timeBg: "bg-emerald-500/20",
  },
  yellow: {
    bg: "bg-amber-500/10 hover:bg-amber-500/20",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/20",
    dot: "bg-amber-500",
    timeBg: "bg-amber-500/20",
  },
  purple: {
    bg: "bg-purple-500/10 hover:bg-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-500/20",
    dot: "bg-purple-500",
    timeBg: "bg-purple-500/20",
  },
  red: {
    bg: "bg-rose-500/10 hover:bg-rose-500/20",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500/20",
    dot: "bg-rose-500",
    timeBg: "bg-rose-500/20",
  },
};
````

## File: src/features/calendar/model/types.ts
````typescript
export interface ScheduleItem {
  id: string;
  title: string;
  time?: string;
  color?: string;
}

export type SchedulesMap = Record<string, ScheduleItem[]>;
````

## File: src/features/calendar/model/useCalendarNavigation.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCalendarNavigation } from "./useCalendarNavigation";

describe("useCalendarNavigation Hook", () => {
  it("초기 렌더링 시 현재 연/월 기준 그리드 범위(startDateStr, endDateStr)가 정상 추출되어야 한다", () => {
    const { result } = renderHook(() => useCalendarNavigation());

    expect(result.current.currentDate).toBeInstanceOf(Date);
    expect(result.current.startDateStr).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(result.current.endDateStr).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("handleNextMonth 호출 시 1달 뒤 날짜로 변경되어야 한다", () => {
    const { result } = renderHook(() => useCalendarNavigation());
    const initialMonth = result.current.currentDate.getMonth();

    act(() => {
      result.current.handleNextMonth();
    });

    const nextMonth = (initialMonth + 1) % 12;
    expect(result.current.currentDate.getMonth()).toBe(nextMonth);
  });

  it("handlePrevMonth 호출 시 1달 전 날짜로 변경되어야 한다", () => {
    const { result } = renderHook(() => useCalendarNavigation());
    const initialMonth = result.current.currentDate.getMonth();

    act(() => {
      result.current.handlePrevMonth();
    });

    const prevMonth = (initialMonth - 1 + 12) % 12;
    expect(result.current.currentDate.getMonth()).toBe(prevMonth);
  });

  it("handleToday 호출 시 오늘 날짜로 초기화되어야 한다", () => {
    const { result } = renderHook(() => useCalendarNavigation());

    act(() => {
      result.current.handleNextMonth();
      result.current.handleToday();
    });

    const todayStr = new Date().toDateString();
    expect(result.current.currentDate.toDateString()).toBe(todayStr);
  });
});
````

## File: src/features/calendar/model/useCalendarNavigation.ts
````typescript
"use client";

import { useState, useCallback, useMemo } from "react";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
} from "date-fns";

export const useCalendarNavigation = () => {
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());

  const handlePrevMonth = useCallback(() => {
    setCurrentDate((prev) => subMonths(prev, 1));
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate((prev) => addMonths(prev, 1));
  }, []);

  const handleToday = useCallback(() => {
    setCurrentDate(new Date());
  }, []);

  const { startDateStr, endDateStr } = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    return {
      startDateStr: format(calendarStart, "yyyy-MM-dd"),
      endDateStr: format(calendarEnd, "yyyy-MM-dd"),
    };
  }, [currentDate]);

  return {
    currentDate,
    setCurrentDate,
    handlePrevMonth,
    handleNextMonth,
    handleToday,
    startDateStr,
    endDateStr,
  };
};
````

## File: src/features/calendar/model/useCalendarSchedules.test.tsx
````typescript
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCalendarSchedules } from "./useCalendarSchedules";

const mockSchedulesData = [
  {
    id: "1",
    user_id: "u1",
    schedule_id: "s1",
    date_str: "2026-11-17",
    title: "팀 회의",
    time_str: "10:00",
    color: "green",
    created_at: "2026-11-17T00:00:00Z",
    updated_at: "2026-11-17T00:00:00Z",
  },
];

vi.mock("../api/useScheduleQuery", () => ({
  useSchedulesQuery: () => ({
    data: mockSchedulesData,
    isLoading: false,
    isError: false,
  }),
  useAddScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
  useUpdateScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
  useDeleteScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
}));

describe("useCalendarSchedules Hook", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("API 데이터를 날짜별 schedulesMap (Map<string, ScheduleItem[]>) 형태로 올바르게 변환해야 한다", async () => {
    const { result } = renderHook(
      () => useCalendarSchedules("2026-11-01", "2026-11-30"),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    const dayItems = result.current.schedulesMap.get("2026-11-17");
    expect(dayItems).toBeDefined();
    expect(dayItems?.length).toBe(1);
    expect(dayItems?.[0]).toEqual({
      id: "s1",
      title: "팀 회의",
      time: "10:00",
      color: "green",
    });
  });
});
````

## File: src/features/calendar/model/useScheduleModal.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useScheduleModal } from "./useScheduleModal";
import { ScheduleRow } from "../api/scheduleRepository";

const mockSchedule: ScheduleRow = {
  id: "row-1",
  user_id: "user-1",
  schedule_id: "schedule-1",
  date_str: "2026-11-17",
  title: "기존 일정",
  time_str: "10:00",
  color: "purple",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

describe("useScheduleModal Hook", () => {
  it("초기 상태는 닫힘(isOpen: false) 상태여야 한다", () => {
    const { result } = renderHook(() => useScheduleModal());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.selectedDateStr).toBe("");
    expect(result.current.scheduleToEdit).toBeNull();
  });

  it("openAddModal 호출 시 선택 날짜와 함께 신규 모달이 열려야 한다", () => {
    const { result } = renderHook(() => useScheduleModal());

    act(() => {
      result.current.openAddModal("2026-11-20");
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.selectedDateStr).toBe("2026-11-20");
    expect(result.current.scheduleToEdit).toBeNull();
  });

  it("openEditModal 호출 시 수정 대상 데이터와 함께 수정 모달이 열려야 한다", () => {
    const { result } = renderHook(() => useScheduleModal());

    act(() => {
      result.current.openEditModal(mockSchedule);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.selectedDateStr).toBe("2026-11-17");
    expect(result.current.scheduleToEdit).toEqual(mockSchedule);
  });

  it("closeModal 호출 시 모달 상태가 초기화되어야 한다", () => {
    const { result } = renderHook(() => useScheduleModal());

    act(() => {
      result.current.openEditModal(mockSchedule);
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.scheduleToEdit).toBeNull();
  });
});
````

## File: src/features/calendar/ui/CalendarCell.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { CalendarCell } from "./CalendarCell";
import { ScheduleItem } from "../model/types";

const mockSchedules: ScheduleItem[] = [
  { id: "1", title: "팀 회의", time: "10:00", color: "default" },
  { id: "2", title: "프로젝트 점검", time: "14:00", color: "green" },
  { id: "3", title: "디자인 시안 검토", color: "purple" },
  { id: "4", title: "퇴근 후 운동", color: "red" },
];

const meta: Meta<typeof CalendarCell> = {
  title: "Features/Calendar/CalendarCell",
  component: CalendarCell,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[160px] border border-border bg-card">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CalendarCell>;

export const Default: Story = {
  args: {
    date: new Date(2026, 10, 17),
    dateStr: "2026-11-17",
    isCurrentMonth: true,
    isToday: false,
    isSelected: false,
    daySchedules: [mockSchedules[0]],
    onSelectDate: () => {},
    onOpenModal: () => {},
    onOpenPopover: () => {},
    onEditSchedule: () => {},
    onRemoveSchedule: () => {},
  },
};

export const Today: Story = {
  args: {
    ...Default.args,
    isToday: true,
    isSelected: true,
  },
};

export const MultipleSchedulesWithPopoverChip: Story = {
  args: {
    ...Default.args,
    daySchedules: mockSchedules,
  },
};

export const OutsideMonth: Story = {
  args: {
    ...Default.args,
    isCurrentMonth: false,
    daySchedules: [],
  },
};
````

## File: src/features/calendar/ui/CalendarHeader.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { CalendarHeader } from "./CalendarHeader";

const meta: Meta<typeof CalendarHeader> = {
  title: "Features/Calendar/CalendarHeader",
  component: CalendarHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CalendarHeader>;

export const Default: Story = {
  args: {
    currentDate: new Date(2026, 10, 1),
    onPrevYear: () => {},
    onPrevMonth: () => {},
    onNextYear: () => {},
    onNextMonth: () => {},
    onToday: () => {},
  },
};
````

## File: src/features/calendar/ui/ColorPalettePicker.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { ColorPalettePicker } from "./ColorPalettePicker";
import { useState } from "react";

const meta: Meta<typeof ColorPalettePicker> = {
  title: "Features/Calendar/ColorPalettePicker",
  component: ColorPalettePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorPalettePicker>;

const InteractiveColorPicker = () => {
  const [color, setColor] = useState("default");
  return (
    <div className="p-4 border rounded-xl bg-card max-w-xs">
      <ColorPalettePicker selectedColor={color} onChange={setColor} />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveColorPicker />,
};
````

## File: src/features/calendar/ui/DaySchedulePopover.stories.tsx
````typescript
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
````

## File: src/features/calendar/ui/DaySchedulePopover.tsx
````typescript
"use client";

import React, { useEffect, useRef } from "react";
import { Plus, X, Trash2 } from "lucide-react";
import { ScheduleItem } from "../model/types";
import { SCHEDULE_COLOR_STYLES } from "../model/constants";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface DaySchedulePopoverProps {
  dateStr: string;
  schedules: ScheduleItem[];
  isOpen: boolean;
  onClose: () => void;
  onEditSchedule: (schedule: ScheduleItem) => void;
  onAddSchedule: (dateStr: string) => void;
  onDeleteSchedule: (id: string) => void;
}

export const DaySchedulePopover = ({
  dateStr,
  schedules,
  isOpen,
  onClose,
  onEditSchedule,
  onAddSchedule,
  onDeleteSchedule,
}: DaySchedulePopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 sm:p-0">
      <div
        ref={popoverRef}
        className="w-full max-w-sm bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
          <h3 className="text-sm font-bold text-foreground">
            {dateStr} 일정 목록 ({schedules.length})
          </h3>
          <div className="flex items-center gap-1.5">
            <Button
              size="sm"
              variant="outline"
              className="h-7 px-2 text-xs flex items-center gap-1 cursor-pointer bg-card"
              onClick={() => {
                onClose();
                onAddSchedule(dateStr);
              }}
            >
              <Plus className="w-3.5 h-3.5" />
              일정 추가
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-3 max-h-[320px] overflow-y-auto space-y-2.5 scrollbar-thin">
          {schedules.map((item) => {
            const style =
              SCHEDULE_COLOR_STYLES[item.color || "default"] ||
              SCHEDULE_COLOR_STYLES.default;

            return (
              <div
                key={item.id}
                onClick={() => {
                  onClose();
                  onEditSchedule(item);
                }}
                className={cn(
                  "p-3 border rounded-xl flex items-center justify-between cursor-pointer transition-all hover:opacity-90 active:scale-[0.99]",
                  style.bg,
                  style.border,
                )}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {item.time && (
                    <span
                      className={cn(
                        "px-1.5 py-0.5 text-xs font-mono font-semibold rounded shrink-0",
                        style.timeBg,
                        style.text,
                      )}
                    >
                      {item.time}
                    </span>
                  )}
                  <span
                    className={cn("text-xs font-semibold truncate", style.text)}
                  >
                    {item.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSchedule(item.id);
                  }}
                  className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md hover:bg-rose-500/10 transition-colors cursor-pointer"
                  title="삭제"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/calendar/ui/MobileScheduleList.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { MobileScheduleList } from "./MobileScheduleList";
import { ScheduleItem } from "../model/types";

const mockSchedules: ScheduleItem[] = [
  { id: "1", title: "기획안 작성", time: "09:00", color: "default" },
  { id: "2", title: "점심 약속", time: "12:30", color: "yellow" },
  { id: "3", title: "코드 리뷰", color: "purple" },
];

const meta: Meta<typeof MobileScheduleList> = {
  title: "Features/Calendar/MobileScheduleList",
  component: MobileScheduleList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-sm p-4 bg-muted/20">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileScheduleList>;

export const WithSchedules: Story = {
  args: {
    selectedDateStr: "2026-11-17",
    schedules: mockSchedules,
    onAddSchedule: () => {},
    onEditSchedule: () => {},
    onDeleteSchedule: () => {},
  },
};

export const Empty: Story = {
  args: {
    selectedDateStr: "2026-11-18",
    schedules: [],
    onAddSchedule: () => {},
    onEditSchedule: () => {},
    onDeleteSchedule: () => {},
  },
};
````

## File: src/features/calendar/ui/MobileScheduleList.tsx
````typescript
"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import { ScheduleItem } from "../model/types";
import { SCHEDULE_COLOR_STYLES } from "../model/constants";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface MobileScheduleListProps {
  selectedDateStr: string | null;
  schedules: ScheduleItem[];
  onAddSchedule: (dateStr: string) => void;
  onEditSchedule: (scheduleId: string) => void;
  onDeleteSchedule: (scheduleId: string) => void;
}

export const MobileScheduleList = ({
  selectedDateStr,
  schedules,
  onAddSchedule,
  onEditSchedule,
  onDeleteSchedule,
}: MobileScheduleListProps) => {
  if (!selectedDateStr) return null;

  return (
    <div className="block sm:hidden bg-card border border-border rounded-2xl p-4 space-y-3 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          {selectedDateStr} 일정
        </h3>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs px-2 cursor-pointer"
          onClick={() => onAddSchedule(selectedDateStr)}
        >
          + 일정 추가
        </Button>
      </div>

      {schedules.length > 0 ? (
        <div className="space-y-2">
          {schedules.map((item) => {
            const style =
              SCHEDULE_COLOR_STYLES[item.color || "default"] ||
              SCHEDULE_COLOR_STYLES.default;

            return (
              <div
                key={item.id}
                onClick={() => onEditSchedule(item.id)}
                className={cn(
                  "p-2.5 border rounded-lg flex items-center justify-between active:opacity-80 cursor-pointer transition-colors",
                  style.bg,
                  style.border,
                )}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {item.time && (
                    <span
                      className={cn(
                        "px-1.5 py-0.5 text-xs font-mono font-semibold rounded shrink-0",
                        style.timeBg,
                        style.text,
                      )}
                    >
                      {item.time}
                    </span>
                  )}
                  <span
                    className={cn("text-xs font-medium truncate", style.text)}
                  >
                    {item.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSchedule(item.id);
                  }}
                  className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md active:bg-rose-50 cursor-pointer"
                  title="삭제"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-xs text-muted-foreground py-2 text-center">
          등록된 일정이 없습니다.
        </p>
      )}
    </div>
  );
};
````

## File: src/features/calendar/ui/TimePickerInput.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { TimePickerInput } from "./TimePickerInput";
import { useState } from "react";

const meta: Meta<typeof TimePickerInput> = {
  title: "Features/Calendar/TimePickerInput",
  component: TimePickerInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TimePickerInput>;

const InteractiveTimePicker = () => {
  const [time, setTime] = useState("09:30");
  return (
    <div className="p-4 border rounded-xl bg-card max-w-xs">
      <TimePickerInput value={time} onChange={setTime} />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTimePicker />,
};
````

## File: src/features/calendar/ui/TimePickerInput.tsx
````typescript
"use client";

import React from "react";
import { Clock } from "lucide-react";

interface TimePickerInputProps {
  value: string;
  onChange: (time: string) => void;
  disabled?: boolean;
}

export const TimePickerInput = ({
  value,
  onChange,
  disabled = false,
}: TimePickerInputProps) => {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-primary" />
        시간 선택 (선택 사항)
      </label>
      <input
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full px-3 py-2 text-xs bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
      />
    </div>
  );
};
````

## File: src/features/clock-widget/model/useClockConfig.test.tsx
````typescript
import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useClockConfig } from "./useClockConfig";
import {
  dashboardRepository,
  WidgetRow,
} from "@/widgets/dashboard-grid/api/dashboardRepository";
import { requestNotificationPermission } from "../lib/audioNotifier";
import React from "react";

vi.mock("@/widgets/dashboard-grid/api/dashboardRepository", () => ({
  dashboardRepository: {
    fetchWidgets: vi.fn(),
    updateWidget: vi.fn(),
  },
}));

vi.mock("../lib/audioNotifier", () => ({
  requestNotificationPermission: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    info: vi.fn(),
    warning: vi.fn(),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
      mutations: { retry: false },
    },
  });

const createWrapper = () => {
  const queryClient = createTestQueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestQueryWrapper";
  return Wrapper;
};

describe("useClockConfig Hook", () => {
  const widgetId = "clock-widget-1";

  const mockWidget: WidgetRow = {
    id: "1",
    user_id: "user-1",
    widget_id: widgetId,
    type: "clock",
    title: "시계",
    color: "default",
    layout_w: 1,
    layout_h: 1,
    layout_x: 0,
    layout_y: 0,
    sort_order: 1,
    config: { isNotificationEnabled: false },
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("기본 설정값 및 DB에 저장된 Config 정보를 올바르게 읽어와야 한다", async () => {
    const mockWidgets: WidgetRow[] = [
      {
        ...mockWidget,
        config: {
          workDuration: 1800,
          breakDuration: 600,
          isSoundEnabled: true,
        },
      },
    ];

    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce(
      mockWidgets,
    );

    const { result } = renderHook(() => useClockConfig(widgetId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.workDuration).toBe(1800));
    expect(result.current.breakDuration).toBe(600);
    expect(result.current.isSoundEnabled).toBe(true);
  });

  it("toggleSound 호출 시 isSoundEnabled 토글 업데이트가 실행된다", async () => {
    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce([
      mockWidget,
    ]);
    vi.mocked(dashboardRepository.updateWidget).mockResolvedValueOnce(
      mockWidget,
    );

    const { result } = renderHook(() => useClockConfig(widgetId), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.toggleSound();
    });

    await waitFor(() =>
      expect(dashboardRepository.updateWidget).toHaveBeenCalledWith(
        widgetId,
        expect.objectContaining({
          config: expect.objectContaining({ isSoundEnabled: false }),
        }),
      ),
    );
  });

  it("handleNotificationToggle 권한 승인 시 알림 설정 활성화 상태로 저장된다", async () => {
    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce([
      mockWidget,
    ]);
    vi.mocked(dashboardRepository.updateWidget).mockResolvedValueOnce(
      mockWidget,
    );
    vi.mocked(requestNotificationPermission).mockResolvedValueOnce(true);

    const { result } = renderHook(() => useClockConfig(widgetId), {
      wrapper: createWrapper(),
    });

    await waitFor(() =>
      expect(result.current.isNotificationEnabled).toBe(false),
    );

    await act(async () => {
      await result.current.handleNotificationToggle();
    });

    await waitFor(() =>
      expect(dashboardRepository.updateWidget).toHaveBeenCalledWith(
        widgetId,
        expect.objectContaining({
          config: expect.objectContaining({ isNotificationEnabled: true }),
        }),
      ),
    );
  });
});
````

## File: src/features/clock-widget/model/useClockConfig.ts
````typescript
"use client";

import { useCallback, useMemo } from "react";
import {
  useWidgetsQuery,
  useUpdateWidgetMutation,
} from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { DEFAULT_CLOCK_CONFIG } from "@/widgets/dashboard-grid/config/widgets.config";
import { requestNotificationPermission } from "../lib/audioNotifier";
import { toast } from "sonner";

export const useClockConfig = (widgetId: string) => {
  const { data: widgets = [] } = useWidgetsQuery();
  const updateWidgetMutation = useUpdateWidgetMutation();

  const currentWidget = widgets.find((w) => w.widget_id === widgetId);

  const rawConfig = useMemo(
    () => (currentWidget?.config as Record<string, unknown>) ?? {},
    [currentWidget?.config],
  );

  const workDuration =
    typeof rawConfig.workDuration === "number"
      ? rawConfig.workDuration
      : DEFAULT_CLOCK_CONFIG.workDuration;

  const breakDuration =
    typeof rawConfig.breakDuration === "number"
      ? rawConfig.breakDuration
      : DEFAULT_CLOCK_CONFIG.breakDuration;

  const isSoundEnabled =
    typeof rawConfig.isSoundEnabled === "boolean"
      ? rawConfig.isSoundEnabled
      : DEFAULT_CLOCK_CONFIG.isSoundEnabled;

  const isNotificationEnabled =
    typeof rawConfig.isNotificationEnabled === "boolean"
      ? rawConfig.isNotificationEnabled
      : DEFAULT_CLOCK_CONFIG.isNotificationEnabled;

  const toggleSound = useCallback(() => {
    updateWidgetMutation.mutate({
      widgetId,
      config: {
        ...rawConfig,
        isSoundEnabled: !isSoundEnabled,
      },
    });
  }, [isSoundEnabled, updateWidgetMutation, widgetId, rawConfig]);

  const handleNotificationToggle = useCallback(async () => {
    if (!isNotificationEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        updateWidgetMutation.mutate({
          widgetId,
          config: {
            ...rawConfig,
            isNotificationEnabled: true,
          },
        });
        toast.success("브라우저 알림이 활성화되었습니다.");
      } else {
        toast.warning("브라우저 설정에서 알림 권한을 허용해 주세요.");
      }
    } else {
      updateWidgetMutation.mutate({
        widgetId,
        config: {
          ...rawConfig,
          isNotificationEnabled: false,
        },
      });
      toast.info("브라우저 알림이 비활성화되었습니다.");
    }
  }, [isNotificationEnabled, updateWidgetMutation, widgetId, rawConfig]);

  return {
    workDuration,
    breakDuration,
    isSoundEnabled,
    isNotificationEnabled,
    rawConfig,
    toggleSound,
    handleNotificationToggle,
  };
};
````

## File: src/features/clock-widget/model/useTimerEffects.test.ts
````typescript
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTimerEffects } from "./useTimerEffects";
import {
  startWhiteNoise,
  stopWhiteNoise,
  playCompletionSound,
  triggerNotification,
} from "../lib/audioNotifier";

vi.mock("../lib/audioNotifier", () => ({
  startWhiteNoise: vi.fn(),
  stopWhiteNoise: vi.fn(),
  playCompletionSound: vi.fn(),
  triggerNotification: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    info: vi.fn(),
  },
}));

describe("useTimerEffects Hook", () => {
  const widgetId = "clock-widget-1";
  const onSwitchPhase = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  it("집중 시간(work) 실행 중일 때 해당 widgetId로 백색소음이 시작되고, 정지 시 멈추어야 한다", () => {
    const { rerender, unmount } = renderHook(
      (props) => useTimerEffects(props),
      {
        initialProps: {
          widgetId,
          timeLeft: 1500,
          isRunning: true,
          timerPhase: "work" as const,
          workDuration: 1500,
          breakDuration: 300,
          isSoundEnabled: true,
          isNotificationEnabled: false,
          onSwitchPhase,
        },
      },
    );

    expect(startWhiteNoise).toHaveBeenCalledWith(widgetId);

    rerender({
      widgetId,
      timeLeft: 1500,
      isRunning: false,
      timerPhase: "work" as const,
      workDuration: 1500,
      breakDuration: 300,
      isSoundEnabled: true,
      isNotificationEnabled: false,
      onSwitchPhase,
    });

    expect(stopWhiteNoise).toHaveBeenCalledWith(widgetId);

    unmount();
    expect(stopWhiteNoise).toHaveBeenCalledWith(widgetId);
  });

  it("타이머가 완료(timeLeft가 0)되면 완료 소리 재생 및 다음 페이즈 자동 전환이 호출된다", () => {
    const { rerender } = renderHook((props) => useTimerEffects(props), {
      initialProps: {
        widgetId,
        timeLeft: 1,
        isRunning: true,
        timerPhase: "work" as const,
        workDuration: 1500,
        breakDuration: 300,
        isSoundEnabled: true,
        isNotificationEnabled: true,
        onSwitchPhase,
      },
    });

    rerender({
      widgetId,
      timeLeft: 0,
      isRunning: false,
      timerPhase: "work" as const,
      workDuration: 1500,
      breakDuration: 300,
      isSoundEnabled: true,
      isNotificationEnabled: true,
      onSwitchPhase,
    });

    expect(playCompletionSound).toHaveBeenCalled();
    expect(triggerNotification).toHaveBeenCalledWith(
      "🎉 집중 시간 종료!",
      "고생하셨습니다! 5분간 달콤한 휴식을 취하세요.",
    );

    vi.advanceTimersByTime(1000);
    expect(onSwitchPhase).toHaveBeenCalledWith(widgetId, "break", 300);
  });
});
````

## File: src/features/clock-widget/model/useTimerEffects.ts
````typescript
"use client";

import { useEffect, useRef } from "react";
import { TimerPhase } from "./useClockStore";
import {
  playCompletionSound,
  startWhiteNoise,
  stopWhiteNoise,
  triggerNotification,
} from "../lib/audioNotifier";
import { toast } from "sonner";

interface UseTimerEffectsProps {
  widgetId: string;
  timeLeft: number;
  isRunning: boolean;
  timerPhase: TimerPhase;
  workDuration: number;
  breakDuration: number;
  isSoundEnabled: boolean;
  isNotificationEnabled: boolean;
  onSwitchPhase: (
    widgetId: string,
    phase: TimerPhase,
    durationSec: number,
  ) => void;
}

export const useTimerEffects = ({
  widgetId,
  timeLeft,
  isRunning,
  timerPhase,
  workDuration,
  breakDuration,
  isSoundEnabled,
  isNotificationEnabled,
  onSwitchPhase,
}: UseTimerEffectsProps) => {
  const prevTimeLeftRef = useRef(timeLeft);

  useEffect(() => {
    if (isRunning && timerPhase === "work" && isSoundEnabled) {
      startWhiteNoise(widgetId);
    } else {
      stopWhiteNoise(widgetId);
    }

    return () => {
      stopWhiteNoise(widgetId);
    };
  }, [isRunning, timerPhase, isSoundEnabled, widgetId]);

  useEffect(() => {
    if (prevTimeLeftRef.current > 0 && timeLeft === 0) {
      stopWhiteNoise(widgetId);

      if (isSoundEnabled) {
        playCompletionSound();
      }

      const breakMinutes = Math.max(1, Math.round(breakDuration / 60));
      const title =
        timerPhase === "work" ? "🎉 집중 시간 종료!" : "🔔 휴식 시간 종료!";
      const body =
        timerPhase === "work"
          ? `고생하셨습니다! ${breakMinutes}분간 달콤한 휴식을 취하세요.`
          : "휴식이 완료되었습니다! 다시 집중해볼까요?";

      toast.info(title, { description: body });

      if (isNotificationEnabled) {
        triggerNotification(title, body);
      }

      const nextPhase = timerPhase === "work" ? "break" : "work";
      const nextDuration = nextPhase === "work" ? workDuration : breakDuration;

      setTimeout(() => {
        onSwitchPhase(widgetId, nextPhase, nextDuration);
      }, 1000);
    }
    prevTimeLeftRef.current = timeLeft;
  }, [
    timeLeft,
    isSoundEnabled,
    isNotificationEnabled,
    timerPhase,
    workDuration,
    breakDuration,
    widgetId,
    onSwitchPhase,
  ]);
};
````

## File: src/features/clock-widget/ui/ClockDisplay.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { ClockDisplay } from "./ClockDisplay";

const meta: Meta<typeof ClockDisplay> = {
  title: "Features/ClockWidget/ClockDisplay",
  component: ClockDisplay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px] h-[180px] p-4 bg-card border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ClockDisplay>;

export const Default: Story = {
  args: {
    isExpanded: false,
  },
};

export const Expanded: Story = {
  decorators: [
    (Story) => (
      <div className="w-[500px] h-[300px] p-4 bg-card border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    isExpanded: true,
  },
};
````

## File: src/features/clock-widget/ui/ClockWidget.stories.tsx
````typescript
import { Meta, StoryObj } from "@storybook/react";
import { ClockWidget } from "./ClockWidget";

const meta: Meta<typeof ClockWidget> = {
  title: "Features/ClockWidget",
  component: ClockWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClockWidget>;

export const Default: Story = {
  args: {
    widgetId: "storybook-clock-1",
  },
  render: (args) => (
    <div className="w-[360px] p-4 border rounded-2xl bg-background shadow-sm">
      <ClockWidget {...args} />
    </div>
  ),
};
````

## File: src/features/clock-widget/ui/TimerControls.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { TimerControls } from "./TimerControls";

const meta: Meta<typeof TimerControls> = {
  title: "Features/ClockWidget/TimerControls",
  component: TimerControls,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px] p-4 bg-card border border-border rounded-xl flex justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TimerControls>;

export const IdleState: Story = {
  args: {
    isRunning: false,
    isExpanded: false,
    isSoundEnabled: false,
    isNotificationEnabled: true,
    onToggleTimer: () => alert("타이머 토글"),
    onResetTimer: () => alert("타이머 리셋"),
    onToggleSound: () => alert("사운드 토글"),
    onToggleNotification: () => alert("알림 토글"),
  },
};

export const RunningState: Story = {
  args: {
    isRunning: true,
    isExpanded: false,
    isSoundEnabled: true,
    isNotificationEnabled: true,
    onToggleTimer: () => alert("타이머 토글"),
    onResetTimer: () => alert("타이머 리셋"),
    onToggleSound: () => alert("사운드 토글"),
    onToggleNotification: () => alert("알림 토글"),
  },
};
````

## File: src/features/clock-widget/ui/TimerDisplay.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { TimerDisplay } from "./TimerDisplay";

const meta: Meta<typeof TimerDisplay> = {
  title: "Features/ClockWidget/TimerDisplay",
  component: TimerDisplay,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px] h-[200px] p-4 bg-card border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TimerDisplay>;

export const Default: Story = {
  args: {
    widgetId: "story-widget-1",
    isExpanded: false,
  },
};

export const Expanded: Story = {
  decorators: [
    (Story) => (
      <div className="w-[500px] h-[320px] p-4 bg-card border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    widgetId: "story-widget-1",
    isExpanded: true,
  },
};
````

## File: src/features/command-palette/model/useCommandPaletteStore.ts
````typescript
import { create } from "zustand";

interface CommandPaletteState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggle: () => void;
}

export const useCommandPaletteStore = create<CommandPaletteState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
````

## File: src/features/dashboard-filter/model/useFilterStore.test.ts
````typescript
import { beforeEach, describe, expect, it } from "vitest";
import { useFilterStore } from "./useFilterStore";

describe("useFilterStore", () => {
  beforeEach(() => {
    useFilterStore.getState().resetFilter();
  });

  it("초기 상태값이 정상 설정되어야 한다", () => {
    const state = useFilterStore.getState();
    expect(state.isOpen).toBe(false);
    expect(state.searchQuery).toBe("");
    expect(state.selectedWidgetType).toBe("all");
    expect(state.todoStatus).toBe("all");
  });

  it("toggleFilter 호출 시 서랍 개폐 상태가 전환되어야 한다", () => {
    useFilterStore.getState().toggleFilter();
    expect(useFilterStore.getState().isOpen).toBe(true);

    useFilterStore.getState().toggleFilter();
    expect(useFilterStore.getState().isOpen).toBe(false);
  });

  it("검색어 및 필터 조건 변경이 정상 수행되어야 한다", () => {
    useFilterStore.getState().setSearchQuery("회의");
    useFilterStore.getState().setSelectedWidgetType("memo");
    useFilterStore.getState().setTodoStatus("active");

    const state = useFilterStore.getState();
    expect(state.searchQuery).toBe("회의");
    expect(state.selectedWidgetType).toBe("memo");
    expect(state.todoStatus).toBe("active");
  });

  it("resetFilter 호출 시 모든 필터 조건이 초기화되어야 한다", () => {
    useFilterStore.getState().setSearchQuery("여행");
    useFilterStore.getState().setSelectedWidgetType("todo");
    useFilterStore.getState().setTodoStatus("completed");

    useFilterStore.getState().resetFilter();

    const state = useFilterStore.getState();
    expect(state.searchQuery).toBe("");
    expect(state.selectedWidgetType).toBe("all");
    expect(state.todoStatus).toBe("all");
  });
});
````

## File: src/features/dashboard-filter/ui/FilterSearchInput.stories.tsx
````typescript
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
````

## File: src/features/dashboard-filter/ui/FilterSearchInput.tsx
````typescript
import { Search, X } from "lucide-react";

interface FilterSearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const FilterSearchInput = ({
  value,
  onChange,
}: FilterSearchInputProps) => {
  return (
    <div className="relative flex-1 max-w-md">
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="위젯, 메모, 할 일, D-Day 검색"
        className="w-full pl-9 pr-8 py-1.5 bg-muted/50 border rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-primary"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
````

## File: src/features/dashboard-filter/ui/TodoStatusFilterGroup.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { TodoStatusFilterGroup } from "./TodoStatusFilterGroup";
import { useState } from "react";
import { TodoStatusFilter } from "../model/useFilterStore";

const meta: Meta<typeof TodoStatusFilterGroup> = {
  title: "Features/DashboardFilter/TodoStatusFilterGroup",
  component: TodoStatusFilterGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoStatusFilterGroup>;

const DefaultComponent = () => {
  const [status, setStatus] = useState<TodoStatusFilter>("all");
  return (
    <div className="p-4 bg-background border rounded-xl w-fit">
      <TodoStatusFilterGroup status={status} onSelect={setStatus} />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};
````

## File: src/features/dashboard-filter/ui/WidgetTypeFilterGroup.stories.tsx
````typescript
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
````

## File: src/features/dday-widget/api/ddayRepository.ts
````typescript
import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type DDayRow = Database["public"]["Tables"]["ddays"]["Row"];
export type DDayInsert = Database["public"]["Tables"]["ddays"]["Insert"];

export const ddayRepository = {
  async fetchDDays(widgetId: string): Promise<DDayRow[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("ddays")
      .select("*")
      .eq("widget_id", widgetId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data ?? [];
  },

  async insertDDay(dday: DDayInsert): Promise<DDayRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("ddays")
      .insert(dday)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteDDay(widgetId: string, ddayId: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("ddays")
      .delete()
      .eq("widget_id", widgetId)
      .eq("dday_id", ddayId);

    if (error) throw error;
  },
};
````

## File: src/features/dday-widget/api/useDDayQuery.test.tsx
````typescript
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  useDDaysQuery,
  useAddDDayMutation,
  useDeleteDDayMutation,
} from "./useDDayQuery";
import { ddayRepository } from "./ddayRepository";

vi.mock("./ddayRepository", () => ({
  ddayRepository: {
    fetchDDays: vi.fn(),
    insertDDay: vi.fn(),
    deleteDDay: vi.fn(),
  },
}));

describe("useDDayQuery API Hooks", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    vi.clearAllMocks();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("useDDaysQuery - 위젯 ID에 해당하는 디데이 항목 목록을 올바르게 조회해야 한다", async () => {
    const mockData = [
      {
        id: "1",
        widget_id: "w1",
        user_id: "u1",
        dday_id: "dday-1",
        title: "자격증 시험",
        target_date: "2026-12-15",
        created_at: "",
      },
    ];

    vi.mocked(ddayRepository.fetchDDays).mockResolvedValue(mockData);

    const { result } = renderHook(() => useDDaysQuery("w1"), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(mockData);
    expect(ddayRepository.fetchDDays).toHaveBeenCalledWith("w1");
  });

  it("useAddDDayMutation - 신규 디데이 추가 요청을 정상 수행해야 한다", async () => {
    const mockCreated = {
      id: "2",
      widget_id: "w1",
      user_id: "u1",
      dday_id: "dday-2",
      title: "새 디데이",
      target_date: "2026-11-30",
      created_at: "",
    };

    vi.mocked(ddayRepository.insertDDay).mockResolvedValue(mockCreated);

    const { result } = renderHook(() => useAddDDayMutation("w1"), { wrapper });

    await result.current.mutateAsync({
      title: "새 디데이",
      targetDate: "2026-11-30",
      ddayId: "dday-2",
    });

    expect(ddayRepository.insertDDay).toHaveBeenCalledWith({
      widget_id: "w1",
      dday_id: "dday-2",
      title: "새 디데이",
      target_date: "2026-11-30",
    });
  });

  it("useDeleteDDayMutation - 디데이 항목 삭제 요청을 정상 수행해야 한다", async () => {
    vi.mocked(ddayRepository.deleteDDay).mockResolvedValue();

    const { result } = renderHook(() => useDeleteDDayMutation("w1"), {
      wrapper,
    });

    await result.current.mutateAsync("dday-1");

    expect(ddayRepository.deleteDDay).toHaveBeenCalledWith("w1", "dday-1");
  });
});
````

## File: src/features/dday-widget/ui/DDayForm.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { DDayForm } from "./DDayForm";

const meta: Meta<typeof DDayForm> = {
  title: "Features/DDayWidget/DDayForm",
  component: DDayForm,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[320px] p-4 bg-card border border-border rounded-xl shadow-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DDayForm>;

export const Default: Story = {
  args: {
    onAdd: (title, targetDate) =>
      alert(`디데이 생성 제출: ${title} (${targetDate})`),
  },
};
````

## File: src/features/dday-widget/ui/DDayItemCard.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { DDayItemCard } from "./DDayItemCard";

const meta: Meta<typeof DDayItemCard> = {
  title: "Features/DDayWidget/DDayItemCard",
  component: DDayItemCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[280px] p-2 bg-muted/20 rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DDayItemCard>;

export const DMinus: Story = {
  args: {
    item: {
      id: "dday-1",
      title: "프로젝트 런칭",
      targetDate: "2026-12-31",
    },
    isExpanded: false,
    onRemove: (id) => alert(`삭제 클릭: ${id}`),
  },
};

export const DDayToday: Story = {
  args: {
    item: {
      id: "dday-2",
      title: "중요 발표회",
      targetDate: new Date().toISOString().split("T")[0],
    },
    isExpanded: false,
    onRemove: (id) => alert(`삭제 클릭: ${id}`),
  },
};

export const Expanded: Story = {
  args: {
    item: {
      id: "dday-3",
      title: "입사 기념일",
      targetDate: "2026-01-01",
    },
    isExpanded: true,
    onRemove: (id) => alert(`삭제 클릭: ${id}`),
  },
};
````

## File: src/features/dday-widget/ui/DDayWidget.stories.tsx
````typescript
import { Meta, StoryObj } from "@storybook/react";
import { DDayWidget } from "./DDayWidget";

const meta: Meta<typeof DDayWidget> = {
  title: "Features/DDayWidget",
  component: DDayWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DDayWidget>;

export const Default: Story = {
  args: {
    widgetId: "storybook-dday-1",
  },
  render: (args) => (
    <div className="w-[360px] p-4 border rounded-2xl bg-background shadow-sm">
      <DDayWidget {...args} />
    </div>
  ),
};
````

## File: src/features/memo-widget/api/memoKeepalive.ts
````typescript
let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export function flushMemoKeepalive(
  widgetId: string,
  content: string,
  highlight: string,
) {
  if (!accessToken) return;

  void fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/memos?on_conflict=user_id,widget_id`,
    {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${accessToken}`,
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify({ widget_id: widgetId, content, highlight }),
    },
  );
}
````

## File: src/features/memo-widget/api/memoRepository.ts
````typescript
import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type MemoRow = Database["public"]["Tables"]["memos"]["Row"];

export const memoRepository = {
  async fetchMemo(widgetId: string): Promise<MemoRow | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("memos")
      .select("*")
      .eq("widget_id", widgetId)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async upsertMemo(
    widgetId: string,
    content: string,
    highlight: MemoRow["highlight"] = "none",
  ): Promise<MemoRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("memos")
      .upsert(
        {
          widget_id: widgetId,
          content,
          highlight,
        },
        { onConflict: "user_id,widget_id" },
      )
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
````

## File: src/features/memo-widget/api/useMemoQuery.test.tsx
````typescript
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useMemoQuery, useUpsertMemoMutation } from "./useMemoQuery";
import { memoRepository } from "./memoRepository";
import React from "react";

vi.mock("./memoRepository", () => ({
  memoRepository: {
    fetchMemo: vi.fn(),
    upsertMemo: vi.fn(),
  },
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

const createWrapper = () => {
  const queryClient = createTestQueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestQueryWrapper";
  return Wrapper;
};

describe("Memo Query Hooks", () => {
  const widgetId = "widget-memo-1";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("useMemoQuery: widgetId에 해당하는 메모 데이터를 성공적으로 불러온다", async () => {
    const mockMemo = {
      id: "memo-1",
      user_id: "user-1",
      widget_id: widgetId,
      content: "테스트 메모 내용",
      highlight: "yellow" as const,
      updated_at: "2026-01-01",
    };

    vi.mocked(memoRepository.fetchMemo).mockResolvedValueOnce(mockMemo);

    const { result } = renderHook(() => useMemoQuery(widgetId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockMemo);
    expect(memoRepository.fetchMemo).toHaveBeenCalledWith(widgetId);
  });

  it("useUpsertMemoMutation: 메모 내용을 생성 및 갱신(upsert)한다", async () => {
    const upsertedMemo = {
      id: "memo-1",
      user_id: "user-1",
      widget_id: widgetId,
      content: "수정된 메모 내용",
      highlight: "green" as const,
      updated_at: "2026-01-01",
    };

    vi.mocked(memoRepository.upsertMemo).mockResolvedValueOnce(upsertedMemo);

    const { result } = renderHook(() => useUpsertMemoMutation(widgetId), {
      wrapper: createWrapper(),
    });

    result.current.mutate({ content: "수정된 메모 내용", highlight: "green" });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(memoRepository.upsertMemo).toHaveBeenCalledWith(
      widgetId,
      "수정된 메모 내용",
      "green",
    );
  });
});
````

## File: src/features/memo-widget/model/useMemoEditor.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { useMemoEditor } from "./useMemoEditor";

const mockMutate = vi.fn();

vi.mock("../api/useMemoQuery", () => ({
  useMemoQuery: () => ({
    data: { content: "<p>테스트 메모</p>", highlight: "yellow" },
    isLoading: false,
  }),
  useUpsertMemoMutation: () => ({
    mutate: mockMutate,
    isPending: false,
  }),
}));

vi.mock("../api/memoKeepalive", () => ({
  flushMemoKeepalive: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    warning: vi.fn(),
    error: vi.fn(),
  },
}));

describe("useMemoEditor Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 렌더링 시 DB 데이터의 하이라이트 색상이 정상 반영되어야 한다", () => {
    const { result } = renderHook(() => useMemoEditor("widget-1"));

    expect(result.current.currentHighlight).toBe("yellow");
    expect(result.current.isLoading).toBe(false);
  });

  it("형광펜 색상 변경 함수(handleSelectHighlightColor) 호출 시 하이라이트 상태가 동기화된다", () => {
    const { result } = renderHook(() => useMemoEditor("widget-1"));

    act(() => {
      result.current.handleSelectHighlightColor("green");
    });

    expect(result.current.currentHighlight).toBe("green");
  });

  it("handleBlur 호출 시 포커스가 해제되며 변경사항 저장이 호출된다", () => {
    const { result } = renderHook(() => useMemoEditor("widget-1"));

    act(() => {
      result.current.handleFocus();
    });

    act(() => {
      result.current.handleBlur();
    });

    expect(result.current.editorRef.current).toBeNull();
  });

  it("handlePaste 호출 시 Clipboard 데이터를 읽어 기본 동작을 방지(preventDefault)한다", () => {
    const { result } = renderHook(() => useMemoEditor("widget-1"));

    const preventDefault = vi.fn();
    const fakeClipboardEvent = {
      preventDefault,
      clipboardData: {
        getData: vi.fn().mockReturnValue("붙여넣은 순수 텍스트"),
      },
    } as unknown as React.ClipboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handlePaste(fakeClipboardEvent);
    });

    expect(preventDefault).toHaveBeenCalled();
  });
});
````

## File: src/features/memo-widget/model/useMemoEditor.ts
````typescript
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { sanitizeMemoHtml } from "@/shared/lib/sanitize";
import { toast } from "sonner";
import { useMemoQuery, useUpsertMemoMutation } from "../api/useMemoQuery";
import { flushMemoKeepalive } from "../api/memoKeepalive";
import { useTextHighLighter } from "@/shared/lib/useTextHighlighter";
import { HighlightColor } from "@/shared/config/highlight.config";

const MAX_INNER_HTML_LENGTH = 10000;

const getPlainTextLength = (element: HTMLElement | null): number => {
  if (!element) return 0;
  return element.innerText.replace(/\u200B/g, "").length;
};

export const useMemoEditor = (widgetId: string) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const { data: memoData, isLoading } = useMemoQuery(widgetId);
  const upsertMemoMutation = useUpsertMemoMutation(widgetId);

  const [contentLength, setContentLength] = useState(0);
  const [currentHighlight, setCurrentHighlight] =
    useState<HighlightColor>("none");

  const lastSavedContentRef = useRef<string>("");
  const currentHighlightRef = useRef<HighlightColor>("none");
  const isFocusedRef = useRef(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const memoContent = memoData?.content;
  const memoHighlight = memoData?.highlight;

  useEffect(() => {
    if (memoContent !== undefined || memoHighlight !== undefined) {
      const initialHighlight = (memoHighlight as HighlightColor) || "none";
      currentHighlightRef.current = initialHighlight;
      setCurrentHighlight(initialHighlight);

      if (editorRef.current && !isFocusedRef.current) {
        const sanitized = sanitizeMemoHtml(memoContent || "");
        if (editorRef.current.innerHTML !== sanitized) {
          editorRef.current.innerHTML = sanitized;
          lastSavedContentRef.current = sanitized;
        }
        setContentLength(getPlainTextLength(editorRef.current));
      }
    }
  }, [memoContent, memoHighlight]);

  const saveContent = useCallback(
    (currentHtml: string, highlight?: HighlightColor) => {
      const sanitized = sanitizeMemoHtml(currentHtml);
      const targetHighlight = highlight ?? currentHighlightRef.current;

      if (
        sanitized === lastSavedContentRef.current &&
        targetHighlight === currentHighlightRef.current
      ) {
        return;
      }

      upsertMemoMutation.mutate(
        { content: sanitized, highlight: targetHighlight },
        {
          onSuccess: () => {
            lastSavedContentRef.current = sanitized;
            currentHighlightRef.current = targetHighlight;
          },
        },
      );
    },
    [upsertMemoMutation],
  );

  const { applyHighlight, exitHighlightOnKey } = useTextHighLighter(
    editorRef,
    (newHtml) => {
      if (!editorRef.current) return;
      setContentLength(getPlainTextLength(editorRef.current));
      saveContent(newHtml);
    },
  );

  const handleSelectHighlightColor = (color: HighlightColor) => {
    setCurrentHighlight(color);
    currentHighlightRef.current = color;
    applyHighlight(color);
  };

  const flushCurrentContent = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    if (editorRef.current) {
      const currentHtml = editorRef.current.innerHTML;
      const sanitized = sanitizeMemoHtml(currentHtml);
      if (
        sanitized !== lastSavedContentRef.current ||
        currentHighlightRef.current !==
          ((memoData?.highlight as HighlightColor) ?? "none")
      ) {
        flushMemoKeepalive(
          widgetId,
          sanitized,
          currentHighlightRef.current ?? "none",
        );
        lastSavedContentRef.current = sanitized;
      }
    }
  }, [widgetId, memoData?.highlight]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        flushCurrentContent();
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", flushCurrentContent);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", flushCurrentContent);
      flushCurrentContent();
    };
  }, [flushCurrentContent]);

  const handleInput = () => {
    if (!editorRef.current) return;

    const currentHtml = editorRef.current.innerHTML;

    if (currentHtml.length > MAX_INNER_HTML_LENGTH) {
      toast.warning("메모 용량 한도(10,000자)에 도달했습니다.");
      editorRef.current.innerHTML = lastSavedContentRef.current;
      setContentLength(getPlainTextLength(editorRef.current));
      return;
    }

    setContentLength(getPlainTextLength(editorRef.current));

    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      saveContent(currentHtml);
    }, 800);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const plainText = e.clipboardData.getData("text/plain");
    if (!plainText) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(plainText);
    range.insertNode(textNode);

    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);

    handleInput();
  };

  const handleBlur = () => {
    isFocusedRef.current = false;
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    if (editorRef.current) {
      saveContent(editorRef.current.innerHTML);
    }
  };

  const handleFocus = () => {
    isFocusedRef.current = true;
  };

  return {
    editorRef,
    contentLength,
    isLoading,
    isSaving: upsertMemoMutation.isPending,
    maxLimit: MAX_INNER_HTML_LENGTH,
    currentHighlight,
    handleSelectHighlightColor,
    exitHighlightOnKey,
    handleInput,
    handlePaste,
    handleBlur,
    handleFocus,
  };
};
````

## File: src/features/memo-widget/ui/MemoWidget.stories.tsx
````typescript
import { Meta, StoryObj } from "@storybook/react";
import { MemoWidget } from "./MemoWidget";

const meta: Meta<typeof MemoWidget> = {
  title: "Features/MemoWidget",
  component: MemoWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MemoWidget>;

export const Default: Story = {
  args: {
    widgetId: "storybook-memo-1",
    isExpanded: false,
  },
  render: (args) => (
    <div className="w-[360px] p-2 border rounded-2xl bg-background shadow-sm">
      <MemoWidget {...args} />
    </div>
  ),
};

export const Expanded: Story = {
  args: {
    widgetId: "storybook-memo-2",
    isExpanded: true,
  },
  render: (args) => (
    <div className="w-[360px] p-2 border rounded-2xl bg-background shadow-sm">
      <MemoWidget {...args} />
    </div>
  ),
};
````

## File: src/features/profile/ui/ProfileSection.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { ProfileSection } from "./ProfileSection";

const meta: Meta<typeof ProfileSection> = {
  title: "Features/Profile/ProfileSection",
  component: ProfileSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[480px] p-4 bg-background border border-border rounded-2xl shadow-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfileSection>;

export const Default: Story = {};
````

## File: src/features/settings/model/useDeleteAccount.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { useDeleteAccount } from "./useDeleteAccount";
import { toast } from "sonner";

const mockSignOut = vi.fn();

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      signOut: mockSignOut,
    },
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("useDeleteAccount Hook", () => {
  const userEmail = "test@example.com";

  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
  });

  it("모달 개폐(openModal / closeModal) 시 상태와 입력값이 정상 제어되어야 한다", () => {
    const { result } = renderHook(() => useDeleteAccount(userEmail));

    act(() => {
      result.current.openModal();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.setInputEmail("test@example.com");
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.inputEmail).toBe("");
  });

  it("이메일 미일치 시 에러 토스트를 발생시키고 API 요청을 보내지 않아야 한다", async () => {
    const { result } = renderHook(() => useDeleteAccount(userEmail));

    act(() => {
      result.current.setInputEmail("wrong@example.com");
    });

    await act(async () => {
      await result.current.handleDeleteAccount();
    });

    expect(toast.error).toHaveBeenCalledWith(
      "이메일 주소가 일치하지 않습니다.",
    );
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("이메일 일치 시 계정 삭제 API 호출 및 로그아웃 처리가 실행되어야 한다", async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);
    mockSignOut.mockResolvedValue({ error: null });

    const { result } = renderHook(() => useDeleteAccount(userEmail));

    act(() => {
      result.current.setInputEmail("test@example.com");
    });

    await act(async () => {
      await result.current.handleDeleteAccount();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/account/delete",
      expect.any(Object),
    );
    expect(mockSignOut).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith(
      "계정이 성공적으로 삭제되었습니다.",
    );
  });
});
````

## File: src/features/settings/model/usePasswordChangeForm.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { usePasswordChangeForm } from "./usePasswordChangeForm";
import { toast } from "sonner";

const mockUpdateUser = vi.fn();

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      updateUser: mockUpdateUser,
    },
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("usePasswordChangeForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 상태값이 빈 문자열 및 isLoading: false 여야 한다", () => {
    const { result } = renderHook(() => usePasswordChangeForm());

    expect(result.current.password).toBe("");
    expect(result.current.confirmPassword).toBe("");
    expect(result.current.isLoading).toBe(false);
  });

  it("비밀번호 불일치 시 에러 토스트를 띄우고 제출을 중단해야 한다", async () => {
    const { result } = renderHook(() => usePasswordChangeForm());

    act(() => {
      result.current.setPassword("password123");
      result.current.setConfirmPassword("password456");
    });

    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handlePasswordChange(mockEvent);
    });

    expect(toast.error).toHaveBeenCalledWith(
      "비밀번호 확인이 일치하지 않습니다.",
    );
    expect(mockUpdateUser).not.toHaveBeenCalled();
  });

  it("비밀번호 일치 시 Supabase updateUser를 호출하고 성공 토스트를 출력해야 한다", async () => {
    mockUpdateUser.mockResolvedValue({ data: {}, error: null });

    const { result } = renderHook(() => usePasswordChangeForm());

    act(() => {
      result.current.setPassword("newpassword123");
      result.current.setConfirmPassword("newpassword123");
    });

    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handlePasswordChange(mockEvent);
    });

    expect(mockUpdateUser).toHaveBeenCalledWith({ password: "newpassword123" });
    expect(toast.success).toHaveBeenCalledWith(
      "비밀번호가 성공적으로 변경되었습니다.",
    );
    expect(result.current.password).toBe("");
    expect(result.current.confirmPassword).toBe("");
  });
});
````

## File: src/features/settings/model/usePasswordChangeForm.ts
````typescript
"use client";

import { createClient } from "@/shared/lib/client";
import React, { useState } from "react";
import { toast } from "sonner";

export const usePasswordChangeForm = () => {
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    setIsLoading(true);
    const { error } = await supabase.auth.updateUser({
      password,
    });

    setIsLoading(false);

    if (error) {
      toast.error("비밀번호 변경 실패", { description: error.message });
      return;
    }

    toast.success("비밀번호가 성공적으로 변경되었습니다.");
    setPassword("");
    setConfirmPassword("");
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handlePasswordChange,
  };
};
````

## File: src/features/settings/ui/DeleteAccountSection.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { DeleteAccountSection } from "./DeleteAccountSection";

const meta: Meta<typeof DeleteAccountSection> = {
  title: "Features/Settings/DeleteAccountSection",
  component: DeleteAccountSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[480px] p-4 bg-background border border-border rounded-2xl shadow-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DeleteAccountSection>;

export const Default: Story = {
  args: {
    userEmail: "user@example.com",
  },
};
````

## File: src/features/settings/ui/PasswordChangeSection.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { PasswordChangeSection } from "./PasswordChangeSection";

const meta: Meta<typeof PasswordChangeSection> = {
  title: "Features/Settings/PasswordChangeSection",
  component: PasswordChangeSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[480px] p-4 bg-background border border-border rounded-2xl shadow-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PasswordChangeSection>;

export const Default: Story = {};
````

## File: src/features/settings/ui/PasswordChangeSection.tsx
````typescript
"use client";

import React from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { usePasswordChangeForm } from "../model/usePasswordChangeForm";
import { Lock, KeyRound } from "lucide-react";

export const PasswordChangeSection = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handlePasswordChange,
  } = usePasswordChangeForm();

  return (
    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
      <div className="flex items-center gap-2.5 pb-2 border-b border-border">
        <div className="p-2 bg-primary/10 text-primary rounded-xl">
          <KeyRound className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">비밀번호 변경</h3>
          <p className="text-xs text-muted-foreground">
            계정의 비밀번호를 새로 변경합니다.
          </p>
        </div>
      </div>

      <form
        onSubmit={handlePasswordChange}
        className="space-y-3.5 max-w-md pt-1"
      >
        <Input
          label="새 비밀번호 (8자 이상)"
          type="password"
          required
          minLength={8}
          icon={Lock}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="••••••••"
        />

        <Input
          label="새 비밀번호 확인"
          type="password"
          required
          minLength={8}
          icon={Lock}
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          placeholder="••••••••"
        />

        <Button
          type="submit"
          variant="primary"
          size="sm"
          isLoading={isLoading}
          disabled={!password || !confirmPassword || isLoading}
          className="text-xs h-9 px-4"
        >
          비밀번호 변경 완료
        </Button>
      </form>
    </div>
  );
};
````

## File: src/features/todo-widget/model/types.ts
````typescript
export interface TodoItemData {
  id: string;
  text: string;
  completed: boolean;
}
````

## File: src/features/todo-widget/model/useTodo.test.tsx
````typescript
import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTodo } from "./useTodo";
import { todoRepository } from "../api/todoRepository";
import React from "react";

vi.mock("../api/todoRepository", () => ({
  todoRepository: {
    fetchTodos: vi.fn(),
    insertTodo: vi.fn(),
    updateTodo: vi.fn(),
    deleteTodo: vi.fn(),
  },
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
      mutations: { retry: false },
    },
  });

const createWrapper = () => {
  const queryClient = createTestQueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestQueryWrapper";
  return Wrapper;
};

describe("useTodo Hook", () => {
  const TEST_WIDGET_ID = "test-widget-1";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("widgetId에 해당하는 할 일 목록 및 진행률(progressPercent)을 정상적으로 불러온다", async () => {
    const mockTodos = [
      {
        id: "1",
        user_id: "user-1",
        widget_id: TEST_WIDGET_ID,
        todo_id: "t-1",
        text: "테스트1",
        completed: false,
        sort_order: 1,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
      {
        id: "2",
        user_id: "user-1",
        widget_id: TEST_WIDGET_ID,
        todo_id: "t-2",
        text: "테스트2",
        completed: true,
        sort_order: 2,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
    ];

    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce(mockTodos);

    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.todos.length).toBe(2));

    expect(result.current.todos).toEqual(mockTodos);
    expect(result.current.progressPercent).toBe(50);
  });

  it("addTodo 호출 시 신규 할 일 추가 뮤테이션이 호출된다", async () => {
    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce([]);
    vi.mocked(todoRepository.insertTodo).mockResolvedValueOnce({
      id: "3",
      user_id: "user-1",
      widget_id: TEST_WIDGET_ID,
      todo_id: "t-3",
      text: "새 할 일",
      completed: false,
      sort_order: 1,
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    });

    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.setInputText("새 할 일");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    act(() => {
      result.current.addTodo(fakeEvent);
    });

    await waitFor(() =>
      expect(todoRepository.insertTodo).toHaveBeenCalledWith(
        expect.objectContaining({
          widget_id: TEST_WIDGET_ID,
          text: "새 할 일",
        }),
      ),
    );

    expect(result.current.inputText).toBe("");
  });

  it("toggleTodo 호출 시 완료 상태가 토글된다", async () => {
    const mockTodos = [
      {
        id: "1",
        user_id: "user-1",
        widget_id: TEST_WIDGET_ID,
        todo_id: "t-1",
        text: "테스트1",
        completed: false,
        sort_order: 1,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
    ];

    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce(mockTodos);
    vi.mocked(todoRepository.updateTodo).mockResolvedValueOnce({
      ...mockTodos[0],
      completed: true,
    });

    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.todos.length).toBe(1));

    act(() => {
      result.current.toggleTodo("t-1", false);
    });

    await waitFor(() =>
      expect(todoRepository.updateTodo).toHaveBeenCalledWith(
        TEST_WIDGET_ID,
        "t-1",
        { completed: true },
      ),
    );
  });

  it("deleteTodo 호출 시 해당 할 일이 삭제된다", async () => {
    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce([]);
    vi.mocked(todoRepository.deleteTodo).mockResolvedValueOnce();

    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.deleteTodo("t-1");
    });

    await waitFor(() =>
      expect(todoRepository.deleteTodo).toHaveBeenCalledWith(
        TEST_WIDGET_ID,
        "t-1",
      ),
    );
  });
});
````

## File: src/features/todo-widget/ui/TodoForm.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { TodoForm } from "./TodoForm";

const meta: Meta<typeof TodoForm> = {
  title: "Features/TodoWidget/TodoForm",
  component: TodoForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoForm>;

export const EmptyInput: Story = {
  args: {
    inputText: "",
    onChangeText: () => {},
    onSubmit: (e) => e.preventDefault(),
  },
};

export const FilledInput: Story = {
  args: {
    inputText: "리팩토링 및 Storybook 작성",
    onChangeText: () => {},
    onSubmit: (e) => e.preventDefault(),
  },
};
````

## File: src/features/todo-widget/ui/TodoList.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "./TodoList";

const meta: Meta<typeof TodoList> = {
  title: "Features/TodoWidget/TodoList",
  component: TodoList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoList>;

const mockTodos = [
  { id: "1", text: "Tailwind CSS v3 컬러 정의", completed: true },
  { id: "2", text: "Sub UI 컴포넌트 및 스토리 작성", completed: false },
  { id: "3", text: "TodoWidget 컨테이너 조립", completed: false },
];

export const Default: Story = {
  args: {
    todos: mockTodos,
    onToggle: () => {},
    onDelete: () => {},
  },
};

export const AllCompleted: Story = {
  args: {
    todos: mockTodos.map((t) => ({ ...t, completed: true })),
    onToggle: () => {},
    onDelete: () => {},
  },
};
````

## File: src/features/todo-widget/ui/TodoProgress.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { TodoProgress } from "./TodoProgress";

const meta: Meta<typeof TodoProgress> = {
  title: "Features/TodoWidget/TodoProgress",
  component: TodoProgress,
  tags: ["autodocs"],
  argTypes: {
    percent: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TodoProgress>;

export const Default: Story = {
  args: {
    percent: 50,
  },
};

export const Empty: Story = {
  args: {
    percent: 0,
  },
};

export const Completed: Story = {
  args: {
    percent: 100,
  },
};
````

## File: src/shared/config/highlight.config.ts
````typescript
export type HighlightColor = "none" | "yellow" | "green" | "pink" | "blue";

export interface HighlightOption {
  id: HighlightColor;
  label: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  colorCode: string;
}

export const HIGHLIGHT_OPTIONS: HighlightOption[] = [
  {
    id: "none",
    label: "없음",
    bgClass: "bg-transparent",
    textClass: "text-foreground",
    borderClass: "border-border",
    colorCode: "transparent",
  },
  {
    id: "yellow",
    label: "형광 노랑",
    bgClass: "bg-yellow-200/70 dark:bg-yellow-500/30",
    textClass: "text-yellow-950 dark:text-yellow-100",
    borderClass: "border-yellow-400",
    colorCode: "#fef08a",
  },
  {
    id: "green",
    label: "형광 연두",
    bgClass: "bg-emerald-200/70 dark:bg-emerald-500/30",
    textClass: "text-emerald-950 dark:text-emerald-100",
    borderClass: "border-emerald-400",
    colorCode: "#a7f3d0",
  },
  {
    id: "pink",
    label: "형광 분홍",
    bgClass: "bg-pink-200/70 dark:bg-pink-500/30",
    textClass: "text-pink-950 dark:text-pink-100",
    borderClass: "border-pink-400",
    colorCode: "#fbcfe8",
  },
  {
    id: "blue",
    label: "형광 하늘",
    bgClass: "bg-sky-200/70 dark:bg-sky-500/30",
    textClass: "text-sky-950 dark:text-sky-100",
    borderClass: "border-sky-400",
    colorCode: "#bae6fd",
  },
];
````

## File: src/shared/config/queryKeys.ts
````typescript
export const queryKeys = {
  widgets: {
    all: ["widgets"] as const,
    list: () => [...queryKeys.widgets.all, "list"] as const,
  },
  todos: {
    all: ["todos"] as const,
    byWidget: (widgetId: string) =>
      [...queryKeys.todos.all, "widget", widgetId] as const,
  },
  memos: {
    all: ["memos"] as const,
    byWidget: (widgetId: string) =>
      [...queryKeys.memos.all, "widget", widgetId] as const,
  },
  ddays: {
    all: ["ddays"] as const,
    byWidget: (widgetId: string) =>
      [...queryKeys.ddays.all, "widget", widgetId] as const,
  },
  schedules: {
    all: ["schedules"] as const,
    range: (startDate: string, endDate: string) =>
      [...queryKeys.schedules.all, "range", startDate, endDate] as const,
  },
} as const;
````

## File: src/shared/lib/client.ts
````typescript
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../types/database.types";

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
````

## File: src/shared/lib/imageResizer.ts
````typescript
export const resizeImageToWebP = (
  file: File,
  maxWidth = 512,
  maxHeight = 512,
  quality = 0.85,
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      let { width, height } = img;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas 2D Context를 생성할 수 없습니다."));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("WebP 이미지 변환 실패"));
          }
        },
        "image/webp",
        quality,
      );
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(objectUrl);
      reject(err);
    };

    img.src = objectUrl;
  });
};
````

## File: src/shared/lib/sanitize.ts
````typescript
import DOMPurify from "dompurify";

const MEMO_PURIFY_CONFIG = {
  ALLOWED_TAGS: [
    "p",
    "br",
    "b",
    "i",
    "u",
    "s",
    "strong",
    "em",
    "mark",
    "span",
    "div",
  ],
  ALLOWED_ATTR: ["style", "class"],
};

export const sanitizeMemoHtml = (html: string): string => {
  if (!html) return "";

  if (typeof window === "undefined") {
    return html;
  }

  return String(DOMPurify.sanitize(html, MEMO_PURIFY_CONFIG));
};
````

## File: src/shared/lib/useTextHighlighter.ts
````typescript
"use client";

import React, { RefObject } from "react";
import { HIGHLIGHT_OPTIONS, HighlightColor } from "../config/highlight.config";
import { cn } from "./utils";

export const useTextHighLighter = (
  containerRef: RefObject<HTMLElement | null>,
  onContentChange?: (html: string) => void,
) => {
  const unwrapMarksInRange = (selection: Selection) => {
    if (!containerRef.current) return;

    const marksInContainer = Array.from(
      containerRef.current.querySelectorAll("mark"),
    );

    marksInContainer.forEach((mark) => {
      if (
        selection.containsNode(mark, true) ||
        !mark.innerText.replace(/\u200B/g, "").trim()
      ) {
        const parent = mark.parentNode;
        if (!parent) return;

        while (mark.firstChild) {
          parent.insertBefore(mark.firstChild, mark);
        }
        parent.removeChild(mark);
      }
    });
  };

  const applyHighlight = (color: HighlightColor) => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !containerRef.current) return;

    const range = selection.getRangeAt(0);
    if (!containerRef.current.contains(range.commonAncestorContainer)) return;

    const selectedOption = HIGHLIGHT_OPTIONS.find((opt) => opt.id === color);

    if (color === "none") {
      unwrapMarksInRange(selection);
    } else {
      unwrapMarksInRange(selection);
      const mark = document.createElement("mark");
      mark.className = cn(
        "rounded-xs px-0 transition-colors",
        selectedOption?.bgClass,
      );
      mark.style.color = "inherit";

      try {
        range.surroundContents(mark);
      } catch {
        const fragment = range.extractContents();
        mark.appendChild(fragment);
        range.insertNode(mark);
      }
    }
    selection.removeAllRanges();

    if (containerRef.current) {
      const emptyMarks = containerRef.current.querySelectorAll("mark");
      emptyMarks.forEach((m) => {
        if (!m.textContent?.replace(/\u200B/g, "").trim()) {
          m.remove();
        }
      });

      if (onContentChange) {
        onContentChange(containerRef.current.innerHTML);
      }
    }
  };

  const exitHighlightOnKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      const selection = window.getSelection();
      if (selection) selection.removeAllRanges();
      return;
    }

    if (e.key === "Enter") {
      const selection = window.getSelection();
      if (!selection || !selection.rangeCount) return;

      const range = selection.getRangeAt(0);
      let currentElement: HTMLElement | null =
        range.startContainer.parentElement;

      while (currentElement && currentElement !== containerRef.current) {
        if (currentElement.tagName === "MARK") {
          e.preventDefault();

          const br = document.createElement("br");
          const textNode = document.createTextNode("\u200B");

          const markParent = currentElement.parentNode;
          if (markParent) {
            markParent.insertBefore(br, currentElement.nextSibling);
            markParent.insertBefore(textNode, br.nextSibling);

            const newRange = document.createRange();
            newRange.setStartAfter(br);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
          }

          if (onContentChange && containerRef.current) {
            onContentChange(containerRef.current.innerHTML);
          }
          break;
        }
        currentElement = currentElement.parentElement;
      }
    }
  };

  return { applyHighlight, exitHighlightOnKey };
};
````

## File: src/shared/lib/utils.ts
````typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: src/shared/types/database.types.ts
````typescript
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18";
  };
  public: {
    Tables: {
      ddays: {
        Row: {
          created_at: string;
          dday_id: string;
          id: string;
          target_date: string;
          title: string;
          user_id: string;
          widget_id: string;
        };
        Insert: {
          created_at?: string;
          dday_id: string;
          id?: string;
          target_date: string;
          title: string;
          user_id?: string;
          widget_id: string;
        };
        Update: {
          created_at?: string;
          dday_id?: string;
          id?: string;
          target_date?: string;
          title?: string;
          user_id?: string;
          widget_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ddays_widget_fk";
            columns: ["user_id", "widget_id"];
            isOneToOne: false;
            referencedRelation: "widgets";
            referencedColumns: ["user_id", "widget_id"];
          },
        ];
      };
      memos: {
        Row: {
          content: string;
          highlight: string;
          id: string;
          updated_at: string;
          user_id: string;
          widget_id: string;
        };
        Insert: {
          content?: string;
          highlight?: string;
          id?: string;
          updated_at?: string;
          user_id?: string;
          widget_id: string;
        };
        Update: {
          content?: string;
          highlight?: string;
          id?: string;
          updated_at?: string;
          user_id?: string;
          widget_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "memos_widget_fk";
            columns: ["user_id", "widget_id"];
            isOneToOne: true;
            referencedRelation: "widgets";
            referencedColumns: ["user_id", "widget_id"];
          },
        ];
      };
      schedules: {
        Row: {
          color: string | null;
          created_at: string;
          date_str: string;
          id: string;
          schedule_id: string;
          time_str: string | null;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          color?: string | null;
          created_at?: string;
          date_str: string;
          id?: string;
          schedule_id: string;
          time_str?: string | null;
          title: string;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          color?: string | null;
          created_at?: string;
          date_str?: string;
          id?: string;
          schedule_id?: string;
          time_str?: string | null;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      todos: {
        Row: {
          completed: boolean;
          created_at: string;
          id: string;
          sort_order: number;
          text: string;
          todo_id: string;
          updated_at: string;
          user_id: string;
          widget_id: string;
        };
        Insert: {
          completed?: boolean;
          created_at?: string;
          id?: string;
          sort_order?: number;
          text: string;
          todo_id: string;
          updated_at?: string;
          user_id?: string;
          widget_id: string;
        };
        Update: {
          completed?: boolean;
          created_at?: string;
          id?: string;
          sort_order?: number;
          text?: string;
          todo_id?: string;
          updated_at?: string;
          user_id?: string;
          widget_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "todos_widget_fk";
            columns: ["user_id", "widget_id"];
            isOneToOne: false;
            referencedRelation: "widgets";
            referencedColumns: ["user_id", "widget_id"];
          },
        ];
      };
      widgets: {
        Row: {
          color: string;
          config: Json;
          created_at: string;
          id: string;
          layout_h: number;
          layout_w: number;
          layout_x: number;
          layout_y: number;
          sort_order: number;
          title: string;
          type: string;
          updated_at: string;
          user_id: string;
          widget_id: string;
        };
        Insert: {
          color?: string;
          config?: Json;
          created_at?: string;
          id?: string;
          layout_h?: number;
          layout_w?: number;
          layout_x?: number;
          layout_y?: number;
          sort_order?: number;
          title: string;
          type: string;
          updated_at?: string;
          user_id?: string;
          widget_id: string;
        };
        Update: {
          color?: string;
          config?: Json;
          created_at?: string;
          id?: string;
          layout_h?: number;
          layout_w?: number;
          layout_x?: number;
          layout_y?: number;
          sort_order?: number;
          title?: string;
          type?: string;
          updated_at?: string;
          user_id?: string;
          widget_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      reorder_widgets: { Args: { p_widget_ids: string[] }; Returns: undefined };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
````

## File: src/shared/ui/button/Button.stories.tsx
````typescript
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Plus } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    isLoading: true,
    children: "로딩 중..",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: (
      <>
        <Plus className="w-4 h-4" />
        <span>위젯 추가</span>
      </>
    ),
  },
};
````

## File: src/shared/ui/button/index.ts
````typescript
export { Button } from "./Button";
export type { ButtonProps } from "./Button";
````

## File: src/shared/ui/dropdown/Dropdown.stories.tsx
````typescript
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
````

## File: src/shared/ui/error-boundary/WidgetErrorBoundary.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { WidgetErrorBoundary } from "./WidgetErrorBoundary";
import { Button } from "@/shared/ui/button";

const BuggyWidgetComponent = ({ shouldThrow }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error("위젯 렌더링 중 예기치 않은 오류가 발생했습니다!");
  }
  return (
    <div className="w-full h-full min-h-[140px] flex items-center justify-center p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/20 text-xs font-medium text-center">
      위젯 데이터가 정상적으로 작동 중입니다.
    </div>
  );
};

const InteractiveBoundaryDemo = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="space-y-3 w-full">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <span className="text-xs text-muted-foreground font-semibold">
          상태 테스트: {hasError ? "오류 상태" : "정상 상태"}
        </span>
        <Button
          size="sm"
          variant={hasError ? "primary" : "outline"}
          onClick={() => setHasError((prev) => !prev)}
          className="h-7 text-xs px-2"
        >
          {hasError ? "에러 해제" : "에러 트리거"}
        </Button>
      </div>

      <WidgetErrorBoundary onReset={() => setHasError(false)}>
        <BuggyWidgetComponent shouldThrow={hasError} />
      </WidgetErrorBoundary>
    </div>
  );
};

const meta: Meta<typeof WidgetErrorBoundary> = {
  title: "Shared/ErrorBoundary/WidgetErrorBoundary",
  component: WidgetErrorBoundary,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[320px] p-4 bg-card border border-border rounded-xl shadow-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WidgetErrorBoundary>;

export const NormalState: Story = {
  render: () => (
    <WidgetErrorBoundary>
      <BuggyWidgetComponent shouldThrow={false} />
    </WidgetErrorBoundary>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <WidgetErrorBoundary>
      <BuggyWidgetComponent shouldThrow={true} />
    </WidgetErrorBoundary>
  ),
};

export const Interactive: Story = {
  render: () => <InteractiveBoundaryDemo />,
};
````

## File: src/shared/ui/error-boundary/WidgetErrorBoundary.tsx
````typescript
"use client";

import React, { Component, ReactNode } from "react";
import { WidgetErrorFallback } from "./WidgetErrorFallback";

interface Props {
  children: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class WidgetErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[WidgetErrorBoundary Caught Error]:", error, errorInfo);
  }

  public handleReset = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <WidgetErrorFallback
          error={this.state.error}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
````

## File: src/shared/ui/error-boundary/WidgetErrorFallback.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { WidgetErrorFallback } from "./WidgetErrorFallback";

const meta: Meta<typeof WidgetErrorFallback> = {
  title: "Shared/ErrorBoundary/WidgetErrorFallback",
  component: WidgetErrorFallback,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[300px] h-[220px] p-2 bg-background border border-border rounded-xl flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WidgetErrorFallback>;

export const Default: Story = {
  args: {
    error: new Error("네트워크 연결이 불안정합니다."),
    onReset: () => alert("다시 시도 이벤트 실행"),
  },
};

export const LongErrorMessage: Story = {
  args: {
    error: new Error(
      "서버와의 통신 도중 알 수 없는 예외가 발생하여 데이터 로드에 실패했습니다. 지속될 경우 문의해 주세요.",
    ),
    onReset: () => alert("다시 시도 이벤트 실행"),
  },
};

export const WithoutErrorMessage: Story = {
  args: {
    error: null,
    onReset: () => alert("다시 시도 이벤트 실행"),
  },
};
````

## File: src/shared/ui/error-boundary/WidgetErrorFallback.tsx
````typescript
"use client";

import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/shared/ui/button";

interface WidgetErrorFallbackProps {
  error?: Error | null;
  onReset: () => void;
}

export const WidgetErrorFallback = ({
  error,
  onReset,
}: WidgetErrorFallbackProps) => {
  return (
    <div className="w-full h-full min-h-[140px] flex flex-col items-center justify-center p-4 text-center space-y-3 bg-muted/20 rounded-xl border border-dashed border-border/80 animate-in fade-in duration-200">
      <div className="w-9 h-9 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
        <AlertTriangle className="w-5 h-5" />
      </div>

      <div className="space-y-1 max-w-[200px]">
        <h4 className="text-xs font-semibold text-foreground">
          위젯 불러오기 실패
        </h4>
        <p className="text-[11px] text-muted-foreground line-clamp-2 leading-tight">
          {error?.message || "일시적인 오류가 발생했습니다."}
        </p>
      </div>

      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={onReset}
        className="h-7 text-xs px-2.5 gap-1.5 cursor-pointer hover:bg-background"
      >
        <RotateCcw className="w-3 h-3" />
        <span>다시 시도</span>
      </Button>
    </div>
  );
};
````

## File: src/shared/ui/highlight-picker/HighlightPicker.tsx
````typescript
"use client";

import {
  HIGHLIGHT_OPTIONS,
  HighlightColor,
} from "@/shared/config/highlight.config";
import { cn } from "@/shared/lib/utils";

interface HighlightPickerProps {
  selectedColor?: HighlightColor;
  onSelectColor: (color: HighlightColor) => void;
  size?: "sm" | "md";
}

export const HighlightPicker = ({
  selectedColor,
  onSelectColor,
  size,
}: HighlightPickerProps) => {
  return (
    <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-border/50 shrink-0">
      {HIGHLIGHT_OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            onSelectColor(option.id);
          }}
          className={cn(
            "rounded-full border transition-all cursor-pointer flex items-center justify-center shrink-0",
            size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4",
            option.id === "none"
              ? "bg-transparent border-muted-foreground/40 hover:border-foreground"
              : "border-transparent hover:scale-110",
            selectedColor === option.id &&
              "ring-1.5 ring-primary ring-offset-1 scale-105",
          )}
          style={{
            backgroundColor:
              option.id !== "none" ? option.colorCode : undefined,
          }}
          title={`형광펜: ${option.label}`}
        >
          {option.id === "none" && (
            <span className="w-full h-0.5 bg-red-400/80 rotate-45 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};
````

## File: src/shared/ui/input/Input.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Mail, Lock, Search } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "이메일",
    placeholder: "name@example.com",
  },
};

export const WithIcon: Story = {
  args: {
    label: "이메일",
    icon: Mail,
    placeholder: "name@example.com",
  },
};

export const Password: Story = {
  args: {
    label: "비밀번호",
    type: "password",
    icon: Lock,
    placeholder: "••••••••",
  },
};

export const WithError: Story = {
  args: {
    label: "비밀번호",
    type: "password",
    icon: Lock,
    placeholder: "••••••••",
    error: "비밀번호는 최소 6자 이상이어야 합니다.",
  },
};

export const Disabled: Story = {
  args: {
    label: "검색",
    icon: Search,
    placeholder: "검색 불가 상태",
    disabled: true,
  },
};
````

## File: src/shared/ui/modal/index.ts
````typescript
export { Modal } from "./Modal";
export type { ModalProps } from "./Modal";
````

## File: src/shared/ui/modal/Modal.stories.tsx
````typescript
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
````

## File: src/shared/ui/theme-toggle/ThemeToggle.stories.tsx
````typescript
import { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof ThemeToggle> = {
  title: "Shared/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="p-6 flex items-center justify-center bg-background text-foreground rounded-xl border">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const DarkModePreview: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
        <div className="p-6 flex items-center justify-center bg-slate-900 text-slate-50 rounded-xl border border-slate-800">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const LightModePreview: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
        <div className="p-6 flex items-center justify-center bg-white text-slate-900 rounded-xl border border-slate-200">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
````

## File: src/widgets/dashboard/ui/FilterToggleButton.tsx
````typescript
"use client";

import React, { memo } from "react";
import { Button } from "@/shared/ui/button";
import {
  useFilterStore,
  selectIsFilterActive,
} from "@/features/dashboard-filter/model/useFilterStore";
import { Search } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface FilterToggleButtonProps {
  size?: "sm" | "md";
  className?: string;
}

export const FilterToggleButton = memo(
  ({ size = "sm", className }: FilterToggleButtonProps) => {
    const toggleFilter = useFilterStore((s) => s.toggleFilter);
    const isOpen = useFilterStore((s) => s.isOpen);
    const isFilterActive = useFilterStore(selectIsFilterActive);

    return (
      <Button
        variant={isOpen ? "primary" : "outline"}
        size={size}
        onClick={toggleFilter}
        className={cn("relative gap-1.5 cursor-pointer", className)}
        title="검색 및 필터"
      >
        <Search className="w-4 h-4" />
        <span>검색 & 필터</span>
        {isFilterActive && (
          <span className="w-2 h-2 rounded-full bg-primary absolute -top-0.5 -right-0.5 ring-2 ring-background" />
        )}
      </Button>
    );
  },
);

FilterToggleButton.displayName = "FilterToggleButton";
````

## File: src/widgets/dashboard-grid/lib/generateWidgetTitle.ts
````typescript
import { WidgetRow } from "../api/dashboardRepository";
import { WIDGET_CONFIG_MAP } from "../config/widgets.config";

export const generateNextWidgetTitle = (
  type: WidgetRow["type"],
  existingWidgets: WidgetRow[],
  defaultTitle?: string,
): string => {
  const config = WIDGET_CONFIG_MAP[type as keyof typeof WIDGET_CONFIG_MAP];
  const baseTitle = defaultTitle || config?.title || "위젯";
  const sameTypeWidgets = existingWidgets.filter((w) => w.type === type);

  if (sameTypeWidgets.length === 0) {
    return `${baseTitle} 1`;
  }

  let maxNum = 0;
  const numRegex = new RegExp(`^${baseTitle}\\s*(\\d+)$`);

  sameTypeWidgets.forEach((w) => {
    const trimmedTitle = w.title.trim();
    const match = trimmedTitle.match(numRegex);

    if (match) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num) && num > maxNum) {
        maxNum = num;
      }
    } else if (trimmedTitle === baseTitle) {
      if (maxNum < 1) {
        maxNum = 1;
      }
    }
  });

  return `${baseTitle} ${maxNum + 1}`;
};
````

## File: src/widgets/dashboard-grid/lib/isWithinDateRange.ts
````typescript
import { DateRangePreset } from "@/features/dashboard-filter/model/useFilterStore";

export const isWithinDateRange = (
  createdAtStr?: string,
  preset: DateRangePreset = "all",
  startDateStr: string | null = null,
  endDateStr: string | null = null,
) => {
  if (preset === "all" || !createdAtStr) return true;
  const createdTime = new Date(createdAtStr).getTime();
  const now = new Date();

  if (preset === "today") {
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    ).getTime();
    return createdTime >= startOfToday;
  }

  if (preset === "week") {
    const sevenDaysAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000;
    return createdTime >= sevenDaysAgo;
  }

  if (preset === "month") {
    const thirtyDaysAgo = now.getTime() - 30 * 24 * 60 * 60 * 1000;
    return createdTime >= thirtyDaysAgo;
  }

  if (preset === "custom") {
    if (startDateStr) {
      const start = new Date(startDateStr);
      start.setHours(0, 0, 0, 0);
      if (createdTime < start.getTime()) return false;
    }

    if (endDateStr) {
      const end = new Date(endDateStr);
      end.setHours(23, 59, 59, 999);
      if (createdTime > end.getTime()) return false;
    }

    return true;
  }

  return true;
};
````

## File: src/widgets/dashboard-grid/model/useDashboardDnd.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import type { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { useDashboardDnD } from "./useDashboardDnd";
import { WidgetRow } from "../api/dashboardRepository";

const mockWidgets: WidgetRow[] = [
  {
    id: "1",
    user_id: "u1",
    widget_id: "w1",
    type: "todo",
    title: "할 일 위젯",
    color: "default",
    layout_w: 1,
    layout_h: 1,
    layout_x: 0,
    layout_y: 0,
    sort_order: 1,
    config: {},
    created_at: "",
    updated_at: "",
  },
  {
    id: "2",
    user_id: "u1",
    widget_id: "w2",
    type: "memo",
    title: "메모 위젯",
    color: "blue",
    layout_w: 1,
    layout_h: 1,
    layout_x: 1,
    layout_y: 0,
    sort_order: 2,
    config: {},
    created_at: "",
    updated_at: "",
  },
];

const mockReorderMutate = vi.fn();

vi.mock("../api/useDashboardQuery", () => ({
  useWidgetsQuery: () => ({
    data: mockWidgets,
    isLoading: false,
  }),
  useReorderWidgetsMutation: () => ({
    mutate: mockReorderMutate,
  }),
}));

const createDragStartEvent = (activeId: string): DragStartEvent =>
  ({
    active: {
      id: activeId,
      data: { current: undefined },
      rect: { current: { initial: null, translated: null } },
    },
  }) as unknown as DragStartEvent;

const createDragEndEvent = (activeId: string, overId: string): DragEndEvent =>
  ({
    active: {
      id: activeId,
      data: { current: undefined },
      rect: { current: { initial: null, translated: null } },
    },
    over: {
      id: overId,
      data: { current: undefined },
      rect: { width: 0, height: 0, offsetLeft: 0, offsetTop: 0 },
      disabled: false,
    },
  }) as unknown as DragEndEvent;

describe("useDashboardDnD Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 렌더링 시 센서 설정 및 위젯 목록이 정상 반환되어야 한다", () => {
    const { result } = renderHook(() => useDashboardDnD());

    expect(result.current.sensors).toBeDefined();
    expect(result.current.localWidgets).toEqual(mockWidgets);
    expect(result.current.activeWidget).toBeNull();
  });

  it("handleDragStart 호출 시 활성화된 위젯(activeWidget)이 설정되어야 한다", () => {
    const { result } = renderHook(() => useDashboardDnD());

    act(() => {
      result.current.handleDragStart(createDragStartEvent("w1"));
    });

    expect(result.current.activeWidget).toEqual(mockWidgets[0]);
  });

  it("handleDragEnd 호출 시 드래그 위치 변경에 따라 순서 변경 mutation이 호출되어야 한다", () => {
    const { result } = renderHook(() => useDashboardDnD());

    act(() => {
      result.current.handleDragStart(createDragStartEvent("w1"));
      result.current.handleDragEnd(createDragEndEvent("w1", "w2"));
    });

    expect(mockReorderMutate).toHaveBeenCalledWith(["w2", "w1"]);
    expect(result.current.activeWidget).toBeNull();
  });

  it("handleDragCancel 호출 시 activeWidget 상태가 초기화되어야 한다", () => {
    const { result } = renderHook(() => useDashboardDnD());

    act(() => {
      result.current.handleDragStart(createDragStartEvent("w1"));
      result.current.handleDragCancel();
    });

    expect(result.current.activeWidget).toBeNull();
  });
});
````

## File: src/widgets/dashboard-grid/model/useFilteredWidget.test.tsx
````typescript
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useFilteredWidgets } from "./useFilteredWidgets";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { dashboardRepository, WidgetRow } from "../api/dashboardRepository";
import React from "react";

vi.mock("../api/dashboardRepository", () => ({
  dashboardRepository: {
    fetchWidgets: vi.fn(),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
    },
  });

const createWrapper = () => {
  const queryClient = createTestQueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestQueryWrapper";
  return Wrapper;
};

describe("useFilteredWidgets", () => {
  const mockWidgets: WidgetRow[] = [
    {
      id: "1",
      user_id: "user-1",
      widget_id: "w-1",
      type: "todo",
      title: "오늘의 할 일",
      color: "default",
      layout_w: 1,
      layout_h: 1,
      layout_x: 0,
      layout_y: 0,
      sort_order: 1,
      config: {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "2",
      user_id: "user-1",
      widget_id: "w-2",
      type: "memo",
      title: "프로젝트 아이디어 메모",
      color: "blue",
      layout_w: 1,
      layout_h: 1,
      layout_x: 0,
      layout_y: 0,
      sort_order: 2,
      config: {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    useFilterStore.getState().resetFilter();
  });

  it("위젯 종류 필터링이 정상 동작해야 한다", async () => {
    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce(
      mockWidgets,
    );

    useFilterStore.getState().setSelectedWidgetType("memo");

    const { result } = renderHook(() => useFilteredWidgets(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.filteredWidgets.length).toBe(1));

    expect(result.current.filteredWidgets[0].type).toBe("memo");
    expect(result.current.filteredWidgets[0].title).toBe(
      "프로젝트 아이디어 메모",
    );
  });

  it("검색어가 위젯 제목에 포함되어 있을 때 필터링되어야 한다", async () => {
    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce(
      mockWidgets,
    );

    useFilterStore.getState().setSearchQuery("아이디어");

    const { result } = renderHook(() => useFilteredWidgets(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.filteredWidgets.length).toBe(1));

    expect(result.current.filteredWidgets[0].widget_id).toBe("w-2");
  });
});
````

## File: supabase/.temp/linked-project.json
````json
{"ref":"tbijqubwsnmnabaksept","name":"dashcraft","organization_id":"mfnpirahtdrlulcutbgk","organization_slug":"mfnpirahtdrlulcutbgk"}
````

## File: supabase/migrations/20261028000000_init_dashcraft_schema.sql
````sql
begin;

-- 1. 공용 함수: updated_at 트리거 함수
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 공용 함수: 행 수 제한 트리거 함수
create or replace function public.enforce_row_limit()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  max_rows int;
  cnt int;
begin
  max_rows := tg_argv[0]::int;
  execute format('select count(*) from %I.%I where user_id = $1', tg_table_schema, tg_table_name)
    into cnt using new.user_id;
  if cnt >= max_rows then
    raise exception 'row limit exceeded for table %', tg_table_name
      using errcode = 'check_violation';
  end if;
  return new;
end;
$$;

-- 2. 테이블 생성
create table public.widgets (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  widget_id   varchar(255) not null,
  type        varchar(50)  not null check (type in ('todo','clock','dday','memo')),
  title       varchar(255) not null,
  color       varchar(50)  not null default 'default'
              check (color in ('default','blue','green','yellow','purple','red')),
  layout_w    int not null default 1 check (layout_w in (1, 2)),
  layout_h    int not null default 1 check (layout_h >= 1),
  layout_x    int not null default 0 check (layout_x >= 0),
  layout_y    int not null default 0 check (layout_y >= 0),
  sort_order  int not null default 0,
  config      jsonb not null default '{}'::jsonb
              constraint widgets_config_check
              check (jsonb_typeof(config) = 'object' and octet_length(config::text) <= 4096),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint unique_user_widget_id unique (user_id, widget_id)
);

create table public.todos (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  widget_id   varchar(255) not null,
  todo_id     varchar(255) not null,
  text        text not null check (char_length(text) between 1 and 500),
  completed   boolean not null default false,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint unique_user_todo_id unique (user_id, widget_id, todo_id),
  constraint todos_widget_fk foreign key (user_id, widget_id)
    references public.widgets (user_id, widget_id) on delete cascade
);

create table public.memos (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  widget_id   varchar(255) not null,
  content     text not null default '' check (char_length(content) <= 10000),
  highlight   varchar(50) not null default 'none'
              check (highlight in ('none','yellow','green','pink','blue')),
  updated_at  timestamptz not null default now(),
  constraint unique_user_memo_widget unique (user_id, widget_id),
  constraint memos_widget_fk foreign key (user_id, widget_id)
    references public.widgets (user_id, widget_id) on delete cascade
);

create table public.ddays (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  widget_id   varchar(255) not null,
  dday_id     varchar(255) not null,
  title       varchar(255) not null check (char_length(title) >= 1),
  target_date date not null,
  created_at  timestamptz not null default now(),
  constraint unique_user_dday_id unique (user_id, widget_id, dday_id),
  constraint ddays_widget_fk foreign key (user_id, widget_id)
    references public.widgets (user_id, widget_id) on delete cascade
);

create table public.schedules (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  schedule_id varchar(255) not null,
  date_str    varchar(10)  not null check (date_str ~ '^\d{4}-\d{2}-\d{2}$'),
  title       varchar(255) not null check (char_length(title) >= 1),
  time_str    varchar(5)   check (time_str is null or time_str ~ '^([01]\d|2[0-3]):[0-5]\d$'),
  color       varchar(50),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint unique_user_schedule_id unique (user_id, schedule_id)
);

-- 3. 트리거 설정
create trigger trg_widgets_updated   before update on public.widgets
  for each row execute function public.set_updated_at();
create trigger trg_todos_updated     before update on public.todos
  for each row execute function public.set_updated_at();
create trigger trg_memos_updated     before update on public.memos
  for each row execute function public.set_updated_at();
create trigger trg_schedules_updated before update on public.schedules
  for each row execute function public.set_updated_at();

create trigger trg_widgets_limit   before insert on public.widgets
  for each row execute function public.enforce_row_limit('50');
create trigger trg_todos_limit     before insert on public.todos
  for each row execute function public.enforce_row_limit('2000');
create trigger trg_ddays_limit     before insert on public.ddays
  for each row execute function public.enforce_row_limit('300');
create trigger trg_schedules_limit before insert on public.schedules
  for each row execute function public.enforce_row_limit('5000');

-- 4. 위젯 순서 변경 RPC 함수
create or replace function public.reorder_widgets(p_widget_ids text[])
returns void
language sql
security invoker
set search_path = ''
as $$
  update public.widgets w
  set sort_order = t.ord
  from unnest(p_widget_ids) with ordinality as t(widget_id, ord)
  where w.user_id = (select auth.uid())
    and w.widget_id = t.widget_id;
$$;

-- 5. RLS 설정
alter table public.widgets   enable row level security;
alter table public.todos     enable row level security;
alter table public.memos     enable row level security;
alter table public.ddays     enable row level security;
alter table public.schedules enable row level security;

create policy "owner_all" on public.widgets
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner_all" on public.todos
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner_all" on public.memos
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner_all" on public.ddays
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner_all" on public.schedules
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- 6. API 권한 부여
grant select, insert, update, delete
  on public.widgets, public.todos, public.memos, public.ddays, public.schedules
  to authenticated;

revoke execute on function public.reorder_widgets(text[]) from public, anon;
grant  execute on function public.reorder_widgets(text[]) to authenticated;

-- 7. 인덱스
create index idx_widgets_user_sort   on public.widgets (user_id, sort_order);
create index idx_schedules_user_date on public.schedules (user_id, date_str);

commit;
````

## File: supabase/migrations/20261028000001_add_avatars_storage_bucket.sql
````sql
begin;

-- 1. avatars 스토리지 버킷 생성 및 속성 정의 (5MB 제한, png/jpeg/webp 허용)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  5242880, -- 5MB
  array['image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/png', 'image/jpeg', 'image/webp'];

-- 2. 기존 동일 이름 정책 제거 (마이그레이션 재실행 충돌 방지)
drop policy if exists "Avatar Public Read" on storage.objects;
drop policy if exists "Avatar User Insert" on storage.objects;
drop policy if exists "Avatar User Update" on storage.objects;
drop policy if exists "Avatar User Delete" on storage.objects;

-- 3. storage.objects RLS 보안 정책 추가
-- 3-1. 아바타 이미지 전체 공개 읽기 허용
create policy "Avatar Public Read"
  on storage.objects for select
  using (bucket_id = 'avatars');

-- 3-2. 인증 유저 본인 폴더({user_id}/*) 업로드 권한
create policy "Avatar User Insert"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

-- 3-3. 인증 유저 본인 폴더({user_id}/*) 수정 권한
create policy "Avatar User Update"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

-- 3-4. 인증 유저 본인 폴더({user_id}/*) 삭제 권한
create policy "Avatar User Delete"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

commit;
````

## File: supabase/migrations/20261102000000_update_avatars_storage_policy.sql
````sql
-- 기존 전역 공개 조회 정책 삭제
drop policy if exists "Avatar Public Read" on storage.objects;

-- 인증된 소유자 본인 폴더만 SELECT 및 목록 조회가 가능하도록 강화
create policy "Avatar Own Read" on storage.objects
  for select to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid()::text));
````

## File: .dockerignore
````
Dockerfile
.dockerignore
node_modules
.next
.git
.gitignore
README.md
npm-debug.log*
````

## File: .env.example
````
# Supabase Public Settings (클라이언트 & 서버 공용)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Supabase Server-Only Settings (계정 삭제 API 및 Admin 서버 전용 - 절대로 NEXT_PUBLIC_ 붙이지 말 것)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
````

## File: .npmrc
````
legacy-peer-deps=true
````

## File: docker-compose.yml
````yaml
services:
  dashcraft:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: dashcraft-app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
````

## File: Dockerfile
````dockerfile
FROM node:20-alpine AS base
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
````

## File: eslint.config.mjs
````javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "playwright-report/**",
      "test-results/**",
      ".next/**",
      "node_modules/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
````

## File: playwright.config.ts
````typescript
import { defineConfig, devices } from "@playwright/test";
import path from "path";

export const STORAGE_STATE = path.join(__dirname, "playwright/.auth/user.json");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: STORAGE_STATE,
      },
      dependencies: ["setup"],
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        storageState: STORAGE_STATE,
      },
      dependencies: ["setup"],
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        storageState: STORAGE_STATE,
      },
      dependencies: ["setup"],
    },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
````

## File: README.md
````markdown
# 🛠️ DashCraft (대시크래프트)

> **내 생산성에 딱 맞게 조합하고 배치하는 대시보드 플랫폼**  
> 다양한 위젯을 자유롭게 배치하고 일정을 관리할 수 있는 맞춤형 대시보드 서비스입니다.

[👉 서비스 보러가기](https://dash-craft-henna.vercel.app/)

---

## ✨ Key Features

- **자유로운 대시보드 위젯 크래프팅**: 시계/뽀모도로, 할 일 목록, D-Day, 메모 등 원하는 위젯을 자유롭게 추가/삭제 및 1x1, 2x2 사이즈 변경
- **직관적인 Drag & Drop**: `@dnd-kit`을 활용한 부드러운 Grid 위젯 순서 배치 및 레이아웃 변경
- **실시간 반응형 UI & 테마**: PC, 태블릿, 모바일에 최적화된 Grid 레이아웃 및 위젯별 테마 컬러/다크모드 지원
- **상태 영속성 (Persistence)**: Zustand 스토어 연동을 통한 대시보드 레이아웃 및 위젯 데이터 자동 저장

---

## 🛠 Tech Stack

- **Core**: Next.js (App Router), React 18, TypeScript
- **State Management**: Zustand
- **Styling & Animation**: Tailwind CSS, Framer Motion, Lucide React
- **Drag & Drop**: `@dnd-kit/core`, `@dnd-kit/sortable`
- **UI Component & Test**: Storybook, Chromatic, Vitest
- **Code Quality & Git Hooks**: Husky, lint-staged, Commitlint
- **DevOps & Infrastructure**: Docker, GitHub Actions (CI/CD), Vercel
- **Architecture**: FSD (Feature-Sliced Design)

---

## 🚀 Quick Start

### 1. Repository Clone
```bash
git clone [https://github.com/본인계정/dashcraft.git](https://github.com/본인계정/dashcraft.git)
cd dashcraft
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Run Docker Container (Optional)
```bash
docker build -t dashcraft .
docker run -p 3000:3000 dashcraft
```
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".storybook/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
````

## File: vitest.config.ts
````typescript
import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    exclude: [...configDefaults.exclude, "e2e/**"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    env: {
      NEXT_PUBLIC_SUPABASE_URL: "https://test-project.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "test-anon-key",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
````

## File: .github/workflows/ci.yml
````yaml
# .github/workflows/ci.yml

name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Type Check
        run: npx tsc --noEmit

      - name: Run ESLint
        run: npm run lint

      - name: Run Vitest Unit Tests
        run: npx vitest run
````

## File: src/app/auth/callback/route.ts
````typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const rawNext = searchParams.get("next") ?? "/dashboard";
  const next =
    rawNext.startsWith("/") && !rawNext.startsWith("//")
      ? rawNext
      : "/dashboard";

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options),
              );
            } catch {}
          },
        },
      },
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`);
}
````

## File: src/app/login/page.tsx
````typescript
import { AuthFormView } from "@/features/auth/ui/AuthFormView";

export default function LoginPage() {
  return <AuthFormView />;
}
````

## File: src/app/providers/index.tsx
````typescript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { AuthSync } from "./AuthSync";

interface PostgrestErrorLike {
  code?: string;
  message?: string;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 30,
            retry: (failureCount: number, error: unknown) => {
              const pgError = error as PostgrestErrorLike;
              if (pgError?.code === "42501" || pgError?.code === "23514") {
                return false;
              }
              return failureCount < 2;
            },
            refetchOnWindowFocus: true,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthSync />
        {children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
````

## File: src/entities/widget/model/constants.ts
````typescript
import { WidgetColor } from "./types";

export const COLOR_THEMES: Record<
  WidgetColor,
  { label: string; bg: string; border: string; accentBg: string }
> = {
  default: {
    label: "기본",
    bg: "bg-muted/50",
    border: "border-border",
    accentBg: "bg-slate-400 dark:bg-slate-500",
  },
  blue: {
    label: "블루",
    bg: "bg-blue-50/50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800",
    accentBg: "bg-blue-500",
  },
  green: {
    label: "그린",
    bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800",
    accentBg: "bg-emerald-500",
  },
  yellow: {
    label: "옐로우",
    bg: "bg-amber-50/50 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-800",
    accentBg: "bg-amber-500",
  },
  purple: {
    label: "퍼플",
    bg: "bg-purple-50/50 dark:bg-purple-950/20",
    border: "border-purple-200 dark:border-purple-800",
    accentBg: "bg-purple-500",
  },
  red: {
    label: "레드",
    bg: "bg-rose-50/50 dark:bg-rose-950/20",
    border: "border-rose-200 dark:border-rose-800",
    accentBg: "bg-rose-500",
  },
};
````

## File: src/features/auth/model/useLoginForm.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { useLoginForm } from "./useLoginForm";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockPush = vi.fn();
const mockRefresh = vi.fn();
const mockSignInWithPassword = vi.fn();
const mockSignInWithOAuth = vi.fn();
const mockToastError = vi.fn();
const mockToastSuccess = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
    refresh: mockRefresh,
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
    success: (...args: unknown[]) => mockToastSuccess(...args),
  },
}));

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      signInWithPassword: mockSignInWithPassword,
      signInWithOAuth: mockSignInWithOAuth,
    },
  }),
}));

describe("useLoginForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 상태값이 바르게 설정되어야 한다", () => {
    const { result } = renderHook(() => useLoginForm());

    expect(result.current.email).toBe("");
    expect(result.current.password).toBe("");
    expect(result.current.isLoading).toBe(false);
    expect(result.current.modalType).toBeNull();
  });

  it("올바른 정보를 입력하고 제출하면 성공적으로 로그인되고 대시보드로 이동해야 한다", async () => {
    mockSignInWithPassword.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useLoginForm());

    act(() => {
      result.current.setEmail("user@example.com");
      result.current.setPassword("password123");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleEmailLogin(fakeEvent);
    });

    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: "user@example.com",
      password: "password123",
    });
    expect(mockToastSuccess).toHaveBeenCalledWith("로그인되었습니다.");
    expect(mockPush).toHaveBeenCalledWith("/dashboard");
  });

  it("로그인 실패 시 에러 토스트가 노출되어야 한다", async () => {
    mockSignInWithPassword.mockResolvedValueOnce({
      error: { message: "Invalid credentials" },
    });

    const { result } = renderHook(() => useLoginForm());

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleEmailLogin(fakeEvent);
    });

    expect(mockToastError).toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
  });
});
````

## File: src/features/auth/model/useSignupForm.ts
````typescript
"use client";

import { createClient } from "@/shared/lib/client";
import React, { useState } from "react";
import { toast } from "sonner";

export const useSignupForm = () => {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const handleSignup = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!agreed) return;

    if (password.length < 8) {
      toast.error("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setIsLoading(false);

    if (error) {
      toast.error("회원가입 실패", { description: error.message });
      return;
    }

    setIsSent(true);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    agreed,
    setAgreed,
    isLoading,
    isSent,
    modalType,
    setModalType,
    handleSignup,
  };
};
````

## File: src/features/auth/ui/AuthCard.tsx
````typescript
"use client";

import React from "react";
import { LayoutGrid } from "lucide-react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const AuthCard = ({
  title,
  subtitle,
  children,
  footer,
}: AuthCardProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4 py-8 md:py-16">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-background border rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl space-y-6 md:space-y-8 transition-all">
        <div className="text-center space-y-2 md:space-y-3">
          <div className="inline-flex p-3 md:p-4 bg-primary text-primary-foreground rounded-2xl shadow-md mb-1">
            <LayoutGrid className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-sm mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">{children}</div>

        {footer && (
          <div className="border-t pt-4 md:pt-6 text-center">{footer}</div>
        )}
      </div>
    </div>
  );
};
````

## File: src/features/auth/ui/ResetPasswordView.tsx
````typescript
"use client";

import React from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { AuthCard } from "./AuthCard";
import { useResetPasswordForm } from "../model/useResetPasswordForm";
import { Lock, Loader2 } from "lucide-react";

export const ResetPasswordView = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    isCheckingSession,
    handleResetPassword,
  } = useResetPasswordForm();

  if (isCheckingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <AuthCard
      title="새 비밀번호 설정"
      subtitle="새롭게 사용할 비밀번호를 입력해주세요"
      footer={
        <p className="text-[11px] text-muted-foreground">비밀번호 변경</p>
      }
    >
      <form onSubmit={handleResetPassword} className="space-y-3.5">
        <Input
          label="새 비밀번호 (8자 이상)"
          type="password"
          required
          minLength={8}
          icon={Lock}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="••••••••"
        />

        <Input
          label="새 비밀번호 확인"
          type="password"
          required
          minLength={8}
          icon={Lock}
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          placeholder="••••••••"
        />

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isLoading}
          isLoading={isLoading}
          className="w-full text-xs h-9 cursor-pointer"
        >
          변경하기
        </Button>
      </form>
    </AuthCard>
  );
};
````

## File: src/features/auth/ui/SignupFormView.tsx
````typescript
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { AuthCard } from "./AuthCard";
import { TermsCheckbox } from "./TermsCheckbox";
import { TermsModal } from "./TermsModal";
import { useSignupForm } from "../model/useSignupForm";
import { Mail, Lock, CheckCircle2 } from "lucide-react";
import { Input } from "@/shared/ui/input/Input";

export const SignupFormView = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    agreed,
    setAgreed,
    isLoading,
    isSent,
    modalType,
    setModalType,
    handleSignup,
  } = useSignupForm();

  return (
    <>
      <AuthCard
        title="DashCraft 회원가입"
        subtitle="나만의 맞춤형 위젯 대시보드를 생성해보세요"
        footer={
          <p className="text-[11px] text-muted-foreground">
            이미 계정이 있으신가요?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              로그인
            </Link>
          </p>
        }
      >
        {isSent ? (
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-primary mx-auto shrink-0" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">
                인증 메일이 발송되었습니다
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{email}</span>{" "}
                주소로 전송된 인증 링크를 클릭하면 가입이 완료됩니다.
              </p>
            </div>
            <Link href="/login" className="block pt-1">
              <Button variant="outline" size="sm" className="w-full text-xs">
                로그인 화면으로 이동
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="space-y-3.5">
            <Input
              label="이메일"
              type="email"
              required
              icon={Mail}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="name@example.com"
            />

            <Input
              label="비밀번호 (8자 이상)"
              type="password"
              required
              minLength={8}
              icon={Lock}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="••••••••"
            />

            <TermsCheckbox
              id="signup-agree-terms"
              checked={agreed}
              onChange={setAgreed}
              onOpenTerms={() => setModalType("terms")}
              onOpenPrivacy={() => setModalType("privacy")}
            />

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={!agreed || isLoading}
              isLoading={isLoading}
              className="w-full text-xs h-9"
            >
              회원가입 신청
            </Button>
          </form>
        )}
      </AuthCard>

      <TermsModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </>
  );
};
````

## File: src/features/calendar/model/useScheduleModal.ts
````typescript
"use client";

import { useState, useCallback } from "react";
import { ScheduleRow } from "../api/scheduleRepository";

interface ModalState {
  isOpen: boolean;
  selectedDateStr: string;
  scheduleToEdit: ScheduleRow | null;
}

export const useScheduleModal = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    selectedDateStr: "",
    scheduleToEdit: null,
  });

  const selectDate = useCallback((dateStr: string) => {
    setModalState((prev) => ({
      ...prev,
      selectedDateStr: dateStr,
    }));
  }, []);

  const openAddModal = useCallback((dateStr: string) => {
    setModalState({
      isOpen: true,
      selectedDateStr: dateStr,
      scheduleToEdit: null,
    });
  }, []);

  const openEditModal = useCallback((schedule: ScheduleRow) => {
    setModalState({
      isOpen: true,
      selectedDateStr: schedule.date_str,
      scheduleToEdit: schedule,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
      scheduleToEdit: null,
    }));
  }, []);

  return {
    isOpen: modalState.isOpen,
    selectedDateStr: modalState.selectedDateStr,
    scheduleToEdit: modalState.scheduleToEdit,
    selectDate,
    openAddModal,
    openEditModal,
    closeModal,
  };
};
````

## File: src/features/clock-widget/lib/audioNotifier.ts
````typescript
"use client";

import { toast } from "sonner";

let audioCtx: AudioContext | null = null;
let noiseNode: AudioBufferSourceNode | null = null;
let gainNode: GainNode | null = null;

const activeWhiteNoiseWidgets = new Set<string>();

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    void audioCtx.resume();
  }
  return audioCtx;
}

export function startWhiteNoise(widgetId: string, volume = 0.04) {
  activeWhiteNoiseWidgets.add(widgetId);

  if (noiseNode) return;

  try {
    const ctx = getAudioContext();
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0,
      b1 = 0,
      b2 = 0,
      b3 = 0,
      b4 = 0,
      b5 = 0,
      b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      b3 = 0.8665 * b3 + white * 0.3104856;
      b4 = 0.55 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.016898;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.11;
      b6 = white * 0.115926;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);

    noiseSource.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseSource.start();
    noiseNode = noiseSource;
  } catch {
    toast.error("화이트 노이즈 오디오 생성에 실패했습니다.");
  }
}

export function stopWhiteNoise(widgetId: string) {
  activeWhiteNoiseWidgets.delete(widgetId);

  if (activeWhiteNoiseWidgets.size > 0) return;

  if (gainNode && audioCtx && noiseNode) {
    const currentGain = gainNode;
    const currentSource = noiseNode;

    currentGain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioCtx.currentTime + 0.2,
    );

    setTimeout(() => {
      try {
        currentSource.stop();
        currentSource.disconnect();
      } catch {}
    }, 200);
  }

  noiseNode = null;
  gainNode = null;
}

export function playCompletionSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.15);
    osc.frequency.setValueAtTime(783.99, now + 0.3);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.8);
  } catch {
    toast.error("알림음 재생에 실패했습니다.");
  }
}

export function triggerNotification(title: string, body: string) {
  if (typeof window === "undefined" || !("Notification" in window)) return;

  if (Notification.permission === "granted") {
    try {
      const notification = new Notification(title, {
        body,
        icon: "/favicon.ico",
      });
      setTimeout(() => notification.close(), 5000);
    } catch (e) {
      console.error("Notification trigger error:", e);
    }
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === "undefined" || !("Notification" in window))
    return false;
  const permission = await Notification.requestPermission();
  return permission === "granted";
}
````

## File: src/features/clock-widget/model/useClockStore.test.ts
````typescript
import { beforeEach, describe, expect, it } from "vitest";
import { useClockStore } from "./useClockStore";

describe("useClockStore", () => {
  const widgetId = "clock-test-1";
  const defaultWorkDuration = 25 * 60;

  beforeEach(() => {
    useClockStore.setState({ states: {} });
  });

  it("초기 모드가 'clock'으로 설정되어야 한다", () => {
    const state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.mode).toBe("clock");
  });

  it("모드를 'timer'로 변경할 수 있어야 한다", () => {
    useClockStore.getState().setMode(widgetId, "timer");
    const state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.mode).toBe("timer");
  });

  it("타이머 토글 및 리셋 동작이 정상 수행되어야 한다", () => {
    useClockStore.getState().setMode(widgetId, "timer");

    useClockStore.getState().toggleTimer(widgetId, defaultWorkDuration);
    let state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.isRunning).toBe(true);

    useClockStore.getState().toggleTimer(widgetId, defaultWorkDuration);
    state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.isRunning).toBe(false);

    useClockStore.getState().resetTimer(widgetId, defaultWorkDuration);
    state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.timeLeft).toBe(defaultWorkDuration);
    expect(state.isRunning).toBe(false);
  });
});
````

## File: src/features/clock-widget/model/usePomodoroTimer.test.tsx
````typescript
import React from "react";
import { renderHook, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { usePomodoroTimer } from "./usePomodoroTimer";
import { useClockStore } from "./useClockStore";

vi.mock("@/widgets/dashboard-grid/api/dashboardRepository", () => ({
  dashboardRepository: {
    fetchWidgets: vi.fn().mockResolvedValue([]),
    updateWidget: vi.fn(),
  },
}));

vi.mock("../lib/audioNotifier", () => ({
  startWhiteNoise: vi.fn(),
  stopWhiteNoise: vi.fn(),
  playCompletionSound: vi.fn(),
  triggerNotification: vi.fn(),
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
      mutations: { retry: false },
    },
  });

const createWrapper = () => {
  const queryClient = createTestQueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestQueryWrapper";
  return Wrapper;
};

describe("usePomodoroTimer Hook", () => {
  const widgetId = "clock-widget-test";

  beforeEach(() => {
    vi.clearAllMocks();
    useClockStore.setState({ states: {} });
  });

  it("초기 타이머 상태 및 기본 액션들이 올바르게 반환되어야 한다", () => {
    const { result } = renderHook(() => usePomodoroTimer(widgetId), {
      wrapper: createWrapper(),
    });

    expect(result.current.timerPhase).toBe("work");
    expect(result.current.isRunning).toBe(false);
    expect(result.current.timeLeft).toBe(1500);
    expect(typeof result.current.toggleTimer).toBe("function");
    expect(typeof result.current.resetTimer).toBe("function");
    expect(typeof result.current.switchPhase).toBe("function");
  });

  it("toggleTimer 실행 시 타이머 실행 상태(isRunning)가 전환되어야 한다", () => {
    const { result } = renderHook(() => usePomodoroTimer(widgetId), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.toggleTimer();
    });

    expect(result.current.isRunning).toBe(true);

    act(() => {
      result.current.toggleTimer();
    });

    expect(result.current.isRunning).toBe(false);
  });

  it("resetTimer 실행 시 타이머가 정지되고 초기 작업 시간(1500초)으로 초기화되어야 한다", () => {
    const { result } = renderHook(() => usePomodoroTimer(widgetId), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.toggleTimer();
    });
    expect(result.current.isRunning).toBe(true);

    act(() => {
      result.current.resetTimer();
    });

    expect(result.current.isRunning).toBe(false);
    expect(result.current.timeLeft).toBe(1500);
  });

  it("switchPhase('break') 호출 시 타이머 페이즈가 휴식 상태(300초)로 전환되어야 한다", () => {
    const { result } = renderHook(() => usePomodoroTimer(widgetId), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.switchPhase("break");
    });

    expect(result.current.timerPhase).toBe("break");
    expect(result.current.timeLeft).toBe(300);
  });
});
````

## File: src/features/dashboard-filter/ui/DateRangeFilterGroup.tsx
````typescript
import { cn } from "@/shared/lib/utils";
import { DateRangePreset } from "../model/useFilterStore";
import { Calendar } from "lucide-react";

interface DateRangeFilterGroupProps {
  datePreset: DateRangePreset;
  startDate: string | null;
  endDate: string | null;
  onSelectPreset: (preset: DateRangePreset) => void;
  onChangeCustomRange: (start: string | null, end: string | null) => void;
}

const PRESET_OPTIONS: { id: DateRangePreset; label: string }[] = [
  { id: "all", label: "전체 기간" },
  { id: "today", label: "오늘" },
  { id: "week", label: "최근 7일" },
  { id: "month", label: "최근 30일" },
  { id: "custom", label: "직접 지정" },
];

export const DateRangeFilterGroup = ({
  datePreset,
  startDate,
  endDate,
  onSelectPreset,
  onChangeCustomRange,
}: DateRangeFilterGroupProps) => {
  const handleStartDateChange = (newStart: string | null) => {
    if (newStart && endDate && newStart > endDate) {
      onChangeCustomRange(newStart, newStart);
    } else {
      onChangeCustomRange(newStart, endDate);
    }
  };

  const handleEndDateChange = (newEnd: string | null) => {
    if (newEnd && startDate && newEnd < startDate) {
      onChangeCustomRange(startDate, startDate);
    } else {
      onChangeCustomRange(startDate, newEnd);
    }
  };

  return (
    <div className="flex items-center gap-1.5 shrink-0">
      <div className="flex items-center bg-muted/50 p-1 rounded-lg text-xs border gap-1 shrink-0 whitespace-nowrap">
        {PRESET_OPTIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectPreset(item.id)}
            className={cn(
              "px-2.5 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap",
              datePreset === item.id
                ? "bg-background font-semibold text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {datePreset === "custom" && (
        <div className="flex items-center gap-1.5 bg-muted/50 p-1 rounded-lg border text-xs animate-in fade-in zoom-in-95 duration-150">
          <Calendar className="w-3.5 h-3.5 text-muted-foreground ml-1" />
          <input
            type="date"
            value={startDate ?? ""}
            max={endDate ?? undefined}
            onChange={(e) => handleStartDateChange(e.target.value || null)}
            className="bg-background px-2 py-0.5 rounded border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <span className="text-muted-foreground text-[10px]">~</span>
          <input
            type="date"
            value={endDate ?? ""}
            min={startDate ?? undefined}
            onChange={(e) => handleEndDateChange(e.target.value || null)}
            className="bg-background px-2 py-0.5 rounded border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      )}
    </div>
  );
};
````

## File: src/features/dday-widget/ui/DDayForm.tsx
````typescript
"use client";

import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface DDayFormProps {
  onAdd: (title: string, targetDate: string) => void;
}

export const DDayForm = ({ onAdd }: DDayFormProps) => {
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title.trim() || !targetDate) return;
    onAdd(title.trim(), targetDate);
    setTitle("");
    setTargetDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-1.5 mb-3 w-full min-w-0"
    >
      <input
        type="text"
        placeholder="디데이 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 min-w-0 px-2.5 py-1.5 text-xs bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <input
        type="date"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        className="w-[110px] shrink-0 px-1.5 py-1.5 text-xs bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="h-8 w-8 p-0 shrink-0"
        title="D-Day 추가"
      >
        <Plus className="w-3.5 h-3.5" />
      </Button>
    </form>
  );
};
````

## File: src/features/dday-widget/ui/DDayItemCard.tsx
````typescript
"use client";

import { memo } from "react";
import { calculateDDay, formatDDayText } from "@/shared/lib/formatters";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";

export interface DDayItem {
  id: string;
  title: string;
  targetDate: string;
}

interface DDayItemCardProps {
  item: DDayItem;
  isExpanded?: boolean;
  onRemove: (id: string) => void;
}

export const DDayItemCard = memo(
  ({ item, isExpanded = false, onRemove }: DDayItemCardProps) => {
    const diffDays = calculateDDay(item.targetDate);
    const ddayBadgeText = formatDDayText(diffDays);

    const isToday = diffDays === 0;
    const isPast = diffDays < 0;

    return (
      <div
        className={cn(
          "flex items-center justify-between p-2.5 rounded-xl border bg-card/60 transition-all group hover:border-primary/50 h-fit gap-2 w-full min-w-0",
          isExpanded ? "p-4 gap-3" : "p-2.5",
        )}
      >
        <span
          className={cn(
            "font-extrabold rounded-lg shrink-0 flex items-center justify-center transition-all",
            isExpanded
              ? "text-sm px-3.5 py-1.5 min-w-[68px]"
              : "text-xs px-2 py-1 min-w-[48px]",
            isToday
              ? "bg-rose-500 text-white animate-pulse"
              : isPast
                ? "bg-muted text-muted-foreground"
                : "bg-primary text-primary-foreground",
          )}
        >
          {ddayBadgeText}
        </span>

        <div className="flex flex-col items-center justify-center flex-1 min-w-0 text-center px-1">
          <span
            className={cn(
              "font-bold truncate w-full text-foreground",
              isExpanded ? "text-base" : "text-xs",
            )}
          >
            {item.title}
          </span>
          <span
            className={cn(
              "text-muted-foreground w-full truncate",
              isExpanded ? "text-xs" : "text-[10px]",
            )}
          >
            {item.targetDate}
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(item.id)}
          className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive shrink-0"
          title="D-Day 삭제"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </Button>
      </div>
    );
  },
);

DDayItemCard.displayName = "DDayItemCard";
````

## File: src/features/settings/model/useDeleteAccount.ts
````typescript
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

export const useDeleteAccount = (userEmail?: string) => {
  const supabase = createClient();

  const [isOpen, setIsOpen] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setInputEmail("");
  };

  const handleDeleteAccount = async () => {
    const trimmedInput = inputEmail.trim().toLowerCase();
    const trimmedUserEmail = (userEmail ?? "").trim().toLowerCase();

    if (!trimmedUserEmail || trimmedInput !== trimmedUserEmail) {
      toast.error("이메일 주소가 일치하지 않습니다.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/account/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          confirmEmail: trimmedInput,
        }),
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok || data.error) {
        throw new Error(data.error || "계정 삭제에 실패했습니다.");
      }

      await supabase.auth.signOut();
      toast.success("계정이 성공적으로 삭제되었습니다.");
      closeModal();

      window.location.href = "/login";
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "계정 삭제 중 오류가 발생했습니다.";
      toast.error("계정 삭제 실패", { description: message });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    inputEmail,
    setInputEmail,
    isLoading,
    openModal,
    closeModal,
    handleDeleteAccount,
  };
};
````

## File: src/features/settings/ui/DeleteAccountSection.tsx
````typescript
"use client";

import React from "react";
import { Modal } from "@/shared/ui/modal";
import { Button } from "@/shared/ui/button";
import { useDeleteAccount } from "../model/useDeleteAccount";
import { AlertTriangle, Trash2 } from "lucide-react";

interface DeleteAccountSectionProps {
  userEmail?: string;
}

export const DeleteAccountSection = ({
  userEmail,
}: DeleteAccountSectionProps) => {
  const {
    isOpen,
    inputEmail,
    setInputEmail,
    isLoading,
    openModal,
    closeModal,
    handleDeleteAccount,
  } = useDeleteAccount(userEmail);

  const isConfirmed =
    inputEmail.trim().toLowerCase() === (userEmail ?? "").trim().toLowerCase();

  return (
    <>
      <div className="bg-card border border-destructive/20 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2.5 pb-2 border-b border-border">
          <div className="p-2 bg-destructive/10 text-destructive rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-destructive">
              위험 영역 (Danger Zone)
            </h3>
            <p className="text-xs text-muted-foreground">
              계정 삭제 시 대시보드 레이아웃과 모든 위젯 데이터가 영구히
              파기됩니다.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-foreground">
              계정 영구 삭제
            </p>
            <p className="text-xs text-muted-foreground">
              삭제된 계정과 데이터는 복구할 수 없습니다.
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={openModal}
            className="text-destructive hover:bg-destructive/10 border-destructive/30 text-xs h-9 gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            <span>계정 삭제</span>
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="계정 영구 삭제 확인"
        description="정말로 계정을 삭제하시겠습니까? 삭제된 정보는 되돌릴 수 없습니다."
        footer={
          <div className="flex items-center justify-end gap-2 w-full">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={closeModal}
              disabled={isLoading}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleDeleteAccount}
              isLoading={isLoading}
              disabled={!isConfirmed || isLoading}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground cursor-pointer"
            >
              삭제
            </Button>
          </div>
        }
      >
        <div className="space-y-3 pt-1">
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-xs text-destructive space-y-1">
            <p className="font-bold">⚠️ 경고</p>
            <p className="leading-relaxed">
              계정이 삭제되면 생성한 모든 위젯, 메모, 할 일 및 설정 내역이 즉시
              파기됩니다.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground">
              확인을 위해 본인의 이메일 주소(
              <span className="text-foreground font-bold">{userEmail}</span>)를
              입력해 주세요.
            </label>
            <input
              type="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder={userEmail}
              className="w-full px-3 py-2 text-xs bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-destructive"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
````

## File: src/features/todo-widget/api/todoRepository.ts
````typescript
import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type TodoRow = Database["public"]["Tables"]["todos"]["Row"];
export type TodoInsert = Database["public"]["Tables"]["todos"]["Insert"];
export type TodoUpdate = Database["public"]["Tables"]["todos"]["Update"];

export const todoRepository = {
  async fetchTodos(widgetId: string): Promise<TodoRow[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("widget_id", widgetId)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data ?? [];
  },

  async insertTodo(todo: TodoInsert): Promise<TodoRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("todos")
      .insert(todo)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateTodo(
    widgetId: string,
    todoId: string,
    updates: Partial<Pick<TodoRow, "text" | "completed" | "sort_order">>,
  ): Promise<TodoRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("todos")
      .update(updates)
      .eq("widget_id", widgetId)
      .eq("todo_id", todoId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteTodo(widgetId: string, todoId: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("widget_id", widgetId)
      .eq("todo_id", todoId);

    if (error) throw error;
  },
};
````

## File: src/features/todo-widget/api/useTodoQuery.test.tsx
````typescript
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  useTodosQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
} from "./useTodoQuery";
import { todoRepository } from "./todoRepository";
import React from "react";

vi.mock("./todoRepository", () => ({
  todoRepository: {
    fetchTodos: vi.fn(),
    insertTodo: vi.fn(),
    updateTodo: vi.fn(),
    deleteTodo: vi.fn(),
  },
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

const createWrapper = () => {
  const queryClient = createTestQueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestQueryWrapper";
  return Wrapper;
};

describe("Todo Query Hooks", () => {
  const widgetId = "widget-todo-1";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("useTodosQuery: widgetId에 속한 할 일 목록을 불러온다", async () => {
    const mockTodos = [
      {
        id: "1",
        user_id: "user-1",
        widget_id: widgetId,
        todo_id: "t-1",
        text: "테스트 할 일 1",
        completed: false,
        sort_order: 1,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
    ];

    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce(mockTodos);

    const { result } = renderHook(() => useTodosQuery(widgetId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockTodos);
    expect(todoRepository.fetchTodos).toHaveBeenCalledWith(widgetId);
  });

  it("useAddTodoMutation: 새 할 일을 정상적으로 추가한다", async () => {
    const newTodo = {
      id: "2",
      user_id: "user-1",
      widget_id: widgetId,
      todo_id: "test-todo-1",
      text: "새로운 할 일",
      completed: false,
      sort_order: 1,
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    };

    vi.mocked(todoRepository.insertTodo).mockResolvedValueOnce(newTodo);

    const { result } = renderHook(() => useAddTodoMutation(widgetId), {
      wrapper: createWrapper(),
    });

    result.current.mutate({
      text: "새로운 할 일",
      todoId: "test-todo-1",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(todoRepository.insertTodo).toHaveBeenCalledWith(
      expect.objectContaining({
        widget_id: widgetId,
        todo_id: "test-todo-1",
        text: "새로운 할 일",
        completed: false,
      }),
    );
  });

  it("useToggleTodoMutation: 할 일 완료 상태 토글을 성공한다", async () => {
    const updatedTodo = {
      id: "1",
      user_id: "user-1",
      widget_id: widgetId,
      todo_id: "t-1",
      text: "테스트 할 일 1",
      completed: true,
      sort_order: 1,
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    };

    vi.mocked(todoRepository.updateTodo).mockResolvedValueOnce(updatedTodo);

    const { result } = renderHook(() => useToggleTodoMutation(widgetId), {
      wrapper: createWrapper(),
    });

    result.current.mutate({ todoId: "t-1", completed: true });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(todoRepository.updateTodo).toHaveBeenCalledWith(widgetId, "t-1", {
      completed: true,
    });
  });

  it("useDeleteTodoMutation: 지정한 할 일을 삭제한다", async () => {
    vi.mocked(todoRepository.deleteTodo).mockResolvedValueOnce();

    const { result } = renderHook(() => useDeleteTodoMutation(widgetId), {
      wrapper: createWrapper(),
    });

    result.current.mutate("t-1");

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(todoRepository.deleteTodo).toHaveBeenCalledWith(widgetId, "t-1");
  });
});
````

## File: src/features/todo-widget/index.ts
````typescript
export { TodoWidget } from "./ui/TodoWidget";
export type { TodoItemData } from "./model/types";
````

## File: src/shared/lib/react-query/optimisticHelper.test.tsx
````typescript
import { renderHook, waitFor } from "@testing-library/react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createOptimisticMutation } from "./optimisticHelper";
import React from "react";

const mockToastError = vi.fn();

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 1000 * 60 },
      mutations: { retry: false },
    },
  });

describe("createOptimisticMutation Helper", () => {
  const queryKey = ["test-key"] as const;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Mutation 실행 시 캐시에 낙관적으로 변경사항이 즉시 반영되어야 한다", async () => {
    const queryClient = createTestQueryClient();
    queryClient.setQueryData(queryKey, ["item-1"]);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const mutationFn = vi
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve("item-2"), 50)),
      );

    const { result } = renderHook(
      () =>
        useMutation(
          createOptimisticMutation<string, string, string[]>({
            queryClient,
            queryKey,
            mutationFn,
            updateCache: (old = [], newItem) => [...old, newItem],
          }),
        ),
      { wrapper },
    );

    result.current.mutate("item-2");

    await waitFor(() =>
      expect(queryClient.getQueryData(queryKey)).toEqual(["item-1", "item-2"]),
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it("Mutation 실패 시 이전 캐시 상태로 롤백되고 에러 토스트가 노출되어야 한다", async () => {
    const queryClient = createTestQueryClient();
    queryClient.setQueryData(queryKey, ["original-item"]);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const mutationFn = vi.fn().mockRejectedValue(new Error("Server Error"));

    const { result } = renderHook(
      () =>
        useMutation(
          createOptimisticMutation<string, string, string[]>({
            queryClient,
            queryKey,
            mutationFn,
            updateCache: (old = [], newItem) => [...old, newItem],
            errorMessage: "요청 실패",
          }),
        ),
      { wrapper },
    );

    result.current.mutate("failed-item");

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(queryClient.getQueryData(queryKey)).toEqual(["original-item"]);
    expect(mockToastError).toHaveBeenCalledWith("요청 실패", {
      description: "Server Error",
    });
  });
});
````

## File: src/shared/lib/react-query/optimisticHelper.ts
````typescript
import { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import { toast } from "sonner";

export interface OptimisticMutationConfig<TData, TVariables, TQueryData> {
  queryClient: QueryClient;
  queryKey: readonly unknown[];
  mutationFn: (variables: TVariables) => Promise<TData>;
  updateCache: (
    oldData: TQueryData | undefined,
    variables: TVariables,
  ) => TQueryData;
  errorMessage?: string;
}

export interface MutationContext<TQueryData> {
  previousData?: TQueryData;
}

export function createOptimisticMutation<TData, TVariables, TQueryData>({
  queryClient,
  queryKey,
  mutationFn,
  updateCache,
  errorMessage = "요청 처리 실패",
}: OptimisticMutationConfig<TData, TVariables, TQueryData>): UseMutationOptions<
  TData,
  Error,
  TVariables,
  MutationContext<TQueryData>
> {
  return {
    mutationKey: queryKey,
    mutationFn,
    onMutate: async (variables: TVariables) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData<TQueryData>(queryKey);

      queryClient.setQueryData<TQueryData>(queryKey, (old) =>
        updateCache(old, variables),
      );

      return { previousData };
    },
    onError: (err, _variables, context) => {
      if (context?.previousData !== undefined) {
        queryClient.setQueryData<TQueryData>(queryKey, context.previousData);
      }
      toast.error(errorMessage, { description: err.message });
    },
    onSettled: () => {
      if (queryClient.isMutating({ mutationKey: queryKey }) === 1) {
        queryClient.invalidateQueries({ queryKey });
      }
    },
  };
}
````

## File: src/shared/lib/avatar.ts
````typescript
import { createClient } from "./client";

export const getAvatarPublicUrl = (
  userMetadata?: Record<string, unknown> | null,
): string | undefined => {
  if (!userMetadata) return undefined;

  const avatarPath = userMetadata.avatar_path as string | undefined;
  if (avatarPath) {
    const supabase = createClient();
    const { data } = supabase.storage.from("avatars").getPublicUrl(avatarPath);
    return data.publicUrl;
  }

  const avatarUrl = userMetadata.avatar_url as string | undefined;
  if (avatarUrl) {
    return avatarUrl;
  }

  return undefined;
};
````

## File: src/shared/lib/formatters.ts
````typescript
export const formatSecondsToMMSS = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export const formatTimeToTimeString = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export const formatDateParts = (date: Date) => {
  const dateString = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayOfWeek = date.toLocaleDateString("ko-KR", {
    weekday: "short",
  });

  return {
    dateString, // "2026년 8월 26일"
    dayOfWeek: `${dayOfWeek}요일`, // "수요일"
  };
};

export const calculateDDay = (targetDateStr: string): number => {
  if (!targetDateStr) return 0;

  const target = new Date(targetDateStr);
  const today = new Date();

  target.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const formatDDayText = (diffDays: number): string => {
  if (diffDays === 0) return "D-Day";
  if (diffDays > 0) return `D-${diffDays}`;
  return `D+${Math.abs(diffDays)}`;
};
````

## File: src/shared/ui/input/Input.tsx
````typescript
import React, { useId } from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  containerClassName?: string;
}

export const Input = ({
  label,
  error,
  icon: Icon,
  containerClassName,
  className,
  id,
  disabled,
  ref,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id || props.name || generatedId;

  return (
    <div className={cn("space-y-1 w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-muted-foreground"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground shrink-0 pointer-events-none" />
        )}
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full py-2 bg-background border rounded-lg text-xs transition-colors focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed",
            Icon ? "pl-9 pr-3" : "px-3",
            error
              ? "border-destructive focus:ring-destructive"
              : "border-border",
            className,
          )}
          {...props}
        />
      </div>
      {error && <p className="text-[11px] text-destructive">{error}</p>}
    </div>
  );
};
````

## File: src/shared/ui/modal/Modal.tsx
````typescript
"use client";

import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import React, { useEffect } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg";
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = "md",
  className,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className={cn(
          "relative w-full max-h-[90vh] overflow-y-auto bg-background text-foreground rounded-2xl border shadow-2xl z-10 space-y-5 p-5 sm:p-6 animate-in zoom-in-95 duration-200 my-auto",
          maxWidthStyles[maxWidth],
          className,
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors shrink-0 z-20"
          aria-label="모달 닫기"
        >
          <X className="w-4 h-4" />
        </button>

        {(title || description) && (
          <div className="text-center space-y-1.5 pt-2 px-2 sm:px-6">
            {title && (
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {children && (
          <div className="text-xs text-muted-foreground bg-muted/40 p-3.5 rounded-xl border border-border/50 text-center leading-relaxed">
            {children}
          </div>
        )}

        {footer && (
          <div className="flex items-center justify-center sm:justify-end gap-2 pt-2 border-t">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
````

## File: src/widgets/dashboard/ui/ActiveWidgetCounter.tsx
````typescript
"use client";

import { useWidgetsQuery } from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { CheckSquare } from "lucide-react";
import { memo } from "react";

export const ActiveWidgetCounter = memo(() => {
  const { data: widgets = [] } = useWidgetsQuery();

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background border px-3 py-1.5 rounded-lg w-fit shadow-2xs">
      <CheckSquare className="w-4 h-4 text-primary" />
      <span>
        활성 위젯{" "}
        <strong className="text-foreground font-semibold">
          {widgets.length}
        </strong>
        개
      </span>
    </div>
  );
});

ActiveWidgetCounter.displayName = "ActiveWidgetCounter";
````

## File: src/widgets/dashboard/ui/AddWidgetMenu.tsx
````typescript
"use client";

import React, { memo, useCallback } from "react";
import { Button } from "@/shared/ui/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";
import { useAddWidgetMutation } from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { ChevronDown, Plus } from "lucide-react";

interface AddWidgetMenuProps {
  variant?: "desktop" | "mobile-fab";
}

export const AddWidgetMenu = memo(
  ({ variant = "desktop" }: AddWidgetMenuProps) => {
    const addWidgetMutation = useAddWidgetMutation();

    const handleAddWidget = useCallback(
      (type: WidgetType) => {
        const config = WIDGET_CONFIG_MAP[type];
        if (!config) return;

        addWidgetMutation.mutate({
          type: config.type,
          layout_w: 1,
          widgetId: crypto.randomUUID(),
        });
      },
      [addWidgetMutation],
    );

    if (variant === "mobile-fab") {
      return (
        <div className="fixed bottom-6 right-6 sm:hidden z-[90]">
          <Dropdown>
            <DropdownTrigger>
              <button
                type="button"
                disabled={addWidgetMutation.isPending}
                className="w-13 h-13 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-primary/20 cursor-pointer"
                aria-label="위젯 추가"
              >
                <Plus className="w-6 h-6" />
              </button>
            </DropdownTrigger>

            <DropdownContent
              align="right"
              className="w-48 bottom-full mb-3 right-0 top-auto animate-in fade-in-80 zoom-in-95"
            >
              <div className="px-3 py-1.5 border-b mb-1">
                <p className="text-[10px] text-muted-foreground font-semibold">
                  위젯 추가
                </p>
              </div>
              {WIDGET_OPTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownItem
                    key={item.type}
                    onClick={() => handleAddWidget(item.type)}
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.title}</span>
                  </DropdownItem>
                );
              })}
            </DropdownContent>
          </Dropdown>
        </div>
      );
    }

    return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="primary"
            size="sm"
            className="gap-1.5 text-xs h-9 px-3"
            disabled={addWidgetMutation.isPending}
          >
            <Plus className="w-4 h-4" />
            <span>위젯 추가</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </Button>
        </DropdownTrigger>

        <DropdownContent align="right" className="w-48">
          {WIDGET_OPTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownItem
                key={item.type}
                onClick={() => handleAddWidget(item.type)}
              >
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <span>{item.title}</span>
              </DropdownItem>
            );
          })}
        </DropdownContent>
      </Dropdown>
    );
  },
);

AddWidgetMenu.displayName = "AddWidgetMenu";
````

## File: src/widgets/dashboard-grid/api/dashboardRepository.ts
````typescript
import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type WidgetRow = Database["public"]["Tables"]["widgets"]["Row"];
export type WidgetInsert = Database["public"]["Tables"]["widgets"]["Insert"];
export type WidgetUpdate = Database["public"]["Tables"]["widgets"]["Update"];

export const dashboardRepository = {
  async fetchWidgets(): Promise<WidgetRow[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("widgets")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data ?? [];
  },

  async insertWidget(widget: WidgetInsert): Promise<WidgetRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("widgets")
      .insert(widget)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateWidget(
    widgetId: string,
    updates: WidgetUpdate,
  ): Promise<WidgetRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("widgets")
      .update(updates)
      .eq("widget_id", widgetId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteWidget(widgetId: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("widgets")
      .delete()
      .eq("widget_id", widgetId);

    if (error) throw error;
  },

  async reorderWidgets(widgetIds: string[]): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase.rpc("reorder_widgets", {
      p_widget_ids: widgetIds,
    });

    if (error) throw error;
  },

  async deleteAllWidgets(): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("widgets")
      .delete()
      .neq("widget_id", "");

    if (error) throw error;
  },
};
````

## File: src/widgets/dashboard-grid/api/useDashboardQuery.test.tsx
````typescript
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  useWidgetsQuery,
  useAddWidgetMutation,
  useUpdateWidgetMutation,
  useDeleteWidgetMutation,
  useReorderWidgetsMutation,
} from "./useDashboardQuery";
import { dashboardRepository } from "./dashboardRepository";
import React from "react";

vi.mock("./dashboardRepository", () => ({
  dashboardRepository: {
    fetchWidgets: vi.fn(),
    insertWidget: vi.fn(),
    updateWidget: vi.fn(),
    deleteWidget: vi.fn(),
    reorderWidgets: vi.fn(),
  },
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

const createWrapper = () => {
  const queryClient = createTestQueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestQueryWrapper";
  return Wrapper;
};

describe("Dashboard Query Hooks", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("useWidgetsQuery: 위젯 목록을 정상적으로 조회해야 한다", async () => {
    const mockWidgets = [
      {
        id: "1",
        user_id: "user-1",
        widget_id: "w-1",
        type: "todo" as const,
        title: "할 일",
        color: "default" as const,
        layout_w: 1,
        layout_h: 1,
        layout_x: 0,
        layout_y: 0,
        sort_order: 1,
        config: {},
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
    ];

    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce(
      mockWidgets,
    );

    const { result } = renderHook(() => useWidgetsQuery(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockWidgets);
    expect(dashboardRepository.fetchWidgets).toHaveBeenCalledTimes(1);
  });

  it("useAddWidgetMutation: 신규 위젯 추가 요청을 성공적으로 보낸다", async () => {
    const newWidget = {
      id: "2",
      user_id: "user-1",
      widget_id: "w-2",
      type: "memo" as const,
      title: "메모",
      color: "blue" as const,
      layout_w: 1,
      layout_h: 1,
      layout_x: 0,
      layout_y: 0,
      sort_order: 1,
      config: {},
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    };

    vi.mocked(dashboardRepository.insertWidget).mockResolvedValueOnce(
      newWidget,
    );

    const { result } = renderHook(() => useAddWidgetMutation(), {
      wrapper: createWrapper(),
    });

    result.current.mutate({
      type: "memo",
      title: "메모",
      color: "blue",
      widgetId: "w-2",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(dashboardRepository.insertWidget).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "memo",
        title: "메모",
        color: "blue",
        sort_order: 1,
      }),
    );
  });

  it("useUpdateWidgetMutation: 위젯 정보 변경을 성공적으로 수행한다", async () => {
    const updatedWidget = {
      id: "1",
      user_id: "user-1",
      widget_id: "w-1",
      type: "todo" as const,
      title: "새 제목",
      color: "green" as const,
      layout_w: 2,
      layout_h: 1,
      layout_x: 0,
      layout_y: 0,
      sort_order: 1,
      config: {},
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    };

    vi.mocked(dashboardRepository.updateWidget).mockResolvedValueOnce(
      updatedWidget,
    );

    const { result } = renderHook(() => useUpdateWidgetMutation(), {
      wrapper: createWrapper(),
    });

    result.current.mutate({
      widgetId: "w-1",
      title: "새 제목",
      color: "green",
      layout_w: 2,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(dashboardRepository.updateWidget).toHaveBeenCalledWith("w-1", {
      title: "새 제목",
      color: "green",
      layout_w: 2,
    });
  });

  it("useDeleteWidgetMutation: 위젯 삭제 요청을 성공적으로 실행한다", async () => {
    vi.mocked(dashboardRepository.deleteWidget).mockResolvedValueOnce();

    const { result } = renderHook(() => useDeleteWidgetMutation(), {
      wrapper: createWrapper(),
    });

    result.current.mutate("w-1");

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(dashboardRepository.deleteWidget).toHaveBeenCalledWith("w-1");
  });

  it("useReorderWidgetsMutation: 위젯 순서 재정렬 RPC를 호출한다", async () => {
    vi.mocked(dashboardRepository.reorderWidgets).mockResolvedValueOnce();

    const { result } = renderHook(() => useReorderWidgetsMutation(), {
      wrapper: createWrapper(),
    });

    result.current.mutate(["w-2", "w-1"]);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(dashboardRepository.reorderWidgets).toHaveBeenCalledWith([
      "w-2",
      "w-1",
    ]);
  });
});
````

## File: src/widgets/dashboard-grid/config/widgets.config.ts
````typescript
import { Calendar, Clock, FileText, ListTodo, LucideIcon } from "lucide-react";

export type WidgetType = "todo" | "clock" | "dday" | "memo";

export interface WidgetConfigItem {
  type: WidgetType;
  title: string;
  icon: LucideIcon;
}

export const WIDGET_CONFIG_MAP: Record<WidgetType, WidgetConfigItem> = {
  todo: { type: "todo", title: "할 일 목록", icon: ListTodo },
  clock: { type: "clock", title: "시계 & 뽀모도로", icon: Clock },
  dday: { type: "dday", title: "D-Day", icon: Calendar },
  memo: { type: "memo", title: "메모", icon: FileText },
};

export const WIDGET_OPTIONS = Object.values(WIDGET_CONFIG_MAP);

export const DEFAULT_CLOCK_CONFIG = {
  workDuration: 1500,
  breakDuration: 300,
  isSoundEnabled: true,
  isNotificationEnabled: true,
} as const;

export type ClockConfig = typeof DEFAULT_CLOCK_CONFIG;
````

## File: src/widgets/dashboard-grid/ui/DashboardGridSkeleton.tsx
````typescript
"use client";

import { cn } from "@/shared/lib/utils";

interface DashboardGridSkeletonProps {
  count?: number;
}

export const DashboardGridSkeleton = ({
  count = 3,
}: DashboardGridSkeletonProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 items-start w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "relative flex flex-col w-full bg-card text-card-foreground rounded-xl border border-border/60 shadow-xs animate-pulse overflow-hidden",
            "h-auto min-h-[280px] sm:h-[280px]",
          )}
        >
          <div className="h-1 w-full bg-muted shrink-0" />

          <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border/40 h-11 shrink-0">
            <div className="h-4 w-24 bg-muted/80 rounded-md" />
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-muted/80" />
              <div className="w-6 h-6 rounded-md bg-muted/80" />
              <div className="w-6 h-6 rounded-md bg-muted/80" />
            </div>
          </div>

          <div className="flex-1 p-4 flex flex-col justify-between">
            <div className="w-full h-full bg-muted/20 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};
````

## File: src/widgets/landing/ui/LandingHeader.tsx
````typescript
import { ArrowRight, LayoutGrid } from "lucide-react";
import Link from "next/link";

export const LandingHeader = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50 select-none">
      <div className="max-w-6xl mx-auto px-6 gap-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary text-primary-foreground rounded-lg">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">DashCraft</span>
        </div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          대시보드 시작하기
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </header>
  );
};
````

## File: src/widgets/landing/ui/LandingHero.tsx
````typescript
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const LandingHero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 pt-16 pb-8 select-none">
      <h1 className="md:text-6xl text-3xl font-extrabold tracking-tight leading-tight max-w-3xl">
        필요한 위젯만 조합해서
        <br /> <span>나만의 대시보드</span>를 <br className="block sm:hidden" />{" "}
        구성하세요
      </h1>

      <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
        자유롭게 위치를 바꾸고,
        <br className="block sm:hidden" /> 위젯의 크기와 이름을 마음대로
        설정하세요. <br /> 복잡한 세팅 없이 바로 시작하는{" "}
        <br className="block sm:hidden" /> 나만의 맞춤형 작업 공간입니다.
      </p>

      <div className="pt-2">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-primary/25 hover:opacity-90 transition-all"
        >
          워크스페이스 둘러보기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
````

## File: src/widgets/landing/ui/LandingPreview.tsx
````typescript
import { CheckCircle2 } from "lucide-react";

export const LandingPreview = () => {
  return (
    <div className="w-full max-w-4xl pb-16 select-none">
      <div className="p-3 bg-muted/40 rounded-2xl border shadow-2xl backdrop-blur-sm">
        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4 text-left">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">
                DashCraft Preview
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 border rounded-xl bg-background space-y-3 shadow-xs">
              <div className="flex justify-between items-center text-xs font-semibold border-b pb-2">
                <span>오늘의 공부 목표</span>
                <span className="text-primary">50%</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span className="line-through">TypeScript 복습</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border" />
                  <span>Next.js App Router 학습</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-xl bg-background space-y-3 shadow-xs">
              <div className="flex justify-between items-center text-xs font-semibold border-b pb-2">
                <span>장보기 리스트</span>
                <span className="text-primary">0%</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border" />
                  <span>우유, 계란, 사과</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-xl bg-background/50 border-dashed flex items-center justify-center text-xs text-muted-foreground min-h-[100px]">
              + 자유롭게 위젯 추가
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
````

## File: src/middleware.ts
````typescript
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password";

  if (!user && !isAuthPage && pathname !== "/reset-password") {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (user && isAuthPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/calendar/:path*",
    "/settings/:path*",
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/api/account/delete",
  ],
};
````

## File: supabase/.temp/cli-latest
````
v3.0.0
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*
!.env.example

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

*storybook.log
node_modules

# Playwright
/playwright-report/
/test-results/

# Playwright Auth Session
playwright/.auth/
````

## File: src/app/calendar/page.tsx
````typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CalendarView } from "@/features/calendar/ui/CalendarView";

export default async function CalendarPage() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <CalendarView />;
}
````

## File: src/app/settings/page.tsx
````typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SettingsView } from "@/features/settings/ui/SettingsView";

export default async function SettingsPage() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <SettingsView />;
}
````

## File: src/features/auth/model/useLoginForm.ts
````typescript
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

export const useLoginForm = () => {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const handleEmailLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("로그인에 실패했습니다.", {
        description: "이메일 또는 비밀번호를 다시 확인해주세요.",
      });
      setIsLoading(false);
      return;
    }

    toast.success("로그인되었습니다.");
    router.push("/dashboard");
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error("Google 로그인 중 오류가 발생했습니다.");
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    modalType,
    setModalType,
    handleEmailLogin,
    handleGoogleLogin,
  };
};
````

## File: src/features/auth/model/useSignupForm.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { useSignupForm } from "./useSignupForm";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockSignUp = vi.fn();
const mockToastError = vi.fn();

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
  },
}));

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      signUp: mockSignUp,
    },
  }),
}));

describe("useSignupForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("약관 동의를 하지 않으면 회원가입 요청이 전송되지 않아야 한다", async () => {
    const { result } = renderHook(() => useSignupForm());

    act(() => {
      result.current.setEmail("newuser@example.com");
      result.current.setPassword("password123");
      result.current.setAgreed(false);
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleSignup(fakeEvent);
    });

    expect(mockSignUp).not.toHaveBeenCalled();
  });

  it("비밀번호가 8자 미만이면 회원가입 요청을 보내지 않고 토스트를 노출한다", async () => {
    const { result } = renderHook(() => useSignupForm());

    act(() => {
      result.current.setEmail("newuser@example.com");
      result.current.setPassword("1234567");
      result.current.setAgreed(true);
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleSignup(fakeEvent);
    });

    expect(mockToastError).toHaveBeenCalledWith(
      "비밀번호는 최소 8자 이상이어야 합니다.",
    );
    expect(mockSignUp).not.toHaveBeenCalled();
  });

  it("정상적인 입력 시 signUp 호출 후 isSent 상태가 true로 변경되어야 한다", async () => {
    mockSignUp.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useSignupForm());

    act(() => {
      result.current.setEmail("valid@example.com");
      result.current.setPassword("securepass123");
      result.current.setAgreed(true);
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleSignup(fakeEvent);
    });

    expect(mockSignUp).toHaveBeenCalled();
    expect(result.current.isSent).toBe(true);
  });
});
````

## File: src/features/calendar/model/useCalendarSchedules.ts
````typescript
"use client";

import { useMemo, useCallback } from "react";
import {
  useSchedulesQuery,
  useAddScheduleMutation,
  useUpdateScheduleMutation,
  useDeleteScheduleMutation,
} from "../api/useScheduleQuery";
import { ScheduleItem } from "./types";

export const useCalendarSchedules = (
  startDateStr: string,
  endDateStr: string,
) => {
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useSchedulesQuery(startDateStr, endDateStr);

  const addScheduleMutation = useAddScheduleMutation(startDateStr, endDateStr);
  const updateScheduleMutation = useUpdateScheduleMutation(
    startDateStr,
    endDateStr,
  );
  const deleteScheduleMutation = useDeleteScheduleMutation(
    startDateStr,
    endDateStr,
  );

  const schedulesMap = useMemo(() => {
    const map = new Map<string, ScheduleItem[]>();
    schedules.forEach((item) => {
      const existing = map.get(item.date_str) ?? [];
      const mappedItem: ScheduleItem = {
        id: item.schedule_id,
        title: item.title,
        time: item.time_str ?? undefined,
        color: item.color ?? undefined,
      };
      map.set(item.date_str, [...existing, mappedItem]);
    });
    return map;
  }, [schedules]);

  const addSchedule = useCallback(
    (params: {
      dateStr: string;
      title: string;
      time?: string;
      scheduleId?: string;
      color?: string;
    }) => {
      return addScheduleMutation.mutateAsync({
        ...params,
        scheduleId: params.scheduleId ?? crypto.randomUUID(),
      });
    },
    [addScheduleMutation],
  );

  const updateSchedule = useCallback(
    (params: {
      scheduleId: string;
      dateStr: string;
      title: string;
      time?: string;
      color?: string;
    }) => {
      return updateScheduleMutation.mutateAsync(params);
    },
    [updateScheduleMutation],
  );

  const deleteSchedule = useCallback(
    (scheduleId: string) => {
      return deleteScheduleMutation.mutateAsync({ scheduleId });
    },
    [deleteScheduleMutation],
  );

  return {
    schedules,
    schedulesMap,
    isLoading,
    isError,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    isSaving:
      addScheduleMutation.isPending ||
      updateScheduleMutation.isPending ||
      deleteScheduleMutation.isPending,
  };
};
````

## File: src/features/calendar/ui/ColorPalettePicker.tsx
````typescript
"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export const SCHEDULE_COLORS = [
  { id: "default", bg: "bg-primary", label: "기본" },
  { id: "green", bg: "bg-emerald-500", label: "초록" },
  { id: "yellow", bg: "bg-amber-500", label: "노랑" },
  { id: "purple", bg: "bg-purple-500", label: "보라" },
  { id: "red", bg: "bg-rose-500", label: "빨강" },
] as const;

export type ScheduleColorId = (typeof SCHEDULE_COLORS)[number]["id"];

interface ColorPalettePickerProps {
  selectedColor: string;
  onChange: (colorId: ScheduleColorId) => void;
  disabled?: boolean;
}

export const ColorPalettePicker = ({
  selectedColor,
  onChange,
  disabled = false,
}: ColorPalettePickerProps) => {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-muted-foreground">
        태그 색상
      </label>
      <div className="flex items-center gap-2">
        {SCHEDULE_COLORS.map((color) => {
          const isSelected = selectedColor === color.id;
          return (
            <button
              key={color.id}
              type="button"
              disabled={disabled}
              onClick={() => onChange(color.id)}
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none cursor-pointer",
                color.bg,
                isSelected && "ring-2 ring-offset-2 ring-primary scale-110",
              )}
              title={color.label}
              aria-label={color.label}
            >
              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
````

## File: src/features/clock-widget/ui/TimerControls.tsx
````typescript
"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Bell,
  BellOff,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";
import { memo } from "react";

interface TimerControlsProps {
  isRunning: boolean;
  isExpanded: boolean;
  isSoundEnabled: boolean;
  isNotificationEnabled: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onToggleSound: () => void;
  onToggleNotification: () => void;
}

export const TimerControls = memo(
  ({
    isRunning,
    isExpanded,
    isSoundEnabled,
    isNotificationEnabled,
    onToggleTimer,
    onResetTimer,
    onToggleSound,
    onToggleNotification,
  }: TimerControlsProps) => {
    return (
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-full px-1 overflow-hidden">
        <Button
          variant={isRunning ? "outline" : "primary"}
          size="sm"
          onClick={onToggleTimer}
          className={cn(
            "gap-1 font-semibold text-xs whitespace-nowrap shrink-0 transition-all",
            isExpanded ? "h-8 px-3 sm:h-10 sm:px-5 sm:text-sm" : "h-8 px-3",
          )}
        >
          {isRunning ? (
            <>
              <Pause
                className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
              />
              <span>일시정지</span>
            </>
          ) : (
            <>
              <Play
                className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
              />
              <span>시작</span>
            </>
          )}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onResetTimer}
          className={cn(
            "p-0 shrink-0 h-8 w-8",
            isExpanded && "sm:h-10 sm:w-10",
          )}
          title="타이머 리셋"
        >
          <RotateCcw
            className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
          />
        </Button>

        <Button
          variant={isSoundEnabled ? "secondary" : "ghost"}
          size="sm"
          onClick={onToggleSound}
          className={cn(
            "p-0 shrink-0 h-8 w-8",
            isExpanded && "sm:h-10 sm:w-10",
          )}
          title={isSoundEnabled ? "화이트 노이즈 끄기" : "화이트 노이즈 켜기"}
        >
          {isSoundEnabled ? (
            <Volume2
              className={cn(
                "w-3.5 h-3.5 text-primary",
                isExpanded && "sm:w-4 sm:h-4",
              )}
            />
          ) : (
            <VolumeX
              className={cn(
                "w-3.5 h-3.5 text-muted-foreground",
                isExpanded && "sm:w-4 sm:h-4",
              )}
            />
          )}
        </Button>

        <Button
          variant={isNotificationEnabled ? "secondary" : "ghost"}
          size="sm"
          onClick={onToggleNotification}
          className={cn(
            "p-0 shrink-0 h-8 w-8",
            isExpanded && "sm:h-10 sm:w-10",
          )}
          title={isNotificationEnabled ? "알림 끄기" : "알림 켜기"}
        >
          {isNotificationEnabled ? (
            <Bell
              className={cn(
                "w-3.5 h-3.5 text-primary",
                isExpanded && "sm:w-4 sm:h-4",
              )}
            />
          ) : (
            <BellOff
              className={cn(
                "w-3.5 h-3.5 text-muted-foreground",
                isExpanded && "sm:w-4 sm:h-4",
              )}
            />
          )}
        </Button>
      </div>
    );
  },
);

TimerControls.displayName = "TimerControls";
````

## File: src/features/clock-widget/ui/TimerPhaseSelector.tsx
````typescript
"use client";

import { cn } from "@/shared/lib/utils";
import { TimerPhase } from "../model/useClockStore";
import { memo } from "react";

interface TimerPhaseSelectorProps {
  timerPhase: TimerPhase;
  isExpanded: boolean;
  onSwitchPhase: (phase: TimerPhase) => void;
}

export const TimerPhaseSelector = memo(
  ({ timerPhase, isExpanded, onSwitchPhase }: TimerPhaseSelectorProps) => {
    return (
      <div className="flex items-center gap-1.5 text-xs">
        <button
          type="button"
          onClick={() => onSwitchPhase("work")}
          className={cn(
            "rounded-full font-semibold transition-all cursor-pointer px-2.5 py-1 text-xs",
            isExpanded && "sm:px-4 sm:py-1.5 sm:text-sm",
            timerPhase === "work"
              ? "bg-primary text-primary-foreground shadow-2xs"
              : "bg-muted text-muted-foreground hover:text-foreground",
          )}
        >
          집중 (25m)
        </button>
        <button
          type="button"
          onClick={() => onSwitchPhase("break")}
          className={cn(
            "rounded-full font-semibold transition-all cursor-pointer px-2.5 py-1 text-xs",
            isExpanded && "sm:px-4 sm:py-1.5 sm:text-sm",
            timerPhase === "break"
              ? "bg-emerald-600 text-white shadow-2xs"
              : "bg-muted text-muted-foreground hover:text-foreground",
          )}
        >
          휴식 (5m)
        </button>
      </div>
    );
  },
);

TimerPhaseSelector.displayName = "TimerPhaseSelector";
````

## File: src/features/dashboard-filter/model/useFilterStore.ts
````typescript
import { WidgetType } from "@/widgets/dashboard-grid/config/widgets.config";
import { create } from "zustand";

export type TodoStatusFilter = "all" | "active" | "completed";
export type DateRangePreset = "all" | "today" | "week" | "month" | "custom";

interface FilterState {
  isOpen: boolean;
  searchQuery: string;
  selectedWidgetType: WidgetType | "all";
  todoStatus: TodoStatusFilter;
  datePreset: DateRangePreset;
  startDate: string | null;
  endDate: string | null;
  toggleFilter: () => void;
  setSearchQuery: (query: string) => void;
  setSelectedWidgetType: (type: WidgetType | "all") => void;
  setTodoStatus: (status: TodoStatusFilter) => void;
  setDatePreset: (preset: DateRangePreset) => void;
  setCustomDateRange: (
    startDate: string | null,
    endDate: string | null,
  ) => void;
  resetFilter: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  isOpen: false,
  searchQuery: "",
  selectedWidgetType: "all",
  todoStatus: "all",
  datePreset: "all",
  startDate: null,
  endDate: null,
  toggleFilter: () => set((state) => ({ isOpen: !state.isOpen })),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedWidgetType: (selectedWidgetType) => set({ selectedWidgetType }),
  setTodoStatus: (todoStatus) => set({ todoStatus }),
  setDatePreset: (datePreset) =>
    set({
      datePreset,
      ...(datePreset !== "custom" && { startDate: null, endDate: null }),
    }),
  setCustomDateRange: (startDate, endDate) =>
    set({ datePreset: "custom", startDate, endDate }),
  resetFilter: () =>
    set({
      searchQuery: "",
      selectedWidgetType: "all",
      todoStatus: "all",
      datePreset: "all",
      startDate: null,
      endDate: null,
    }),
}));

export const selectIsFilterActive = (state: FilterState) =>
  state.searchQuery !== "" ||
  state.selectedWidgetType !== "all" ||
  state.todoStatus !== "all" ||
  state.datePreset !== "all";
````

## File: src/features/dashboard-filter/ui/TodoStatusFilterGroup.tsx
````typescript
import { cn } from "@/shared/lib/utils";
import { TodoStatusFilter } from "../model/useFilterStore";

interface TodoStatusFilterGroupProps {
  status: TodoStatusFilter;
  onSelect: (status: TodoStatusFilter) => void;
}

const STATUS_OPTIONS: { id: TodoStatusFilter; label: string }[] = [
  { id: "all", label: "전체 항목" },
  { id: "active", label: "진행 중" },
  { id: "completed", label: "완료됨" },
];

export const TodoStatusFilterGroup = ({
  status,
  onSelect,
}: TodoStatusFilterGroupProps) => {
  return (
    <div className="flex items-center bg-muted/50 p-1 rounded-lg text-xs border gap-1 shrink-0 whitespace-nowrap">
      {STATUS_OPTIONS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className={cn(
            "px-2.5 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap",
            status === item.id
              ? "bg-background font-semibold text-foreground shadow-2xs"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
````

## File: src/features/dashboard-filter/ui/WidgetTypeFilterGroup.tsx
````typescript
import { cn } from "@/shared/lib/utils";
import {
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";

interface WidgetTypeFilterGroupProps {
  selectedType: WidgetType | "all";
  onSelect: (type: WidgetType | "all") => void;
}

export const WidgetTypeFilterGroup = ({
  selectedType,
  onSelect,
}: WidgetTypeFilterGroupProps) => {
  return (
    <div className="flex items-center bg-muted/50 p-1 rounded-lg text-xs border gap-1 shrink-0 whitespace-nowrap">
      <button
        type="button"
        onClick={() => onSelect("all")}
        className={cn(
          "px-2.5 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap cursor-pointer h-7 flex items-center justify-center",
          selectedType === "all"
            ? "bg-background font-semibold text-foreground shadow-2xs"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        전체 위젯
      </button>

      {WIDGET_OPTIONS.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.type}
            type="button"
            onClick={() => onSelect(item.type)}
            className={cn(
              "flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap cursor-pointer h-7",
              selectedType === item.type
                ? "bg-background font-semibold text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>{item.title}</span>
          </button>
        );
      })}
    </div>
  );
};
````

## File: src/features/todo-widget/ui/TodoProgress.tsx
````typescript
interface TodoProgressProps {
  percent: number;
}

export const TodoProgress = ({ percent }: TodoProgressProps) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground font-medium">
        <span>진행률</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary h-2 transition-all duration-300 ease-in-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
````

## File: src/shared/ui/button/Button.tsx
````typescript
"use client";

import { cn } from "@/shared/lib/utils";
import React, { memo } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button = memo(
  ({
    variant = "primary",
    size = "md",
    isLoading = false,
    className = "",
    disabled,
    children,
    ref,
    ...props
  }: ButtonProps) => {
    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-2xs",
      secondary:
        "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-2xs",
      ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
      danger:
        "bg-destructive text-destructive-foreground hover:opacity-90 shadow-2xs",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs font-medium rounded-lg gap-1.5 min-w-[60px]",
      md: "h-9 px-4 text-xs font-semibold rounded-lg gap-1.5 min-w-[72px]",
      lg: "h-11 px-5 text-sm font-semibold rounded-xl gap-2 min-w-[84px]",
    };

    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
        ) : null}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
````

## File: src/styles/globals.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --destructive: 0 84.2% 60.2%;
    --border: 214.3 31.8% 91.4%;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 9.8%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 9.8%;
    --popover-foreground: 210 40% 98%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 62.8% 30.6%;
    --border: 217.2 32.6% 17.5%;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-color: hsl(var(--border));
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

button,
[role="button"],
input[type="button"],
input[type="submit"],
input[type="reset"] {
  cursor: pointer;
}

button:disabled,
[role="button"]:disabled {
  cursor: not-allowed;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
````

## File: src/widgets/dashboard-grid/ui/DashboardEmptyState.tsx
````typescript
"use client";

import { ChevronDown, LayoutGrid, Plus, SearchX } from "lucide-react";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "../config/widgets.config";
import { useAddWidgetMutation } from "../api/useDashboardQuery";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
  DropdownItem,
} from "@/shared/ui/dropdown/Dropdown";
import { Button } from "@/shared/ui/button";

interface DashboardEmptyProps {
  onAddWidget?: (type: WidgetType) => void;
}

export const DashboardEmpty = ({ onAddWidget }: DashboardEmptyProps) => {
  const addWidgetMutation = useAddWidgetMutation();

  const handleAddWidget = (type: WidgetType) => {
    if (onAddWidget) {
      onAddWidget(type);
      return;
    }

    const config = WIDGET_CONFIG_MAP[type];
    if (!config) return;

    addWidgetMutation.mutate({
      type: config.type,
      title: config.title,
      layout_w: 1,
      widgetId: crypto.randomUUID(),
    });
  };

  return (
    <div className="border-2 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4 bg-background/50 my-4">
      <div className="p-3 bg-primary/10 text-primary rounded-xl">
        <LayoutGrid className="w-8 h-8" />
      </div>
      <div className="space-y-1 max-w-sm">
        <h3 className="font-semibold text-base">배치된 위젯이 없습니다</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          상단의 &quot;위젯 추가&quot; 메뉴 또는 아래 버튼을 눌러 나만의
          대시보드를 채워보세요.
        </p>
      </div>

      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="primary"
            size="md"
            className="gap-1.5"
            disabled={addWidgetMutation.isPending}
          >
            <Plus className="w-4 h-4" />
            <span>첫 위젯 추가하기</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </Button>
        </DropdownTrigger>

        <DropdownContent align="left">
          {WIDGET_OPTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownItem
                key={item.type}
                onClick={() => handleAddWidget(item.type)}
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{item.title}</span>
              </DropdownItem>
            );
          })}
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

interface DashboardSearchEmptyProps {
  onResetFilter: () => void;
}

export const DashboardSearchEmpty = ({
  onResetFilter,
}: DashboardSearchEmptyProps) => {
  return (
    <div className="border-2 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4 bg-background/30 my-4">
      <div className="p-3 bg-muted text-muted-foreground rounded-xl">
        <SearchX className="w-8 h-8" />
      </div>
      <div className="space-y-1 max-w-sm">
        <h3 className="font-semibold text-base">검색 결과가 없습니다</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          필터 조건이나 검색어를 변경하여 다시 검색해보세요
        </p>
      </div>
      <Button variant="outline" size="md" onClick={onResetFilter}>
        필터 조건 초기화
      </Button>
    </div>
  );
};
````

## File: src/widgets/dashboard-grid/ui/WidgetContentRenderer.tsx
````typescript
import { memo } from "react";
import { WidgetRow } from "../api/dashboardRepository";
import { ClockWidget } from "@/features/clock-widget/ui/ClockWidget";
import { DDayWidget } from "@/features/dday-widget/ui/DDayWidget";
import { MemoWidget } from "@/features/memo-widget/ui/MemoWidget";
import { TodoWidget } from "@/features/todo-widget";

interface WidgetContentRendererProps {
  widget: WidgetRow;
}

export const WidgetContentRenderer = memo(
  ({ widget }: WidgetContentRendererProps) => {
    const isExpanded = widget.layout_w === 2;

    switch (widget.type) {
      case "todo":
        return (
          <TodoWidget widgetId={widget.widget_id} isExpanded={isExpanded} />
        );
      case "clock":
        return (
          <ClockWidget widgetId={widget.widget_id} isExpanded={isExpanded} />
        );
      case "dday":
        return (
          <DDayWidget widgetId={widget.widget_id} isExpanded={isExpanded} />
        );
      case "memo":
        return (
          <MemoWidget widgetId={widget.widget_id} isExpanded={isExpanded} />
        );
      default:
        return (
          <div className="p-4 text-xs text-muted-foreground text-center">
            지원하지 않는 위젯 타입입니다.
          </div>
        );
    }
  },
);

WidgetContentRenderer.displayName = "WidgetContentRenderer";
````

## File: src/widgets/header/ui/AppHeader.tsx
````typescript
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./UserDropdown";
import { useCommandPaletteStore } from "@/features/command-palette/model/useCommandPaletteStore";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { Calendar, LayoutGrid, Search } from "lucide-react";
import { ThemeToggle } from "@/shared/ui/theme-toggle/ThemeToggle";

interface AppHeaderProps {
  userEmail?: string;
  avatarUrl?: string;
  children?: React.ReactNode;
  showSearchButton?: boolean;
}

export const AppHeader = ({
  userEmail,
  avatarUrl,
  children,
  showSearchButton,
}: AppHeaderProps) => {
  const pathname = usePathname();
  const toggleCommandPalette = useCommandPaletteStore((s) => s.toggle);

  const isDashboard = pathname.startsWith("/dashboard");
  const isCalendar = pathname.startsWith("/calendar");

  const shouldShowSearch = showSearchButton ?? isDashboard;

  return (
    <header className="px-4 sm:px-6 h-16 flex items-center justify-between gap-4 border-b bg-background/80 backdrop-blur-md sticky top-0 z-40 w-full">
      <div className="flex items-center gap-4 sm:gap-6">
        <Link href="/dashboard" className="flex items-center gap-2 shrink-0">
          <div className="p-1.5 bg-primary text-primary-foreground rounded-lg">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-base tracking-tight hidden sm:inline-block text-foreground">
            DashCraft
          </span>
        </Link>

        <nav className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl border border-border/50">
          <Link href="/dashboard">
            <Button
              variant={isDashboard ? "primary" : "ghost"}
              size="sm"
              className={cn(
                "h-8 px-2.5 text-xs gap-1.5 rounded-lg",
                !isDashboard && "text-muted-foreground hover:text-foreground",
              )}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">대시보드</span>
            </Button>
          </Link>

          <Link href="/calendar">
            <Button
              variant={isCalendar ? "primary" : "ghost"}
              size="sm"
              className={cn(
                "h-8 px-2.5 text-xs gap-1.5 rounded-lg",
                !isCalendar && "text-muted-foreground hover:text-foreground",
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">캘린더</span>
            </Button>
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        {children}

        {shouldShowSearch && (
          <Button
            variant="outline"
            size="sm"
            onClick={toggleCommandPalette}
            className="h-9 px-2.5 text-xs gap-2 text-muted-foreground hidden md:flex items-center cursor-pointer"
            title="빠른 명령 실행 (⌘K)"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted rounded border border-border">
              ⌘K
            </kbd>
          </Button>
        )}

        <ThemeToggle />

        <UserDropdown userEmail={userEmail} avatarUrl={avatarUrl} />
      </div>
    </header>
  );
};
````

## File: src/widgets/landing/ui/LandingFeatures.tsx
````typescript
import { LayoutGrid, Maximize2, Move } from "lucide-react";

const FEATURES = [
  {
    icon: Move,
    title: "자유로운 드래그 앤 드롭",
    description:
      "위젯의 위치를 마우스 클릭만으로 자유롭게 변경하세요. 변경된 순서는 자동으로 저장됩니다.",
  },
  {
    icon: Maximize2,
    title: "반응형 크기 조절",
    description:
      "컨텐츠의 중요도에 따라 1x1 또는 2x2 사이즈로 위젯 카드의 크기를 확장할 수 있습니다.",
  },
  {
    icon: LayoutGrid,
    title: "독립적인 Multi-Instance",
    description:
      "동일한 타입의 위젯을 여러 개 추가해도 서로 독립된 데이터와 고유한 타이틀을 유지합니다.",
  },
];

export const LandingFeatures = () => {
  return (
    <section className="border-t bg-muted/30 py-20 w-full select-none">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            DashCraft가 제공하는 핵심 기능
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            생산성을 높이기 위한 유연하고 직관적인 도구들
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-xl border bg-card space-y-3"
              >
                <div className="p-2.5 bg-primary/10 text-primary w-fit rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
````

## File: src/widgets/landing/ui/LandingFooter.tsx
````typescript
export const LandingFooter = () => {
  return (
    <footer className="border-t py-8 text-center text-xs text-muted-foreground w-full select-none">
      <div className="mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span suppressHydrationWarning>
          &copy; {new Date().getFullYear()} DashCraft. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
````

## File: tailwind.config.ts
````typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pretendard)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        destructive: "hsl(var(--destructive))",
      },
    },
  },
  plugins: [],
};

export default config;
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import { CommandPalette } from "@/features/command-palette/ui/CommandPalette";
import Providers from "./providers";

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DashCraft",
  description: "Customizable Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
          <CommandPalette />
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}
````

## File: src/features/auth/model/useResetPasswordForm.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { useResetPasswordForm } from "./useResetPasswordForm";

const mockGetSession = vi.fn();
const mockUpdateUser = vi.fn();
const mockSignOut = vi.fn();

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      getSession: mockGetSession,
      updateUser: mockUpdateUser,
      signOut: mockSignOut,
    },
  }),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

type SubmitEventType = Parameters<
  ReturnType<typeof useResetPasswordForm>["handleResetPassword"]
>[0];

describe("useResetPasswordForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGetSession.mockResolvedValue({
      data: { session: { user: { id: "test-user-id" } } },
    });
  });

  const createFakeEvent = (): SubmitEventType =>
    ({
      preventDefault: vi.fn(),
    }) as unknown as SubmitEventType;

  it("비밀번호가 8자 미만이면 에러 토스트가 노출되어야 한다", async () => {
    const { result } = renderHook(() => useResetPasswordForm());

    await act(async () => {});

    act(() => {
      result.current.setPassword("12345");
      result.current.setConfirmPassword("12345");
    });

    const fakeEvent = createFakeEvent();

    await act(async () => {
      await result.current.handleResetPassword(fakeEvent);
    });

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
  });

  it("비밀번호와 비밀번호 확인이 일치하지 않으면 에러 토스트가 노출되어야 한다", async () => {
    const { result } = renderHook(() => useResetPasswordForm());

    await act(async () => {});

    act(() => {
      result.current.setPassword("password123");
      result.current.setConfirmPassword("different123");
    });

    const fakeEvent = createFakeEvent();

    await act(async () => {
      await result.current.handleResetPassword(fakeEvent);
    });

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
  });
});
````

## File: src/features/auth/model/useResetPasswordForm.ts
````typescript
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

export const useResetPasswordForm = () => {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!isMounted) return;

      if (!session) {
        toast.error("유효한 비밀번호 재설정 세션이 없습니다.", {
          description: "비밀번호 재설정 링크를 다시 요청해 주세요.",
        });
        router.replace("/forgot-password");
      } else {
        setIsCheckingSession(false);
      }
    };

    void checkSession();

    return () => {
      isMounted = false;
    };
  }, [supabase, router]);

  const handleResetPassword = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    setIsLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setIsLoading(false);
      toast.error("비밀번호 변경 실패", { description: error.message });
      return;
    }

    toast.success(
      "비밀번호가 성공적으로 변경되었습니다. 다시 로그인해 주세요.",
    );
    await supabase.auth.signOut();
    setIsLoading(false);
    router.push("/login");
    router.refresh();
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    isCheckingSession,
    handleResetPassword,
  };
};
````

## File: src/features/auth/ui/AuthFormView.tsx
````typescript
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { AuthCard } from "./AuthCard";
import { TermsModal } from "./TermsModal";
import { useLoginForm } from "../model/useLoginForm";
import { Mail, Lock } from "lucide-react";

export const AuthFormView = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    modalType,
    setModalType,
    handleEmailLogin,
    handleGoogleLogin,
  } = useLoginForm();

  return (
    <>
      <AuthCard
        title="DashCraft 로그인"
        subtitle="워크스페이스에 접속하여 대시보드를 이어서 사용하세요"
        footer={
          <div className="space-y-2">
            <p className="text-[11px] text-muted-foreground">
              계정이 없으신가요?{" "}
              <Link
                href="/signup"
                className="text-primary font-semibold hover:underline"
              >
                회원가입
              </Link>
            </p>
            <p className="text-[10px] text-muted-foreground/80 leading-tight">
              로그인 시 DashCraft의{" "}
              <button
                type="button"
                onClick={() => setModalType("terms")}
                className="underline underline-offset-2 hover:text-foreground"
              >
                이용약관
              </button>{" "}
              및{" "}
              <button
                type="button"
                onClick={() => setModalType("privacy")}
                className="underline underline-offset-2 hover:text-foreground"
              >
                개인정보처리방침
              </button>
              에 동의하게 됩니다.
            </p>
          </div>
        }
      >
        <form onSubmit={handleEmailLogin} className="space-y-3.5">
          <Input
            id="email"
            name="email"
            label="이메일"
            type="email"
            required
            icon={Mail}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="name@example.com"
          />

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground">
                비밀번호
              </span>
              <Link
                href="/forgot-password"
                className="text-[11px] text-primary hover:underline font-medium"
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              label="비밀번호"
              type="password"
              required
              icon={Lock}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="••••••••"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isLoading}
            isLoading={isLoading}
            className="w-full text-xs h-9"
          >
            로그인
          </Button>
        </form>

        <div className="relative flex items-center justify-center border-t my-4">
          <span className="bg-background px-2 text-[10px] text-muted-foreground absolute font-mono">
            OR
          </span>
        </div>

        <Button
          type="button"
          variant="outline"
          size="md"
          disabled={isLoading}
          onClick={handleGoogleLogin}
          className="w-full text-xs h-9 gap-2"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Google 계정으로 계속하기</span>
        </Button>
      </AuthCard>

      <TermsModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </>
  );
};
````

## File: src/features/calendar/ui/CalendarCell.tsx
````typescript
"use client";

import { memo } from "react";
import { ScheduleItem } from "../model/types";
import { SCHEDULE_COLOR_STYLES } from "../model/constants";
import { getKoreanHolidayInfo } from "../lib/holidays";
import { cn } from "@/shared/lib/utils";
import { Trash2 } from "lucide-react";

interface CalendarCellProps {
  date: Date;
  dateStr: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  daySchedules: ScheduleItem[];
  onSelectDate: (dateStr: string) => void;
  onOpenModal: (dateStr: string) => void;
  onOpenPopover: (dateStr: string) => void;
  onEditSchedule: (dateStr: string, schedule: ScheduleItem) => void;
  onRemoveSchedule: (dateStr: string, id: string) => void;
}

export const CalendarCell = memo(
  ({
    date,
    dateStr,
    isCurrentMonth,
    isToday,
    isSelected,
    daySchedules,
    onSelectDate,
    onOpenModal,
    onOpenPopover,
    onEditSchedule,
    onRemoveSchedule,
  }: CalendarCellProps) => {
    const dayOfWeek = date.getDay();
    const isSunday = dayOfWeek === 0;
    const isSaturday = dayOfWeek === 6;
    const holidayInfo = getKoreanHolidayInfo(date);
    const isHoliday = isSunday || Boolean(holidayInfo);

    const visibleSchedules = daySchedules.slice(0, 2);
    const hiddenCount = daySchedules.length - 2;

    return (
      <div
        onClick={() => {
          onSelectDate(dateStr);
          if (window.innerWidth >= 640) {
            onOpenModal(dateStr);
          }
        }}
        className={cn(
          "min-h-[56px] sm:min-h-[110px] p-1 sm:p-1.5 flex flex-col justify-between transition-colors select-none cursor-pointer hover:bg-accent/30 active:bg-accent/50 border-r border-b border-border/60 relative",
          !isCurrentMonth && "bg-muted/10 opacity-40",
          isSelected && "bg-primary/5 ring-2 ring-primary ring-inset",
        )}
      >
        <div className="flex items-center justify-between gap-0.5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 min-w-0">
            <span
              className={cn(
                "text-[11px] sm:text-xs font-medium w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full shrink-0",
                isToday && "bg-primary text-primary-foreground font-bold",
                !isToday && isHoliday && "text-rose-500 font-bold",
                !isToday &&
                  !isHoliday &&
                  isSaturday &&
                  "text-blue-500 font-bold",
              )}
            >
              {date.getDate()}
            </span>

            {holidayInfo && (
              <span className="text-[9px] sm:text-[10px] text-rose-500 font-semibold truncate leading-none hidden sm:inline">
                {holidayInfo.name}
              </span>
            )}
          </div>
        </div>

        {daySchedules.length > 0 && (
          <div className="flex sm:hidden items-center justify-center gap-0.5 mt-auto pb-0.5">
            {daySchedules.slice(0, 3).map((item) => {
              const style =
                SCHEDULE_COLOR_STYLES[item.color || "default"] ||
                SCHEDULE_COLOR_STYLES.default;
              return (
                <span
                  key={item.id}
                  className={cn("w-1.5 h-1.5 rounded-full", style.dot)}
                />
              );
            })}
            {daySchedules.length > 3 && (
              <span className="text-[8px] font-bold text-muted-foreground leading-none">
                +
              </span>
            )}
          </div>
        )}

        <div className="hidden sm:block space-y-1 my-1 flex-1 overflow-hidden">
          {visibleSchedules.map((item) => {
            const style =
              SCHEDULE_COLOR_STYLES[item.color || "default"] ||
              SCHEDULE_COLOR_STYLES.default;

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onEditSchedule(dateStr, item);
                }}
                className={cn(
                  "text-[11px] border px-1.5 py-0.5 rounded truncate font-medium flex items-center justify-between group/item transition-colors",
                  style.bg,
                  style.text,
                  style.border,
                )}
              >
                <div className="flex items-center gap-1 min-w-0 truncate">
                  {item.time && (
                    <span
                      className={cn(
                        "px-1 py-0.2 text-[10px] font-mono font-semibold rounded shrink-0",
                        style.timeBg,
                      )}
                    >
                      {item.time}
                    </span>
                  )}
                  <span className="truncate font-normal">{item.title}</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveSchedule(dateStr, item.id);
                  }}
                  className="inline-flex text-rose-500 hover:text-rose-700 ml-1 shrink-0 cursor-pointer p-0.5"
                  title="삭제"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            );
          })}

          {hiddenCount > 0 && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                onOpenPopover(dateStr);
              }}
              className="text-[10px] font-semibold text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded hover:bg-muted/80 transition-colors truncate cursor-pointer"
            >
              +{hiddenCount}개 더보기
            </div>
          )}
        </div>
      </div>
    );
  },
);

CalendarCell.displayName = "CalendarCell";
````

## File: src/features/calendar/ui/ScheduleModal.tsx
````typescript
"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "@/shared/ui/modal";
import { Button } from "@/shared/ui/button";
import { TimePickerInput } from "./TimePickerInput";
import { ColorPalettePicker, ScheduleColorId } from "./ColorPalettePicker";
import { ScheduleRow } from "../api/scheduleRepository";
import { Trash2 } from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  selectedDateStr: string;
  scheduleToEdit: ScheduleRow | null;
  isSaving: boolean;
  onClose: () => void;
  onSave: (params: {
    scheduleId?: string;
    dateStr: string;
    title: string;
    time?: string;
    color?: string;
  }) => Promise<void>;
  onDelete?: (scheduleId: string) => Promise<void>;
}

export const ScheduleModal = ({
  isOpen,
  selectedDateStr,
  scheduleToEdit,
  isSaving,
  onClose,
  onSave,
  onDelete,
}: ScheduleModalProps) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState<ScheduleColorId>("default");

  useEffect(() => {
    if (scheduleToEdit) {
      setTitle(scheduleToEdit.title);
      setTime(scheduleToEdit.time_str || "");
      setColor((scheduleToEdit.color as ScheduleColorId) || "default");
    } else {
      setTitle("");
      setTime("");
      setColor("default");
    }
  }, [scheduleToEdit, isOpen]);

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    if (!title.trim()) return;

    await onSave({
      scheduleId: scheduleToEdit?.schedule_id,
      dateStr: selectedDateStr,
      title: title.trim(),
      time: time || undefined,
      color,
    });
    onClose();
  };

  const handleDelete = async () => {
    if (scheduleToEdit && onDelete) {
      await onDelete(scheduleToEdit.schedule_id);
      onClose();
    }
  };

  const isEditMode = Boolean(scheduleToEdit);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "일정 수정" : "새 일정 추가"}
      description={`${selectedDateStr} 날짜의 일정을 관리합니다.`}
      footer={
        <div className="flex items-center justify-between w-full">
          {isEditMode && onDelete ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDelete}
              disabled={isSaving}
              className="text-destructive hover:bg-destructive/10 border-destructive/30"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>삭제</span>
            </Button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              disabled={isSaving}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleSubmit}
              isLoading={isSaving}
              disabled={!title.trim() || isSaving}
            >
              {isEditMode ? "저장" : "추가"}
            </Button>
          </div>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4 pt-1">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground">
            일정 제목 <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="예: 팀 주간 회의"
            autoFocus
            className="w-full px-3 py-2 text-xs bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <TimePickerInput value={time} onChange={setTime} disabled={isSaving} />

        <ColorPalettePicker
          selectedColor={color}
          onChange={setColor}
          disabled={isSaving}
        />
      </form>
    </Modal>
  );
};
````

## File: src/features/clock-widget/ui/ClockDisplay.tsx
````typescript
"use client";

import React, { useEffect, memo, useRef } from "react";
import {
  formatDateParts,
  formatTimeToTimeString,
} from "@/shared/lib/formatters";

interface ClockDisplayProps {
  isExpanded?: boolean;
}

export const ClockDisplay = memo(
  ({ isExpanded }: ClockDisplayProps) => {
    const dateRef = useRef<HTMLSpanElement>(null);
    const dayRef = useRef<HTMLSpanElement>(null);
    const timeRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      const updateClock = () => {
        const now = new Date();
        const { dateString, dayOfWeek } = formatDateParts(now);
        const timeString = formatTimeToTimeString(now);

        if (dateRef.current) dateRef.current.textContent = dateString;
        if (dayRef.current) dayRef.current.textContent = dayOfWeek;
        if (timeRef.current) timeRef.current.textContent = timeString;
      };

      updateClock();
      const interval = setInterval(updateClock, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex flex-col items-center justify-center my-auto space-y-3 select-none text-center">
        <p
          className={
            isExpanded
              ? "font-semibold text-muted-foreground tracking-wide transition-all flex items-center gap-1.5 text-lg sm:text-xl"
              : "font-semibold text-muted-foreground tracking-wide transition-all flex items-center gap-1.5 text-xs sm:text-sm"
          }
        >
          <span ref={dateRef} />
          <span
            ref={dayRef}
            className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md"
          />
        </p>

        <p
          ref={timeRef}
          className={
            isExpanded
              ? "font-black tracking-tight tabular-nums text-foreground drop-shadow-sm transition-all text-7xl sm:text-8xl lg:text-9xl"
              : "font-black tracking-tight tabular-nums text-foreground drop-shadow-sm transition-all text-5xl sm:text-6xl"
          }
        />
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.isExpanded === nextProps.isExpanded,
);

ClockDisplay.displayName = "ClockDisplay";
````

## File: src/features/clock-widget/ui/ClockWidget.tsx
````typescript
"use client";

import { Button } from "@/shared/ui/button";
import { useClockStore } from "../model/useClockStore";
import { Clock, Timer } from "lucide-react";
import { ClockDisplay } from "./ClockDisplay";
import { TimerDisplay } from "./TimerDisplay";
import { cn } from "@/shared/lib/utils";
import { memo } from "react";

interface ClockWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const ClockWidget = memo(
  ({ widgetId, isExpanded = false }: ClockWidgetProps) => {
    const mode = useClockStore((s) => s.states[widgetId]?.mode ?? "clock");
    const setMode = useClockStore((s) => s.setMode);

    return (
      <div className="flex flex-col h-full items-center justify-center relative py-2 px-1">
        <div
          className={cn(
            "flex items-center justify-center gap-1 bg-muted/50 p-1 rounded-xl border shrink-0 transition-all mb-2",
            isExpanded && "mb-3 sm:mb-4 sm:p-1.5",
          )}
        >
          <Button
            variant={mode === "clock" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setMode(widgetId, "clock")}
            className={cn(
              "h-7 px-2.5 text-xs gap-1",
              isExpanded && "sm:h-9 sm:px-4 sm:text-sm sm:gap-1.5",
            )}
          >
            <Clock
              className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
            />
            <span>시계</span>
          </Button>
          <Button
            variant={mode === "timer" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setMode(widgetId, "timer")}
            className={cn(
              "h-7 px-2.5 text-xs gap-1",
              isExpanded && "sm:h-9 sm:px-4 sm:text-sm sm:gap-1.5",
            )}
          >
            <Timer
              className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
            />
            <span>뽀모도로</span>
          </Button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center w-full">
          {mode === "clock" ? (
            <ClockDisplay isExpanded={isExpanded} />
          ) : (
            <TimerDisplay widgetId={widgetId} isExpanded={isExpanded} />
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.widgetId === nextProps.widgetId &&
    prevProps.isExpanded === nextProps.isExpanded,
);

ClockWidget.displayName = "ClockWidget";
````

## File: src/features/clock-widget/ui/TimerDisplay.tsx
````typescript
"use client";

import { cn } from "@/shared/lib/utils";
import { formatSecondsToMMSS } from "@/shared/lib/formatters";
import { usePomodoroTimer } from "../model/usePomodoroTimer";
import { TimerPhaseSelector } from "./TimerPhaseSelector";
import { TimerControls } from "./TimerControls";
import { memo, useEffect, useRef } from "react";

interface TimerDisplayProps {
  widgetId: string;
  isExpanded: boolean;
}

export const TimerDisplay = memo(
  ({ widgetId, isExpanded }: TimerDisplayProps) => {
    const {
      timerPhase,
      timeLeft,
      isRunning,
      targetEndTime,
      isSoundEnabled,
      isNotificationEnabled,
      toggleTimer,
      resetTimer,
      switchPhase,
      toggleSound,
      handleNotificationToggle,
    } = usePomodoroTimer(widgetId);

    const timeRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      if (!isRunning || !targetEndTime) {
        if (timeRef.current) {
          timeRef.current.textContent = formatSecondsToMMSS(timeLeft);
        }
        return;
      }

      const updateExactTimer = () => {
        const now = Date.now();
        const remaining = Math.max(0, Math.round((targetEndTime - now) / 1000));

        if (timeRef.current) {
          timeRef.current.textContent = formatSecondsToMMSS(remaining);
        }
      };

      updateExactTimer();
      const interval = setInterval(updateExactTimer, 1000);

      return () => clearInterval(interval);
    }, [isRunning, targetEndTime, timeLeft]);

    return (
      <div
        className={cn(
          "flex flex-col items-center justify-between my-auto select-none transition-all w-full h-full pt-1 pb-0.5",
          isExpanded ? "space-y-6" : "space-y-2",
        )}
      >
        <TimerPhaseSelector
          timerPhase={timerPhase}
          isExpanded={isExpanded}
          onSwitchPhase={switchPhase}
        />

        <p
          ref={timeRef}
          className={cn(
            "font-black tracking-tight tabular-nums text-foreground drop-shadow-xs transition-all my-auto",
            isExpanded ? "text-7xl sm:text-8xl" : "text-4xl sm:text-[46px]",
          )}
        >
          {formatSecondsToMMSS(timeLeft)}
        </p>

        <TimerControls
          isRunning={isRunning}
          isExpanded={isExpanded}
          isSoundEnabled={isSoundEnabled}
          isNotificationEnabled={isNotificationEnabled}
          onToggleTimer={toggleTimer}
          onResetTimer={resetTimer}
          onToggleSound={toggleSound}
          onToggleNotification={handleNotificationToggle}
        />
      </div>
    );
  },
  (prev, next) =>
    prev.widgetId === next.widgetId && prev.isExpanded === next.isExpanded,
);

TimerDisplay.displayName = "TimerDisplay";
````

## File: src/features/command-palette/model/useCommandPalette.ts
````typescript
"use client";

import { useEffect } from "react";
import { useCommandPaletteStore } from "./useCommandPaletteStore";
import { usePathname } from "next/navigation";

export const useCommandPalette = () => {
  const { isOpen, setIsOpen, toggle } = useCommandPaletteStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!pathname.startsWith("/dashboard")) return;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggle, setIsOpen, pathname]);

  return { isOpen, setIsOpen, toggle };
};
````

## File: src/features/dday-widget/api/useDDayQuery.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ddayRepository, DDayRow } from "./ddayRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";

interface AddDDayParams {
  title: string;
  targetDate: string;
  ddayId: string;
}

export const useDDaysQuery = (widgetId: string) => {
  return useQuery({
    queryKey: queryKeys.ddays.byWidget(widgetId),
    queryFn: () => ddayRepository.fetchDDays(widgetId),
    enabled: Boolean(widgetId),
  });
};

export const useAddDDayMutation = (widgetId: string) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.ddays.byWidget(widgetId);

  return useMutation(
    createOptimisticMutation<DDayRow, AddDDayParams, DDayRow[]>({
      queryClient,
      queryKey,
      mutationFn: ({ title, targetDate, ddayId }) =>
        ddayRepository.insertDDay({
          widget_id: widgetId,
          dday_id: ddayId,
          title,
          target_date: targetDate,
        }),
      updateCache: (oldDDays = [], { title, targetDate, ddayId }) => {
        const optimisticDDay: DDayRow = {
          id: crypto.randomUUID(),
          user_id: "",
          widget_id: widgetId,
          dday_id: ddayId,
          title,
          target_date: targetDate,
          created_at: new Date().toISOString(),
        };
        return [...oldDDays, optimisticDDay];
      },
      errorMessage: "D-Day 추가 실패",
    }),
  );
};

export const useDeleteDDayMutation = (widgetId: string) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.ddays.byWidget(widgetId);

  return useMutation(
    createOptimisticMutation<void, string, DDayRow[]>({
      queryClient,
      queryKey,
      mutationFn: (ddayId: string) =>
        ddayRepository.deleteDDay(widgetId, ddayId),
      updateCache: (oldDDays = [], ddayId) =>
        oldDDays.filter((d) => d.dday_id !== ddayId),
      errorMessage: "D-Day 삭제 실패",
    }),
  );
};
````

## File: src/features/profile/model/useProfileAvatar.test.ts
````typescript
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { useProfileAvatar } from "./useProfileAvatar";

const mockGetUser = vi.fn();
const mockUpdateUser = vi.fn();
const mockStorageUpload = vi.fn();
const mockStorageRemove = vi.fn();

const mockSupabaseClient = {
  auth: {
    getUser: mockGetUser,
    updateUser: mockUpdateUser,
  },
  storage: {
    from: () => ({
      upload: mockStorageUpload,
      remove: mockStorageRemove,
    }),
  },
};

vi.mock("@/shared/lib/client", () => ({
  createClient: () => mockSupabaseClient,
}));

vi.mock("@/shared/lib/imageResizer", () => ({
  resizeImageToWebP: vi
    .fn()
    .mockResolvedValue(new Blob(["fake-webp"], { type: "image/webp" })),
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

describe("useProfileAvatar Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockGetUser.mockResolvedValue({
      data: {
        user: {
          id: "test-user-id",
          user_metadata: { avatar_path: "test-user-id/old-avatar.webp" },
        },
      },
    });
  });

  it("초기 상태값이 올바르게 설정되어야 한다", () => {
    const { result } = renderHook(() => useProfileAvatar());
    expect(result.current.isUploading).toBe(false);
  });

  it("아바타 업로드 성공 시: 신규 업로드 ➔ 메타데이터 갱신 ➔ 기존 파일 삭제 순서로 실행된다", async () => {
    mockStorageUpload.mockResolvedValueOnce({ error: null });
    mockUpdateUser.mockResolvedValueOnce({ error: null });
    mockStorageRemove.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());
    const fakeFile = new File(["test"], "avatar.png", { type: "image/png" });

    let filePath: string | null = null;
    await act(async () => {
      filePath = await result.current.uploadAvatar(fakeFile);
    });

    expect(filePath).toMatch(/^test-user-id\/\d+\.webp$/);
    expect(mockStorageUpload).toHaveBeenCalledWith(
      filePath,
      expect.any(Blob),
      expect.objectContaining({
        contentType: "image/webp",
        upsert: false,
      }),
    );
    expect(mockUpdateUser).toHaveBeenCalledWith({
      data: { avatar_path: filePath },
    });
    expect(mockStorageRemove).toHaveBeenCalledWith([
      "test-user-id/old-avatar.webp",
    ]);
  });

  it("메타데이터 갱신 실패 시 방금 업로드한 신규 파일을 즉시 파기(롤백)한다", async () => {
    mockStorageUpload.mockResolvedValueOnce({ error: null });
    mockUpdateUser.mockResolvedValueOnce({
      error: new Error("메타데이터 DB 저장 실패"),
    });
    mockStorageRemove.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());
    const fakeFile = new File(["test"], "avatar.png", { type: "image/png" });

    let filePath: string | null = null;
    await act(async () => {
      filePath = await result.current.uploadAvatar(fakeFile);
    });

    expect(filePath).toBeNull();
    expect(mockStorageRemove).toHaveBeenCalledWith([
      expect.stringMatching(/^test-user-id\/\d+\.webp$/),
    ]);
  });

  it("아바타 삭제 시 메타데이터 null 처리 후 스토리지 기존 파일이 삭제된다", async () => {
    mockUpdateUser.mockResolvedValueOnce({ error: null });
    mockStorageRemove.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());

    let success = false;
    await act(async () => {
      success = await result.current.deleteAvatar();
    });

    expect(success).toBe(true);
    expect(mockUpdateUser).toHaveBeenCalledWith({
      data: { avatar_path: null },
    });
    expect(mockStorageRemove).toHaveBeenCalledWith([
      "test-user-id/old-avatar.webp",
    ]);
  });
});
````

## File: src/features/todo-widget/ui/TodoForm.tsx
````typescript
import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React from "react";

interface TodoFormProps {
  inputText: string;
  onChangeText: (text: string) => void;
  onSubmit: (e: React.SubmitEvent) => void;
}

export const TodoForm = ({
  inputText,
  onChangeText,
  onSubmit,
}: TodoFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        type="text"
        value={inputText}
        onChange={(e) => onChangeText(e.target.value)}
        onKeyDown={(e) => e.stopPropagation()}
        placeholder="할 일 추가.."
        className="flex-1 px-3 py-1.5 text-sm border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        aria-label="추가"
        className="min-w-0 px-2.5"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </form>
  );
};
````

## File: src/shared/ui/dropdown/Dropdown.tsx
````typescript
"use client";

import { cn } from "@/shared/lib/utils";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within a Dropdown");
  }
  return context;
};

export const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, close }}>
      <div ref={containerRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOpen, setIsOpen } = useDropdown();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={handleKeyDown}
      className={cn("cursor-pointer select-none", className)}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      {children}
    </div>
  );
};

export const DropdownContent = ({
  children,
  align = "right",
  className,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}) => {
  const { isOpen } = useDropdown();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return (
    <div
      className={cn(
        "absolute top-full mt-1.5 w-48 sm:w-52 rounded-xl border bg-popover p-1.5 text-popover-foreground shadow-xl ring-1 ring-black/5 z-[100] animate-in fade-in-80 zoom-in-95",
        align === "right" ? "right-0" : "left-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const DropdownItem = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const { close } = useDropdown();

  const handleClick = () => {
    if (onClick) onClick();
    close();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer select-none",
        className,
      )}
    >
      {children}
    </button>
  );
};
````

## File: src/widgets/dashboard-grid/model/useFilteredWidgets.ts
````typescript
import { useMemo } from "react";
import { useWidgetsQuery } from "../api/useDashboardQuery";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { isWithinDateRange } from "../lib/isWithinDateRange";
import { WidgetRow } from "../api/dashboardRepository";

export const useFilteredWidgets = (targetWidgets?: WidgetRow[]) => {
  const { data: widgets = [], isLoading } = useWidgetsQuery();
  const widgetsToFilter = targetWidgets ?? widgets;

  const { searchQuery, selectedWidgetType, datePreset, startDate, endDate } =
    useFilterStore();

  const filteredWidgets = useMemo(() => {
    return widgetsToFilter.filter((widget) => {
      if (selectedWidgetType !== "all" && widget.type !== selectedWidgetType) {
        return false;
      }

      if (
        !isWithinDateRange(widget.created_at, datePreset, startDate, endDate)
      ) {
        return false;
      }

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const titleMatch = widget.title.toLowerCase().includes(query);
        return titleMatch;
      }

      return true;
    });
  }, [
    widgetsToFilter,
    selectedWidgetType,
    datePreset,
    startDate,
    endDate,
    searchQuery,
  ]);

  return { filteredWidgets, allWidgets: widgets, isLoading };
};
````

## File: src/app/api/account/delete/route.ts
````typescript
import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options),
              );
            } catch {}
          },
        },
      },
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user || !user.email) {
      return NextResponse.json(
        { error: "인증되지 않은 요청입니다." },
        { status: 401 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const confirmEmail =
      typeof body.confirmEmail === "string" ? body.confirmEmail : "";

    if (confirmEmail.trim().toLowerCase() !== user.email.trim().toLowerCase()) {
      return NextResponse.json(
        { error: "확인 이메일 주소가 일치하지 않습니다." },
        { status: 400 },
      );
    }

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceRoleKey) {
      console.error(
        "[AccountDelete] SUPABASE_SERVICE_ROLE_KEY가 설정되지 않았습니다.",
      );
      return NextResponse.json(
        { error: "서버 설정 오류가 발생했습니다." },
        { status: 500 },
      );
    }

    const supabaseAdmin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    try {
      const { data: files, error: listError } = await supabaseAdmin.storage
        .from("avatars")
        .list(user.id);

      if (listError) {
        console.error("[AccountDelete] 아바타 목록 조회 실패:", listError);
      } else if (files && files.length > 0) {
        const filePaths = files.map((f) => `${user.id}/${f.name}`);
        const { error: removeError } = await supabaseAdmin.storage
          .from("avatars")
          .remove(filePaths);

        if (removeError) {
          console.error("[AccountDelete] 아바타 삭제 실패:", removeError);
        }
      }
    } catch (avatarErr) {
      console.error("[AccountDelete] 아바타 정리 중 예외 발생:", avatarErr);
    }

    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
      user.id,
    );

    if (deleteError) {
      console.error("[AccountDelete] deleteUser 실패:", deleteError);
      return NextResponse.json(
        { error: "계정 삭제 처리 중 오류가 발생했습니다." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[AccountDelete] 서버 내부 예외:", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
````

## File: src/entities/widget/model/types.ts
````typescript
import { WidgetType } from "@/widgets/dashboard-grid/config/widgets.config";

export type WidgetColor =
  "default" | "blue" | "green" | "yellow" | "purple" | "red";

export interface LayoutItem {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  color?: WidgetColor;
  layout: LayoutItem;
  config?: Record<string, unknown>;
  createdAt?: string;
}
````

## File: src/entities/widget/ui/WidgetColorPicker.tsx
````typescript
"use client";

import { memo, useEffect, useRef, useState } from "react";
import { WidgetColor } from "../model/types";
import { Palette } from "lucide-react";
import { COLOR_THEMES } from "../model/constants";
import { cn } from "@/shared/lib/utils";

interface WidgetColorPickerProps {
  color: WidgetColor;
  onSelectColor: (color: WidgetColor) => void;
}

export const WidgetColorPicker = memo(
  ({ color, onSelectColor }: WidgetColorPickerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSelect = (selectedColor: WidgetColor) => {
      onSelectColor(selectedColor);
      setIsOpen(false);
    };

    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
      <div ref={containerRef} className="relative flex items-center shrink-0">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
          title="위젯 색상 변경"
        >
          <Palette className="w-3.5 h-3.5" />
        </button>

        {isOpen && (
          <div className="absolute top-8 right-0 z-[100] p-1.5 bg-popover text-popover-foreground border rounded-xl shadow-xl flex items-center gap-1 animate-in zoom-in-95 duration-150">
            {(
              Object.entries(COLOR_THEMES) as [
                WidgetColor,
                (typeof COLOR_THEMES)[WidgetColor],
              ][]
            ).map(([themeKey, themeValue]) => {
              const isSelected = color === themeKey;

              return (
                <button
                  key={themeKey}
                  type="button"
                  onClick={() => handleSelect(themeKey)}
                  className={cn(
                    "w-4 h-4 rounded-full border border-black/10 dark:border-white/10 transition-transform hover:scale-110 flex items-center justify-center shrink-0",
                    COLOR_THEMES[themeKey].accentBg,
                    isSelected
                      ? "ring-2 ring-foreground ring-offset-1 ring-offset-popover scale-110"
                      : "opacity-80 hover:opacity-100",
                  )}
                  title={themeValue.label}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

WidgetColorPicker.displayName = "WidgetColorPicker";
````

## File: src/entities/widget/ui/WidgetHeaderActions.tsx
````typescript
import { WidgetColor } from "../model/types";
import { WidgetColorPicker } from "./WidgetColorPicker";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  MoreVertical,
  X,
} from "lucide-react";
import { memo } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";

interface WidgetHeaderActionsProps {
  id: string;
  color: WidgetColor;
  width?: number;
  onMoveLeft: (id: string) => void;
  onMoveRight: (id: string) => void;
  onSelectColor: (color: WidgetColor) => void;
  onToggleWidth: () => void;
  onRemove: () => void;
}

export const WidgetHeaderActions = memo(
  ({
    id,
    color,
    width = 1,
    onMoveLeft,
    onMoveRight,
    onSelectColor,
    onToggleWidth,
    onRemove,
  }: WidgetHeaderActionsProps) => {
    return (
      <div
        className="flex items-center gap-1 shrink-0 ml-auto"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <WidgetColorPicker color={color} onSelectColor={onSelectColor} />

        <Dropdown>
          <DropdownTrigger className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0">
            <MoreVertical className="w-3.5 h-3.5" />
          </DropdownTrigger>

          <DropdownContent align="right" className="w-36">
            <DropdownItem onClick={onToggleWidth}>
              {width === 1 ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span>2x2로 확대</span>
                </>
              ) : (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span>1x1로 축소</span>
                </>
              )}
            </DropdownItem>

            <DropdownItem onClick={() => onMoveLeft(id)}>
              <ArrowLeft className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span>왼쪽으로 이동</span>
            </DropdownItem>

            <DropdownItem onClick={() => onMoveRight(id)}>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span>오른쪽으로 이동</span>
            </DropdownItem>
          </DropdownContent>
        </Dropdown>

        <button
          type="button"
          onClick={onRemove}
          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
          aria-label="위젯 삭제"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  },
);

WidgetHeaderActions.displayName = "WidgetHeaderActions";
````

## File: src/entities/widget/ui/WidgetTitleInput.tsx
````typescript
"use client";

import { Check, Edit2 } from "lucide-react";
import { memo, useRef, useState } from "react";

interface WidgetTitleInputProps {
  title: string;
  onUpdateTitle: (newTitle: string) => void;
}

export const WidgetTitleInput = memo(
  ({ title, onUpdateTitle }: WidgetTitleInputProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputTitle, setInputTitle] = useState(title);
    const isSubmittingRef = useRef(false);

    const handleStartEdit = (e: React.MouseEvent) => {
      e.stopPropagation();
      setInputTitle(title);
      setIsEditing(true);
      isSubmittingRef.current = false;
    };

    const handleTitleSubmit = () => {
      const trimmed = inputTitle.trim();
      isSubmittingRef.current = true;

      if (trimmed) {
        onUpdateTitle(trimmed);
      } else {
        setInputTitle(title);
      }
      setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.stopPropagation();
      if (e.key === "Enter") {
        handleTitleSubmit();
      } else if (e.key === "Escape") {
        isSubmittingRef.current = true;
        setInputTitle(title);
        setIsEditing(false);
      }
    };

    if (isEditing) {
      return (
        <div
          className="flex items-center gap-1 w-full"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleTitleSubmit}
            autoFocus
            className="px-1 py-0.5 text-sm font-semibold text-foreground bg-background border border-primary rounded outline-none focus:ring-1 focus:ring-primary w-full transition-all"
          />
          <button
            type="button"
            onClick={handleTitleSubmit}
            className="p-1 hover:bg-accent rounded text-primary shrink-0"
          >
            <Check className="w-3.5 h-3.5" />
          </button>
        </div>
      );
    }

    return (
      <div
        onDoubleClick={handleStartEdit}
        className="flex items-center gap-1.5 cursor-pointer group truncate w-full"
        title="더블클릭 또는 연필 버튼으로 이름 변경"
      >
        <h3 className="font-semibold text-sm truncate py-0.5 px-1">{title}</h3>
        <button
          type="button"
          onClick={handleStartEdit}
          className="p-0.5 hover:bg-accent rounded opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
        >
          <Edit2 className="w-3 h-3 text-muted-foreground" />
        </button>
      </div>
    );
  },
);

WidgetTitleInput.displayName = "WidgetTitleInput";
````

## File: src/features/calendar/ui/CalendarHeader.tsx
````typescript
"use client";

import React, { memo } from "react";
import { Button } from "@/shared/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Calendar as CalendarIcon,
} from "lucide-react";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevYear: () => void;
  onPrevMonth: () => void;
  onNextYear: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export const CalendarHeader = memo(
  ({
    currentDate,
    onPrevYear,
    onPrevMonth,
    onNextYear,
    onNextMonth,
    onToday,
  }: CalendarHeaderProps) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-b bg-background/50 px-4 sm:px-6 py-3 sm:py-3.5">
        <div className="hidden sm:block sm:w-1/3" />

        <div className="flex items-center justify-center w-full sm:w-1/3">
          <div className="inline-flex items-center gap-2 bg-card/80 border border-border/70 px-4 py-1.5 rounded-2xl shadow-2xs select-none backdrop-blur-xs">
            <span className="text-xs sm:text-sm font-semibold font-mono text-muted-foreground tracking-wider">
              {year}
            </span>
            <span className="text-xs text-muted-foreground/40 font-light">
              •
            </span>
            <span className="text-lg sm:text-xl font-black text-foreground tracking-tight">
              {month}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-end w-full sm:w-1/3">
          <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl border shrink-0 shadow-2xs">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onPrevYear}
              title="이전 연도"
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0 text-muted-foreground hover:text-foreground"
            >
              <ChevronsLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onPrevMonth}
              title="이전 달"
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onToday}
              className="h-7 sm:h-8 text-xs font-semibold px-2.5 cursor-pointer shrink-0 text-primary hover:bg-background/80"
            >
              <CalendarIcon className="w-3.5 h-3.5 mr-1" />
              <span>오늘</span>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onNextMonth}
              title="다음 달"
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0 text-muted-foreground hover:text-foreground"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onNextYear}
              title="다음 연도"
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0 text-muted-foreground hover:text-foreground"
            >
              <ChevronsRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

CalendarHeader.displayName = "CalendarHeader";
````

## File: src/features/dashboard-filter/ui/DashboardFilterBar.tsx
````typescript
"use client";

import { RotateCcw } from "lucide-react";
import { useFilterStore } from "../model/useFilterStore";
import { Button } from "@/shared/ui/button";
import { FilterSearchInput } from "./FilterSearchInput";
import { WidgetTypeFilterGroup } from "./WidgetTypeFilterGroup";
import { TodoStatusFilterGroup } from "./TodoStatusFilterGroup";
import { DateRangeFilterGroup } from "./DateRangeFilterGroup";

export const DashboardFilterBar = () => {
  const {
    isOpen,
    searchQuery,
    selectedWidgetType,
    todoStatus,
    datePreset,
    startDate,
    endDate,
    setSearchQuery,
    setSelectedWidgetType,
    setTodoStatus,
    setDatePreset,
    setCustomDateRange,
    resetFilter,
  } = useFilterStore();

  if (!isOpen) return null;

  const showTodoStatusFilter =
    selectedWidgetType === "all" || selectedWidgetType === "todo";

  return (
    <div className="bg-background/95 backdrop-blur border-b p-3 sm:p-4 animate-in slide-in-from-top duration-200 select-none">
      <div className="max-w-[1800px] mx-auto flex flex-col gap-3">
        <FilterSearchInput value={searchQuery} onChange={setSearchQuery} />

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide w-full">
          <WidgetTypeFilterGroup
            selectedType={selectedWidgetType}
            onSelect={setSelectedWidgetType}
          />
          {showTodoStatusFilter && (
            <TodoStatusFilterGroup
              status={todoStatus}
              onSelect={setTodoStatus}
            />
          )}

          <DateRangeFilterGroup
            datePreset={datePreset}
            startDate={startDate}
            endDate={endDate}
            onSelectPreset={setDatePreset}
            onChangeCustomRange={setCustomDateRange}
          />

          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilter}
            className="h-8 px-2 text-xs text-muted-foreground hover:text-foreground gap-1"
            title="필터 조건 초기화"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">초기화</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/dday-widget/ui/DDayWidget.tsx
````typescript
"use client";

import { useMemo } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { calculateDDay } from "@/shared/lib/formatters";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import {
  useDDaysQuery,
  useAddDDayMutation,
  useDeleteDDayMutation,
} from "../api/useDDayQuery";
import { DDayForm } from "./DDayForm";
import { DDayItemCard } from "./DDayItemCard";

interface DDayWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const DDayWidget = ({
  widgetId,
  isExpanded = false,
}: DDayWidgetProps) => {
  const { data: ddays = [], isLoading } = useDDaysQuery(widgetId);
  const addDDayMutation = useAddDDayMutation(widgetId);
  const deleteDDayMutation = useDeleteDDayMutation(widgetId);
  const { searchQuery } = useFilterStore();

  const filteredAndSortedDDays = useMemo(() => {
    let result = [...ddays];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((item) =>
        item.title.toLowerCase().includes(query),
      );
    }

    return result.sort((a, b) => {
      const diffA = calculateDDay(a.target_date);
      const diffB = calculateDDay(b.target_date);

      if (diffA >= 0 && diffB < 0) return -1;
      if (diffA < 0 && diffB >= 0) return 1;
      return diffA - diffB;
    });
  }, [ddays, searchQuery]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-xs text-muted-foreground">
        불러오는 중..
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <DDayForm
        onAdd={(title, targetDate) =>
          addDDayMutation.mutate({
            title,
            targetDate,
            ddayId: crypto.randomUUID(),
          })
        }
      />

      {filteredAndSortedDDays.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground text-xs gap-2 py-8">
          <Calendar
            className={cn(
              "text-muted-foreground/40",
              isExpanded ? "w-8 h-8" : "w-6 h-6",
            )}
          />
          <span className={isExpanded ? "text-sm" : "text-xs"}>
            {searchQuery
              ? "검색 결과와 일치하는 D-Day가 없습니다."
              : "등록된 D-Day 일정이 없습니다."}
          </span>
        </div>
      ) : (
        <div
          className={cn(
            "flex-1 overflow-y-auto pr-1 gap-3",
            isExpanded
              ? filteredAndSortedDDays.length === 1
                ? "flex flex-col space-y-2"
                : "grid grid-cols-1 sm:grid-cols-2 auto-rows-max align-start"
              : "flex flex-col space-y-2",
          )}
        >
          {filteredAndSortedDDays.map((item) => (
            <DDayItemCard
              key={item.dday_id}
              item={{
                id: item.dday_id,
                title: item.title,
                targetDate: item.target_date,
              }}
              isExpanded={isExpanded}
              onRemove={(ddayId) => deleteDDayMutation.mutate(ddayId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
````

## File: src/features/memo-widget/api/useMemoQuery.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { memoRepository, MemoRow } from "./memoRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";

interface UpsertMemoParams {
  content: string;
  highlight?: MemoRow["highlight"];
}

export const useMemoQuery = (widgetId: string) => {
  return useQuery({
    queryKey: queryKeys.memos.byWidget(widgetId),
    queryFn: async () => {
      const data = await memoRepository.fetchMemo(widgetId);
      if (data) {
        return data;
      }
      return null;
    },
    enabled: Boolean(widgetId),
  });
};

export const useUpsertMemoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.memos.byWidget(widgetId);

  return useMutation(
    createOptimisticMutation<MemoRow, UpsertMemoParams, MemoRow | null>({
      queryClient,
      queryKey,
      mutationFn: ({ content, highlight = "none" }) =>
        memoRepository.upsertMemo(widgetId, content, highlight),
      updateCache: (previousMemo, { content, highlight }) => ({
        id: previousMemo?.id ?? crypto.randomUUID(),
        user_id: previousMemo?.user_id ?? "",
        widget_id: widgetId,
        content,
        highlight: highlight ?? previousMemo?.highlight ?? "none",
        updated_at: new Date().toISOString(),
      }),
      errorMessage: "메모 저장 실패",
    }),
  );
};
````

## File: src/features/profile/model/useProfileAvatar.ts
````typescript
"use client";

import { useState } from "react";
import { createClient } from "@/shared/lib/client";
import { resizeImageToWebP } from "@/shared/lib/imageResizer";
import { toast } from "sonner";

export const useProfileAvatar = () => {
  const supabase = createClient();
  const [isUploading, setIsUploading] = useState(false);

  const uploadAvatar = async (file: File): Promise<string | null> => {
    setIsUploading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("로그인이 필요합니다.");

      const resizedBlob = await resizeImageToWebP(file, 200, 200);
      const filePath = `${user.id}/${Date.now()}.webp`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, resizedBlob, {
          contentType: "image/webp",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const oldAvatarPath = user.user_metadata?.avatar_path as
        string | undefined;

      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          avatar_path: filePath,
        },
      });

      if (updateError) {
        await supabase.storage.from("avatars").remove([filePath]);
        throw updateError;
      }

      if (oldAvatarPath && oldAvatarPath !== filePath) {
        await supabase.storage.from("avatars").remove([oldAvatarPath]);
      }

      toast.success("프로필 이미지가 변경되었습니다.");
      return filePath;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "업로드 중 오류가 발생했습니다.";
      toast.error("아바타 업로드 실패", { description: message });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const deleteAvatar = async (): Promise<boolean> => {
    setIsUploading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("로그인이 필요합니다.");

      const avatarPath = user.user_metadata?.avatar_path as string | undefined;

      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          avatar_path: null,
        },
      });

      if (updateError) throw updateError;

      if (avatarPath) {
        await supabase.storage.from("avatars").remove([avatarPath]);
      }

      toast.success("프로필 이미지가 삭제되었습니다.");
      return true;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "삭제 중 오류가 발생했습니다.";
      toast.error("이미지 삭제 실패", { description: message });
      return false;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    uploadAvatar,
    deleteAvatar,
  };
};
````

## File: src/shared/ui/theme-toggle/ThemeToggle.tsx
````typescript
"use client";

import { useTheme } from "next-themes";
import { memo, useEffect, useState } from "react";
import { Button } from "../button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="md"
        className="w-9 h-9 p-0 rounded-lg opacity-50 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-4 h-4 rounded-full bg-muted-foreground/30 animate-pulse" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="md"
      className="w-9 h-9 p-0 rounded-lg transition-transform active:scale-95"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-all" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-all" />
      )}
    </Button>
  );
});

ThemeToggle.displayName = "ThemeToggle";
````

## File: src/features/calendar/api/useScheduleQuery.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { scheduleRepository, ScheduleRow } from "./scheduleRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";

interface AddScheduleParams {
  dateStr: string;
  title: string;
  time?: string;
  color?: string;
  scheduleId?: string;
}

interface UpdateScheduleParams {
  scheduleId: string;
  dateStr: string;
  title: string;
  time?: string;
  color?: string;
}

interface DeleteScheduleParams {
  scheduleId: string;
}

export const useSchedulesQuery = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: queryKeys.schedules.range(startDate, endDate),
    queryFn: () => scheduleRepository.fetchSchedulesByRange(startDate, endDate),
    enabled: Boolean(startDate && endDate),
  });
};

export const useAddScheduleMutation = (startDate: string, endDate: string) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.schedules.range(startDate, endDate);

  return useMutation(
    createOptimisticMutation<ScheduleRow, AddScheduleParams, ScheduleRow[]>({
      queryClient,
      queryKey,
      mutationFn: ({ dateStr, title, time, color, scheduleId }) =>
        scheduleRepository.insertSchedule({
          schedule_id: scheduleId ?? crypto.randomUUID(),
          date_str: dateStr,
          title,
          time_str: time ?? null,
          color: color ?? null,
        }),
      updateCache: (
        oldSchedules = [],
        { dateStr, title, time, color, scheduleId },
      ) => {
        const optimisticSchedule: ScheduleRow = {
          id: crypto.randomUUID(),
          user_id: "",
          schedule_id: scheduleId ?? crypto.randomUUID(),
          date_str: dateStr,
          title,
          time_str: time ?? null,
          color: color ?? null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        return [...oldSchedules, optimisticSchedule];
      },
      errorMessage: "일정 추가 실패",
    }),
  );
};

export const useUpdateScheduleMutation = (
  startDate: string,
  endDate: string,
) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.schedules.range(startDate, endDate);

  return useMutation(
    createOptimisticMutation<ScheduleRow, UpdateScheduleParams, ScheduleRow[]>({
      queryClient,
      queryKey,
      mutationFn: ({ scheduleId, title, time, color }) =>
        scheduleRepository.updateSchedule(scheduleId, {
          title,
          time_str: time ?? null,
          color: color ?? null,
        }),
      updateCache: (oldSchedules = [], { scheduleId, title, time, color }) =>
        oldSchedules.map((s) =>
          s.schedule_id === scheduleId
            ? { ...s, title, time_str: time ?? null, color: color ?? null }
            : s,
        ),
      errorMessage: "일정 수정 실패",
    }),
  );
};

export const useDeleteScheduleMutation = (
  startDate: string,
  endDate: string,
) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.schedules.range(startDate, endDate);

  return useMutation(
    createOptimisticMutation<void, DeleteScheduleParams, ScheduleRow[]>({
      queryClient,
      queryKey,
      mutationFn: ({ scheduleId }) =>
        scheduleRepository.deleteSchedule(scheduleId),
      updateCache: (oldSchedules = [], { scheduleId }) =>
        oldSchedules.filter((s) => s.schedule_id !== scheduleId),
      errorMessage: "일정 삭제 실패",
    }),
  );
};
````

## File: src/features/clock-widget/model/useClockStore.ts
````typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TimerPhase = "work" | "break";
export type ClockMode = "clock" | "timer";

export interface ClockRuntimeState {
  mode: ClockMode;
  timerPhase: TimerPhase;
  timeLeft: number;
  isRunning: boolean;
  targetEndTime: number | null;
}

interface ClockWidgetRuntimeStore {
  states: Record<string, ClockRuntimeState>;
  getWidgetState: (widgetId: string) => ClockRuntimeState;
  setMode: (widgetId: string, mode: ClockMode) => void;
  toggleTimer: (widgetId: string, durationSec: number) => void;
  resetTimer: (widgetId: string, durationSec: number) => void;
  syncTimeLeft: (widgetId: string, timeLeft: number) => void;
  switchPhase: (
    widgetId: string,
    phase: TimerPhase,
    durationSec: number,
  ) => void;
}

export const DEFAULT_RUNTIME_STATE: ClockRuntimeState = {
  mode: "clock",
  timerPhase: "work",
  timeLeft: 25 * 60,
  isRunning: false,
  targetEndTime: null,
};

export const useClockStore = create<ClockWidgetRuntimeStore>()(
  persist(
    (set, get) => ({
      states: {},
      getWidgetState: (widgetId) => {
        return get().states[widgetId] ?? DEFAULT_RUNTIME_STATE;
      },
      setMode: (widgetId, mode) => {
        set((state) => ({
          states: {
            ...state.states,
            [widgetId]: {
              ...(state.states[widgetId] ?? DEFAULT_RUNTIME_STATE),
              mode,
            },
          },
        }));
      },
      toggleTimer: (widgetId, durationSec) => {
        set((state) => {
          const current = state.states[widgetId] ?? DEFAULT_RUNTIME_STATE;
          const willRun = !current.isRunning;
          const targetEndTime = willRun
            ? Date.now() + current.timeLeft * 1000
            : null;

          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                isRunning: willRun,
                targetEndTime,
                ...(current.timeLeft === 0 && willRun
                  ? {
                      timeLeft: durationSec,
                      targetEndTime: Date.now() + durationSec * 1000,
                    }
                  : {}),
              },
            },
          };
        });
      },
      resetTimer: (widgetId, durationSec) => {
        set((state) => ({
          states: {
            ...state.states,
            [widgetId]: {
              ...(state.states[widgetId] ?? DEFAULT_RUNTIME_STATE),
              timeLeft: durationSec,
              isRunning: false,
              targetEndTime: null,
            },
          },
        }));
      },
      syncTimeLeft: (widgetId, timeLeft) => {
        set((state) => {
          const current = state.states[widgetId] ?? DEFAULT_RUNTIME_STATE;
          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                timeLeft,
                ...(timeLeft === 0
                  ? { isRunning: false, targetEndTime: null }
                  : {}),
              },
            },
          };
        });
      },
      switchPhase: (widgetId, phase, durationSec) => {
        set((state) => ({
          states: {
            ...state.states,
            [widgetId]: {
              ...(state.states[widgetId] ?? DEFAULT_RUNTIME_STATE),
              timerPhase: phase,
              timeLeft: durationSec,
              isRunning: false,
              targetEndTime: null,
            },
          },
        }));
      },
    }),
    {
      name: "dashcraft-clock-runtime-v1",
    },
  ),
);
````

## File: src/features/clock-widget/model/usePomodoroTimer.ts
````typescript
"use client";

import { useCallback, useEffect } from "react";
import { DEFAULT_RUNTIME_STATE, useClockStore } from "./useClockStore";
import { useClockConfig } from "./useClockConfig";
import { useTimerEffects } from "./useTimerEffects";

export const usePomodoroTimer = (widgetId: string) => {
  const {
    workDuration,
    breakDuration,
    isSoundEnabled,
    isNotificationEnabled,
    toggleSound,
    handleNotificationToggle,
  } = useClockConfig(widgetId);

  const timerState = useClockStore(
    (s) => s.states[widgetId] ?? DEFAULT_RUNTIME_STATE,
  );
  const { timerPhase, timeLeft, isRunning, targetEndTime } = timerState;

  const toggleTimerStore = useClockStore((s) => s.toggleTimer);
  const resetTimerStore = useClockStore((s) => s.resetTimer);
  const syncTimeLeft = useClockStore((s) => s.syncTimeLeft);
  const switchPhaseStore = useClockStore((s) => s.switchPhase);

  const currentDuration = timerPhase === "work" ? workDuration : breakDuration;

  useEffect(() => {
    if (!isRunning || !targetEndTime) return;

    const checkTimerCompletion = () => {
      const now = Date.now();
      const remainingSeconds = Math.max(
        0,
        Math.round((targetEndTime - now) / 1000),
      );

      if (remainingSeconds <= 0) {
        syncTimeLeft(widgetId, 0);
      }
    };

    checkTimerCompletion();
    const timerInterval = setInterval(checkTimerCompletion, 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkTimerCompletion();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(timerInterval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isRunning, targetEndTime, widgetId, syncTimeLeft]);

  useTimerEffects({
    widgetId,
    timeLeft,
    isRunning,
    timerPhase,
    workDuration,
    breakDuration,
    isSoundEnabled,
    isNotificationEnabled,
    onSwitchPhase: switchPhaseStore,
  });

  const toggleTimer = useCallback(
    () => toggleTimerStore(widgetId, currentDuration),
    [toggleTimerStore, widgetId, currentDuration],
  );

  const resetTimer = useCallback(
    () => resetTimerStore(widgetId, currentDuration),
    [resetTimerStore, widgetId, currentDuration],
  );

  const switchPhase = useCallback(
    (phase: "work" | "break") => {
      const duration = phase === "work" ? workDuration : breakDuration;
      switchPhaseStore(widgetId, phase, duration);
    },
    [switchPhaseStore, widgetId, workDuration, breakDuration],
  );

  return {
    timerPhase,
    timeLeft,
    isRunning,
    targetEndTime,
    isSoundEnabled,
    isNotificationEnabled,
    toggleTimer,
    resetTimer,
    switchPhase,
    toggleSound,
    handleNotificationToggle,
  };
};
````

## File: src/features/command-palette/ui/CommandPalette.tsx
````typescript
"use client";

import {
  useWidgetsQuery,
  useAddWidgetMutation,
} from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { useCommandPalette } from "../model/useCommandPalette";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";
import { Command } from "cmdk";
import { Filter, Plus, Search } from "lucide-react";

export const CommandPalette = () => {
  const { isOpen, setIsOpen } = useCommandPalette();
  const { data: widgets = [] } = useWidgetsQuery();
  const addWidgetMutation = useAddWidgetMutation();
  const { setSelectedWidgetType, setSearchQuery } = useFilterStore();

  if (!isOpen) return null;

  const handleAddWidget = (type: WidgetType) => {
    const config = WIDGET_CONFIG_MAP[type];
    if (!config) return;

    addWidgetMutation.mutate({
      type: config.type,
      title: config.title,
      layout_w: 1,
      widgetId: crypto.randomUUID(),
    });
    setIsOpen(false);
  };

  const handleFocusWidget = (widgetId: string) => {
    setIsOpen(false);
    const element = document.getElementById(`widget-${widgetId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-2", "ring-primary");
      setTimeout(
        () => element.classList.remove("ring-2", "ring-primary"),
        2000,
      );
    }
  };

  const handleFilter = (type: WidgetType | "all") => {
    setSelectedWidgetType(type);
    setIsOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-popover text-popover-foreground rounded-xl border shadow-2xl overflow-hidden"
      >
        <Command label="Command Palette" className="w-full">
          <div className="flex items-center border-b px-3">
            <Search className="w-4 h-4 mr-2 shrink-0 opacity-50" />
            <Command.Input
              autoFocus
              onValueChange={(val) => setSearchQuery(val)}
              placeholder="위젯 검색, 추가 또는 명령어 입력... (Esc로 닫기)"
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              검색 결과가 없습니다.
            </Command.Empty>

            {widgets.length > 0 && (
              <Command.Group
                heading="현재 대시보드 위젯 이동"
                className="px-2 py-1.5 text-xs text-muted-foreground font-semibold"
              >
                {widgets.map((widget) => (
                  <Command.Item
                    key={widget.widget_id}
                    value={`widget-${widget.title}-${widget.widget_id}`}
                    onSelect={() => handleFocusWidget(widget.widget_id)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-md text-sm cursor-pointer data-[selected='true']:bg-primary/10 data-[selected='true']:text-primary aria-selected:bg-primary/10 aria-selected:text-primary transition-colors"
                  >
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span>{widget.title}</span>
                    <span className="ml-auto text-xs opacity-50">
                      {widget.type}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            <Command.Group
              heading="새 위젯 추가"
              className="px-2 py-1.5 text-xs text-muted-foreground font-semibold"
            >
              {WIDGET_OPTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <Command.Item
                    key={item.type}
                    value={`add-${item.type}-${item.title}`}
                    onSelect={() => handleAddWidget(item.type)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-md text-sm cursor-pointer data-[selected='true']:bg-primary/10 data-[selected='true']:text-primary aria-selected:bg-primary/10 aria-selected:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.title}</span>
                    <Plus className="w-3.5 h-3.5 ml-auto opacity-50" />
                  </Command.Item>
                );
              })}
            </Command.Group>

            <Command.Group
              heading="필터"
              className="px-2 py-1.5 text-xs text-muted-foreground font-semibold"
            >
              <Command.Item
                value="filter-all-widgets"
                onSelect={() => handleFilter("all")}
                className="flex items-center gap-2 px-2.5 py-2 rounded-md text-sm cursor-pointer data-[selected='true']:bg-primary/10 data-[selected='true']:text-primary aria-selected:bg-primary/10 aria-selected:text-primary transition-colors"
              >
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span>모든 위젯 보기</span>
              </Command.Item>

              {WIDGET_OPTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <Command.Item
                    key={`filter-${item.type}`}
                    value={`filter-${item.type}-${item.title}`}
                    onSelect={() => handleFilter(item.type)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-md text-sm cursor-pointer data-[selected='true']:bg-primary/10 data-[selected='true']:text-primary aria-selected:bg-primary/10 aria-selected:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.title} 위젯만 보기</span>
                  </Command.Item>
                );
              })}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};
````

## File: src/features/profile/ui/ProfileSection.tsx
````typescript
"use client";

import React, { useRef, useEffect, useState } from "react";
import { useProfileAvatar } from "../model/useProfileAvatar";
import { Button } from "@/shared/ui/button";
import { createClient } from "@/shared/lib/client";
import { getAvatarPublicUrl } from "@/shared/lib/avatar";
import { User, Upload, Trash2, Loader2, ShieldCheck } from "lucide-react";

interface ProfileSectionProps {
  userEmail?: string;
  avatarUrl?: string;
  onAvatarUpdated?: () => void;
}

export const ProfileSection = ({
  userEmail: initialUserEmail,
  avatarUrl: initialAvatarUrl,
  onAvatarUpdated,
}: ProfileSectionProps = {}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isUploading, uploadAvatar, deleteAvatar } = useProfileAvatar();

  const [userEmail, setUserEmail] = useState<string | undefined>(
    initialUserEmail,
  );
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(
    initialAvatarUrl,
  );
  const [hasCustomAvatar, setHasCustomAvatar] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (isMounted && user) {
        if (user.email) setUserEmail(user.email);
        const computedUrl = getAvatarPublicUrl(user.user_metadata);
        setAvatarUrl(computedUrl);
        setHasCustomAvatar(Boolean(user.user_metadata?.avatar_path));
      }
    };

    void fetchUserData();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted && session?.user) {
        if (session.user.email) setUserEmail(session.user.email);
        const computedUrl = getAvatarPublicUrl(session.user.user_metadata);
        setAvatarUrl(computedUrl);
        setHasCustomAvatar(Boolean(session.user.user_metadata?.avatar_path));
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newPath = await uploadAvatar(file);
    if (newPath) {
      onAvatarUpdated?.();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setAvatarUrl(getAvatarPublicUrl(user.user_metadata));
        setHasCustomAvatar(true);
      }
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDelete = async () => {
    const success = await deleteAvatar();
    if (success) {
      onAvatarUpdated?.();
      setAvatarUrl(undefined);
      setHasCustomAvatar(false);
    }
  };

  return (
    <div className="p-5 sm:p-6 bg-card rounded-2xl border border-border space-y-4 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary" />
          프로필 정보
        </h3>
      </div>

      <div className="flex items-center gap-4 sm:gap-5">
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-muted border border-border flex items-center justify-center shrink-0 shadow-xs">
          {avatarUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={avatarUrl}
              alt="프로필 이미지"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-8 h-8 sm:w-9 sm:h-9 text-muted-foreground/70" />
          )}
          {isUploading && (
            <div className="absolute inset-0 bg-background/70 backdrop-blur-xs flex items-center justify-center">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
            </div>
          )}
        </div>

        <div className="space-y-2 flex-1 min-w-0">
          <div>
            <p className="text-sm sm:text-base font-bold text-foreground truncate">
              {userEmail || "사용자 계정"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/png, image/jpeg, image/webp"
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-primary" />
              <span>이미지 업로드</span>
            </Button>

            {hasCustomAvatar && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={isUploading}
                onClick={handleDelete}
                className="text-destructive hover:text-destructive hover:bg-destructive/10 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>삭제</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/todo-widget/api/useTodoQuery.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoRepository, TodoRow } from "./todoRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";

export interface AddTodoParams {
  text: string;
  todoId: string;
}

export const useTodosQuery = (widgetId: string) => {
  return useQuery({
    queryKey: queryKeys.todos.byWidget(widgetId),
    queryFn: () => todoRepository.fetchTodos(widgetId),
    enabled: Boolean(widgetId),
  });
};

export const useAddTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<TodoRow, AddTodoParams, TodoRow[]>({
      queryClient,
      queryKey: queryKeys.todos.byWidget(widgetId),
      mutationFn: async ({ text, todoId }) => {
        const currentTodos = (
          queryClient.getQueryData<TodoRow[]>(
            queryKeys.todos.byWidget(widgetId),
          ) ?? []
        ).filter((t) => t.todo_id !== todoId);

        const nextSortOrder =
          currentTodos.length > 0
            ? Math.max(...currentTodos.map((t) => t.sort_order), 0) + 1
            : 1;

        return todoRepository.insertTodo({
          widget_id: widgetId,
          todo_id: todoId,
          text,
          completed: false,
          sort_order: nextSortOrder,
        });
      },
      updateCache: (oldTodos = [], { text, todoId }) => {
        const nextSortOrder =
          oldTodos.length > 0
            ? Math.max(...oldTodos.map((t) => t.sort_order), 0) + 1
            : 1;

        const optimisticTodo: TodoRow = {
          id: crypto.randomUUID(),
          user_id: "",
          widget_id: widgetId,
          todo_id: todoId,
          text,
          completed: false,
          sort_order: nextSortOrder,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        return [...oldTodos, optimisticTodo];
      },
      errorMessage: "할 일 추가 실패",
    }),
  );
};

export const useToggleTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<
      TodoRow,
      { todoId: string; completed: boolean },
      TodoRow[]
    >({
      queryClient,
      queryKey: queryKeys.todos.byWidget(widgetId),
      mutationFn: ({ todoId, completed }) =>
        todoRepository.updateTodo(widgetId, todoId, { completed }),
      updateCache: (oldTodos = [], { todoId, completed }) =>
        oldTodos.map((t) => (t.todo_id === todoId ? { ...t, completed } : t)),
      errorMessage: "할 일 상태 변경 실패",
    }),
  );
};

export const useUpdateTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<
      TodoRow,
      { todoId: string; text: string },
      TodoRow[]
    >({
      queryClient,
      queryKey: queryKeys.todos.byWidget(widgetId),
      mutationFn: ({ todoId, text }) =>
        todoRepository.updateTodo(widgetId, todoId, { text }),
      updateCache: (oldTodos = [], { todoId, text }) =>
        oldTodos.map((t) => (t.todo_id === todoId ? { ...t, text } : t)),
      errorMessage: "할 일 내용 수정 실패",
    }),
  );
};

export const useDeleteTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<void, string, TodoRow[]>({
      queryClient,
      queryKey: queryKeys.todos.byWidget(widgetId),
      mutationFn: (todoId: string) =>
        todoRepository.deleteTodo(widgetId, todoId),
      updateCache: (oldTodos = [], todoId) =>
        oldTodos.filter((t) => t.todo_id !== todoId),
      errorMessage: "할 일 삭제 실패",
    }),
  );
};
````

## File: src/widgets/dashboard-grid/model/useDashboardDnd.ts
````typescript
"use client";

import { useState } from "react";
import {
  DragEndEvent,
  DragStartEvent,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { WidgetRow } from "../api/dashboardRepository";
import {
  useWidgetsQuery,
  useReorderWidgetsMutation,
} from "../api/useDashboardQuery";

export const useDashboardDnD = () => {
  const { data: widgets = [] } = useWidgetsQuery();
  const reorderMutation = useReorderWidgetsMutation();

  const [activeWidget, setActiveWidget] = useState<WidgetRow | null>(null);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 5 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 200, tolerance: 5 },
  });

  const sensors = useSensors(pointerSensor, touchSensor);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const foundWidget = widgets.find((w) => w.widget_id === active.id);
    if (foundWidget) {
      setActiveWidget(foundWidget);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = widgets.findIndex((w) => w.widget_id === active.id);
      const newIndex = widgets.findIndex((w) => w.widget_id === over.id);

      if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        const reordered = arrayMove(widgets, oldIndex, newIndex);
        reorderMutation.mutate(reordered.map((w) => w.widget_id));
      }
    }

    setActiveWidget(null);
  };

  const handleDragCancel = () => {
    setActiveWidget(null);
  };

  return {
    sensors,
    localWidgets: widgets,
    activeWidget,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    collisionDetection: closestCenter,
  };
};
````

## File: src/widgets/header/ui/UserDropdown.tsx
````typescript
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/shared/lib/client";
import { getAvatarPublicUrl } from "@/shared/lib/avatar";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import { Button } from "@/shared/ui/button";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
import { toast } from "sonner";

interface UserDropdownProps {
  userEmail?: string;
  avatarUrl?: string;
}

export const UserDropdown = ({
  userEmail: initialEmail,
  avatarUrl: initialAvatarUrl,
}: UserDropdownProps) => {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState<string | undefined>(initialEmail);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(
    initialAvatarUrl,
  );

  useEffect(() => {
    let isMounted = true;

    const syncUserInfo = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (isMounted && user) {
        if (!initialEmail && user.email) {
          setEmail(user.email);
        }
        const computedUrl = getAvatarPublicUrl(user.user_metadata);
        setAvatarUrl(computedUrl);
      }
    };

    void syncUserInfo();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) {
        if (session?.user) {
          setEmail(session.user.email);
          const computedUrl = getAvatarPublicUrl(session.user.user_metadata);
          setAvatarUrl(computedUrl);
        } else {
          setEmail(undefined);
          setAvatarUrl(undefined);
        }
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase, initialEmail]);

  useEffect(() => {
    if (initialEmail !== undefined) setEmail(initialEmail);
    if (initialAvatarUrl !== undefined) setAvatarUrl(initialAvatarUrl);
  }, [initialEmail, initialAvatarUrl]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("로그아웃 실패", { description: error.message });
      return;
    }
    toast.success("로그아웃되었습니다.");
    router.push("/login");
    router.refresh();
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 px-2 gap-2 hover:bg-accent rounded-xl cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden bg-muted border border-border flex items-center justify-center shrink-0">
            {avatarUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={avatarUrl}
                alt="프로필"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-3.5 h-3.5 text-muted-foreground" />
            )}
          </div>
          <span className="text-xs font-semibold text-foreground max-w-[100px] truncate hidden md:inline-block">
            {email?.split("@")[0] || "계정"}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        </Button>
      </DropdownTrigger>

      <DropdownContent align="right" className="w-48">
        <div className="px-3 py-2 border-b border-border/50">
          <p className="text-xs font-semibold text-foreground truncate">
            {email || "사용자 계정"}
          </p>
        </div>

        <DropdownItem onClick={() => router.push("/settings")}>
          <Settings className="w-4 h-4 text-muted-foreground" />
          <span>계정 설정</span>
        </DropdownItem>

        <DropdownItem
          onClick={handleLogout}
          className="text-destructive focus:text-destructive cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>로그아웃</span>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
````

## File: src/features/todo-widget/model/useTodo.ts
````typescript
"use client";

import React, { useState } from "react";
import {
  useTodosQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../api/useTodoQuery";

export const useTodo = (widgetId: string) => {
  const { data: todos = [], isLoading } = useTodosQuery(widgetId);
  const addTodoMutation = useAddTodoMutation(widgetId);
  const toggleTodoMutation = useToggleTodoMutation(widgetId);
  const updateTodoMutation = useUpdateTodoMutation(widgetId);
  const deleteTodoMutation = useDeleteTodoMutation(widgetId);

  const [inputText, setInputText] = useState("");

  const handleAddTodo = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    addTodoMutation.mutate({
      text: inputText.trim(),
      todoId: crypto.randomUUID(),
    });
    setInputText("");
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const progressPercent = todos.length
    ? Math.round((completedCount / todos.length) * 100)
    : 0;

  return {
    todos,
    inputText,
    setInputText,
    addTodo: handleAddTodo,
    toggleTodo: (todoId: string, completed: boolean) =>
      toggleTodoMutation.mutate({ todoId, completed: !completed }),
    editTodo: (todoId: string, text: string) =>
      updateTodoMutation.mutate({ todoId, text }),
    deleteTodo: (todoId: string) => deleteTodoMutation.mutate(todoId),
    progressPercent,
    isLoading,
  };
};
````

## File: src/features/todo-widget/ui/TodoWidget.tsx
````typescript
"use client";

import { memo, useMemo } from "react";
import { useTodo } from "../model/useTodo";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoProgress } from "./TodoProgress";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";

interface TodoWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const TodoWidget = memo(
  ({ widgetId, isExpanded = false }: TodoWidgetProps) => {
    const {
      todos,
      inputText,
      setInputText,
      addTodo,
      toggleTodo,
      editTodo,
      deleteTodo,
      progressPercent,
      isLoading,
    } = useTodo(widgetId);
    const { todoStatus, searchQuery } = useFilterStore();

    const filteredTodos = useMemo(() => {
      return todos.filter((todo) => {
        if (todoStatus === "active" && todo.completed) return false;
        if (todoStatus === "completed" && !todo.completed) return false;

        if (searchQuery.trim() !== "") {
          return todo.text.toLowerCase().includes(searchQuery.toLowerCase());
        }

        return true;
      });
    }, [todos, todoStatus, searchQuery]);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full text-xs text-muted-foreground">
          불러오는 중..
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col gap-2.5 h-full">
        <TodoProgress percent={progressPercent} />
        <TodoForm
          inputText={inputText}
          onChangeText={setInputText}
          onSubmit={addTodo}
        />
        <div className="w-full flex-1 min-h-0 h-auto overflow-visible">
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onEdit={editTodo}
            onDelete={deleteTodo}
            isExpanded={isExpanded}
          />
        </div>
      </div>
    );
  },
);

TodoWidget.displayName = "TodoWidget";
````

## File: src/features/memo-widget/ui/MemoWidget.tsx
````typescript
"use client";

import React from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { useMemoEditor } from "../model/useMemoEditor";
import { HighlightPicker } from "@/shared/ui/highlight-picker/HighlightPicker";
import { cn } from "@/shared/lib/utils";

export interface MemoWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const MemoWidget = ({
  widgetId,
  isExpanded = false,
}: MemoWidgetProps) => {
  const {
    editorRef,
    contentLength,
    isLoading,
    isSaving,
    maxLimit,
    currentHighlight,
    handleSelectHighlightColor,
    exitHighlightOnKey,
    handleInput,
    handlePaste,
    handleBlur,
    handleFocus,
  } = useMemoEditor(widgetId);

  const isNearLimit = contentLength > maxLimit * 0.85;

  if (isLoading) {
    return (
      <div className="w-full h-full min-h-[140px] flex items-center justify-center text-muted-foreground">
        <Loader2 className="w-5 h-5 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full pt-2 px-3 pb-2 gap-1 transition-all duration-200 relative group",
        isExpanded ? "min-h-[320px]" : "min-h-[180px]",
      )}
    >
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onPaste={handlePaste}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={exitHighlightOnKey}
        data-placeholder="자유롭게 메모를 작성하고 드래그하여 형광펜을 칠해보세요"
        className="flex-1 w-full text-xs leading-relaxed text-foreground focus:outline-none overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground/60 empty:before:pointer-events-none"
      />

      <div className="flex items-center justify-between text-[10px] text-muted-foreground border-t border-border/40 pt-1.5 px-0.5 mt-auto shrink-0">
        <HighlightPicker
          selectedColor={currentHighlight}
          onSelectColor={handleSelectHighlightColor}
          size="sm"
        />

        <div className="flex items-center gap-2">
          {isSaving && (
            <span className="text-[10px] text-primary flex items-center gap-1">
              <Loader2 className="w-2.5 h-2.5 animate-spin" /> 저장 중...
            </span>
          )}
          <span
            className={
              isNearLimit
                ? "text-amber-500 font-semibold flex items-center gap-1"
                : ""
            }
          >
            {isNearLimit && <AlertCircle className="w-3 h-3 text-amber-500" />}
            {contentLength.toLocaleString()} / {maxLimit.toLocaleString()} 자
          </span>
        </div>
      </div>
    </div>
  );
};
````

## File: src/features/settings/ui/SettingsView.tsx
````typescript
"use client";

import React from "react";
import { AppHeader } from "@/widgets/header/ui/AppHeader";
import { ProfileSection } from "@/features/profile/ui/ProfileSection";
import { PasswordChangeSection } from "./PasswordChangeSection";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { Settings as SettingsIcon } from "lucide-react";

export const SettingsView = () => {
  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <AppHeader showSearchButton={false} />

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-border">
          <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
            <SettingsIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              계정 설정
            </h1>
            <p className="text-xs text-muted-foreground">
              프로필 정보 및 계정 보안 설정을 관리합니다.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <ProfileSection />
          <PasswordChangeSection />
          <DeleteAccountSection />
        </div>
      </main>
    </div>
  );
};
````

## File: src/widgets/dashboard/ui/DashboardHeader.tsx
````typescript
"use client";

import React, { memo } from "react";
import { AppHeader } from "@/widgets/header/ui/AppHeader";
import { Button } from "@/shared/ui/button";
import { FilterToggleButton } from "./FilterToggleButton";
import { AddWidgetMenu } from "./AddWidgetMenu";
import { RotateCcw } from "lucide-react";

interface DashboardHeaderProps {
  onOpenResetModal: () => void;
  userEmail?: string;
  avatarUrl?: string;
}

export const DashboardHeader = memo(
  ({ onOpenResetModal, userEmail, avatarUrl }: DashboardHeaderProps) => {
    return (
      <>
        <div className="sticky top-0 z-[100] w-full bg-background/80 backdrop-blur-md border-b">
          <AppHeader userEmail={userEmail} avatarUrl={avatarUrl}>
            <div className="hidden sm:flex items-center gap-2">
              <FilterToggleButton className="h-9 px-3 text-xs" />
              <AddWidgetMenu variant="desktop" />

              <Button
                variant="outline"
                size="sm"
                onClick={onOpenResetModal}
                className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground"
                title="대시보드 초기화"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </AppHeader>

          <div className="flex sm:hidden items-center justify-between px-4 py-2 border-t border-border/40 bg-muted/20 gap-2">
            <FilterToggleButton className="h-8 px-3 text-xs" />

            <Button
              variant="outline"
              size="sm"
              onClick={onOpenResetModal}
              className="h-8 px-2.5 text-xs gap-1.5 text-muted-foreground hover:text-foreground shrink-0"
              title="대시보드 초기화"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>대시보드 초기화</span>
            </Button>
          </div>
        </div>

        <AddWidgetMenu variant="mobile-fab" />
      </>
    );
  },
);

DashboardHeader.displayName = "DashboardHeader";
````

## File: src/widgets/dashboard-grid/api/useDashboardQuery.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { dashboardRepository, WidgetRow } from "./dashboardRepository";
import {
  DEFAULT_CLOCK_CONFIG,
  WIDGET_CONFIG_MAP,
} from "../config/widgets.config";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";
import { toast } from "sonner";
import { generateNextWidgetTitle } from "../lib/generateWidgetTitle";
import { Database } from "@/shared/types/database.types";

interface AddWidgetParams {
  type: WidgetRow["type"];
  title?: string;
  color?: WidgetRow["color"];
  layout_w?: number;
  widgetId: string;
}

interface UpdateWidgetParams {
  widgetId: string;
  title?: string;
  color?: WidgetRow["color"];
  layout_w?: number;
  config?: Record<string, unknown>;
}

interface MutationContext {
  previousWidgets?: WidgetRow[];
}

export const useWidgetsQuery = () => {
  return useQuery({
    queryKey: queryKeys.widgets.list(),
    queryFn: () => dashboardRepository.fetchWidgets(),
  });
};

export const useAddWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<WidgetRow, Error, AddWidgetParams, MutationContext>({
    mutationKey: queryKeys.widgets.list(),
    mutationFn: async ({
      type,
      title: inputTitle,
      color = "default",
      layout_w = 1,
      widgetId,
    }) => {
      const targetWidgetId = widgetId || crypto.randomUUID();
      const currentWidgets =
        queryClient.getQueryData<WidgetRow[]>(queryKeys.widgets.list()) ?? [];

      const otherWidgets = currentWidgets.filter(
        (w) => w.widget_id !== targetWidgetId,
      );

      const config = WIDGET_CONFIG_MAP[type as keyof typeof WIDGET_CONFIG_MAP];
      const baseTitle = config?.title ?? "위젯";

      const finalTitle =
        inputTitle || generateNextWidgetTitle(type, otherWidgets, baseTitle);

      const maxSortOrder =
        otherWidgets.length > 0
          ? Math.max(...otherWidgets.map((w) => w.sort_order))
          : 0;
      const nextSortOrder = maxSortOrder + 1;

      const isClock = type === "clock";
      const clockConfig = isClock ? DEFAULT_CLOCK_CONFIG : {};

      return dashboardRepository.insertWidget({
        widget_id: targetWidgetId,
        type,
        title: finalTitle,
        color,
        layout_w,
        layout_h: 1,
        layout_x: 0,
        layout_y: 0,
        sort_order: nextSortOrder,
        config:
          clockConfig as unknown as Database["public"]["Tables"]["widgets"]["Insert"]["config"],
      });
    },
    onMutate: async (newWidgetParams) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.widgets.list() });

      const targetWidgetId = newWidgetParams.widgetId || crypto.randomUUID();
      newWidgetParams.widgetId = targetWidgetId;

      const previousWidgets =
        queryClient.getQueryData<WidgetRow[]>(queryKeys.widgets.list()) ?? [];

      const config =
        WIDGET_CONFIG_MAP[
          newWidgetParams.type as keyof typeof WIDGET_CONFIG_MAP
        ];
      const baseTitle = config?.title ?? "위젯";

      if (!newWidgetParams.title) {
        newWidgetParams.title = generateNextWidgetTitle(
          newWidgetParams.type,
          previousWidgets,
          baseTitle,
        );
      }

      const finalTitle = newWidgetParams.title;

      const maxSortOrder =
        previousWidgets.length > 0
          ? Math.max(...previousWidgets.map((w) => w.sort_order))
          : 0;

      const optimisticWidget: WidgetRow = {
        id: crypto.randomUUID(),
        user_id: "",
        widget_id: targetWidgetId,
        type: newWidgetParams.type,
        title: finalTitle,
        color: newWidgetParams.color ?? "default",
        layout_w: newWidgetParams.layout_w ?? 1,
        layout_h: 1,
        layout_x: 0,
        layout_y: 0,
        sort_order: maxSortOrder + 1,
        config: (newWidgetParams.type === "clock"
          ? DEFAULT_CLOCK_CONFIG
          : {}) as unknown as WidgetRow["config"],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      queryClient.setQueryData<WidgetRow[]>(queryKeys.widgets.list(), [
        ...previousWidgets,
        optimisticWidget,
      ]);

      return { previousWidgets };
    },
    onError: (err, _variables, context) => {
      if (context?.previousWidgets) {
        queryClient.setQueryData<WidgetRow[]>(
          queryKeys.widgets.list(),
          context.previousWidgets,
        );
      }
      toast.error("위젯 추가 실패", { description: err.message });
    },
    onSettled: () => {
      if (
        queryClient.isMutating({
          mutationKey: queryKeys.widgets.list(),
        }) === 1
      ) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.widgets.list(),
        });
      }
    },
  });
};

export const useUpdateWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<WidgetRow, UpdateWidgetParams, WidgetRow[]>({
      queryClient,
      queryKey: queryKeys.widgets.list(),
      mutationFn: ({ widgetId, title, color, layout_w, config }) =>
        dashboardRepository.updateWidget(widgetId, {
          ...(title !== undefined && { title }),
          ...(color !== undefined && { color }),
          ...(layout_w !== undefined && { layout_w }),
          ...(config !== undefined && {
            config: config as unknown as WidgetRow["config"],
          }),
        }),
      updateCache: (
        oldWidgets = [],
        { widgetId, title, color, layout_w, config },
      ) =>
        oldWidgets.map((w) => {
          if (w.widget_id !== widgetId) return w;
          return {
            ...w,
            ...(title !== undefined && { title }),
            ...(color !== undefined && { color }),
            ...(layout_w !== undefined && { layout_w }),
            ...(config !== undefined && {
              config: {
                ...(w.config as object),
                ...config,
              } as unknown as WidgetRow["config"],
            }),
          };
        }),
      errorMessage: "위젯 설정 변경 실패",
    }),
  );
};

export const useDeleteWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<void, string, WidgetRow[]>({
      queryClient,
      queryKey: queryKeys.widgets.list(),
      mutationFn: (widgetId: string) =>
        dashboardRepository.deleteWidget(widgetId),
      updateCache: (oldWidgets = [], widgetId) =>
        oldWidgets.filter((w) => w.widget_id !== widgetId),
      errorMessage: "위젯 삭제 실패",
    }),
  );
};

export const useReorderWidgetsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<void, string[], WidgetRow[]>({
      queryClient,
      queryKey: queryKeys.widgets.list(),
      mutationFn: (widgetIds: string[]) =>
        dashboardRepository.reorderWidgets(widgetIds),
      updateCache: (oldWidgets = [], widgetIds) => {
        const widgetMap = new Map(oldWidgets.map((w) => [w.widget_id, w]));
        return widgetIds
          .map((id, index) => {
            const item = widgetMap.get(id);
            if (!item) return null;
            return { ...item, sort_order: index + 1 };
          })
          .filter((w): w is WidgetRow => w !== null);
      },
      errorMessage: "위젯 순서 변경 실패",
    }),
  );
};

export const useResetDashboardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<void, void, WidgetRow[]>({
      queryClient,
      queryKey: queryKeys.widgets.list(),
      mutationFn: () => dashboardRepository.deleteAllWidgets(),
      updateCache: () => [],
      errorMessage: "대시보드 초기화 실패",
    }),
  );
};
````

## File: package.json
````json
{
  "name": "dashcraft",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "storybook": "storybook dev -p 6006",
    "test": "vitest run",
    "test:watch": "vitest",
    "build-storybook": "storybook build",
    "prepare": "husky",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:report": "playwright show-report"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/modifiers": "^9.0.0",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@sentry/nextjs": "^8.47.0",
    "@supabase/ssr": "^0.12.7",
    "@supabase/supabase-js": "^2.118.0",
    "@tanstack/react-query": "^5.104.5",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.4.0",
    "dompurify": "^3.4.17",
    "framer-motion": "^13.1.1",
    "lucide-react": "^0.469.0",
    "next": "^15.1.7",
    "next-themes": "^0.4.6",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "sonner": "^2.0.8",
    "tailwind-merge": "^3.6.0",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^3.2.7",
    "@commitlint/cli": "^19.6.1",
    "@commitlint/config-conventional": "^19.6.0",
    "@eslint/eslintrc": "^3",
    "@playwright/test": "^1.65.0",
    "@storybook/addon-essentials": "^8.4.7",
    "@storybook/addon-interactions": "^8.4.7",
    "@storybook/addon-onboarding": "^8.4.7",
    "@storybook/blocks": "^8.4.7",
    "@storybook/nextjs": "^8.4.7",
    "@storybook/react": "^8.4.7",
    "@storybook/test": "^8.4.7",
    "@tanstack/react-query-devtools": "^5.104.5",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@types/dompurify": "^3.0.5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9",
    "eslint-config-next": "15.1.0",
    "eslint-plugin-storybook": "^0.11.6",
    "husky": "^9.1.7",
    "jsdom": "^25.0.1",
    "lint-staged": "^15.2.10",
    "msw": "^2.7.0",
    "postcss": "^8",
    "prettier": "^3.9.6",
    "storybook": "^8.4.7",
    "tailwindcss": "^3.4.1",
    "typescript": "^5",
    "vitest": "^2.1.8"
  },
  "eslintConfig": {
    "extends": [
      "plugin:storybook/recommended"
    ]
  }
}
````

## File: src/features/calendar/ui/CalendarView.tsx
````typescript
"use client";

import React, { useState, useMemo } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday as isTodayFn,
  addYears,
  subYears,
} from "date-fns";
import { Loader2 } from "lucide-react";
import { AppHeader } from "@/widgets/header/ui/AppHeader";
import { cn } from "@/shared/lib/utils";
import { CalendarCell } from "./CalendarCell";
import { CalendarHeader } from "./CalendarHeader";
import { ScheduleModal } from "./ScheduleModal";
import { DaySchedulePopover } from "./DaySchedulePopover";
import { MobileScheduleList } from "./MobileScheduleList";
import { useCalendarNavigation } from "../model/useCalendarNavigation";
import { useScheduleModal } from "../model/useScheduleModal";
import { useCalendarSchedules } from "../model/useCalendarSchedules";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const CalendarView = () => {
  const [popoverDateStr, setPopoverDateStr] = useState<string | null>(null);

  const {
    currentDate,
    setCurrentDate,
    handlePrevMonth,
    handleNextMonth,
    handleToday,
    startDateStr,
    endDateStr,
  } = useCalendarNavigation();

  const {
    isOpen,
    selectedDateStr,
    scheduleToEdit,
    selectDate,
    openAddModal,
    openEditModal,
    closeModal,
  } = useScheduleModal();

  const {
    schedules,
    schedulesMap,
    isLoading,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    isSaving,
  } = useCalendarSchedules(startDateStr, endDateStr);

  const handlePrevYear = () => setCurrentDate((prev) => subYears(prev, 1));
  const handleNextYear = () => setCurrentDate((prev) => addYears(prev, 1));

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    return eachDayOfInterval({ start: gridStart, end: gridEnd });
  }, [currentDate]);

  const handleSaveModal = async (params: {
    scheduleId?: string;
    dateStr: string;
    title: string;
    time?: string;
    color?: string;
  }) => {
    if (params.scheduleId) {
      await updateSchedule({
        scheduleId: params.scheduleId,
        dateStr: params.dateStr,
        title: params.title,
        time: params.time,
        color: params.color,
      });
    } else {
      await addSchedule({
        dateStr: params.dateStr,
        title: params.title,
        time: params.time,
        color: params.color,
      });
    }
  };

  const selectedDaySchedules = selectedDateStr
    ? (schedulesMap.get(selectedDateStr) ?? [])
    : [];

  const popoverSchedules = popoverDateStr
    ? (schedulesMap.get(popoverDateStr) ?? [])
    : [];

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <AppHeader showSearchButton={false} />

      <main className="flex-1 max-w-[1800px] w-full mx-auto p-4 sm:p-6 flex flex-col space-y-4">
        <div className="bg-card border border-border rounded-2xl shadow-xs overflow-hidden flex flex-col flex-1">
          <CalendarHeader
            currentDate={currentDate}
            onPrevYear={handlePrevYear}
            onPrevMonth={handlePrevMonth}
            onNextYear={handleNextYear}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />

          <div className="grid grid-cols-7 border-b border-border text-center text-xs font-semibold py-2 bg-muted/30 select-none">
            {WEEK_DAYS.map((day, idx) => (
              <div
                key={day}
                className={cn(
                  "py-1",
                  idx === 0 && "text-rose-500 font-bold",
                  idx === 6 && "text-blue-500 font-bold",
                )}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="flex-1 relative flex flex-col min-h-[600px]">
            {isLoading && (
              <div className="absolute inset-0 bg-background/50 backdrop-blur-2xs flex items-center justify-center z-10">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            )}

            <div className="grid grid-cols-7 auto-rows-fr flex-1 border-l border-t border-border/60">
              {calendarDays.map((day) => {
                const dateStr = format(day, "yyyy-MM-dd");
                const daySchedules = schedulesMap.get(dateStr) ?? [];

                return (
                  <CalendarCell
                    key={dateStr}
                    date={day}
                    dateStr={dateStr}
                    isCurrentMonth={isSameMonth(day, currentDate)}
                    isToday={isTodayFn(day)}
                    isSelected={selectedDateStr === dateStr}
                    daySchedules={daySchedules}
                    onSelectDate={selectDate}
                    onOpenModal={openAddModal}
                    onOpenPopover={(dStr) => setPopoverDateStr(dStr)}
                    onEditSchedule={(_dStr, schedule) => {
                      const target = schedules.find(
                        (s) => s.schedule_id === schedule.id,
                      );
                      if (target) openEditModal(target);
                    }}
                    onRemoveSchedule={(_dStr, id) => {
                      deleteSchedule(id);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <MobileScheduleList
          selectedDateStr={selectedDateStr}
          schedules={selectedDaySchedules}
          onAddSchedule={openAddModal}
          onEditSchedule={(id) => {
            const target = schedules.find((s) => s.schedule_id === id);
            if (target) openEditModal(target);
          }}
          onDeleteSchedule={deleteSchedule}
        />
      </main>

      <DaySchedulePopover
        dateStr={popoverDateStr ?? ""}
        schedules={popoverSchedules}
        isOpen={Boolean(popoverDateStr)}
        onClose={() => setPopoverDateStr(null)}
        onAddSchedule={(dStr) => openAddModal(dStr)}
        onEditSchedule={(schedule) => {
          const target = schedules.find((s) => s.schedule_id === schedule.id);
          if (target) openEditModal(target);
        }}
        onDeleteSchedule={deleteSchedule}
      />

      <ScheduleModal
        isOpen={isOpen}
        selectedDateStr={selectedDateStr}
        scheduleToEdit={scheduleToEdit}
        isSaving={isSaving}
        onClose={closeModal}
        onSave={handleSaveModal}
        onDelete={deleteSchedule}
      />
    </div>
  );
};
````

## File: src/features/todo-widget/ui/TodoList.tsx
````typescript
"use client";

import { Check, CheckCircle2, Circle, Edit2, Trash2, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { useEffect, useRef, useState, memo } from "react";
import { TodoRow } from "../api/todoRepository";
import { TodoItemData } from "../model/types";

type UnifiedTodoItem = TodoRow | TodoItemData;

interface TodoListProps {
  todos: UnifiedTodoItem[];
  onToggle: (id: string, completed: boolean) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  isExpanded?: boolean;
}

const getItemId = (todo: UnifiedTodoItem): string => {
  return "todo_id" in todo ? todo.todo_id : todo.id;
};

const TodoItem = memo(
  ({
    todo,
    onToggle,
    onEdit,
    onDelete,
  }: {
    todo: UnifiedTodoItem;
    onToggle: (id: string, completed: boolean) => void;
    onEdit: (id: string, text: string) => void;
    onDelete: (id: string) => void;
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef<HTMLInputElement>(null);
    const todoId = getItemId(todo);

    useEffect(() => {
      if (isEditing) {
        inputRef.current?.focus();
      }
    }, [isEditing]);

    const handleSave = () => {
      const trimmed = editText.trim();
      if (trimmed && trimmed !== todo.text) {
        onEdit(todoId, trimmed);
      } else {
        setEditText(todo.text);
      }
      setIsEditing(false);
    };

    const handleCancel = () => {
      setEditText(todo.text);
      setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleSave();
      if (e.key === "Escape") handleCancel();
    };

    return (
      <li className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors group gap-2 min-w-0 w-full">
        {isEditing ? (
          <div className="flex items-center gap-1 w-full min-w-0">
            <input
              ref={inputRef}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
              className="flex-1 min-w-0 bg-background border rounded px-2 text-xs h-7 outline-none focus:ring-1 focus:ring-primary"
            />
            <div className="flex items-center shrink-0 ml-auto gap-0.5">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleSave}
                className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-primary/10 text-primary transition-colors shrink-0 cursor-pointer"
                aria-label="저장"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleCancel}
                className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-muted text-muted-foreground transition-colors shrink-0 cursor-pointer"
                aria-label="취소"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => onToggle(todoId, todo.completed)}
              onDoubleClick={() => setIsEditing(true)}
              className="flex items-center gap-2 text-left flex-1 min-w-0 cursor-pointer py-0.5 pr-2"
            >
              {todo.completed ? (
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
              )}
              <span
                className={cn(
                  "truncate text-xs flex-1 min-w-0",
                  todo.completed
                    ? "line-through text-muted-foreground"
                    : "text-foreground",
                )}
              >
                {todo.text}
              </span>
            </button>

            <div className="flex items-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shrink-0 ml-auto gap-0.5">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer"
                aria-label="수정"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onDelete(todoId)}
                className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors shrink-0 cursor-pointer"
                aria-label="삭제"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}
      </li>
    );
  },
);

TodoItem.displayName = "TodoItem";

export const TodoList = memo(
  ({ todos, onToggle, onEdit, onDelete, isExpanded }: TodoListProps) => {
    if (todos.length === 0) {
      return (
        <div
          className={cn(
            "flex-1 flex items-center justify-center py-6 text-xs text-muted-foreground",
            isExpanded ? "min-h-[300px]" : "min-h-[120px]",
          )}
        >
          등록된 할 일이 없습니다.
        </div>
      );
    }

    return (
      <ul
        className={cn(
          "space-y-2 pr-1 flex-1 transition-all w-full overflow-y-auto scrollbar-thin",
          isExpanded
            ? "max-h-[460px] min-h-[300px]"
            : "max-h-[160px] min-h-[120px]",
        )}
      >
        {todos.map((todo) => (
          <TodoItem
            key={getItemId(todo)}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  },
);

TodoList.displayName = "TodoList";
````

## File: src/widgets/dashboard-grid/ui/SortableWidget.tsx
````typescript
"use client";

import { memo, useCallback, useMemo } from "react";
import { useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { WidgetColor } from "@/entities/widget/model/types";
import { cn } from "@/shared/lib/utils";
import { WidgetContentRenderer } from "./WidgetContentRenderer";
import { WidgetRow } from "../api/dashboardRepository";
import {
  useDeleteWidgetMutation,
  useUpdateWidgetMutation,
  useReorderWidgetsMutation,
  useWidgetsQuery,
} from "../api/useDashboardQuery";

interface SortableWidgetProps {
  widget: WidgetRow;
}

export const SortableWidget = memo(({ widget }: SortableWidgetProps) => {
  const { data: widgets = [] } = useWidgetsQuery();
  const deleteWidgetMutation = useDeleteWidgetMutation();
  const updateWidgetMutation = useUpdateWidgetMutation();
  const reorderWidgetsMutation = useReorderWidgetsMutation();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: widget.widget_id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition: transition || undefined,
  };

  const colSpanClass =
    widget.layout_w === 2
      ? "col-span-1 row-span-2 md:col-span-2"
      : "col-span-1";

  const handleRemove = useCallback(() => {
    deleteWidgetMutation.mutate(widget.widget_id);
  }, [deleteWidgetMutation, widget.widget_id]);

  const handleUpdateTitle = useCallback(
    (title: string) => {
      updateWidgetMutation.mutate({
        widgetId: widget.widget_id,
        title,
      });
    },
    [updateWidgetMutation, widget.widget_id],
  );

  const handleSelectColor = useCallback(
    (color: WidgetColor) => {
      updateWidgetMutation.mutate({
        widgetId: widget.widget_id,
        color,
      });
    },
    [updateWidgetMutation, widget.widget_id],
  );

  const handleToggleWidth = useCallback(() => {
    const nextWidth = widget.layout_w === 1 ? 2 : 1;
    updateWidgetMutation.mutate({
      widgetId: widget.widget_id,
      layout_w: nextWidth,
    });
  }, [updateWidgetMutation, widget.widget_id, widget.layout_w]);

  const handleMoveLeft = useCallback(() => {
    const currentIndex = widgets.findIndex(
      (w) => w.widget_id === widget.widget_id,
    );
    if (currentIndex <= 0) return;

    const reordered = arrayMove(widgets, currentIndex, currentIndex - 1);
    reorderWidgetsMutation.mutate(reordered.map((w) => w.widget_id));
  }, [widgets, widget.widget_id, reorderWidgetsMutation]);

  const handleMoveRight = useCallback(() => {
    const currentIndex = widgets.findIndex(
      (w) => w.widget_id === widget.widget_id,
    );
    if (currentIndex === -1 || currentIndex >= widgets.length - 1) return;

    const reordered = arrayMove(widgets, currentIndex, currentIndex + 1);
    reorderWidgetsMutation.mutate(reordered.map((w) => w.widget_id));
  }, [widgets, widget.widget_id, reorderWidgetsMutation]);

  const dragHandleProps = useMemo(
    () => ({ attributes, listeners }),
    [attributes, listeners],
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isDragging ? 0.25 : 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{
        opacity: { duration: 0.15 },
        scale: { duration: 0.15 },
      }}
      ref={setNodeRef}
      style={style}
      className={cn(
        "h-fit touch-none select-none relative transition-all duration-150",
        isDragging ? "z-0 opacity-25" : "z-10 focus-within:z-30 hover:z-20",
        colSpanClass,
      )}
    >
      <WidgetFrame
        id={widget.widget_id}
        title={widget.title}
        color={widget.color as WidgetColor}
        width={widget.layout_w}
        dragHandleProps={dragHandleProps}
        onRemove={handleRemove}
        onUpdateTitle={handleUpdateTitle}
        onSelectColor={handleSelectColor}
        onToggleWidth={handleToggleWidth}
        onMoveLeft={handleMoveLeft}
        onMoveRight={handleMoveRight}
      >
        <WidgetContentRenderer widget={widget} />
      </WidgetFrame>
    </motion.div>
  );
});

SortableWidget.displayName = "SortableWidget";
````

## File: src/widgets/dashboard-grid/ui/DashboardGrid.tsx
````typescript
"use client";

import { useMemo } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { AnimatePresence } from "framer-motion";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { WidgetColor } from "@/entities/widget/model/types";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { SortableWidget } from "./SortableWidget";
import { DashboardEmpty, DashboardSearchEmpty } from "./DashboardEmptyState";
import { DashboardGridSkeleton } from "./DashboardGridSkeleton";
import { useDashboardDnD } from "../model/useDashboardDnd";
import { useFilteredWidgets } from "../model/useFilteredWidgets";
import { WidgetContentRenderer } from "./WidgetContentRenderer";

export const DashboardGrid = () => {
  const { resetFilter } = useFilterStore();

  const {
    sensors,
    localWidgets,
    activeWidget,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    collisionDetection,
  } = useDashboardDnD();

  const { filteredWidgets: filteredLocalWidgets, isLoading } =
    useFilteredWidgets(localWidgets);

  const widgetIds = useMemo(
    () => filteredLocalWidgets.map((w) => w.widget_id),
    [filteredLocalWidgets],
  );

  if (isLoading) {
    return <DashboardGridSkeleton count={5} />;
  }

  if (localWidgets.length === 0) {
    return <DashboardEmpty />;
  }

  if (filteredLocalWidgets.length === 0) {
    return <DashboardSearchEmpty onResetFilter={resetFilter} />;
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
      modifiers={[restrictToWindowEdges]}
    >
      <SortableContext items={widgetIds} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 items-start w-full">
          <AnimatePresence mode="popLayout">
            {filteredLocalWidgets.map((widget) => (
              <SortableWidget key={widget.widget_id} widget={widget} />
            ))}
          </AnimatePresence>
        </div>
      </SortableContext>

      <DragOverlay dropAnimation={null}>
        {activeWidget ? (
          <div className="w-full opacity-90 scale-[1.02] shadow-2xl cursor-grabbing pointer-events-none">
            <WidgetFrame
              id={activeWidget.widget_id}
              title={activeWidget.title}
              color={activeWidget.color as WidgetColor}
              width={activeWidget.layout_w}
            >
              <WidgetContentRenderer widget={activeWidget} />
            </WidgetFrame>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
````

## File: src/entities/widget/ui/WidgetFrame.tsx
````typescript
"use client";

import React, { memo, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { GripVertical } from "lucide-react";
import { WidgetColor } from "../model/types";
import { COLOR_THEMES } from "../model/constants";
import { WidgetTitleInput } from "./WidgetTitleInput";
import { WidgetHeaderActions } from "./WidgetHeaderActions";
import { WidgetErrorBoundary } from "@/shared/ui/error-boundary/WidgetErrorBoundary";
import { queryKeys } from "@/shared/config/queryKeys";
import { cn } from "@/shared/lib/utils";

interface DragHandleProps {
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
}

interface WidgetFrameProps {
  id: string;
  title: string;
  color?: WidgetColor;
  width?: number;
  children: React.ReactNode;
  dragHandleProps?: DragHandleProps;
  onRemove?: (id: string) => void;
  onUpdateTitle?: (title: string) => void;
  onSelectColor?: (color: WidgetColor) => void;
  onToggleWidth?: () => void;
  onMoveLeft?: (id: string) => void;
  onMoveRight?: (id: string) => void;
}

export const WidgetFrame = memo(
  ({
    id,
    title,
    color = "default",
    width = 1,
    children,
    dragHandleProps,
    onRemove,
    onUpdateTitle,
    onSelectColor,
    onToggleWidth,
    onMoveLeft,
    onMoveRight,
  }: WidgetFrameProps) => {
    const currentTheme = COLOR_THEMES[color] || COLOR_THEMES.default;
    const queryClient = useQueryClient();

    const handleResetQuery = useCallback(() => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.widgets.all,
      });
    }, [queryClient]);

    const handleRemove = useCallback(() => {
      onRemove?.(id);
    }, [id, onRemove]);

    const handleMoveLeft = useCallback(
      (targetId: string) => {
        onMoveLeft?.(targetId);
      },
      [onMoveLeft],
    );

    const handleMoveRight = useCallback(
      (targetId: string) => {
        onMoveRight?.(targetId);
      },
      [onMoveRight],
    );

    const handleUpdateTitle = useCallback(
      (newTitle: string) => {
        onUpdateTitle?.(newTitle);
      },
      [onUpdateTitle],
    );

    const handleSelectColor = useCallback(
      (newColor: WidgetColor) => {
        onSelectColor?.(newColor);
      },
      [onSelectColor],
    );

    const handleToggleWidth = useCallback(() => {
      onToggleWidth?.();
    }, [onToggleWidth]);

    return (
      <div
        className={cn(
          "relative flex flex-col w-full bg-card text-card-foreground rounded-xl border shadow-sm transition-all duration-200 overflow-hidden",
          width === 2
            ? "h-auto min-h-[380px] sm:h-[580px] sm:row-span-2"
            : "h-auto min-h-[280px] sm:h-[280px]",
          currentTheme.border,
        )}
      >
        <div className={cn("h-1 w-full shrink-0", currentTheme.accentBg)} />

        <div
          className={cn(
            "flex items-center px-3 py-1.5 bg-muted/40 border-b select-none h-11 transition-colors touch-pan-y w-full",
            currentTheme.bg,
          )}
        >
          <div className="flex items-center gap-1 flex-1 min-w-0 mr-2 overflow-hidden">
            <button
              type="button"
              {...dragHandleProps?.attributes}
              {...dragHandleProps?.listeners}
              aria-label={`${title} 위젯 순서 이동`}
              className="p-1 rounded-md text-muted-foreground/70 hover:text-foreground cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0 transition-colors"
            >
              <GripVertical className="w-4 h-4" />
            </button>

            <div className="flex-1 min-w-0">
              <WidgetTitleInput
                title={title}
                onUpdateTitle={handleUpdateTitle}
              />
            </div>
          </div>

          <WidgetHeaderActions
            id={id}
            color={color}
            width={width}
            onMoveLeft={handleMoveLeft}
            onMoveRight={handleMoveRight}
            onSelectColor={handleSelectColor}
            onToggleWidth={handleToggleWidth}
            onRemove={handleRemove}
          />
        </div>

        <div className="flex-1 p-4 overflow-visible sm:overflow-hidden flex flex-col min-h-0">
          <WidgetErrorBoundary onReset={handleResetQuery}>
            {children}
          </WidgetErrorBoundary>
        </div>
      </div>
    );
  },
);

WidgetFrame.displayName = "WidgetFrame";
````

## File: src/app/dashboard/page.tsx
````typescript
"use client";

import { useState, useCallback } from "react";
import { DashboardFilterBar } from "@/features/dashboard-filter/ui/DashboardFilterBar";
import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";
import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";
import { ActiveWidgetCounter } from "@/widgets/dashboard/ui/ActiveWidgetCounter";
import { DashboardHeader } from "@/widgets/dashboard/ui/DashboardHeader";
import { useResetDashboardMutation } from "@/widgets/dashboard-grid/api/useDashboardQuery";

export default function DashboardPage() {
  const resetDashboardMutation = useResetDashboardMutation();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleOpenResetModal = useCallback(() => {
    setIsResetModalOpen(true);
  }, []);

  const handleCloseResetModal = useCallback(() => {
    setIsResetModalOpen(false);
  }, []);

  const handleConfirmReset = useCallback(() => {
    resetDashboardMutation.mutate(undefined, {
      onSuccess: () => {
        setIsResetModalOpen(false);
      },
    });
  }, [resetDashboardMutation]);

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <DashboardHeader onOpenResetModal={handleOpenResetModal} />

      <DashboardFilterBar />

      <main className="flex-1 max-w-[1800px] w-full mx-auto p-4 sm:p-6 space-y-6 select-none">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold tracking-tight">
              내 워크스페이스
            </h1>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
              <span>위젯을 자유롭게 드래그하여 배치해보세요.</span>
              <span className="hidden sm:inline-block">•</span>
              <span className="hidden sm:inline-flex items-center gap-1">
                빠른 명령 실행:
                <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-background border rounded shadow-2xs">
                  ⌘K
                </kbd>
                또는
                <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-background border rounded shadow-2xs">
                  Ctrl+K
                </kbd>
              </span>
            </p>
          </div>

          <ActiveWidgetCounter />
        </div>

        <section className="min-h-[500px]">
          <DashboardGrid />
        </section>
      </main>

      <Modal
        isOpen={isResetModalOpen}
        onClose={handleCloseResetModal}
        title="대시보드 초기화"
        description="배치된 모든 위젯과 하위 데이터(할 일, 메모, D-Day 등)가 삭제됩니다. 계속 진행하시겠습니까?"
        footer={
          <>
            <Button
              variant="outline"
              size="md"
              onClick={handleCloseResetModal}
              disabled={resetDashboardMutation.isPending}
            >
              취소
            </Button>
            <Button
              variant="danger"
              size="md"
              onClick={handleConfirmReset}
              isLoading={resetDashboardMutation.isPending}
            >
              초기화
            </Button>
          </>
        }
      >
        <p className="text-xs text-muted-foreground">
          이 작업은 되돌릴 수 없으며, 데이터베이스에 저장된 대시보드의 모든
          위젯이 삭제됩니다.
        </p>
      </Modal>
    </div>
  );
}
````
