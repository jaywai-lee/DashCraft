"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { AuthSync } from "./AuthSync";
import { WebVitalsReporter } from "./WebVitalsReporter";

const ReactQueryDevtools =
  process.env.NODE_ENV === "development"
    ? dynamic(
        () =>
          import("@tanstack/react-query-devtools").then(
            (mod) => mod.ReactQueryDevtools,
          ),
        { ssr: false },
      )
    : () => null;

const CommandPalette = dynamic(
  () =>
    import("@/features/command-palette/ui/CommandPalette").then(
      (mod) => mod.CommandPalette,
    ),
  { ssr: false },
);

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
        <WebVitalsReporter />
        {children}
        <CommandPalette />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
