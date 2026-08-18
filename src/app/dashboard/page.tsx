import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background p-6">
      <header className="mb-6 px-4">
        <h1 className="text-2xl font-bold tracking-tight">
          DashCraft Workspace
        </h1>
      </header>
      <DashboardGrid />
    </main>
  );
}
