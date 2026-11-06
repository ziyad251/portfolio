import { Briefcase, FileText, GraduationCap, Languages } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Tech CSE · 2027 · CGPA 8.81",
    description:
      "Sahyadri College of Engineering and Management (VTU), Mangalore.",
  },
  {
    icon: Briefcase,
    title: "Backend intern at Zephvion",
    description:
      "Built notifications, SMS and login for a real-estate platform (April 2026 – June 2026).",
  },
  {
    icon: FileText,
    title: "IEEE paper accepted (2026)",
    description:
      "My NeuroLens paper was accepted for oral presentation at IEEE IT-EICICS 2026.",
  },
  {
    icon: Languages,
    title: "Japanese · JLPT N5 · still learning",
    description: "I passed JLPT N5 and I'm continuing to study.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-block">
      <div className="content-wrap">
        <div className="section-surface p-6 md:p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left Column */}
            <div>
              <SectionHeader
                eyebrow="About Me"
                title="I build software"
                accent="that solves real problems."
                className="mb-4 md:mb-5"
              />
              <p className="text-muted leading-relaxed animate-fade-in animation-delay-200">
                I'm a Computer Science student and software developer who enjoys
                turning slow, manual processes into software that just works. I
                mostly build with Java, Python, Node.js, Express, Flask and
                PostgreSQL, and I'm especially interested in cloud, data science
                and AI systems. I'm also learning Japanese (JLPT N5) and want to
                build my career in Japan.
              </p>
            </div>

            {/* Right Column - Highlights (equal-height cards) */}
            <div className="grid sm:grid-cols-2 auto-rows-fr gap-3 md:gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="card card-hover h-full p-4 md:p-5 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-bg border border-border flex items-center justify-center mb-3">
                    <item.icon className="w-4.5 h-4.5 text-muted" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
