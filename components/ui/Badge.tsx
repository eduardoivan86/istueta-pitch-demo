import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-stone-200 text-stone-900",
    success: "bg-emerald-600 text-white",
    warning: "bg-amber-600 text-white",
  };

  return (
    <span className={cn("inline-flex items-center px-3 py-1 text-sm font-medium rounded-full", variants[variant], className)}>
      {children}
    </span>
  );
}
