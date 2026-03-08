import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Monitor, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Modules", href: "/features" },
  { label: "Solutions", href: "/pricing" },
  { label: "Resources", href: "/docs" },
  { label: "Contact Us", href: "/contact" },
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#581C87] shadow-lg py-0">

      <div className="py-2">
        <div className="container h-24 flex items-center justify-between relative">
          <Link to="/" aria-label="Eskoolia Home" className="flex items-center gap-2 font-display text-xl font-bold text-white group z-10">
            <img src="/eskoolia_logo_.png" alt="Eskoolia Home" className={`w-auto transition-all duration-300 ${scrolled ? "h-16" : "h-16"}`} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-[15px] font-semibold transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 ${location.pathname === l.href ? "text-white" : "text-white/90"
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex z-10">
            <Button variant="default" className="gap-2 bg-white/5 border border-white/40 hover:bg-white hover:text-[#581C87] text-white border-none shadow-lg rounded-full h-11 px-7 font-bold text-sm tracking-wide transition-all" asChild>
              <Link to="/pricing">
                <ShoppingCart className="h-4 w-4" /> GET STARTED
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-[#581C87] p-4 md:hidden shadow-xl animate-accordion-down overflow-hidden h-screen">
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
              <Button variant="default" className="gap-2 justify-center h-14 text-lg bg-gradient-to-r from-purple-600 to-orange-600 hover:bg-gradient-to-r from-purple-600 to-orange-600 border-none" asChild>
                <Link to="/pricing" onClick={() => setMobileOpen(false)}>
                  <ShoppingCart className="h-5 w-5" /> GET STARTED
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
