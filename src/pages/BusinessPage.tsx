import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Code2, Building2, DollarSign, Server, ArrowRight, TrendingUp, ShieldCheck, Rocket } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

export default function BusinessPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Business"
        category="Enterprise"
      />

      <section className="py-20 -mt-10 relative z-20">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-20">

            {/* Intro Card */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-50 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#581C87]"></div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-[#581C87]">
                <Rocket className="h-8 w-8" />
              </div>
              <h2 className="mb-4 font-display text-3xl font-bold text-[#581C87]">Your Brand, Your Platform</h2>
              <p className="text-[#581C87]/70 max-w-2xl mx-auto leading-relaxed text-lg">
                Get full ownership of Eskoolia Pro with your own branding, domain, and complete customization capabilities.
                Launch your own EdTech SaaS business and sell it to schools under your name.
              </p>
            </div>

            {/* Features Grid */}
            <div>
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl font-bold text-[#581C87]">Why Choose White Label?</h2>
                <p className="text-[#581C87]/60 mt-2">Everything you need to run a successful software business</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Code2, title: "Full Source Code", desc: "Complete access to the entire codebase. Modify, extend, and customize without limits.", color: "text-[#581C87]", bg: "bg-gray-50" },
                  { icon: Building2, title: "Multi Branch System", desc: "Manage unlimited schools and branches from a single super-admin dashboard.", color: "text-orange-500", bg: "bg-orange-50" },
                  { icon: DollarSign, title: "100% Revenue", desc: "Set your own pricing plans. Keep 100% of the profits. No revenue sharing.", color: "text-[#581C87]", bg: "bg-gray-50" },
                  { icon: Server, title: "Self-Hosted Control", desc: "Deploy on your own servers (AWS, DigitalOcean, etc). You own your data.", color: "text-orange-500", bg: "bg-orange-50" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-gray-50 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className={`mb-4 inline-flex p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-[#581C87]">{item.title}</h3>
                    <p className="text-[#581C87]/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Requirements */}
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-50">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <h2 className="mb-6 font-display text-2xl font-bold text-[#581C87]">Technical Requirements</h2>
                  <ul className="space-y-4">
                    {[
                      "VPS or Dedicated Server (2GB RAM minimum)",
                      "cPanel or SSH Access",
                      "Node.js 18+ Runtime Environment",
                      "PostgreSQL or MySQL Database",
                      "SSL Certificate (HTTPS)"
                    ].map((r) => (
                      <li key={r} className="flex items-center gap-3 text-[#581C87]/80 font-medium">
                        <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" />
                        </div>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full relative">
                  {/* Abstract Visual Representation */}
                  <div className="absolute inset-0 bg-[#581C87] blur-3xl opacity-10 rounded-full"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-50">
                    <div className="flex items-center gap-4 mb-4 border-b border-gray-50 pb-4">
                      <Server className="h-10 w-10 text-[#581C87]/40" />
                      <div>
                        <div className="font-bold text-[#581C87]">Server Status</div>
                        <div className="text-xs text-orange-500 font-bold flex items-center gap-1"><span className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></span> Online</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-gray-50 rounded"></div>
                      <div className="h-2 w-1/2 bg-gray-50 rounded"></div>
                      <div className="h-2 w-5/6 bg-gray-50 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Model */}
            <div>
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold text-[#581C87]">Revenue Potential</h2>
                <p className="text-[#581C87]/60 mt-2">Build a sustainable recurring revenue stream</p>
              </div>

              <div className="rounded-3xl border border-gray-50 bg-white p-8 shadow-lg">
                <div className="grid gap-8 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-50">
                  <div className="pt-4 sm:pt-0">
                    <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                    <div className="font-display text-3xl font-bold text-[#581C87]">$50-200</div>
                    <div className="text-sm text-[#581C87]/60 font-medium mt-1">Per school / month</div>
                  </div>
                  <div className="pt-8 sm:pt-0 px-4">
                    <ShieldCheck className="h-8 w-8 text-[#581C87] mx-auto mb-3" />
                    <div className="font-display text-3xl font-bold text-[#581C87]">100+</div>
                    <div className="text-sm text-[#581C87]/60 font-medium mt-1">Potential client base</div>
                  </div>
                  <div className="pt-8 sm:pt-0">
                    <DollarSign className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                    <div className="font-display text-3xl font-bold text-[#581C87]">$60K+</div>
                    <div className="text-sm text-[#581C87]/60 font-medium mt-1">Annual revenue</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative rounded-3xl border-2 border-[#581C87] bg-white p-12 text-center shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-16 bg-[#581C87]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

              <h2 className="mb-2 font-display text-3xl font-bold text-[#581C87]">One-Time License</h2>
              <p className="text-[#581C87]/60 mb-8">Lifetime license with free updates for 1 year. No recurring fees.</p>

              <div className="mb-8">
                <span className="font-display text-6xl font-extrabold text-[#581C87] tracking-tight">$2,499</span>
                <span className="text-[#581C87]/30 font-medium text-xl block mt-2 line-through opacity-70">$4,999</span>
              </div>

              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-orange-500 hover:bg-orange-600 border-none shadow-lg hover:shadow-xl transition-all" asChild>
                <Link to="/contact">Contact Sales Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>

              <p className="mt-6 text-xs text-[#581C87]/40">Limited time offer. Terms and conditions apply.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
