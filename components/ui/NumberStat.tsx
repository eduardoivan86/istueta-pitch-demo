import { cn } from "@/lib/utils";

interface NumberStatProps {
  value: string;
  label: string;
  source?: string;
  className?: string;
}

export default function NumberStat({ value, label, source, className }: NumberStatProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="font-serif text-5xl md:text-6xl font-bold text-accent-copper">
        {value}
      </div>
      <div className="text-fg-muted text-sm md:text-base">{label}</div>
      {source && (
        <div className="text-xs text-fg-muted/60 italic">Source: {source}</div>
      )}
    </div>
  );
}
