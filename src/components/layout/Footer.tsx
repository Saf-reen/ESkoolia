import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, CreditCard, ShieldCheck } from "lucide-react";

const footerLinks = {
  // "Our Products": [
  //   { label: "eSkoolia SaaS - FREE", href: "#" },
  //   { label: "eSkoolia Desktop", href: "#" },
  //   { label: "eSkoolia Pro", href: "#" },
  //   { label: "eSkoolia LMS", href: "#" },
  // ],
  // "Versions": [
  //   { label: "Latest", href: "#" },
  //   { label: "Version 9.0", href: "#" },
  //   { label: "Version 9.1", href: "#" },
  // ],
  "Useful Links": [
    { label: "FAQ'S", href: "/faq" },
    { label: "Documentation", href: "/docs" },
    { label: "Live Chat", href: "https://wa.me/+919701314138" },
    // { label: "Live Demo", href: "https://eskooly.pro/login" },
    { label: "Add-ons", href: "/modules" },
  ],
  "Legal": [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Deletion Policy", href: "/deletion-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Support Policy", href: "/support-policy" },
  ],
};

const paymentMethods = [
  { name: "2checkout", color: "bg-orange-500" },
  { name: "PayPal", color: "bg-orange-600" },
  { name: "VISA", color: "bg-orange-900" },
  { name: "MasterCard", color: "bg-[#276221]" },
  { name: "AMEX", color: "bg-[#276221]/80" },
  { name: "Discover", color: "bg-orange-500" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#276221] text-white pt-16 pb-6">
      
      <div className="container">

        {/* Brand Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <Link to="/" className="group">
            <h2 className="text-4xl font-extrabold tracking-tight">
              ESKOOLIA
            </h2>
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mt-2">
              Ultimate Education Management ERP
            </p>
          </Link>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4 relative inline-block">
                {title}
                <span className="absolute -bottom-1 left-0 w-6 h-[2px] bg-orange-500"></span>
              </h4>

              <ul className="space-y-3 mt-4">
                {links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("http") ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-orange-400 transition-all duration-300"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.href}
                        className="text-white/70 hover:text-orange-400 transition-all duration-300"
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

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div className="text-center md:text-left">
            <p>
              Copyright © 2026. All Rights Reserved By{" "}
              <a
                href="https://eskoolia.com"
                className="hover:text-white transition-colors font-medium"
              >
                eSkoolia
              </a>.
            </p>
            <p className="uppercase tracking-widest text-[10px] mt-1 opacity-50">
              By Sria Infotech Pvt Ltd
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="font-medium">
              Miyapur, Hyderabad | +91 970-131-4138
            </p>
            <p className="text-[11px] mt-1">
              www.eskoolia.com | contact@eskooliaindian.com
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
