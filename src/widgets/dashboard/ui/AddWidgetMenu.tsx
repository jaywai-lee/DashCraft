"use client";

import React, { memo, useCallback } from "react";
import { Button } from "@/shared/ui/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";
import { useAddWidgetMutation } from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { ChevronDown, Plus } from "lucide-react";

interface AddWidgetMenuProps {
  variant?: "desktop" | "mobile-fab";
}

export const AddWidgetMenu = memo(
  ({ variant = "desktop" }: AddWidgetMenuProps) => {
    const addWidgetMutation = useAddWidgetMutation();

    const handleAddWidget = useCallback(
      (type: WidgetType) => {
        const config = WIDGET_CONFIG_MAP[type];
        if (!config) return;

        addWidgetMutation.mutate({
          type: config.type,
          title: config.title,
          layout_w: 1,
          widgetId: crypto.randomUUID(),
        });
      },
      [addWidgetMutation],
    );

    if (variant === "mobile-fab") {
      return (
        <div className="fixed bottom-6 right-6 sm:hidden z-[90]">
          <Dropdown>
            <DropdownTrigger>
              <button
                type="button"
                disabled={addWidgetMutation.isPending}
                className="w-13 h-13 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-primary/20 cursor-pointer"
                aria-label="위젯 추가"
              >
                <Plus className="w-6 h-6" />
              </button>
            </DropdownTrigger>

            <DropdownContent
              align="right"
              className="w-48 bottom-full mb-3 right-0 top-auto animate-in fade-in-80 zoom-in-95"
            >
              <div className="px-3 py-1.5 border-b mb-1">
                <p className="text-[10px] text-muted-foreground font-semibold">
                  위젯 추가
                </p>
              </div>
              {WIDGET_OPTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownItem
                    key={item.type}
                    onClick={() => handleAddWidget(item.type)}
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.title}</span>
                  </DropdownItem>
                );
              })}
            </DropdownContent>
          </Dropdown>
        </div>
      );
    }

    return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="primary"
            size="sm"
            className="gap-1.5 text-xs h-9 px-3"
            disabled={addWidgetMutation.isPending}
          >
            <Plus className="w-4 h-4" />
            <span>위젯 추가</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </Button>
        </DropdownTrigger>

        <DropdownContent align="right" className="w-48">
          {WIDGET_OPTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownItem
                key={item.type}
                onClick={() => handleAddWidget(item.type)}
              >
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <span>{item.title}</span>
              </DropdownItem>
            );
          })}
        </DropdownContent>
      </Dropdown>
    );
  },
);

AddWidgetMenu.displayName = "AddWidgetMenu";
