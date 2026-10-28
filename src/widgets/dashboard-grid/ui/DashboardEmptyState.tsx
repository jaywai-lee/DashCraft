"use client";

import { ChevronDown, LayoutGrid, Plus, SearchX } from "lucide-react";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "../config/widgets.config";
import { useAddWidgetMutation } from "../api/useDashboardQuery";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
  DropdownItem,
} from "@/shared/ui/dropdown/Dropdown";
import { Button } from "@/shared/ui/button";

interface DashboardEmptyProps {
  onAddWidget?: (type: WidgetType) => void;
}

export const DashboardEmpty = ({ onAddWidget }: DashboardEmptyProps) => {
  const addWidgetMutation = useAddWidgetMutation();

  const handleAddWidget = (type: WidgetType) => {
    if (onAddWidget) {
      onAddWidget(type);
      return;
    }

    const config = WIDGET_CONFIG_MAP[type];
    if (!config) return;

    addWidgetMutation.mutate({
      type: config.type,
      title: config.title,
      layout_w: 1,
      widgetId: crypto.randomUUID(),
    });
  };

  return (
    <div className="border-2 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4 bg-background/50 my-4">
      <div className="p-3 bg-primary/10 text-primary rounded-xl">
        <LayoutGrid className="w-8 h-8" />
      </div>
      <div className="space-y-1 max-w-sm">
        <h3 className="font-semibold text-base">배치된 위젯이 없습니다</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          상단의 &quot;위젯 추가&quot; 메뉴 또는 아래 버튼을 눌러 나만의
          대시보드를 채워보세요.
        </p>
      </div>

      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="primary"
            size="md"
            className="gap-1.5"
            disabled={addWidgetMutation.isPending}
          >
            <Plus className="w-4 h-4" />
            <span>첫 위젯 추가하기</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </Button>
        </DropdownTrigger>

        <DropdownContent align="left">
          {WIDGET_OPTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownItem
                key={item.type}
                onClick={() => handleAddWidget(item.type)}
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{item.title}</span>
              </DropdownItem>
            );
          })}
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

interface DashboardSearchEmptyProps {
  onResetFilter: () => void;
}

export const DashboardSearchEmpty = ({
  onResetFilter,
}: DashboardSearchEmptyProps) => {
  return (
    <div className="border-2 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4 bg-background/30 my-4">
      <div className="p-3 bg-muted text-muted-foreground rounded-xl">
        <SearchX className="w-8 h-8" />
      </div>
      <div className="space-y-1 max-w-sm">
        <h3 className="font-semibold text-base">검색 결과가 없습니다</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          필터 조건이나 검색어를 변경하여 다시 검색해보세요
        </p>
      </div>
      <Button variant="outline" size="md" onClick={onResetFilter}>
        필터 조건 초기화
      </Button>
    </div>
  );
};
