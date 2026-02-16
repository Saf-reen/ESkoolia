import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Business", href: "/business" },
    { label: "Documentation", href: "/docs" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
  Modules: [
    { label: "Student Management", href: "/features#students" },
    { label: "Fee Management", href: "/features#fees" },
    { label: "Exams & Results", href: "/features#exams" },
    { label: "HR & Payroll", href: "/features#hr" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-hero-gradient">
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </div>
              Eskoolia Pro
            </Link>
            <p className="text-sm text-muted-foreground">
              The complete school management platform trusted by thousands of institutions worldwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Eskoolia Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
