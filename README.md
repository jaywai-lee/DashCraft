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
