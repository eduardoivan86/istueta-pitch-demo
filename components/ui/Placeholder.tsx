import { cn } from "@/lib/utils";

interface PlaceholderProps {
  text: string;
  className?: string;
  height?: string;
}

export default function Placeholder({ text, className, height = "h-64" }: PlaceholderProps) {
  return (
    <div className={cn("flex items-center justify-center bg-stone-100 border-2 border-dashed border-stone-300 rounded-lg", height, className)}>
      <p className="text-stone-500 font-medium">{text}</p>
    </div>
  );
}
