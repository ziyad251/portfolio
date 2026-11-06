import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/profile";

const socialLinks = [
  { icon: Github, href: GITHUB_URL, label: "GitHub", external: true },
  { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn", external: true },
  ...(EMAIL
    ? [{ icon: Mail, href: `mailto:${EMAIL}`, label: "Email", external: false }]
    : []),
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 border-t border-border bg-bg">
      <div className="content-wrap py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              aria-label="Mahammad Ziyad, back to top"
              className="text-lg font-bold tracking-tight text-text transition-colors duration-300 hover:text-accent"
            >
              MZ
            </a>
            <p className="text-sm text-muted mt-2">
              © {currentYear} Mahammad Ziyad. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...(social.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={social.label}
                className="p-2.5 rounded-xl border border-border bg-surface text-muted hover:text-accent hover:border-accent transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
