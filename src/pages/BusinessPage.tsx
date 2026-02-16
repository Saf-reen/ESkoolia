import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Code2, Building2, DollarSign, Server, ArrowRight } from "lucide-react";

export default function BusinessPage() {
  return (
    <div>
      <section className="bg-subtle-grid py-16">
        <div className="container text-center">
          <h1 className="mb-4 font-display text-4xl font-extrabold text-foreground">White Label & Business</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">Launch your own branded School ERP platform. Own the product, own the revenue.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-16">
            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Your Brand, Your Platform</h2>
              <p className="text-muted-foreground">Get full ownership of Eskoolia Pro with your own branding, domain, and complete customization capabilities. Sell it as your own SaaS product to schools.</p>
            </div>

            <div>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">What You Get</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Code2, title: "Full Source Code", desc: "Complete access to the entire codebase for customization." },
                  { icon: Building2, title: "Multi Branch System", desc: "Manage unlimited school branches from one dashboard." },
                  { icon: DollarSign, title: "Revenue Control", desc: "Set your own pricing and collect payments directly." },
                  { icon: Server, title: "Self-Hosted", desc: "Deploy on your own servers with full data control." },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-border bg-card p-5 shadow-card">
                    <item.icon className="mb-3 h-8 w-8 text-primary" />
                    <h3 className="mb-1 font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Technical Requirements</h2>
              <ul className="space-y-2">
                {["VPS or Dedicated Server (2GB RAM minimum)", "cPanel or SSH Access", "Node.js 18+ Runtime", "PostgreSQL Database", "SSL Certificate"].map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground">Revenue Model</h2>
              <p className="mb-4 text-muted-foreground">Build a sustainable SaaS business by selling subscriptions to schools in your region.</p>
              <div className="rounded-lg border border-border bg-secondary/50 p-6">
                <div className="grid gap-4 sm:grid-cols-3 text-center">
                  <div>
                    <div className="font-display text-2xl font-bold text-primary">$50-200</div>
                    <div className="text-sm text-muted-foreground">Per school / month</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Potential clients</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-primary">$60K+</div>
                    <div className="text-sm text-muted-foreground">Annual revenue</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary bg-card p-8 text-center shadow-card-xl">
              <h2 className="mb-2 font-display text-2xl font-bold text-foreground">One-Time License</h2>
              <div className="mb-4">
                <span className="font-display text-5xl font-extrabold text-foreground">$2,499</span>
              </div>
              <p className="mb-6 text-muted-foreground">Lifetime license with free updates for 1 year.</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Sales <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
