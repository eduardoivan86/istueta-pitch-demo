"use client";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-foreground">Istueta Construction</h1>
          <nav className="flex gap-4">
            <span className="text-stone-800 text-sm">Phase 0 Scaffold</span>
          </nav>
        </div>
      </div>
    </header>
  );
}
