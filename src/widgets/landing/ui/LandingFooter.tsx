export const LandingFooter = () => {
  return (
    <footer className="border-t py-8 text-center text-xs text-muted-foreground w-full">
      <div className="mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span suppressHydrationWarning>
          &copy; {new Date().getFullYear()} DashCraft. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
