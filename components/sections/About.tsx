import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <div className="mt-6 space-y-4 max-w-2xl text-muted leading-relaxed">
        <p>
          I&apos;m Roberto Longo, a Full-Stack Engineer with 5 years of enterprise experience at
          Deloitte Digital, delivering large-scale web platforms for clients in regulated industries
          including pharma and financial services.
        </p>
        <p>
          I operate at the intersection of engineering and delivery: hands-on on the codebase when
          it matters, and able to own the full engagement when the project requires it. Across my
          last two projects I led teams of 3 to 5 engineers, managed estimation, sprint planning,
          SIT and UAT cycles, and coordinated client relationships from requirements through
          go-live.
        </p>
        <p>
          I bring commercial awareness to every engagement: I understand that technical decisions
          have business consequences, and I know how to communicate that to stakeholders. I work
          with a consultant&apos;s mindset: structured, proactive, and always oriented toward the
          client&apos;s broader objectives, not just the current sprint.
        </p>
        <p>
          Integrity, confidentiality, and clear ownership are non-negotiable for me. I don&apos;t
          go into a project without a plan, and I don&apos;t leave one without it being in good
          hands.
        </p>
      </div>
    </section>
  );
}
