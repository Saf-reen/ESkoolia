import { Users, UserCheck, DollarSign, BookOpen, TrendingUp, TrendingDown, CalendarCheck, FileText } from "lucide-react";

const stats = [
  { label: "Total Students", value: "2,847", change: "+12%", up: true, icon: Users },
  { label: "Total Teachers", value: "156", change: "+3%", up: true, icon: UserCheck },
  { label: "Fee Collected", value: "$284,500", change: "+8%", up: true, icon: DollarSign },
  { label: "Attendance Rate", value: "94.2%", change: "-0.5%", up: false, icon: CalendarCheck },
];

const recentActivity = [
  { text: "New student enrolled: Sarah Johnson", time: "2 min ago" },
  { text: "Fee payment received: $450 from Class 10A", time: "15 min ago" },
  { text: "Exam results published for Mid-Term", time: "1 hour ago" },
  { text: "Teacher leave approved: Mr. Anderson", time: "2 hours ago" },
  { text: "New notice posted: Annual Day Celebration", time: "3 hours ago" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 font-display text-2xl font-bold text-foreground">{s.value}</div>
            <div className={`mt-1 flex items-center gap-1 text-xs font-medium ${s.up ? "text-success" : "text-destructive"}`}>
              {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {s.change} from last month
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chart placeholder */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-display font-semibold text-foreground">Student Enrollment Trend</h3>
          <div className="flex h-48 items-center justify-center rounded-lg bg-secondary/50 text-sm text-muted-foreground">
            Chart visualization area
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-display font-semibold text-foreground">Fee Collection Overview</h3>
          <div className="flex h-48 items-center justify-center rounded-lg bg-secondary/50 text-sm text-muted-foreground">
            Chart visualization area
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 shadow-card">
        <h3 className="mb-4 font-display font-semibold text-foreground">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
              <span className="text-sm text-foreground">{a.text}</span>
              <span className="shrink-0 text-xs text-muted-foreground">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
