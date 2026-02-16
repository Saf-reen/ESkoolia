import { useLocation } from "react-router-dom";

export default function DashboardPlaceholder() {
  const location = useLocation();
  const name = location.pathname.split("/").pop() || "Module";
  const title = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border bg-card p-8 text-center shadow-card">
        <h2 className="mb-2 font-display text-xl font-semibold text-foreground">{title} Module</h2>
        <p className="text-sm text-muted-foreground">This module is ready for implementation. Connect a backend to enable full functionality.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-5 shadow-card">
            <div className="mb-2 h-3 w-24 rounded-full bg-secondary" />
            <div className="h-6 w-16 rounded bg-secondary" />
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-card p-6 shadow-card">
        <div className="mb-4 h-4 w-32 rounded bg-secondary" />
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="h-3 w-full rounded bg-secondary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
