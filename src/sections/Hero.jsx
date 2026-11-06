import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Coffee,
  Terminal,
  Hexagon,
  Route,
  FlaskConical,
  Database,
  Table2,
  Leaf,
  MemoryStick,
  Droplets,
  Zap,
  Container,
  Cloud,
  GitBranch,
  Braces,
  Atom,
} from "lucide-react";
import { OutlineButton } from "@/components/OutlineButton";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/profile";

// Order gives a balanced 2x2 layout: Backend + Databases, then Cloud & Tools + Frontend.
const skillGroups = [
  {
    title: "Backend",
    items: [
      { name: "Java", icon: Coffee },
      { name: "Python", icon: Terminal },
      { name: "Node.js", icon: Hexagon },
      { name: "Express", icon: Route },
      { name: "Flask", icon: FlaskConical },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Table2 },
      { name: "MongoDB", icon: Leaf },
      { name: "Redis", icon: MemoryStick },
      { name: "Drizzle ORM", icon: Droplets },
      { name: "Supabase", icon: Zap },
    ],
  },
  {
    title: "Cloud & Tools",
    items: [
      { name: "Docker", icon: Container },
      { name: "AWS (EC2)", icon: Cloud },
      { name: "Git", icon: GitBranch },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Atom },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: GITHUB_URL, label: "GitHub", external: true },
  { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn", external: true },
  ...(EMAIL
    ? [{ icon: Mail, href: `mailto:${EMAIL}`, label: "Email", external: false }]
    : []),
];

// Very subtle drifting dots in the border colour.
const heroDots = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 11 + 7) % 100}%`,
  top: `${(index * 17 + 9) % 100}%`,
  duration: `${15 + (index % 6) * 3}s`,
  delay: `${(index % 5) * 0.8}s`,
}));

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-6 md:pt-32 md:pb-8">
      {/* Drifting dots */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {heroDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1 h-1 rounded-full bg-border"
            style={{
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="content-wrap relative z-10">
        <div className="grid md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-5 md:space-y-6 min-w-0">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface border border-border text-xs sm:text-sm text-muted tracking-wide">
                <span className="w-1.5 h-1.5 bg-muted rounded-full shrink-0" />
                Software Developer · Cloud, Data Science & AI Systems
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <div className="space-y-1.5 animate-fade-in animation-delay-100">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-balance text-text">
                  Mahammad Ziyad
                </h1>
                <p lang="ja" className="text-sm text-muted tracking-wide">
                  はじめまして — Mahammad Ziyad です
                </p>
              </div>
              <p className="text-2xl md:text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-balance text-text animate-fade-in animation-delay-100">
                Practical software{" "}
                <span className="font-serif italic font-normal">
                  for real business problems.
                </span>
              </p>
              <p className="text-base md:text-lg text-muted max-w-xl leading-[1.55] animate-fade-in animation-delay-200">
                Hi, I'm Mahammad Ziyad, a Computer Science student. I build
                software and I'm interested in cloud, data science and AI
                systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in animation-delay-300">
              <Button className="w-full sm:w-auto" onClick={scrollToContact}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <OutlineButton href="#projects" className="w-full sm:w-auto">
                See My Projects
              </OutlineButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted">Connect with me</span>
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

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in animation-delay-300">
            <div className="w-40 sm:w-44 md:w-52 lg:w-60 rounded-full border border-border bg-surface p-2">
              <img
                src="/photo.jpeg"
                alt="Mahammad Ziyad"
                className="w-full aspect-square object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10 md:mt-12 max-w-4xl mx-auto animate-fade-in animation-delay-600">
          <h2 className="text-sm font-normal text-muted mb-4 text-center tracking-wide">
            Technologies I work with
          </h2>
          <div className="section-surface p-5 md:p-6">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-medium uppercase tracking-wider text-muted mb-2.5">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <li
                        key={tech.name}
                        className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-surface border border-border text-sm font-medium text-text transition-colors duration-300 hover:border-accent hover:bg-accent-soft"
                      >
                        <tech.icon aria-hidden="true" className="w-4 h-4 text-muted" />
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
