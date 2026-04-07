import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <div className="mt-6 space-y-4 max-w-2xl text-muted leading-relaxed">
        <p>
          I&apos;m Roberto Longo, a senior web engineer with 5 years of enterprise experience
          building and leading delivery on large-scale web platforms.
        </p>
        <p>
          I&apos;ve also served as dev lead across the last two major projects — owning architecture decisions,
          managing cross-functional teams, and translating complex business requirements into
          technical solutions that ship on time.
        </p>
        <p>
          My background is in content-driven platforms and edge infrastructure, with hands-on
          experience across the full stack: from backend services and CDN configuration to
          component systems and frontend delivery.
        </p>
        <p>
          I work best in environments where engineering rigour, clear ownership, and long-term
          maintainability matter.
        </p>
      </div>
    </section>
  );
}
