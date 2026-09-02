"use client";

import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { useCommandPalette } from "../model/useCommandPalette";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { useEffect, useState } from "react";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";
import { Command } from "cmdk";
import { Filter, Plus, Search } from "lucide-react";

export const CommandPalette = () => {
  const { isOpen, setIsOpen } = useCommandPalette();
  const { addWidget, widgets } = useDashboardStore();
  const { setSelectedWidgetType, setSearchQuery } = useFilterStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setSearchQuery(val);
  };

  const handleAddWidget = (type: WidgetType) => {
    const config = WIDGET_CONFIG_MAP[type];
    addWidget({
      type,
      title: config?.title || "새 위젯",
      color: "default",
      layout: {
        id: "",
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
    });
    setIsOpen(false);
  };

  const handleFocusWidget = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(`widget-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-2", "ring-primary");
      setTimeout(
        () => element.classList.remove("ring-2", "ring-primary"),
        2000,
      );
    }
  };

  const handleFilter = (type: WidgetType | "all") => {
    setSelectedWidgetType(type);
    setIsOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-popover text-popover-foreground rounded-xl border shadow-2xl overflow-hidden"
      >
        <Command label="Command Palette" className="w-full">
          <div className="flex items-center border-b px-3">
            <Search className="w-4 h-4 mr-2 shrink-0 opacity-50" />
            <Command.Input
              value={query}
              onValueChange={handleQueryChange}
              placeholder="위젯 검색, 추가 또는 명령어 입력... (Esc로 닫기)"
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              검색 결과가 없습니다.
            </Command.Empty>

            {widgets.length > 0 && (
              <Command.Group
                heading="현재 대시보드 위젯 이동"
                className="px-2 py-1.5 text-xs text-muted-foreground font-semibold"
              >
                {widgets.map((widget) => (
                  <Command.Item
                    key={widget.id}
                    value={`${widget.title}-${widget.id}`}
                    onSelect={() => handleFocusWidget(widget.id)}
                    className="flex items-center gap-2 px-2 py-2 rounded-md text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent"
                  >
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span>{widget.title}</span>
                    <span className="ml-auto text-xs opacity-50">
                      {widget.type}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            <Command.Group
              heading="새 위젯 추가"
              className="px-2 py-1.5 text-xs text-muted-foreground font-semibold"
            >
              {WIDGET_OPTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <Command.Item
                    key={item.type}
                    value={`add-${item.type}-${item.title}`}
                    onSelect={() => handleAddWidget(item.type)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-md text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.title}</span>
                    <Plus className="w-3.5 h-3.5 ml-auto opacity-50" />
                  </Command.Item>
                );
              })}
            </Command.Group>

            <Command.Group
              heading="필터"
              className="px-2 py-1.5 text-xs text-muted-foreground font-semibold"
            >
              <Command.Item
                onSelect={() => handleFilter("all")}
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent"
              >
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span>모든 위젯 보기</span>
              </Command.Item>

              {WIDGET_OPTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <Command.Item
                    key={`filter-${item.type}`}
                    value={`filter-${item.type}-${item.title}`}
                    onSelect={() => handleFilter(item.type)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-md text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.title} 위젯만 보기</span>
                  </Command.Item>
                );
              })}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};
