import SectionLabel from "@/components/ui/SectionLabel";
import AemEdsSolutions from "@/components/case-studies/AemEdsSolutions";

const stack = [
  "AEM Edge Delivery Services",
  "Universal Editor",
  "Cloudflare Workers",
  "Cloudflare Zero Trust",
  "Azure AD",
  "Vanilla JS",
  "Wrangler CLI",
  "GitHub",
];

const problems = [
  {
    title: "Preview environments were publicly accessible",
    body: "Any .aem.page or .aem.live URL was reachable without authentication — unreleased content, work-in-progress layouts, and reserved assets were exposed to anyone with the link.",
  },
  {
    title: "Vanilla JS on EDS scales poorly on multi-developer teams",
    body: "EDS components are built in plain JavaScript. Without governance, each developer writes their own data extraction logic from AEM dialog fields — duplicated, inconsistent, unmaintainable across a team.",
  },
  {
    title: "Two brands/sites, 29 languages, one repository",
    body: "Shared codebase with differentiated design per brand/site. Content updates, design changes, and language rollouts needed to be independent without cross-site regressions.",
  },
  {
    title: "Edge personalization gap",
    body: "User-based content (private areas, dashboards) requires runtime data injection. Client-side fetching would expose API calls and degrade performance. A server-side approach without a dedicated application server was needed.",
  },
];

const results = [
  { metric: "Preview environments protected", result: "6 (STAGE Live, STAGE Preview, PROD Preview × 2 brands/sites)" },
  { metric: "Languages managed", result: "29" },
  { metric: "Component development effort", result: "−40%" },
  { metric: "Unauthorized access incidents", result: "0 post-implementation" },
];

const toc = [
  { label: "Overview",    href: "#overview" },
  { label: "Challenges",  href: "#challenges" },
  { label: "Solutions",   href: "#solutions" },
  { label: "Results",     href: "#results" },
  { label: "Stack",       href: "#stack" },
];

export default function AemEdsCaseStudy() {
  return (
    <div className="lg:grid lg:grid-cols-[1fr_148px] lg:gap-16 lg:items-start">
      <article className="space-y-16 min-w-0">
        <header>
          <SectionLabel>Case Study</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Enterprise Pharma Web Platform
          </h1>
          <p className="mt-1 font-dm-mono text-xs text-accent uppercase tracking-widest">
            AEM Edge Delivery Services
          </p>
          <p className="mt-3 text-muted text-sm max-w-xl leading-relaxed">
            Zero Trust security architecture, component acceleration framework, and multi-language
            governance for a European pharma corporate client.
          </p>
          <span className="inline-block mt-4 font-dm-mono text-[10px] text-muted uppercase tracking-widest">
            Deloitte Digital · 2025
          </span>
        </header>

        <section id="overview">
          <SectionLabel>Overview</SectionLabel>
          <p className="mt-4 text-muted text-sm leading-relaxed max-w-2xl">
            Led the architecture and delivery of two corporate websites for a European pharma
            enterprise on AEM Edge Delivery Services with Universal Editor. The platform serves up
            to 29 languages across two brands/sites from a shared codebase, with differentiated
            design per brand. Team of 5 engineers, end-to-end ownership from architecture to
            post-launch.
          </p>
        </section>

        <section id="challenges">
          <SectionLabel>Challenges</SectionLabel>
          <div className="mt-4 space-y-6 max-w-2xl">
            {problems.map(({ title, body }, i) => (
              <div key={title}>
                <p className="font-dm-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-sm text-foreground font-medium mb-1">{title}</p>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions">
          <SectionLabel>Solutions</SectionLabel>
          <AemEdsSolutions />
        </section>

        <section id="results">
          <SectionLabel>Results</SectionLabel>
          <div className="mt-4 max-w-2xl overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="font-dm-mono text-[10px] text-muted uppercase tracking-widest text-left py-2 pr-8 font-normal">
                    Metric
                  </th>
                  <th className="font-dm-mono text-[10px] text-muted uppercase tracking-widest text-left py-2 font-normal">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map(({ metric, result }) => (
                  <tr key={metric} className="border-b border-border">
                    <td className="py-3 pr-8 text-muted">{metric}</td>
                    <td className="py-3 text-foreground font-medium">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="stack">
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

      <aside className="hidden lg:block sticky top-8">
        <p className="font-dm-mono text-[10px] text-muted uppercase tracking-widest mb-3">
          On this page
        </p>
        <nav className="space-y-2">
          {toc.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block font-dm-mono text-[10px] text-muted uppercase tracking-wide hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
