import { cn } from "@/lib/utils";
import Button from "./Button";

interface PricingCardProps {
  title: string;
  setupPrice: number;
  monthlyPrice: number;
  features: string[];
  cta: string;
  recommended?: boolean;
  className?: string;
}

export default function PricingCard({
  title,
  setupPrice,
  monthlyPrice,
  features,
  cta,
  recommended = false,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "border rounded-lg p-8 space-y-6 transition-all",
        recommended
          ? "border-accent-copper bg-bg-darker shadow-lg scale-105"
          : "border-border-subtle bg-bg-dark",
        className
      )}
    >
      {recommended && (
        <div className="text-xs uppercase tracking-widest text-accent-copper font-bold">
          Recommended
        </div>
      )}
      <div>
        <h3 className="text-2xl font-bold text-fg-primary mb-2">{title}</h3>
        <div className="space-y-1">
          <div className="text-fg-muted">
            <span className="text-3xl font-bold text-accent-copper">${setupPrice.toLocaleString()}</span>
            <span className="text-sm"> setup</span>
          </div>
          <div className="text-fg-muted">
            <span className="text-2xl font-bold text-fg-primary">${monthlyPrice.toLocaleString()}</span>
            <span className="text-sm">/month</span>
          </div>
        </div>
      </div>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
            <span className="text-accent-copper mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={recommended ? "primary" : "secondary"} className="w-full">
        {cta}
      </Button>
    </div>
  );
}
