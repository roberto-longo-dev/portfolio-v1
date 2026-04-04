import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <div className="mt-6 space-y-4 max-w-2xl text-muted leading-relaxed">
        <p>
          Full-stack engineer with 5 years of enterprise backend experience. I&apos;ve led teams
          of 5 engineers across two large-scale enterprise projects, owning architecture
          decisions, delivery timelines, and engineering culture.
        </p>
        <p>
          Deep background in OSGi/Sling-based platforms, REST API design, and Cloudflare Zero
          Trust network configuration. I design systems with security and performance at the
          edge as first-class concerns.
        </p>
        <p>
          Currently expanding into Node.js full-stack — building products end-to-end with
          Fastify, Next.js, PostgreSQL, and Cloudflare Workers.
        </p>
      </div>
    </section>
  );
}
