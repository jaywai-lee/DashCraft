interface TodoProgressProps {
  percent: number;
}

export const TodoProgress = ({ percent }: TodoProgressProps) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground font-medium">
        <span>진행률</span>
        <span>{percent}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary h-2 transition-all duration-300 ease-in-out"
          style={{ width: `${percent}` }}
        />
      </div>
    </div>
  );
};
