import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Toaster } from "sonner";
import { CommandPalette } from "@/features/command-palette/ui/CommandPalette";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CommandPalette />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
