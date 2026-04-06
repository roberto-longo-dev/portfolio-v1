import SectionLabel from "@/components/ui/SectionLabel";

const stack = [
  "Node.js",
  "TypeScript",
  "Fastify",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Cloudflare Workers",
  "Next.js",
];

export default function BetPlatformCaseStudy() {
  return (
    <article className="space-y-16">
      <header>
        <SectionLabel>Case Study</SectionLabel>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">BetPlatform</h1>
        <p className="mt-3 text-muted text-sm max-w-xl leading-relaxed">
          Enterprise betting platform backend demonstrating production-grade patterns: edge
          security, real-time data, and auth infrastructure.
        </p>
        <div className="flex items-center gap-6 mt-4">
          <span className="font-dm-mono text-xs text-accent uppercase tracking-widest">
            Live
          </span>
          <a
            href="https://betplatform.robertolongo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-mono text-xs text-accent uppercase tracking-widest hover:underline"
          >
            Live Demo →
          </a>
          <a
            href="https://betplatformapi-production.up.railway.app/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-mono text-xs text-muted uppercase tracking-widest hover:text-accent hover:underline transition-colors"
          >
            API Docs →
          </a>
        </div>
      </header>

      <section>
        <SectionLabel>Overview</SectionLabel>
        <p className="mt-4 text-muted text-sm leading-relaxed max-w-2xl">
          Full-stack betting platform built to demonstrate enterprise-grade backend patterns
          including authentication flows, real-time communication, edge-based geoblocking, and
          scalable data access. Designed as a reference architecture for high-traffic transactional
          systems.
        </p>
      </section>

      <section>
        <SectionLabel>Architecture</SectionLabel>
        <div className="mt-4 space-y-3 text-muted text-sm leading-relaxed max-w-2xl">
          <p>
            Monorepo managed with pnpm workspaces, separating concerns cleanly across three
            packages:
          </p>
          <ul className="space-y-2 pl-0">
            {[
              { name: "apps/api", desc: "Fastify + TypeScript + Prisma — core business logic, auth, WebSocket server" },
              { name: "apps/web", desc: "Next.js frontend — server-rendered UI consuming the API" },
              { name: "cloudflare/geo-worker", desc: "Cloudflare Worker — edge geoblocking before requests reach origin" },
            ].map(({ name, desc }) => (
              <li key={name} className="flex flex-col sm:flex-row sm:gap-6">
                <span className="font-dm-mono text-xs text-foreground uppercase tracking-wide w-48 shrink-0 pt-0.5">
                  {name}
                </span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <SectionLabel>Technical Decisions</SectionLabel>
        <div className="mt-4 space-y-5 max-w-2xl">
          {[
            {
              decision: "Fastify over Express",
              rationale:
                "Schema-based validation, faster JSON serialization, and built-in TypeScript support reduce boilerplate and improve throughput under load.",
            },
            {
              decision: "JWT refresh token rotation",
              rationale:
                "Short-lived access tokens with single-use refresh tokens minimize exposure window on token theft. Revocation tracked in Redis.",
            },
            {
              decision: "Geoblocking at the edge",
              rationale:
                "Cloudflare Worker intercepts requests before they reach origin, enforcing jurisdictional restrictions with zero latency penalty on allowed traffic.",
            },
            {
              decision: "Redis for session cache",
              rationale:
                "Offloads active session lookups from PostgreSQL, keeping auth middleware latency under 5ms at scale.",
            },
            {
              decision: "WebSockets for real-time odds",
              rationale:
                "Persistent connections push odds updates server-to-client, eliminating polling overhead and keeping UI state consistent.",
            },
            {
              decision: "Responsible gambling features",
              rationale:
                "Session timeout enforcement terminates idle sessions after a configurable inactivity window. Self-exclusion endpoint allows users to lock their account for a defined period, enforced at the middleware layer. Deposit limit logic caps daily/weekly spend at the API level, with limits stored per-user and evaluated before any transaction is processed.",
            },
          ].map(({ decision, rationale }) => (
            <div key={decision}>
              <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
                {decision}
              </p>
              <p className="text-muted text-sm leading-relaxed">{rationale}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Status</SectionLabel>
        <p className="mt-4 text-muted text-sm leading-relaxed max-w-2xl">
          <span className="font-dm-mono text-xs text-accent uppercase tracking-widest mr-3">
            Live
          </span>
          Deployed on Railway (API), Vercel (frontend), Cloudflare (geo-worker coming soon).
        </p>
      </section>

      <section>
        <SectionLabel>Stack</SectionLabel>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs border border-border text-foreground rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
