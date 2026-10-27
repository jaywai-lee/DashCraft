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
