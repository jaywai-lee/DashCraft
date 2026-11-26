# 🛠️ DashCraft (대시크래프트)

> **내 생산성에 딱 맞게 조합하고 배치하는 맞춤형 위젯 대시보드 플랫폼**  
> 다양한 위젯을 2D 그리드에 자유롭게 배치하고, 클라우드 동기화 및 전용 캘린더로 일정을 관리할 수 있는 웹 애플리케이션입니다.

[👉 서비스 바로가기](https://dash-craft-henna.vercel.app/)

---

## ✨ Key Features

- **맞춤형 위젯 크래프팅**: 시계/뽀모도로 타이머, 할 일(To-Do) 목록, D-Day, 리치 텍스트 메모 위젯을 자유롭게 추가·삭제하고 `1x1` / `2x2` 레이아웃 크기 및 위젯별 테마 컬러 설정
- **직관적인 2D Grid Drag & Drop + 웹 접근성**: `@dnd-kit` 기반 위젯 순서 재배치, 키보드 제어(Index Swap) 및 스크린 리더(`aria-live`) 안내 지원
- **전용 캘린더 & 빠른 명령 실행**: 월간 캘린더(`/calendar`)에서 대한민국 공휴일 확인 및 일정 관리, `⌘K`(`Ctrl+K`) 커맨드 팔레트와 다중 필터링 바 제공
- **Supabase 인증 & 클라우드 데이터 영속성**: 이메일 인증, Google OAuth, 비밀번호 재설정, 계정 영구 삭제를 지원하며 PostgreSQL RLS(Row Level Security)와 Optimistic Updates로 실시간 동기화 구현
- **프로덕션 보안 및 관측 가능성**: CSP·보안 헤더, Zod 스키마 검증, DOMPurify HTML 살균, Sentry 에러 추적 및 Core Web Vitals(LCP, INP, CLS) 모니터링 적용

---

## 🛠 Tech Stack

- **Core**: Next.js 15 (App Router), React 19, TypeScript
- **Backend & Auth**: Supabase (`@supabase/ssr`, `@supabase/supabase-js`, PostgreSQL, Storage)
- **State & Data Fetching**: Zustand, TanStack Query v5
- **Styling & UI**: Tailwind CSS, Framer Motion, Lucide React, `cmdk`, Sonner
- **Drag & Drop**: `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/modifiers`
- **Validation & Security**: Zod, DOMPurify
- **Observability**: Sentry (`@sentry/nextjs`), Next.js Web Vitals
- **Testing & Quality**: Vitest, Testing Library, MSW, Playwright (E2E), Storybook, Chromatic, Husky, lint-staged, Commitlint
- **DevOps & Infrastructure**: Docker (Multi-stage Standalone Build), GitHub Actions (CI), Vercel
- **Architecture**: FSD (Feature-Sliced Design)

---

## 📂 Project Structure

```text
src/
├── app/          # Next.js App Router 페이지, API 라우트
├── widgets/      # 랜딩 페이지 섹션, 앱 헤더, 대시보드 위젯 그리드 컨테이너
├── features/     # 인증, 캘린더, 시계/뽀모도로, 할 일, 메모, D-Day, 커맨드 팔레트, 필터, 계정 설정
├── entities/     # 위젯 공통 프레임·헤더 액션·컬러 피커·도메인 모델
└── shared/       # Supabase 클라이언트, Sentry/Web Vitals 모니터링, 공용 UI 컴포넌트, 유틸리티
supabase/
└── migrations/   # PostgreSQL 테이블·트리거·RLS 정책 및 avatars Storage 버킷 마이그레이션
e2e/              # Playwright 브라우저 E2E 테스트
```

---

## 🚀 Getting Started

### 1. Repository Clone & Install

```bash
git clone [https://github.com/jaywai-lee/dashcraft.git](https://github.com/jaywai-lee/dashcraft.git)
cd dashcraft
npm install
```

### 2. Environment Variables Setup

프로젝트 루트에 `.env.local` 파일을 생성하고 아래 환경 변수를 설정합니다.

```env
# Supabase (필수)
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>

# Sentry 모니터링 (선택)
NEXT_PUBLIC_SENTRY_DSN=<your-sentry-dsn>
SENTRY_ORG=<your-sentry-org>
SENTRY_PROJECT=<your-sentry-project>
SENTRY_AUTH_TOKEN=<your-sentry-auth-token>

# 자체 리버스 프록시(Docker 등) 배포 시 허용 호스트 제한 (선택)
ALLOWED_HOSTS=dash-craft-henna.vercel.app
```

### 3. Supabase Database Migration (최초 1회)

`supabase/migrations/` 디렉터리의 SQL 파일을 Supabase 프로젝트에 순서대로 적용합니다.

1. `20261028000000_init_dashcraft_schema.sql` (테이블, 트리거, RLS 정책, `reorder_widgets` RPC)
2. `20261028000001_add_avatars_storage_bucket.sql` (`avatars` 스토리지 버킷 생성)
3. `20261102000000_update_avatars_storage_policy.sql` (`avatars` 소유자 전용 조회 RLS 강화)

### 4. Run Development Server & Tests

```bash
# 개발 서버 실행 (Turbopack)
npm run dev

# 단위 테스트 실행 (Vitest)
npm test

# E2E 테스트 실행 (Playwright)
npm run test:e2e

# Storybook 실행
npm run storybook
```

### 5. Run Docker Container (Optional)

```bash
docker build -t dashcraft .
docker run -p 3000:3000 --env-file .env.local dashcraft
```

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
