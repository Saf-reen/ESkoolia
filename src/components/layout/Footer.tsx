import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Youtube, Linkedin, Instagram, CreditCard, ShieldCheck } from "lucide-react";

const footerLinks = {
  "Useful Links": [
    { label: "FAQ'S", href: "/faq" },
    { label: "Documentation", href: "/docs" },
    { label: "Live Chat", href: "https://wa.me/+919701314138" },
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
  { name: "2checkout", color: "bg-gradient-to-r from-purple-600 to-orange-600" },
  { name: "PayPal", color: "bg-gradient-to-r from-purple-600 to-orange-600" },
  { name: "VISA", color: "bg-gradient-to-r from-purple-600 to-orange-900" },
  { name: "MasterCard", color: "bg-[#581C87]" },
  { name: "AMEX", color: "bg-[#581C87]/80" },
  { name: "Discover", color: "bg-gradient-to-r from-purple-600 to-orange-600" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#581C87] text-white pt-20 pb-10 overflow-hidden">


      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block group mb-6">
              <img src="/eskoolia_logo_.png" alt="Logo" className="w-32 h-auto" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              The ultimate Education ERP designed to empower modern schools. Manage everything from admissions to academics in one secure, unified platform built for the future of education.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/eskoolia/" },
                { Icon: Youtube, href: "https://www.youtube.com/@Eskoolia" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/eskoolia/" },
                { Icon: Instagram, href: "https://www.instagram.com/eskoolia_/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r from-purple-600 to-orange-600 transition-all duration-300 group border border-white/10"
                  aria-label="Social Link"
                >
                  <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 lg:col-span-2 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-6 font-display">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("http") ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500/0 group-hover:bg-orange-500 transition-all"></span>
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          to={l.href}
                          className="text-white/60 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500/0 group-hover:bg-orange-500 transition-all"></span>
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-6 font-display">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                </div>
                <p>Miyapur, Hyderabad,<br />Telangana - 500049</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <CreditCard className="w-4 h-4 text-orange-500" />
                </div>
                <p>support@eskoolia.com<br />+91 970-131-4138</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} eSkoolia. All Rights Reserved.
            </p>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] mt-2 font-bold">
              Product by Sria Infotech Pvt Ltd
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-[11px] font-bold text-white/50 tracking-wider">SYSTEM STATUS: OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
