import SectionLabel from "@/components/ui/SectionLabel";

const rolesOne = [
  {
      title: "Senior Full-Stack Engineer (Freelance)",
      period: "Sep 2026 – Present",
      description:
        "AEMaaCS full-stack development (Java/OSGi, JavaScript/SCSS, React, web components, Cloudflare) on a 120+ multi-geo sites, integrated with PIM system for product data.",
    },
];

const rolesZero = [
  {
    title: "Senior Consultant · Senior Full-Stack Engineer and Tech Lead",
    period: "Jun 2026 – Sep 2026",
    description:
      "Continuing AEM development on a large-scale entertainment platform (200+ websites, multi-language including RTL).",
  },
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
                HRM Group · Remote Freelance · Oct 2026 - Present
              </p>
              <div className="space-y-0">
                {rolesOne.map(({ title, period, description }, i) => (
                  <div key={title} className="flex gap-6">
                    {/* Timeline spine */}
                    <div className="flex flex-col items-center">
                      <div className="w-px h-2 bg-border" />
                      <div className="w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                      {i < rolesOne.length - 1 && <div className="w-px flex-1 bg-border" />}
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
      <div className="mt-6">
        <p className="font-dm-mono text-xs text-muted uppercase tracking-widest mb-6">
          Deloitte Digital · Rome, Italy · June 2021 - Sep 2026
        </p>
        <div className="space-y-0">
          {rolesZero.map(({ title, period, description }, i) => (
            <div key={title} className="flex gap-6">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className="w-px h-2 bg-border" />
                <div className="w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                {i < rolesZero.length - 1 && <div className="w-px flex-1 bg-border" />}
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
