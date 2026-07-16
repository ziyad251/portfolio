import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Code2,
  Database,
  Cloud,
  Zap,
  Layout,
  Server,
  GitBranch,
  Package,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const technologies = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Zap },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind CSS", icon: Layout },
  { name: "GraphQL", icon: Package },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Package },
  { name: "Git", icon: GitBranch },
  { name: "Vercel", icon: Cloud },
];

const heroDots = Array.from({ length: 30 }, (_, index) => ({
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
    <section className="relative min-h-screen flex items-center overflow-hidden scroll-mt-0 py-10 md:py-14">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Grey Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heroDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#a8a8a8",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="content-wrap pt-16 pb-16 md:pt-20 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-7 min-w-0">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass text-sm text-primary border border-border/40 tracking-wide">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shrink-0" />
                Backend Developer • Cloud Enthusiast
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 md:space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-[clamp(2.75rem,4vw+1.5rem,4.25rem)] font-bold leading-[1.02] md:leading-[1.04] tracking-[-0.03em] md:tracking-[-0.035em] text-balance animate-fade-in animation-delay-100">
                <span className="text-primary glow-text">Backend Developer</span>
                <br />
                Building Scalable
                <br />
                <span className="font-serif italic font-normal text-white tracking-[-0.02em]">
                  Backend Systems
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl lg:max-w-2xl leading-[1.55] tracking-[-0.01em] animate-fade-in animation-delay-200">
                Hi, I'm Mahammad Ziyad, a Computer Science student and backend developer passionate about designing scalable backend systems, exploring cloud technologies, and building high-performance applications that solve real-world problems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={scrollToContact}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                href="/resume.pdf"
                download="Mahammad-Ziyad-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4 pt-1 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Connect with me</span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/ziyad251",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/mahammad-ziyad-890404299/",
                  label: "LinkedIn",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-2xl glass border border-border/40 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center lg:justify-end min-w-0 animate-fade-in animation-delay-300 lg:-translate-y-3 md:-translate-y-2 -translate-y-1">
            <div className="relative w-full max-w-[min(100%,10.5rem)] sm:max-w-[min(100%,12rem)] md:max-w-[min(100%,13.5rem)] lg:max-w-[min(100%,14.5rem)] xl:max-w-[min(100%,15.5rem)]">
              <div
                className="absolute inset-0 
              rounded-full bg-gradient-to-br 
              from-primary/20 via-transparent 
              to-primary/10 blur-2xl animate-pulse scale-105"
              />
              <div className="relative glass rounded-full p-2 md:p-2.5 glow-border border border-border/50 overflow-hidden">
                <img
                  src="/photo.jpeg"
                  alt="Mahammad Ziyad"
                  className="w-full aspect-square object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 md:mt-12 lg:mt-14 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-8 text-center tracking-wide">
            Technologies I work with
          </p>
          <div className="section-surface p-5 md:p-7 lg:p-8">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 border border-border/35 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-[var(--shadow-soft-lg)] animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <tech.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group rounded-2xl px-4 py-2 hover:bg-surface/40"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
