import SectionLabel from "@/components/ui/SectionLabel";

const roles = [
  {
    title: "Consultant · Full-Stack Engineer",
    period: "Dec 2023 – Present",
    description:
      "Tech lead on enterprise AEM EDS and AEM Sites projects for pharma and finance sector clients.",
  },
  {
    title: "Analyst · Full-Stack Developer",
    period: "Dec 2021 – Nov 2023",
    description:
      "Full-stack AEM development for professional services and energy sector clients.",
  },
  {
    title: "Intern · Frontend Developer",
    period: "Jun 2021 – Nov 2021",
    description: "Frontend components for energy sector client.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <SectionLabel>Experience</SectionLabel>
      <div className="mt-6">
        <p className="font-dm-mono text-xs text-muted uppercase tracking-widest mb-6">
          Deloitte Digital · Rome, Italy · 2021 — Present
        </p>
        <div className="space-y-0">
          {roles.map(({ title, period, description }, i) => (
            <div key={title} className="flex gap-6">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className="w-px h-2 bg-border" />
                <div className="w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                {i < roles.length - 1 && <div className="w-px flex-1 bg-border" />}
              </div>
              {/* Content */}
              <div className="pb-8 pt-0.5">
                <p className="text-sm font-semibold text-foreground leading-snug">{title}</p>
                <p className="font-dm-mono text-[10px] text-muted uppercase tracking-widest mt-1 mb-2">
                  {period}
                </p>
                <p className="text-sm text-muted leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
