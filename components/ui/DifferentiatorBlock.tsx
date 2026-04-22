import { cn } from "@/lib/utils";
import { differentiatorText } from "@/data/istueta-content";

interface DifferentiatorBlockProps {
  variant?: "top" | "bottom";
  className?: string;
}

export default function DifferentiatorBlock({ variant = "top", className }: DifferentiatorBlockProps) {
  return (
    <div className={cn(
      "border-l-4 border-accent-terracotta pl-8 py-6",
      variant === "bottom" && "border-accent-copper",
      className
    )}>
      <p className="font-serif text-2xl md:text-3xl italic text-fg-primary leading-relaxed">
        {differentiatorText}
      </p>
      <div className="mt-4 text-sm text-fg-muted">
        — Not a sales pitch. A statement of fact.
      </div>
    </div>
  );
}
