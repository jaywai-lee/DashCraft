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
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Button
        variant={isRunning ? "outline" : "primary"}
        size={isExpanded ? "lg" : "sm"}
        onClick={onToggleTimer}
        className="gap-2"
      >
        {isRunning ? (
          <>
            <Pause className={cn("w-3.5 h-3.5", isExpanded && "w-4 h-4")} />
            <span>일시정지</span>
          </>
        ) : (
          <>
            <Play className={cn("w-3.5 h-3.5", isExpanded && "w-4 h-4")} />
            <span>시작</span>
          </>
        )}
      </Button>
      <Button
        variant="ghost"
        size={isExpanded ? "lg" : "sm"}
        onClick={onResetTimer}
        className={cn("p-0", isExpanded ? "h-11 w-11" : "h-8 w-8")}
        title="타이머 리셋"
      >
        <RotateCcw className={cn("w-3.5 h-3.5", isExpanded && "w-5 h-5")} />
      </Button>

      <Button
        variant={isSoundEnabled ? "secondary" : "ghost"}
        size={isExpanded ? "lg" : "sm"}
        onClick={onToggleSound}
        className={cn("p-0", isExpanded ? "h-11 w-11" : "h-8 w-8")}
        title={isSoundEnabled ? "화이트 노이즈 끄기" : "화이트 노이즈 켜기"}
      >
        {isSoundEnabled ? (
          <Volume2
            className={cn("w-3.5 h-3.5 text-primary", isExpanded && "w-5 h-5")}
          />
        ) : (
          <VolumeX
            className={cn(
              "w-3.5 h-3.5 text-muted-foreground",
              isExpanded && "w-5 h-5",
            )}
          />
        )}
      </Button>

      <Button
        variant={isNotificationEnabled ? "secondary" : "ghost"}
        size={isExpanded ? "lg" : "sm"}
        onClick={onToggleNotification}
        className={cn("p-0", isExpanded ? "h-11 w-11" : "h-8 w-8")}
        title={isNotificationEnabled ? "알림 끄기" : "알림 켜기"}
      >
        {isNotificationEnabled ? (
          <Bell
            className={cn("w-3.5 h-3.5 text-primary", isExpanded && "w-5 h-5")}
          />
        ) : (
          <BellOff
            className={cn(
              "w-3.5 h-3.5 text-muted-foreground",
              isExpanded && "w-5 h-5",
            )}
          />
        )}
      </Button>
    </div>
  );
};
