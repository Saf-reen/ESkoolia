import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";

const plans = [
  {
    name: "Basic",
    monthly: 29,
    yearly: 290,
    desc: "Perfect for small schools",
    features: {
      "Students": "Up to 200",
      "Staff Accounts": "5",
      "Student Management": true,
      "Teacher Management": true,
      "Attendance": true,
      "Exams & Results": true,
      "Fee Management": true,
      "Accounting": false,
      "HR & Payroll": false,
      "Library": false,
      "Transport": false,
      "Hostel": false,
      "Multi Branch": false,
      "Online Classes": false,
      "Reports": "Basic",
      "Support": "Email",
      "API Access": false,
    },
    highlighted: false,
  },
  {
    name: "Professional",
    monthly: 79,
    yearly: 790,
    desc: "For growing institutions",
    features: {
      "Students": "Up to 2,000",
      "Staff Accounts": "Unlimited",
      "Student Management": true,
      "Teacher Management": true,
      "Attendance": true,
      "Exams & Results": true,
      "Fee Management": true,
      "Accounting": true,
      "HR & Payroll": true,
      "Library": true,
      "Transport": true,
      "Hostel": true,
      "Multi Branch": "2 Branches",
      "Online Classes": true,
      "Reports": "Advanced",
      "Support": "Priority",
      "API Access": true,
    },
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: 199,
    yearly: 1990,
    desc: "For large school networks",
    features: {
      "Students": "Unlimited",
      "Staff Accounts": "Unlimited",
      "Student Management": true,
      "Teacher Management": true,
      "Attendance": true,
      "Exams & Results": true,
      "Fee Management": true,
      "Accounting": true,
      "HR & Payroll": true,
      "Library": true,
      "Transport": true,
      "Hostel": true,
      "Multi Branch": "Unlimited",
      "Online Classes": true,
      "Reports": "Custom",
      "Support": "24/7 Dedicated",
      "API Access": true,
    },
    highlighted: false,
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <section className="bg-subtle-grid py-16">
        <div className="container text-center">
          <h1 className="mb-4 font-display text-4xl font-extrabold text-foreground">Pricing</h1>
          <p className="mb-8 text-muted-foreground">Choose the plan that fits your institution.</p>
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card p-1">
            <button onClick={() => setYearly(false)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${!yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-xs opacity-75">(Save 17%)</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-xl border p-6 ${plan.highlighted ? "border-primary bg-card shadow-card-xl ring-2 ring-primary/20" : "border-border bg-card shadow-card"}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-hero-gradient px-3 py-0.5 text-xs font-semibold text-primary-foreground">Most Popular</div>
                )}
                <h3 className="font-display text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mb-6">
                  <span className="font-display text-4xl font-extrabold text-foreground">${yearly ? plan.yearly : plan.monthly}</span>
                  <span className="text-muted-foreground">/{yearly ? "year" : "month"}</span>
                </div>
                <Button variant={plan.highlighted ? "hero" : "outline"} className="mb-6 w-full" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
                <ul className="space-y-2">
                  {Object.entries(plan.features).map(([key, val]) => (
                    <li key={key} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{key}</span>
                      {val === true ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : val === false ? (
                        <X className="h-4 w-4 text-muted-foreground/40" />
                      ) : (
                        <span className="text-xs font-medium text-foreground">{val}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
