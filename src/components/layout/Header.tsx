import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#483285] shadow-lg py-0" : "bg-transparent py-2"
      }`}>
      {/* Announcement Bar */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/10 py-2 hidden md:block">
        <div className="container flex justify-between items-center text-[13px] font-medium text-white/90">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">New</span>
            <span>Congratulations eSkoolia version 9.0 has been launched.</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">System Demo</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Front CMS</a>
          </div>
        </div>
      </div>

      <div className="py-2">
        <div className="container flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-white group z-10">
            <img src="/eskoolia_logo_.png" alt="Eskooly" className={`w-auto transition-all duration-300 ${scrolled ? "h-24" : "h-24"}`} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-[15px] font-semibold transition-all hover:text-orange-400 ${location.pathname === l.href ? "text-white" : "text-white/90"
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex z-10">
            <Button variant="outline" className="gap-2 border-white/40 text-white bg-white/5 hover:bg-white hover:text-[#483285] hover:border-white transition-all rounded-full h-11 px-7 font-bold text-sm tracking-wide" asChild>
              <a href="https://eskooly.pro/login" target="_blank" rel="noopener noreferrer">
                <Monitor className="h-4 w-4" /> LIVE DEMO
              </a>
            </Button>
            <Button variant="default" className="gap-2 bg-white/5 border border-white/40 hover:bg-white hover:text-[#483285] text-white border-none shadow-lg rounded-full h-11 px-7 font-bold text-sm tracking-wide transition-all" asChild>
              <Link to="/pricing">
                <ShoppingCart className="h-4 w-4" /> BUY NOW
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-10" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-[#483285] p-4 md:hidden shadow-xl animate-accordion-down overflow-hidden h-screen">
          <nav className="flex flex-col gap-2 pt-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-4 text-lg font-bold transition-colors hover:bg-white/10 ${location.pathname === l.href ? "bg-white/20 text-white" : "text-white/80"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="grid gap-4 mt-10">
              <Button variant="outline" className="gap-2 justify-center h-14 text-lg border-white/30 text-white" asChild>
                <a href="https://eskooly.pro/login" target="_blank" rel="noopener noreferrer">
                  <Monitor className="h-5 w-5" /> LIVE DEMO
                </a>
              </Button>
              <Button variant="default" className="gap-2 justify-center h-14 text-lg bg-orange-500 hover:bg-orange-600 border-none" asChild>
                <Link to="/pricing" onClick={() => setMobileOpen(false)}>
                  <ShoppingCart className="h-5 w-5" /> BUY NOW
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
