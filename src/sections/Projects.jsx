import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "SkillBridge: Learning Management System",
    description:
      "A full-stack learning management system featuring course management, secure authentication, student progress tracking, and online payment integration.",
    image: "/projects/Project1.png",
    tags: ["React.js", "Express.js", "MongoDB Atlas", "Razorpay"],
    link: "https://github.com/ziyad251/SkillBridge",
    github: "https://github.com/ziyad251/SkillBridge",
  },
  {
    title: "PrepGuide AI",
    description:
      "An AI-powered interview preparation platform that generates personalized questions, conducts mock interviews, and provides personalized performance feedback and interview insights.",
    image: "/projects/Project2.png",
    tags: ["React.js", "Express.js", "MongoDB Atlas", "Gemini API"],
    link: "https://github.com/ziyad251/PrepGuide-AI",
    github: "https://github.com/ziyad251/PrepGuide-AI",
  },
  {
    title: "NeuroLens: Alzheimer's Classification",
    description:
      "An AI-driven healthcare application that classifies Alzheimer's stages from MRI scans and provides explainable AI predictions using Grad-CAM visualizations.",
    image: "/projects/Project3.png",
    tags: ["PyTorch", "Flask", "Docker", "MongoDB","Streamlit"],
    link: "https://github.com/ziyad251/NeuroLens",
    github: "https://github.com/ziyad251/NeuroLens",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio showcasing projects, technical skills, and experience with responsive design and smooth user interactions.",
    image: "/projects/Project4.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://github.com/ziyad251/portfolio.git",
    github: "https://github.com/ziyad251/portfolio.git",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden scroll-mt-28"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />
      <div className="content-wrap relative z-10">
        <div className="section-surface p-8 md:p-10 lg:p-12 xl:p-14">
        <div className="text-center mx-auto max-w-3xl mb-14 md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight text-balance animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 border border-border/45 card-elevated"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-2xl glass border border-border/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-2xl glass border border-border/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-xl bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 md:mt-14 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="https://github.com/ziyad251" target="_blank" rel="noreferrer">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
        </div>
      </div>
    </section>
  );
};
