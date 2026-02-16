import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const docsNav = [
  {
    category: "Getting Started",
    pages: [
      { slug: "introduction", title: "Introduction" },
      { slug: "installation", title: "Installation Guide" },
      { slug: "quick-start", title: "Quick Start" },
    ],
  },
  {
    category: "Admin Panel",
    pages: [
      { slug: "admin-overview", title: "Overview" },
      { slug: "admin-settings", title: "Settings" },
      { slug: "admin-users", title: "User Management" },
    ],
  },
  {
    category: "Modules",
    pages: [
      { slug: "students", title: "Student Module" },
      { slug: "teachers", title: "Teacher Module" },
      { slug: "attendance", title: "Attendance" },
      { slug: "exams", title: "Exams & Results" },
      { slug: "fees", title: "Fee Management" },
      { slug: "accounting", title: "Accounting" },
      { slug: "hr-payroll", title: "HR & Payroll" },
      { slug: "library", title: "Library" },
      { slug: "transport", title: "Transport" },
      { slug: "hostel", title: "Hostel" },
      { slug: "timetable", title: "Timetable" },
      { slug: "online-classes", title: "Online Classes" },
      { slug: "notices", title: "Notice Board" },
      { slug: "events", title: "Events" },
    ],
  },
  {
    category: "System",
    pages: [
      { slug: "roles-permissions", title: "Roles & Permissions" },
      { slug: "multi-branch", title: "Multi Branch Setup" },
      { slug: "super-admin", title: "Super Admin" },
      { slug: "reports", title: "Reports" },
      { slug: "backup-restore", title: "Backup & Restore" },
    ],
  },
];

const allPages = docsNav.flatMap((c) => c.pages);

export default function DocsPage() {
  const { slug } = useParams();
  const currentSlug = slug || "introduction";
  const currentPage = allPages.find((p) => p.slug === currentSlug) || allPages[0];
  const currentIdx = allPages.findIndex((p) => p.slug === currentSlug);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className={`fixed inset-y-16 left-0 z-30 w-64 overflow-y-auto border-r border-border bg-card p-4 transition-transform lg:relative lg:inset-y-0 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="space-y-6">
          {docsNav.map((cat) => (
            <div key={cat.category}>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cat.category}</h4>
              <ul className="space-y-0.5">
                {cat.pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/docs/${p.slug}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                        currentSlug === p.slug ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 z-20 bg-foreground/20 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Content */}
      <div className="flex-1 p-6 lg:p-10">
        <button className="mb-4 text-sm text-primary lg:hidden" onClick={() => setSidebarOpen(true)}>
          ☰ Documentation Menu
        </button>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-display text-3xl font-bold text-foreground">{currentPage.title}</h1>

          <div className="prose prose-sm max-w-none text-foreground">
            <p className="text-muted-foreground">
              This section covers everything you need to know about <strong>{currentPage.title}</strong> in Eskoolia Pro. Follow the step-by-step guide below to get started.
            </p>

            <div className="my-6 rounded-lg border border-border bg-secondary/50 p-6">
              <div className="flex h-40 items-center justify-center text-muted-foreground">
                <span className="text-sm">Screenshot placeholder for {currentPage.title}</span>
              </div>
            </div>

            <h2 className="mt-8 font-display text-xl font-bold text-foreground">Overview</h2>
            <p className="text-muted-foreground">
              The {currentPage.title} module provides comprehensive tools for managing this area of your school's operations. It integrates seamlessly with other modules in Eskoolia Pro.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-foreground">Step-by-Step Guide</h2>
            <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
              <li>Navigate to the {currentPage.title} section from the sidebar.</li>
              <li>Configure the basic settings according to your requirements.</li>
              <li>Add your data using the provided forms or CSV import.</li>
              <li>Review the dashboard for insights and analytics.</li>
              <li>Generate reports as needed.</li>
            </ol>

            <div className="my-6 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
              <p className="text-sm font-medium text-foreground">💡 Note</p>
              <p className="text-sm text-muted-foreground">Make sure you have the required permissions to access this module. Contact your administrator if you need access.</p>
            </div>
          </div>

          {/* Nav */}
          <div className="mt-12 flex justify-between border-t border-border pt-6">
            {currentIdx > 0 ? (
              <Link to={`/docs/${allPages[currentIdx - 1].slug}`} className="text-sm text-primary hover:underline">
                ← {allPages[currentIdx - 1].title}
              </Link>
            ) : <span />}
            {currentIdx < allPages.length - 1 ? (
              <Link to={`/docs/${allPages[currentIdx + 1].slug}`} className="flex items-center gap-1 text-sm text-primary hover:underline">
                {allPages[currentIdx + 1].title} <ChevronRight className="h-3 w-3" />
              </Link>
            ) : <span />}
          </div>
        </div>
      </div>
    </div>
  );
}
