import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "BetPlatform",
    subtitle: "Enterprise Betting Backend",
    description:
      "JWT auth with refresh token rotation, geoblocking via Cloudflare Workers, real-time WebSockets, PostgreSQL.",
    badge: "Live",
    slug: "betplatform",
    stack: ["Node.js", "Fastify", "PostgreSQL", "Cloudflare Workers", "Next.js"],
    liveUrl: "https://betplatform.robertolongo.dev",
  },
  {
    title: "Enterprise Pharma Web Platform",
    subtitle: "AEM Edge Delivery Services",
    description:
      "Zero Trust security architecture, component acceleration framework, and multi-language governance for a European pharma corporate client.",
    badge: "Case Study",
    slug: "aem-eds",
    stack: ["AEM EDS", "Cloudflare Workers", "Zero Trust", "Azure AD", "Vanilla JS", "Universal Editor"],
    liveUrl: null,
  },
  {
    title: "Awake",
    subtitle: "Headless E-commerce Platform",
    description:
      "Headless e-commerce for a fictional Italian specialty coffee brand. CMS-driven content, authentication, e-commerce, and subscription payments.",
    badge: "In Progress",
    slug: "awake",
    stack: ["Next.js 15", "Sanity v3", "Stripe", "NextAuth v5", "PostgreSQL", "Turborepo"],
    liveUrl: null,
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
            className="p-6 border border-border rounded-sm flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-foreground">{project.title}</p>
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

            <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

            <p className="font-dm-mono text-[10px] text-muted uppercase tracking-wide mb-6">
              {project.stack.join(" · ")}
            </p>

            <div className="flex items-center gap-2 mt-auto">
              <Link
                href={`/projects/${project.slug}`}
                className="px-3 py-1.5 bg-accent text-background text-xs font-medium rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                View Case Study →
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-border text-foreground text-xs font-medium rounded-sm hover:border-muted transition-colors whitespace-nowrap"
                >
                  Live Demo →
                </a>
              )}
            </div>
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
