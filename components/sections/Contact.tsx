import SectionLabel from "@/components/ui/SectionLabel";

const links = [
  {
    label: "Email",
    href: "mailto:roberto.longo.pe@gmail.com",
    display: "roberto.longo.pe@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/robertolongo-in",
    display: "linkedin.com/in/robertolongo-in",
  },
  {
    label: "GitHub",
    href: "https://github.com/roberto-longo-dev",
    display: "github.com/roberto-longo-dev",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="pb-24">
      <SectionLabel>Contact</SectionLabel>
      <p className="mt-6 text-muted text-sm max-w-md leading-relaxed mb-8">
        Open to full-time roles and select freelance projects. Reach out via email or connect
        on LinkedIn.
      </p>
      <div className="space-y-3">
        {links.map(({ label, href, display }) => (
          <div key={label} className="flex items-center gap-6">
            <span className="font-dm-mono text-xs text-muted uppercase tracking-widest w-20 shrink-0">
              {label}
            </span>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              {display}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
