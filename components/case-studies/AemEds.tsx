import SectionLabel from "@/components/ui/SectionLabel";

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
  { metric: "Preview environments protected", result: "4 (STAGE Live, STAGE Preview, PROD Preview × 2 brands/sites)" },
  { metric: "Languages managed", result: "29" },
  { metric: "Component development effort", result: "−30%" },
  { metric: "Content editing time", result: "−50%" },
  { metric: "Unauthorized access incidents", result: "0 post-implementation" },
];

export default function AemEdsCaseStudy() {
  return (
    <article className="space-y-16">
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

      <section>
        <SectionLabel>Overview</SectionLabel>
        <p className="mt-4 text-muted text-sm leading-relaxed max-w-2xl">
          Led the architecture and delivery of two corporate websites for a European pharma
          enterprise on AEM Edge Delivery Services with Universal Editor. The platform serves up to
          29 languages across two brands/sites from a shared codebase, with differentiated design per
          brand. Team of 5 engineers, end-to-end ownership from architecture to post-launch.
        </p>
      </section>

      <section>
        <SectionLabel>Problems</SectionLabel>
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

      <section>
        <SectionLabel>Solution 1 — Zero Trust Security Architecture</SectionLabel>
        <div className="mt-4 space-y-5 max-w-2xl">
          <p className="text-muted text-sm leading-relaxed">
            Two independent security layers protecting all preview and stage environments.
          </p>
          <div className="space-y-4">
            {[
              {
                label: "Layer 1 — Cloudflare Zero Trust + Azure AD SSO",
                body: "Users attempting to access any protected domain are redirected to Azure AD login. Upon successful authentication, Cloudflare Access issues a signed JWT injected into subsequent requests. The Cloudflare Worker validates the JWT cryptographically using JWKS before forwarding any request.",
              },
              {
                label: "Layer 2 — AEM EDS Site Token",
                body: "The Worker injects a secret Authorization header into every request forwarded to the AEM origin. Even if someone bypasses Cloudflare DNS entirely and contacts the AEM origin directly, the request is rejected with HTTP 401 without the correct token.",
              },
              {
                label: "Why two layers",
                body: "Each layer assumes the other can be bypassed. Zero Trust protects against unauthenticated users. The site token protects against direct origin access. Neither is sufficient alone.",
              },
              {
                label: "Deployment approach",
                body: "All Worker logic is version-controlled in a dedicated GitHub repository and deployed via Wrangler CLI — not through the Cloudflare dashboard. This provides full audit trail, peer review via pull requests, and reproducible deployments across environments.",
              },
            ].map(({ label, body }) => (
              <div key={label}>
                <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <pre className="mt-4 p-4 bg-[#111111] border border-border rounded-sm text-xs text-muted font-dm-mono leading-relaxed overflow-x-auto">
            <code>{`User Browser
  → Cloudflare DNS (proxied CNAME)
    → Cloudflare Zero Trust (Azure AD JWT issued)
      → Cloudflare Worker (JWT validation + Site Token injection)
        → AEM EDS Origin (validates Site Token)`}</code>
          </pre>
        </div>
      </section>

      <section>
        <SectionLabel>Solution 2 — Component Acceleration Framework</SectionLabel>
        <div className="mt-4 space-y-5 max-w-2xl">
          <p className="text-muted text-sm leading-relaxed">
            A set of three importable JavaScript utility files integrated into the EDS project.
            Every component developer imports the same utilities instead of writing
            component-specific data extraction logic.
          </p>
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              The problem it solves
            </p>
            <p className="text-muted text-sm leading-relaxed">
              AEM EDS provides component data as deeply nested HTML — the output of the Universal
              Editor dialog. Without a framework, every developer writes their own querySelector
              logic to extract each field. On a five-person team, this produces five different
              patterns for the same problem.
            </p>
          </div>
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              How it works
            </p>
            <p className="text-muted text-sm leading-relaxed mb-3">
              Each AEM component has a JSON model defined in its dialog configuration — the
              canonical field map authored in Universal Editor. The framework reads this model
              at build time and uses it to drive automatic extraction at runtime. The developer
              calls a single function, passing the block element. The framework traverses the
              nested HTML, maps each node to its corresponding dialog field by position and type,
              and returns a plain object whose keys exactly match the component model.
            </p>
            <pre className="p-4 bg-[#111111] border border-border rounded-sm text-xs text-muted font-dm-mono leading-relaxed overflow-x-auto">
              <code>{`// Without framework — each developer writes their own extraction
const title = block.querySelector(':scope > div:nth-child(1) > div').textContent
const image = block.querySelector(':scope > div:nth-child(2) > div > picture')
const cta   = block.querySelector(':scope > div:nth-child(3) > div > a')

// With framework — one call, keys match the dialog model exactly
const component = generateComponentObj(block)

// component is now a typed object:
// {
//   title:       "Hero headline text",
//   image:       <picture>,
//   cta:         { text: "Learn more", href: "/page" },
//   description: "Supporting copy...",
//   ...
// }

// Rendering uses the object directly — no selector knowledge required
block.innerHTML = \`
  <h2>\${component.title}</h2>
  <p>\${component.description}</p>
  <a href="\${component.cta.href}">\${component.cta.text}</a>
\``}</code>
            </pre>
            <p className="mt-3 text-muted text-sm leading-relaxed">
              Because the returned keys are derived from the component model, not hardcoded
              selectors, the object is self-documenting and stable across refactors. Adding a new
              dialog field extends the object automatically — no extraction code to update.
              Developers write only rendering logic and component-specific behavior.
            </p>
          </div>
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              Impact
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Reduced component development effort by 30% and eliminated an entire category of bugs
              caused by inconsistent dialog field extraction.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Solution 3 — Multi-language, Multi-brand Governance</SectionLabel>
        <div className="mt-4 space-y-4 max-w-2xl">
          <p className="text-muted text-sm leading-relaxed">
            Two corporate websites, up to 29 languages, shared repository. The rollout strategy and
            template architecture were designed so that:
          </p>
          <ul className="space-y-2 text-sm text-muted leading-relaxed pl-0">
            {[
              "Language-specific content updates deploy independently",
              "Brand design differences are handled at the component level, not through separate codebases",
              "Content authors across 5+ teams work within a consistent authoring model",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted text-sm leading-relaxed">
            Template and design system decisions reduced content editing time by 50% compared to the
            previous platform.
          </p>
        </div>
      </section>

      <section>
        <SectionLabel>Solution 4 — Edge Personalization Pattern</SectionLabel>
        <div className="mt-4 space-y-4 max-w-2xl">
          <p className="text-muted text-sm leading-relaxed">
            A Cloudflare Worker pattern for injecting data from databases or external integrations
            at the edge — before the response reaches the browser. This enables user-based content
            (private areas, dashboards) without client-side API calls that would expose credentials
            and degrade performance.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            The pattern positions the Worker as a lightweight server-side rendering layer without
            requiring a dedicated application server — relevant for AEM EDS architectures where the
            stack is intentionally serverless.
          </p>
        </div>
      </section>

      <section>
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
