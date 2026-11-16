import { DashboardFilterBar } from "@/features/dashboard-filter/ui/DashboardFilterBar";
import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";
import { ActiveWidgetCounter } from "@/widgets/dashboard/ui/ActiveWidgetCounter";
import { DashboardWorkspaceShell } from "@/widgets/dashboard/ui/DashboardWorkspaceShell";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <DashboardWorkspaceShell>
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
      </DashboardWorkspaceShell>
    </div>
  );
}
