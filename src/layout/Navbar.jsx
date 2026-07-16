import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 md:py-4" : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div
        className={`content-wrap transition-all duration-500 ${
          isScrolled
            ? "glass-strong rounded-2xl border border-border/50 shadow-[var(--shadow-soft)]"
            : ""
        }`}
      >
        <nav className="flex items-center justify-between gap-4 px-1 py-1 md:px-2">
          <a
            href="#"
            aria-label="Home"
            className="inline-flex h-2.5 w-2.5 rounded-full bg-primary/80 transition-colors duration-300 hover:bg-primary"
          />

          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-2xl px-1.5 py-1 flex items-center gap-0.5 border border-border/40">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-surface/80 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-foreground cursor-pointer hover:bg-surface/60 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 rounded-2xl border border-border/50 glass-strong animate-fade-in overflow-hidden">
          <div className="px-4 py-6 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 rounded-xl px-2 -mx-2 hover:bg-surface/50 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>
      )}
      </div>
    </header>
  );
};
