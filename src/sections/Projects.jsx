import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import { OutlineButton } from "@/components/OutlineButton";
import { SectionHeader } from "@/components/SectionHeader";
import { GITHUB_URL } from "@/data/profile";

// `demo` is only shown when a real live demo URL exists.
// `github` is only shown when set. `image: null` shows a neutral placeholder.
const projects = [
  {
    title: "SkillBridge: Learning Management System",
    description:
      "Courses, enrollment, progress tracking and payments in one place. Team of 2: I built the backend and cloud setup, and moved the database from MongoDB to PostgreSQL.",
    image: "/projects/project1.png",
    tags: ["React", "Express", "PostgreSQL", "Razorpay"],
    github: "https://github.com/ziyad251/SkillBridge",
    demo: null,
  },
  {
    title: "PrepGuide AI",
    description:
      "An AI platform for interview preparation, using the Gemini API and RAG with Pinecone. Team of 2: I built the backend and cloud setup, and a friend built the frontend.",
    image: "/projects/project2.png",
    // TODO: confirm the full stack. The old site listed React.js, Express.js and MongoDB Atlas.
    tags: ["Gemini API", "RAG", "Pinecone"],
    github: "https://github.com/ziyad251/PrepGuide-AI",
    demo: null,
  },
  {
    title: "NeuroLens: Alzheimer's Classification",
    description:
      "Final-year project: it classifies Alzheimer's stages from MRI scans, with Grad-CAM to show why. As technical lead (team of 4), I did preprocessing, training and the Flask API.",
    image: "/projects/project3.jpg",
    // TODO: confirm the full stack. The old site listed PyTorch, Docker, MongoDB and Streamlit.
    tags: ["Python", "Flask", "Grad-CAM"],
    github: "https://github.com/ziyad251/NeuroLens",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "My personal website, built with React and Vite. It has a working contact form that sends messages through EmailJS.",
    image: "/projects/project4.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "EmailJS"],
    github: "https://github.com/ziyad251/portfolio",
    // TODO: add the live URL here if you want a demo link (e.g. https://www.mahammadziyad.me/).
    demo: null,
  },
];

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" };

const overlayLinkClass =
  "p-3 rounded-xl border border-border bg-surface text-text hover:text-accent hover:border-accent transition-colors duration-300";

export const Projects = () => {
  return (
    <section id="projects" className="section-block">
      <div className="content-wrap">
        <div className="section-surface p-6 md:p-8 lg:p-10">
          <SectionHeader
            center
            eyebrow="Featured Work"
            title="Projects"
            accent="I've built."
            intro="Each project shows the problem, my part in the team, and what it does."
          />

          {/* Projects Grid (2x2 on desktop) */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="group card card-hover h-full flex flex-col overflow-hidden animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[2/1] border-b border-border">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-bg">
                      <ImageIcon aria-hidden="true" className="w-10 h-10 text-muted" />
                    </div>
                  )}
                  {/* Overlay Links: flat tint on hover, no gradient */}
                  {(project.demo || project.github) && (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-bg/0 opacity-0 group-hover:bg-bg/60 group-hover:opacity-100 focus-within:bg-bg/60 focus-within:opacity-100 transition-all duration-300">
                      {project.demo && (
                        <a
                          href={project.demo}
                          {...externalLinkProps}
                          aria-label={`Open the live demo of ${project.title}`}
                          className={overlayLinkClass}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          {...externalLinkProps}
                          aria-label={`View the code for ${project.title} on GitHub`}
                          className={overlayLinkClass}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-4 md:p-5 gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base md:text-lg font-semibold leading-snug text-text">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        {...externalLinkProps}
                        aria-label={`View the code for ${project.title} on GitHub`}
                        className="shrink-0 mt-0.5 text-muted hover:text-accent transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-bg text-xs font-medium border border-border text-muted"
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
          <div className="text-center mt-8 animate-fade-in animation-delay-500">
            <OutlineButton href={GITHUB_URL} {...externalLinkProps}>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};
