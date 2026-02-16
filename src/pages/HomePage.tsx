import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users, UserCheck, CalendarCheck, FileText, DollarSign, BookOpen,
  BarChart3, Briefcase, Bus, BedDouble, Bell, CalendarDays,
  Building2, Shield, Settings, Monitor, GraduationCap, Package,
  Clock, Layers, ChevronDown, ChevronUp, CheckCircle2, ArrowRight
} from "lucide-react";
import { useState } from "react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const features = [
  { icon: Users, title: "Student Management", desc: "Complete student profiles, enrollment, promotions and alumni tracking." },
  { icon: UserCheck, title: "Teacher Management", desc: "Teacher profiles, assignments, qualifications and performance tracking." },
  { icon: CalendarCheck, title: "Attendance", desc: "Daily attendance with reports, notifications and biometric integration." },
  { icon: FileText, title: "Exams & Results", desc: "Exam scheduling, grading, report cards and result analytics." },
  { icon: DollarSign, title: "Fee Management", desc: "Fee collection, invoicing, due reminders and payment tracking." },
  { icon: BarChart3, title: "Accounting", desc: "Income, expenses, ledger, balance sheets and financial reports." },
  { icon: Briefcase, title: "HR Management", desc: "Staff records, leave management, recruitment workflows." },
  { icon: Package, title: "Payroll", desc: "Salary processing, deductions, payslips and tax compliance." },
  { icon: BookOpen, title: "Library", desc: "Book cataloging, issue/return tracking, fine management." },
  { icon: Clock, title: "Timetable", desc: "Class scheduling, teacher allocation and conflict detection." },
  { icon: Monitor, title: "Online Classes", desc: "Virtual classroom integration with video conferencing support." },
  { icon: Users, title: "Parent Portal", desc: "Parent access to grades, attendance, fees and communication." },
  { icon: Building2, title: "Multi Branch", desc: "Manage multiple schools from a single super admin dashboard." },
  { icon: Bus, title: "Transport", desc: "Route planning, vehicle tracking, driver management." },
  { icon: BedDouble, title: "Hostel", desc: "Room allocation, mess management and hostel fee tracking." },
  { icon: Bell, title: "Notice Board", desc: "Announcements, circulars and targeted notifications." },
  { icon: CalendarDays, title: "Events", desc: "Event calendar, registration and participant management." },
  { icon: Shield, title: "Role-Based Access", desc: "Granular permissions for admins, teachers, staff and parents." },
  { icon: Layers, title: "Super Admin", desc: "Centralized control panel for managing the entire platform." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Custom dashboards, exportable reports and data visualizations." },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    desc: "For small schools getting started",
    features: ["Up to 200 Students", "5 Staff Accounts", "Core Modules", "Email Support", "Basic Reports"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    desc: "For growing institutions",
    features: ["Up to 2,000 Students", "Unlimited Staff", "All Modules", "Priority Support", "Advanced Analytics", "Multi Branch (2)", "API Access"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    desc: "For large school networks",
    features: ["Unlimited Students", "Unlimited Staff", "All Modules", "24/7 Support", "Custom Reports", "Unlimited Branches", "White Label", "Dedicated Server"],
    highlighted: false,
  },
];

const faqs = [
  { q: "How long does it take to set up?", a: "You can get started in under 10 minutes. Our guided setup wizard walks you through configuring classes, subjects, and user accounts." },
  { q: "Can I migrate data from another system?", a: "Yes, we support CSV imports for students, teachers, fees, and more. Our team can also assist with custom data migration." },
  { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption, regular backups, and comply with data protection regulations." },
  { q: "Do you offer a free trial?", a: "Yes, every new account gets a 14-day free trial with full access to all features." },
  { q: "Can I manage multiple schools?", a: "Yes, our Professional and Enterprise plans support multi-branch management from a single dashboard." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-subtle-grid py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <GraduationCap className="h-4 w-4" /> #1 School ERP Platform
            </div>
            <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The Complete <span className="text-gradient">School Management</span> Platform
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Streamline administration, empower teachers, and engage parents with our all-in-one school ERP system trusted by 5,000+ institutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/register">Start Free Trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/features">Live Demo</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="overflow-hidden rounded-xl border border-border shadow-card-xl">
              <img src={dashboardMockup} alt="Eskoolia Dashboard" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="border-b border-border bg-card py-10">
        <div className="container text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">Trusted by 5,000+ schools worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Oxford Academy", "Stanford Prep", "Cambridge High", "MIT School", "Harvard Prep"].map((n) => (
              <span key={n} className="font-display text-lg font-bold text-foreground">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20" id="features">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Everything You Need to Run a School</h2>
            <p className="text-muted-foreground">20+ integrated modules designed to handle every aspect of school administration.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group rounded-lg border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-lg hover:-translate-y-0.5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-display text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="bg-secondary/50 py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Powerful Dashboard Analytics</h2>
              <p className="mb-6 text-muted-foreground">Get real-time insights into your institution's performance with customizable dashboards and comprehensive reports.</p>
              <ul className="space-y-3">
                {["Real-time student & staff statistics", "Financial overview and trends", "Attendance analytics with visual charts", "Exam performance comparisons"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-card-lg">
              <img src={dashboardMockup} alt="Dashboard Analytics" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground">Why Choose Eskoolia Pro?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security with encrypted data and regular backups." },
              { icon: Monitor, title: "Cloud Based", desc: "Access from anywhere, any device. No installation required." },
              { icon: Layers, title: "Scalable", desc: "Grows with your institution from 50 to 50,000 students." },
              { icon: Settings, title: "Easy Setup", desc: "Get started in minutes with our guided setup wizard." },
              { icon: Building2, title: "Multi Branch", desc: "Manage multiple campuses from a single dashboard." },
              { icon: Shield, title: "Role-Based Access", desc: "Granular permissions for every user type." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-secondary/50 py-20" id="pricing">
        <div className="container">
          <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground">Simple, Transparent Pricing</h2>
          <p className="mb-12 text-center text-muted-foreground">Start free, upgrade as you grow.</p>
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 ${
                  plan.highlighted
                    ? "border-primary bg-card shadow-card-xl ring-2 ring-primary/20"
                    : "border-border bg-card shadow-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-hero-gradient px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mb-6">
                  <span className="font-display text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? "hero" : "outline"} className="w-full" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border border-border bg-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-4 text-left text-sm font-medium text-foreground"
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                </button>
                {openFaq === i && <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient py-20">
        <div className="container text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground">Ready to Transform Your School?</h2>
          <p className="mb-8 text-primary-foreground/80">Join 5,000+ institutions already using Eskoolia Pro.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Start Your Free Trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
