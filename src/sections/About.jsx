import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing backend performance, scalability, and reliability.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden scroll-mt-28"
    >
      <div className="content-wrap relative z-10">
        <div className="section-surface p-8 md:p-10 lg:p-12 xl:p-14">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-balance animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one line of code at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              <p>
                I’m a Computer Science student and backend developer passionate about building scalable, secure, and efficient applications. I enjoy turning ideas into real-world solutions by designing robust APIs, optimizing databases, and developing reliable server-side systems.
              </p>
              <p>
                My primary expertise lies in Java, Node.js, Express.js, PostgreSQL, and MongoDB. I also enjoy working across the full stack when needed to build complete, end-to-end applications. I’ve developed projects ranging from AI-powered healthcare applications to learning management systems, giving me hands-on experience with modern software engineering practices.
              </p>
              <p>
                I’m currently exploring cloud computing and expanding my skills in AWS, Docker, and Kubernetes, with the goal of building cloud-native, production-ready applications. I believe in continuously learning new technologies and applying them to solve practical problems through clean, maintainable code.
              </p>
            </div>

            
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group glass p-6 md:p-7 rounded-2xl border border-border/40 card-elevated animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
