import { SectionHeader } from "@/components/SectionHeader";

const experiences = [
  {
    period: "April 2026 – June 2026",
    role: "Backend Developer Intern",
    company: "Zephvion Pvt. Ltd.",
    // TODO: add team size once confirmed (4 or 7), e.g. "Team of 4".
    description:
      "At Zephvion, I worked on NammaDharani, a real-estate platform that connects property owners with buyers. I built the notification and SMS system that alerts owners as soon as a buyer enquires about their property, and tracked down and fixed a bug that was stopping those alerts from reaching them. I also wrote the JWT-based login and worked on an LLM chatbot that answers buyers' common questions about price, plot size and rooms. Attending stakeholder meetings taught me to understand what the business actually needed before writing code.",
    technologies: ["Python", "Flask", "MySQL", "Docker", "AWS"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-block">
      <div className="content-wrap">
        <div className="section-surface p-6 md:p-8 lg:p-10">
          <SectionHeader
            eyebrow="Experience"
            title="Professional"
            accent="Experience"
            intro="Where I have worked, the problems I worked on, and what I built."
          />

          {/* Timeline (left-aligned so a single entry uses the full width) */}
          <div className="relative pl-7 md:pl-9">
            <div className="absolute left-0 top-1 bottom-0 w-px bg-border" />

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.company + exp.period}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-7 md:-left-9 top-6 w-3 h-3 bg-accent rounded-full -translate-x-1/2 ring-4 ring-bg" />

                  <div className="card p-5 md:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg md:text-xl font-semibold text-text">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-muted font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted">{exp.company}</p>
                    <p className="text-sm text-muted mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-bg text-xs rounded-lg border border-border text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
