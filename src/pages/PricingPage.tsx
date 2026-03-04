import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const plans = [
  {
    name: "Standard",
    price: 67,
    period: "Lifetime",
    desc: "Perfect for single schools starting out",
    features: {
      "Online Pro Version": true,
      "Android + iOS App": false,
      "Licenses": "1 License",
      "Updates": "Lifetime Updates",
      "Front CMS": true,
      "Support": "1 Year Support",
      "Full Customization": false,
    },
    highlighted: false,
  },
  {
    name: "Premium",
    price: 149,
    period: "Lifetime",
    desc: "For growing institutions that need mobile apps",
    features: {
      "Online Pro Version": true,
      "Android + iOS App": true,
      "Licenses": "1 License",
      "Updates": "Lifetime Updates",
      "Front CMS": true,
      "Support": "1 Year Support",
      "Full Customization": false,
    },
    highlighted: true,
  },
  {
    name: "Business",
    price: 999,
    period: "Lifetime",
    desc: "For large school networks and customizing",
    features: {
      "Online Pro Version": true,
      "Android + iOS App": true,
      "Licenses": "50 Licenses",
      "Updates": "Lifetime Updates",
      "Front CMS": true,
      "Support": "5 Years Support",
      "Full Customization": true,
    },
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        title="Pricing"
      />

      <section className="py-16">
        <div className="container">

          <div className="text-center mb-12">
            <h2 className="mb-4 font-display text-3xl md:text-5xl font-black text-[#276221] uppercase">Choose the plan that fits your institution</h2>

            <div className="max-w-4xl mx-auto mb-16 mt-8">
              <div className="bg-orange-500 p-1 rounded-[32px] shadow-xl">
                <div className="bg-white rounded-[31px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
                  <div className="flex-1">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 font-black text-xs uppercase tracking-widest mb-4">Limited Time Offer</span>
                    <h3 className="font-display text-3xl md:text-5xl font-black text-[#276221] mb-2 uppercase tracking-tight">Early Bird Special</h3>
                    <p className="text-lg text-[#276221]/60 font-medium mb-8 italic">Complete Digital Transformation in One Package.</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Professional School Website + SEO",
                        "12 Months Social Media Content",
                        "Microsoft 365 Education Setup",
                        "Eskoolia ERP (Android & iOS)",
                        "WhatsApp AI Assistant",
                        "In-School Setup & Staff Training"
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <CheckCircle2 className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-bold text-[#276221]/70 tracking-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-gray-50 pt-8 md:pt-0 md:pl-12">
                    <div className="text-5xl font-black text-[#276221] mb-2">₹49,999</div>
                    <div className="text-orange-500 font-black uppercase tracking-widest text-sm mb-6">26% DISCOUNT INCLUDED</div>
                    <Button size="lg" className="rounded-full bg-orange-500 hover:bg-[#276221] text-white font-black px-10 h-14 uppercase tracking-wider" asChild>
                      <Link to="/contact">Claim Your Slot</Link>
                    </Button>
                    <p className="text-[10px] text-[#276221]/40 mt-4 font-bold uppercase tracking-widest leading-relaxed">Only 20 Slots Available for <br /> 2026 Academic Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.highlighted ? "bg-white border-2 border-[#276221] shadow-2xl scale-105 z-10" : "bg-white border border-gray-50 shadow-lg hover:shadow-xl"}`}>

                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">Most Popular</div>
                )}

                <h3 className="font-display text-2xl font-bold text-[#276221] mb-2">{plan.name}</h3>
                <p className="text-[#276221]/60 text-sm mb-6">{plan.desc}</p>

                <div className="mb-8 flex items-baseline">
                  <span className="font-display text-5xl font-extrabold text-[#276221]">₹{plan.price}</span>
                  <span className="text-[#276221]/40 font-medium ml-2">/{plan.period}</span>
                </div>

                <Button className={`mb-8 w-full font-bold h-12 text-md shadow-lg ${plan.highlighted ? "bg-orange-500 hover:bg-[#276221] text-white border-0" : "bg-gray-50 hover:bg-[#276221]/5 text-[#276221] border border-gray-50 shadow-none hover:shadow-sm"}`} asChild>
                  <Link to="/register">Get Started</Link>
                </Button>

                <div className="space-y-4 flex-1">
                  <p className="text-xs font-bold text-[#276221]/40 uppercase tracking-widest mb-4">Features</p>
                  {Object.entries(plan.features).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between text-sm py-1">
                      <span className="text-[#276221]/70 font-medium">{key}</span>
                      {val === true ? (
                        <CheckCircle2 className="h-5 w-5 text-orange-500" />
                      ) : val === false ? (
                        <X className="h-5 w-5 text-[#276221]/20" />
                      ) : (
                        <span className="text-xs font-bold px-2 py-1 bg-gray-50 text-[#276221] rounded-md">{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}
