import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users, UserCheck, CalendarCheck, FileText, DollarSign, BookOpen,
  BarChart3, Briefcase, Bus, BedDouble, Bell, CalendarDays,
  Building2, Shield, Monitor, Package, Clock, Layers, CheckCircle2
} from "lucide-react";

const moduleGroups = [
  {
    title: "Academic Management",
    modules: [
      { icon: Users, title: "Student Management", desc: "Complete student lifecycle management from admission to graduation.", bullets: ["Student profiles & enrollment", "Class promotion & transfer", "Alumni tracking", "Document management"] },
      { icon: UserCheck, title: "Teacher Management", desc: "Comprehensive teacher administration and performance tracking.", bullets: ["Teacher profiles & qualifications", "Subject & class assignments", "Performance evaluations", "Leave management"] },
      { icon: CalendarCheck, title: "Attendance", desc: "Automated attendance tracking with real-time notifications.", bullets: ["Daily / period-wise tracking", "Parent SMS/email alerts", "Attendance reports", "Biometric integration"] },
      { icon: FileText, title: "Exams & Results", desc: "Complete examination management from scheduling to report cards.", bullets: ["Exam creation & scheduling", "Grade management", "Report card generation", "Result analytics"] },
      { icon: Clock, title: "Timetable", desc: "Intelligent class scheduling with conflict detection.", bullets: ["Auto-generate timetables", "Teacher allocation", "Room management", "Substitution handling"] },
    ],
  },
  {
    title: "Financial Management",
    modules: [
      { icon: DollarSign, title: "Fee Collection", desc: "Streamlined fee management with online payment support.", bullets: ["Fee structure creation", "Online payments", "Due reminders", "Receipt generation"] },
      { icon: BarChart3, title: "Accounting", desc: "Double-entry accounting system for complete financial control.", bullets: ["Income & expense tracking", "Ledger management", "Balance sheets", "Tax compliance"] },
      { icon: Package, title: "Payroll", desc: "Automated salary processing for all staff.", bullets: ["Salary calculation", "Deductions & bonuses", "Payslip generation", "Bank integration"] },
    ],
  },
  {
    title: "Administration",
    modules: [
      { icon: Briefcase, title: "HR Management", desc: "Complete human resource management for school staff.", bullets: ["Staff records", "Recruitment workflow", "Leave management", "Document storage"] },
      { icon: BookOpen, title: "Library", desc: "Digital library management system.", bullets: ["Book cataloging", "Issue & return tracking", "Fine management", "Digital resources"] },
      { icon: Bus, title: "Transport", desc: "School transport fleet management.", bullets: ["Route planning", "Vehicle tracking", "Driver management", "Fee integration"] },
      { icon: BedDouble, title: "Hostel", desc: "Hostel and boarding facility management.", bullets: ["Room allocation", "Mess management", "Visitor tracking", "Fee integration"] },
    ],
  },
  {
    title: "System & Control",
    modules: [
      { icon: Building2, title: "Multi Branch", desc: "Manage multiple school campuses seamlessly.", bullets: ["Centralized control", "Branch-wise reports", "Data isolation", "Cross-branch transfers"] },
      { icon: Layers, title: "Super Admin", desc: "Platform-wide control panel for system administrators.", bullets: ["Global settings", "Branch management", "User provisioning", "System monitoring"] },
      { icon: Shield, title: "Roles & Permissions", desc: "Granular access control for every user type.", bullets: ["Custom roles", "Module-level permissions", "Action-level control", "Audit logs"] },
      { icon: Monitor, title: "Online Classes", desc: "Virtual classroom integration.", bullets: ["Video conferencing", "Assignment sharing", "Attendance tracking", "Recording support"] },
      { icon: Bell, title: "Notice Board", desc: "School-wide announcement system.", bullets: ["Targeted notifications", "Category-wise notices", "Attachment support", "Read receipts"] },
      { icon: CalendarDays, title: "Events", desc: "School event planning and management.", bullets: ["Event calendar", "Registration", "Participant management", "Photo gallery"] },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <section className="bg-subtle-grid py-16">
        <div className="container text-center">
          <h1 className="mb-4 font-display text-4xl font-extrabold text-foreground">All Features</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore every module built into Eskoolia Pro — designed for schools of all sizes.
          </p>
        </div>
      </section>

      {moduleGroups.map((group) => (
        <section key={group.title} className="border-b border-border py-16 last:border-b-0">
          <div className="container">
            <h2 className="mb-8 font-display text-2xl font-bold text-foreground">{group.title}</h2>
            <div className="space-y-8">
              {group.modules.map((mod, i) => (
                <div key={mod.title} className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <mod.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-foreground">{mod.title}</h3>
                    <p className="mb-4 text-muted-foreground">{mod.desc}</p>
                    <ul className="space-y-2">
                      {mod.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl border border-border bg-secondary/50 p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex h-48 items-center justify-center">
                      <mod.icon className="h-20 w-20 text-primary/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-hero-gradient py-16">
        <div className="container text-center">
          <h2 className="mb-4 font-display text-2xl font-bold text-primary-foreground">Ready to Explore?</h2>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
