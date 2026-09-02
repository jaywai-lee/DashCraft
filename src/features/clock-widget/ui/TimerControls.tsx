"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Bell,
  BellOff,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";

interface TimerControlsProps {
  isRunning: boolean;
  isExpanded: boolean;
  isSoundEnabled: boolean;
  isNotificationEnabled: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onToggleSound: () => void;
  onToggleNotification: () => void;
}

export const TimerControls = ({
  isRunning,
  isExpanded,
  isSoundEnabled,
  isNotificationEnabled,
  onToggleTimer,
  onResetTimer,
  onToggleSound,
  onToggleNotification,
}: TimerControlsProps) => {
  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-full px-1 overflow-hidden">
      <Button
        variant={isRunning ? "outline" : "primary"}
        size="sm"
        onClick={onToggleTimer}
        className={cn(
          "gap-1 font-semibold text-xs whitespace-nowrap shrink-0 transition-all",
          isExpanded ? "h-8 px-3 sm:h-10 sm:px-5 sm:text-sm" : "h-8 px-3",
        )}
      >
        {isRunning ? (
          <>
            <Pause
              className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
            />
            <span>일시정지</span>
          </>
        ) : (
          <>
            <Play
              className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
            />
            <span>시작</span>
          </>
        )}
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onResetTimer}
        className={cn("p-0 shrink-0 h-8 w-8", isExpanded && "sm:h-10 sm:w-10")}
        title="타이머 리셋"
      >
        <RotateCcw
          className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
        />
      </Button>

      <Button
        variant={isSoundEnabled ? "secondary" : "ghost"}
        size="sm"
        onClick={onToggleSound}
        className={cn("p-0 shrink-0 h-8 w-8", isExpanded && "sm:h-10 sm:w-10")}
        title={isSoundEnabled ? "화이트 노이즈 끄기" : "화이트 노이즈 켜기"}
      >
        {isSoundEnabled ? (
          <Volume2
            className={cn(
              "w-3.5 h-3.5 text-primary",
              isExpanded && "sm:w-4 sm:h-4",
            )}
          />
        ) : (
          <VolumeX
            className={cn(
              "w-3.5 h-3.5 text-muted-foreground",
              isExpanded && "sm:w-4 sm:h-4",
            )}
          />
        )}
      </Button>

      <Button
        variant={isNotificationEnabled ? "secondary" : "ghost"}
        size="sm"
        onClick={onToggleNotification}
        className={cn("p-0 shrink-0 h-8 w-8", isExpanded && "sm:h-10 sm:w-10")}
        title={isNotificationEnabled ? "알림 끄기" : "알림 켜기"}
      >
        {isNotificationEnabled ? (
          <Bell
            className={cn(
              "w-3.5 h-3.5 text-primary",
              isExpanded && "sm:w-4 sm:h-4",
            )}
          />
        ) : (
          <BellOff
            className={cn(
              "w-3.5 h-3.5 text-muted-foreground",
              isExpanded && "sm:w-4 sm:h-4",
            )}
          />
        )}
      </Button>
    </div>
  );
};
