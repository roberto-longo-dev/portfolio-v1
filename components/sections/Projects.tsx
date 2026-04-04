import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "BetPlatform",
    description:
      "Enterprise betting platform: JWT auth, geoblocking via Cloudflare Workers, real-time WebSockets, PostgreSQL.",
    badge: "In Progress",
    slug: "betplatform",
    stack: ["Node.js", "Fastify", "PostgreSQL", "Cloudflare Workers", "Next.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-6 border border-border rounded-sm hover:border-muted transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              {project.badge && (
                <span className="font-dm-mono text-[10px] text-accent uppercase tracking-widest">
                  {project.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-dm-mono text-[10px] text-muted uppercase tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
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
