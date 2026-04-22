import { cn } from "@/lib/utils";
import type { CompareRow } from "@/types/istueta";

interface CompareListProps {
  todayRows: CompareRow[];
  kivoRows: CompareRow[];
  className?: string;
}

export default function CompareList({ todayRows, kivoRows, className }: CompareListProps) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-8", className)}>
      {/* Today column */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-fg-primary mb-6">Hoy</h3>
        <ul className="space-y-3">
          {todayRows.map((row, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="text-red-500 mt-1 shrink-0">✗</span>
              <span className="text-fg-muted">{row.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* With Kivo column */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-accent-copper mb-6">Con Kivo</h3>
        <ul className="space-y-3">
          {kivoRows.map((row, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="text-emerald-600 mt-1 shrink-0">✓</span>
              <span className="text-fg-primary">{row.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
