import { cn } from "@/lib/utils";

interface TimelineCardProps {
  phaseNumber: number;
  name: string;
  duration: string;
  deliverables: string[];
  typicalCapacity: string;
  className?: string;
}

export default function TimelineCard({
  phaseNumber,
  name,
  duration,
  deliverables,
  typicalCapacity,
  className,
}: TimelineCardProps) {
  return (
    <div className={cn("border border-border-subtle rounded-lg p-6 space-y-4", className)}>
      <div className="flex items-center gap-3 text-accent-copper font-mono text-sm">
        <span className="tracking-wider">━━━</span>
        <span className="font-bold">FASE {phaseNumber} · {name.toUpperCase()}</span>
        <span className="tracking-wider">━━━</span>
      </div>
      <div className="text-xs text-fg-muted uppercase tracking-wide">{duration}</div>
      <ul className="space-y-2">
        {deliverables.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
            <span className="text-accent-terracotta mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-border-subtle">
        <div className="text-xs uppercase tracking-wide text-fg-muted mb-1">Typical Capacity</div>
        <div className="text-sm text-fg-primary">{typicalCapacity}</div>
      </div>
    </div>
  );
}
