import SectionLabel from "@/components/ui/SectionLabel";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Fastify", "REST APIs", "OSGi/Sling"],
  },
  {
    category: "Infrastructure",
    skills: ["Cloudflare Workers", "CDN", "Zero Trust", "CI/CD"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML", "SCSS"],
  },
  {
    category: "Tools",
    skills: ["Git", "Maven", "Prisma", "PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <SectionLabel>Skills</SectionLabel>
      <div className="mt-6 space-y-5">
        {skillGroups.map(({ category, skills }) => (
          <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
            <span className="font-dm-mono text-xs text-muted uppercase tracking-widest w-28 shrink-0 pt-0.5">
              {category}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs border border-border text-foreground rounded-sm hover:border-muted transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
