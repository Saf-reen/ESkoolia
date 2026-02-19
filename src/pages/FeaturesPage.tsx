import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users, UserCheck, CalendarCheck, FileText, DollarSign, BookOpen,
  BarChart3, Briefcase, Bus, BedDouble, Bell, CalendarDays,
  Building2, Shield, Monitor, Package, Clock, Layers, CheckCircle2
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

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
      <PageHeader
        title="All Features"
        breadcrumbs={[
          { label: "Features" },
          { label: "All Features" }
        ]}
      />

      <div className="py-8"></div> {/* Spacer */}

      {moduleGroups.map((group) => (
        <section key={group.title} className="py-12 border-b border-gray-100 last:border-0">
          <div className="container">
            <h2 className="mb-12 font-display text-3xl font-bold text-[#483285] text-center">{group.title}</h2>

            <div className="grid gap-8">
              {group.modules.map((mod, i) => (
                <div key={mod.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="h-14 w-14 rounded-xl bg-[#483285]/5 text-[#483285] flex items-center justify-center group-hover:bg-[#483285] group-hover:text-white transition-colors duration-300">
                        <mod.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-slate-800 mb-2">{mod.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{mod.desc}</p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {mod.bullets.map((b) => (
                          <div key={b} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-400" /> {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#483285] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container text-center relative z-10">
          <h2 className="mb-6 font-display text-3xl font-bold text-white">Ready to Explore?</h2>
          <Button size="lg" className="bg-white text-[#483285] hover:bg-slate-100 font-bold border-none" asChild>
            <Link to="/register">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
