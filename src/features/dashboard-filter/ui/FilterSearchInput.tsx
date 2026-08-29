import { Search, X } from "lucide-react";

interface FilterSearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const FilterSearchInput = ({
  value,
  onChange,
}: FilterSearchInputProps) => {
  return (
    <div className="relative flex-1 max-w-md">
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="위젯, 메모, 할 일, D-Day 검색"
        className="w-full pl-9 pr-8 py-1.5 bg-muted/50 border rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-primary"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
