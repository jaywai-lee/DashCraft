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
                variant="ghost"
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
