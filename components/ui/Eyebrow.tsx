import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn("text-xs uppercase tracking-widest font-medium text-fg-muted", className)}>
      {children}
    </div>
  );
}
