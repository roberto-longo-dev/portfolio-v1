import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "BetPlatform",
    description:
      "Enterprise betting platform: JWT auth, geoblocking via Cloudflare Workers, real-time WebSockets, PostgreSQL.",
    badge: "Live",
    slug: "betplatform",
    stack: ["Node.js", "Fastify", "PostgreSQL", "Cloudflare Workers", "Next.js"],
    links: [
      { label: "Live Demo", href: "https://betplatform.robertolongo.dev" },
      { label: "API Docs", href: "https://betplatformapi-production.up.railway.app/docs" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group p-6 border border-border rounded-sm hover:border-muted transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {project.title}
              </Link>
              {project.badge && (
                <span className="font-dm-mono text-[10px] text-accent uppercase tracking-widest">
                  {project.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-dm-mono text-[10px] text-muted uppercase tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.links && (
              <div className="flex gap-2">
                {project.links.map(({ label, href }, i) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      i === 0
                        ? "px-3 py-1.5 bg-accent text-background text-xs font-medium rounded-sm hover:opacity-90 transition-opacity"
                        : "px-3 py-1.5 border border-border text-foreground text-xs font-medium rounded-sm hover:border-muted transition-colors"
                    }
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Placeholder card */}
        <div className="flex items-center justify-center p-6 border border-border border-dashed rounded-sm">
          <span className="font-dm-mono text-xs text-muted uppercase tracking-widest">
            More coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
