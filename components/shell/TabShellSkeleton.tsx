export default function TabShellSkeleton() {
  return (
    <div className="flex-1 animate-pulse">
      <div className="border-b border-stone-200 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <div className="h-12 w-24 bg-stone-200 rounded"></div>
            <div className="h-12 w-32 bg-stone-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="h-64 bg-stone-100 rounded-lg"></div>
      </div>
    </div>
  );
}
