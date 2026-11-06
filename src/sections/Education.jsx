import { Award, FileText, GraduationCap, Languages } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const education = {
  degree: "B.Tech in Computer Science and Engineering",
  college: "Sahyadri College of Engineering and Management, Mangalore",
  university: "Visvesvaraya Technological University (VTU)",
  period: "2023 – 2027",
  grade: "CGPA 8.81",
};

const achievements = [
  {
    icon: FileText,
    title: "IEEE IT-EICICS 2026",
    description: "My NeuroLens paper was accepted for oral presentation.",
  },
  {
    icon: Award,
    title: "SkillSangam hackathon",
    description:
      "Placed 4th out of 48+ teams with StudyAI, built in 24 hours.",
  },
  {
    icon: Languages,
    title: "JLPT N5",
    description: "Japanese Language Proficiency Test, level N5. Still learning.",
  },
];

const iconTileClass =
  "w-10 h-10 shrink-0 rounded-lg bg-bg border border-border flex items-center justify-center";

export const Education = () => {
  return (
    <section id="education" className="section-block">
      <div className="content-wrap">
        <div className="section-surface p-6 md:p-8 lg:p-10">
          <SectionHeader
            eyebrow="Education & Achievements"
            title="Education and"
            accent="achievements."
            intro="My degree, a research paper, a hackathon result and my Japanese studies."
          />

          <div className="grid md:grid-cols-2 gap-4 md:gap-5 items-stretch">
            {/* Degree */}
            <div className="card card-hover h-full flex flex-col justify-center p-5 md:p-6 animate-fade-in animation-delay-200">
              <div className={`${iconTileClass} mb-4`}>
                <GraduationCap className="w-5 h-5 text-muted" />
              </div>
              <span className="text-sm text-muted font-medium">
                {education.period}
              </span>
              <h3 className="text-lg font-semibold text-text mt-1">
                {education.degree}
              </h3>
              <p className="text-text/90 mt-1">{education.college}</p>
              <p className="text-sm text-muted mt-1">{education.university}</p>
              <span className="self-start mt-4 px-2.5 py-1 bg-bg text-xs rounded-lg border border-border text-muted">
                {education.grade}
              </span>
            </div>

            {/* Achievements */}
            <div className="grid auto-rows-fr gap-3 md:gap-4">
              {achievements.map((item, idx) => (
                <div
                  key={item.title}
                  className="card card-hover h-full p-4 md:p-5 animate-fade-in flex items-start gap-3.5"
                  style={{ animationDelay: `${(idx + 3) * 100}ms` }}
                >
                  <div className={iconTileClass}>
                    <item.icon className="w-5 h-5 text-muted" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mt-0.5">
                      {item.description}
                    </p>
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
