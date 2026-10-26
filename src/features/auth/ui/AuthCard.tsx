import React from "react";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export const AuthCard = ({
  title,
  subtitle,
  children,
  footer,
}: AuthCardProps) => {
  return (
    <div className="min-h-screen bg-muted/20 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-sm bg-background border rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Link
            href="/"
            className="p-2.5 bg-primary text-primary-foreground rounded-xl mb-1 hover:opacity-90 transition-opacity"
          >
            <LayoutGrid className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold tracking-tight">{title}</h1>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>

        {children}

        <div className="pt-1 text-center">{footer}</div>
      </div>
    </div>
  );
};
