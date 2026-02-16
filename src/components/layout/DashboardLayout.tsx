import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, UserCheck, CalendarCheck, FileText,
  DollarSign, BookOpen, Settings, Building2, Menu, X,
  GraduationCap, BarChart3, Briefcase, Bus, BedDouble,
  Bell, CalendarDays
} from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Students", href: "/dashboard/students", icon: Users },
  { label: "Teachers", href: "/dashboard/teachers", icon: UserCheck },
  { label: "Attendance", href: "/dashboard/attendance", icon: CalendarCheck },
  { label: "Exams", href: "/dashboard/exams", icon: FileText },
  { label: "Fees", href: "/dashboard/fees", icon: DollarSign },
  { label: "Accounting", href: "/dashboard/accounting", icon: BarChart3 },
  { label: "HR & Payroll", href: "/dashboard/hr", icon: Briefcase },
  { label: "Library", href: "/dashboard/library", icon: BookOpen },
  { label: "Transport", href: "/dashboard/transport", icon: Bus },
  { label: "Hostel", href: "/dashboard/hostel", icon: BedDouble },
  { label: "Notices", href: "/dashboard/notices", icon: Bell },
  { label: "Events", href: "/dashboard/events", icon: CalendarDays },
  { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { label: "Branches", href: "/dashboard/branches", icon: Building2 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-sidebar-border bg-sidebar transition-transform duration-200 lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <GraduationCap className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-sidebar-foreground">Eskoolia</span>
          <button className="ml-auto text-sidebar-foreground lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          {sidebarLinks.map((l) => {
            const isActive = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setSidebarOpen(false)}
                className={`mb-0.5 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <l.icon className="h-4 w-4 shrink-0" />
                {l.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-foreground/20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center gap-4 border-b border-border bg-card px-4 lg:px-6">
          <button className="text-foreground lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">
            {sidebarLinks.find((l) => l.href === location.pathname)?.label || "Dashboard"}
          </h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
