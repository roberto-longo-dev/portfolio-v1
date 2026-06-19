import SectionLabel from "@/components/ui/SectionLabel";

const references = [
  {
    label: "Adobe Certified Expert - AEM Sites Developer",
    href: "https://certification.adobe.com/credential/verify/c581fb1b-ec01-11ef-9883-42010a40002a",
    display: "View Credentials ↗",
  },
];

export default function Certifications() {
  return (
    <section id="Certifications">
      <SectionLabel>Certifications</SectionLabel>

      <ul className="mb-3 mt-6">
        {references.map(({ label, href, display }, i) => (
          <li key={label} className="flex gap-6">
            {/* Timeline spine */}
            <div className="flex flex-col items-center">
              <div className="w-px h-full bg-border" />
              {i < references.length - 1 && <div className="w-px flex-1 bg-border" />}
            </div>
            {/* Content */}
            <div className="pt-0.5">
              <p className="text-sm font-semibold text-foreground leading-snug">{label}</p>

              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-dm-mono text-xs text-muted uppercase tracking-widest hover:text-foreground transition-colors mb-3 inline-block"
              >
                {display}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
