import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, CreditCard, ShieldCheck } from "lucide-react";

const footerLinks = {
  "Our Products": [
    { label: "eSkooly SaaS - FREE", href: "https://eskooly.com" },
    { label: "eSkooly Desktop", href: "https://desktop.eskooly.com" },
    { label: "eSkooly Pro", href: "https://pro.eskooly.com" },
    { label: "eSkooly LMS", href: "https://lms.eskooly.com" },
  ],
  "Versions": [
    { label: "Latest", href: "https://eskooly.pro/login" },
    { label: "Version 9.0", href: "https://eskooly.pro/login" },
    { label: "Version 8.0", href: "https://pro.eskooly.com/demo/login" },
    { label: "Add-ons", href: "https://pro.eskooly.com/modules/" },
  ],
  "Useful Links": [
    { label: "FAQ'S", href: "/faq" },
    { label: "Documentation", href: "/docs" },
    { label: "Live Chat", href: "https://wa.me/+923460204447" },
    { label: "Live Demo", href: "https://eskooly.pro/login" },
  ],
  "Legal": [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/pricing" },
    { label: "Support Policy", href: "/contact" },
  ],
};

const paymentMethods = [
  { name: "2checkout", color: "bg-green-600" },
  { name: "PayPal", color: "bg-blue-600" },
  { name: "VISA", color: "bg-blue-800" },
  { name: "MasterCard", color: "bg-red-600" },
  { name: "AMEX", color: "bg-blue-500" },
  { name: "Discover", color: "bg-orange-500" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#5727A3] text-white overflow-hidden pt-20 pb-8">
      {/* Wave Top Decoration (SVG) matches the header/section style */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container relative z-10">

        {/* Logo Section Centered */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <Link to="/" className="flex flex-col items-center gap-2 group">
            <div className="flex items-center gap-2">
              <span className="font-display text-4xl font-black tracking-tight italic">ESKOOLY</span>
              <span className="bg-orange-500 text-white text-[10px] font-bold px-1 py-0.5 rounded uppercase tracking-wider -mt-4">Pro</span>
            </div>
            <span className="text-white/60 text-sm tracking-widest uppercase mt-1">Ultimate Education Management ERP</span>
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-20 text-center md:text-left">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-6 text-lg font-bold text-white/90">{title}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("http") ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Payments & Certifications */}
        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center gap-3">
            {paymentMethods.map((pm) => (
              <div key={pm.name} className={`px-3 py-1.5 rounded-md ${pm.color} text-[10px] font-bold tracking-wider shadow-sm border border-white/20`}>
                {pm.name}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <span className="block text-sm font-semibold mb-3 opacity-90">We're Proudly Certified</span>
            <div className="flex justify-center gap-4">
              <div className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center border border-white/20" title="Kids Club">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center border border-white/20" title="GDPR">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-yellow-500/30 rounded-full flex items-center justify-center border border-white/20" title="Secure">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-green-500/30 rounded-full flex items-center justify-center border border-white/20" title="Certified">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-white/40 text-sm flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-6">
          <div>Copyright © 2026. All Rights Reserved By <a href="https://eskooly.com" className="hover:text-white transition-colors">eSkooly Inc.</a></div>
          <div className="mt-2 sm:mt-0">Prices are listed without VAT</div>
        </div>
      </div>
    </footer>
  );
}
