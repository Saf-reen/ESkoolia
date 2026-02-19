import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

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
      <PageHeader
        title="Pricing"
        breadcrumbs={[
          { label: "Pricing" },
          { label: "Plans" }
        ]}
      />

      <section className="py-16">
        <div className="container">

          <div className="text-center mb-12">
            <h2 className="mb-4 font-display text-3xl font-bold text-[#483285]">Choose the plan that fits your institution</h2>
            <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              <button
                onClick={() => setYearly(false)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${!yearly ? "bg-[#483285] text-white shadow-md" : "text-slate-500 hover:text-slate-800"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${yearly ? "bg-[#483285] text-white shadow-md" : "text-slate-500 hover:text-slate-800"}`}
              >
                Yearly <span className={`text-[10px] ml-1 uppercase tracking-wide px-1.5 py-0.5 rounded ${yearly ? "bg-white/20" : "bg-green-100 text-green-700"}`}>Save 17%</span>
              </button>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.highlighted ? "bg-white border-2 border-[#483285] shadow-2xl scale-105 z-10" : "bg-white border border-slate-200 shadow-lg hover:shadow-xl"}`}>

                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#f97316] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">Most Popular</div>
                )}

                <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>

                <div className="mb-8 flex items-baseline">
                  <span className="font-display text-5xl font-extrabold text-[#483285]">${yearly ? plan.yearly : plan.monthly}</span>
                  <span className="text-slate-400 font-medium ml-2">/{yearly ? "year" : "month"}</span>
                </div>

                <Button className={`mb-8 w-full font-bold h-12 text-md shadow-lg ${plan.highlighted ? "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white border-0" : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-none hover:shadow-sm"}`} asChild>
                  <Link to="/register">Get Started</Link>
                </Button>

                <div className="space-y-4 flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Features</p>
                  {Object.entries(plan.features).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between text-sm py-1">
                      <span className="text-slate-600 font-medium">{key}</span>
                      {val === true ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : val === false ? (
                        <X className="h-5 w-5 text-slate-300" />
                      ) : (
                        <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-700 rounded-md">{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
