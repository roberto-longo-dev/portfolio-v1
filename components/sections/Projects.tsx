import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "BetPlatform",
    subtitle: "Node.js · Fastify · Cloudflare Workers",
    description:
      "Enterprise betting platform: JWT auth, geoblocking via Cloudflare Workers, real-time WebSockets, PostgreSQL.",
    badge: "Live",
    slug: "betplatform",
    stack: ["Node.js", "Fastify", "PostgreSQL", "Cloudflare Workers", "Next.js"],
    links: [
      { label: "Live Demo", href: "https://betplatform.robertolongo.dev", external: true },
      { label: "API Docs", href: "https://betplatformapi-production.up.railway.app/docs", external: true },
    ],
  },
  {
    title: "Enterprise Pharma Web Platform",
    subtitle: "AEM Edge Delivery Services",
    description:
      "Zero Trust security architecture, component acceleration framework, and multi-language governance for a European pharma corporate client.",
    badge: "Deloitte Digital · 2025",
    slug: "aem-eds",
    stack: ["AEM EDS", "Cloudflare Workers", "Zero Trust", "Azure AD", "Vanilla JS", "Universal Editor"],
    links: [
      { label: "Case Study", href: "/projects/aem-eds", external: false },
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
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {project.title}
                </Link>
                {project.subtitle && (
                  <p className="font-dm-mono text-[10px] text-muted uppercase tracking-wide mt-0.5">
                    {project.subtitle}
                  </p>
                )}
              </div>
              {project.badge && (
                <span className="font-dm-mono text-[10px] text-accent uppercase tracking-widest shrink-0 ml-4">
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
                {project.links.map(({ label, href, external }, i) => {
                  const className =
                    i === 0
                      ? "px-3 py-1.5 bg-accent text-background text-xs font-medium rounded-sm hover:opacity-90 transition-opacity"
                      : "px-3 py-1.5 border border-border text-foreground text-xs font-medium rounded-sm hover:border-muted transition-colors";
                  return external ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link key={label} href={href} className={className}>
                      {label}
                    </Link>
                  );
                })}
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
