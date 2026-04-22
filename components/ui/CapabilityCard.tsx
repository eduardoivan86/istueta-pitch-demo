import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export default function CapabilityCard({ number, title, description, className }: CapabilityCardProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-baseline gap-3">
        <span className="text-accent-copper font-bold text-lg">{number}</span>
        <h3 className="text-xl font-bold text-fg-primary uppercase tracking-wide">{title}</h3>
      </div>
      <p className="text-fg-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
