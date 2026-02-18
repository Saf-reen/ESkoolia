import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Monitor, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-[#483285] text-white shadow-md">
      <div className="container flex h-20 items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-white group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shadow-sm group-hover:bg-white/20 transition-colors">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-extrabold tracking-tight text-2xl italic">ESKOOLIA</span>
          {/* <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded ml-1 uppercase tracking-wider -translate-y-2">Pro</span> */}
        </Link>

        {/* Desktop nav centered */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-base font-medium transition-all hover:text-orange-400 ${location.pathname === l.href ? "text-white font-bold" : "text-white/80"
                }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" className="gap-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-[#483285] hover:border-white transition-all rounded-full h-10 px-6 font-semibold" asChild>
            <a href="https://eskooly.pro/login" target="_blank" rel="noopener noreferrer">
              <Monitor className="h-4 w-4" /> LIVE DEMO
            </a>
          </Button>
          <Button variant="default" className="gap-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white border-none shadow-lg rounded-full h-10 px-6 font-bold tracking-wide" asChild>
            <Link to="/pricing">
              <ShoppingCart className="h-4 w-4" /> BUY NOW
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#483285] p-4 md:hidden shadow-xl animate-accordion-down overflow-hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 ${location.pathname === l.href ? "bg-white/20 text-white font-bold" : "text-white/80 hover:text-white"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <hr className="my-3 border-white/10" />
            <div className="grid gap-3">
              <Button variant="outline" className="gap-2 justify-center w-full border-white/30 text-white hover:bg-white hover:text-[#483285]" asChild>
                <a href="https://eskooly.pro/login" target="_blank" rel="noopener noreferrer">
                  <Monitor className="h-4 w-4" /> LIVE DEMO
                </a>
              </Button>
              <Button variant="default" className="gap-2 justify-center w-full shadow-lg bg-gradient-to-r from-orange-400 to-orange-600 border-none hover:from-orange-500 hover:to-orange-700" asChild>
                <Link to="/pricing" onClick={() => setMobileOpen(false)}>
                  <ShoppingCart className="h-4 w-4" /> BUY NOW
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
