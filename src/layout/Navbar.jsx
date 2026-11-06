import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active nav item: the last section whose top has passed 40% of the
      // screen height. None while in the hero; Contact at the page bottom.
      const line = window.innerHeight * 0.4;
      let current = "";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= line) {
          current = link.href;
        }
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom && window.scrollY > 0) current = "#contact";
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const linkClass = (href) =>
    href === activeId ? "text-accent" : "text-muted hover:text-accent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-surface border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="content-wrap">
        <nav className="flex items-center justify-between gap-4 h-16">
          <a
            href="#"
            aria-label="Mahammad Ziyad, back to top"
            className="text-lg font-bold tracking-tight text-text transition-colors duration-300 hover:text-accent"
          >
            MZ
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                aria-current={link.href === activeId ? "true" : undefined}
                className={`px-3 py-2 text-sm rounded-lg transition-colors duration-300 ${linkClass(link.href)}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-text hover:text-accent transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface animate-fade-in">
          <div className="content-wrap py-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={link.href === activeId ? "true" : undefined}
                className={`text-lg py-2.5 transition-colors duration-300 ${linkClass(link.href)}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
