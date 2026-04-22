import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn("text-xs uppercase tracking-widest text-accent-copper font-medium", className)}>
      {children}
    </div>
  );
}
