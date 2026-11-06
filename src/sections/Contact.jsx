import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/profile";

const contactLinks = [
  ...(EMAIL
    ? [{ icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false }]
    : []),
  {
    icon: Linkedin,
    label: "LinkedIn",
    // The zero-width space lets the URL wrap after "in/" on small screens
    value: "linkedin.com/in/\u200Bmahammad-ziyad-890404299",
    href: LINKEDIN_URL,
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ziyad251",
    href: GITHUB_URL,
    external: true,
  },
];

const fallbackError = EMAIL
  ? `Sorry, the message could not be sent. Please try again later, or email me at ${EMAIL}.`
  : "Sorry, the message could not be sent. Please try again later.";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      // Show a friendly message to visitors; technical details stay in the console.
      setSubmitStatus({ type: "error", message: fallbackError });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="section-block">
      <div className="content-wrap">
        <div className="section-surface p-6 md:p-8 lg:p-10">
          <SectionHeader
            center
            eyebrow="Get In Touch"
            title="Let's build"
            accent="something great."
            intro="Interested in working together? Send me a message or email me directly."
          />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-stretch">
          <div className="card p-5 md:p-6 animate-fade-in animation-delay-300">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface text-text placeholder:text-muted rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface text-text placeholder:text-muted rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface text-text placeholder:text-muted rounded-xl border border-border focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  role="status"
                  className={`flex items-center gap-3 p-4 rounded-xl border text-text ${
                    submitStatus.type === "success"
                      ? "bg-bg border-border"
                      : "bg-accent-soft border-accent"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0 text-muted" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-accent" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 md:gap-5 animate-fade-in animation-delay-400">
            <div className="card flex-1 flex flex-col justify-center p-3 md:p-4">
              <div className="space-y-1">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-transparent hover:border-border hover:bg-bg transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-bg border border-border flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-muted" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-muted">{item.label}</div>
                      <div className="font-medium text-text group-hover:text-accent transition-colors duration-300 [overflow-wrap:anywhere]">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="card p-5 md:p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 bg-text rounded-full" />
                <span className="font-medium text-text">Open to opportunities</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Looking for full-time software engineering roles after I graduate
                in 2027. I'm especially interested in working in Japan and I'm
                open to relocating.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
