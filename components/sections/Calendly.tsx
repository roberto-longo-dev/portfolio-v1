import SectionLabel from "@/components/ui/SectionLabel";

const links = [
    {
        label: "Calendly",
        href: "https://calendly.com/roberto-longo-dev/30min",
        display: "calendly.com/roberto-longo-dev"
    },
];

export default function Calendly() {
    return (
        <section id="calendly" className="pb-24">
          <SectionLabel>Calendly</SectionLabel>
          <p className="mt-6 text-muted text-sm max-w-md leading-relaxed mb-8">
            Looking for a meeting? <br /> Book a slot on Calendly and let's connect.
          </p>
          <div className="space-y-3">
            {links.map(({ label, href, display }) => (
              <div key={label} className="flex items-center gap-6">
                <span className="font-dm-mono text-xs text-muted uppercase tracking-widest w-20 shrink-0">
                  GO TO:
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
          <p className="mt-6 text-muted text-sm max-w-md leading-relaxed mb-8">
                      Be sure to include relevant information regarding the meeting (e.g. reason of the meeting, opportunity description, tech stack involved)
                    </p>
        </section>
      );

    }