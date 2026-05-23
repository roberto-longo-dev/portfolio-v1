import SectionLabel from "@/components/ui/SectionLabel";
import AemSitesSolutions from "@/components/case-studies/AemSitesSolutions";

const stack = [
  "AEM Sites as a Cloud Service",
  "Java",
  "OSGi",
  "Sling Models",
  "Sling Servlets",
  "HTL",
  "AEM Editable Templates",
  "Style System",
  "Apache Jackrabbit (JCR)",
  "Webpack",
  "Touch UI",
  "WCAG 2.1",
  "JUnit",
  "AEM Mocks",
  "Mockito",
  "Maven",
  "Git",
];

const problems = [
  {
    title: "Adding components to an existing platform without regressions",
    body: "The platform was already in production with real users. New component development had to integrate cleanly with existing architecture — Sling Models, JCR content structure, clientlib dependencies — without introducing regressions or breaking existing authored content.",
  },
  {
    title: "Frontend performance: critical vs page-level clientlibs",
    body: "The existing clientlib strategy loaded all component CSS and JS at page level. As the component library grew, this created unnecessary render-blocking resources on pages where those components were not present.",
  },
  {
    title: "Touch UI dialog complexity",
    body: "Several components required non-standard authoring experiences: conditional field visibility, custom validators, and multifield configurations. Standard AEM dialog patterns were insufficient and required custom Touch UI extensions.",
  },
  {
    title: "Accessibility compliance across new and existing components",
    body: "New components had to meet WCAG 2.1 AA requirements. Several existing components also had accessibility gaps that needed remediation without disrupting authored content or visual design.",
  },
  {
    title: "Unit test coverage on Sling Models",
    body: "The existing codebase had low unit test coverage on Java models. New models had to ship with comprehensive test coverage, and existing critical models needed retroactive test addition.",
  },
];

const results = [
  { metric: "New components delivered", result: "10+" },
  { metric: "Unit test coverage on new models", result: ">90%" },
  { metric: "Clientlib payload reduction", result: "~35% on component-light pages" },
  { metric: "Accessibility issues resolved", result: "100+ across already existing components" },
  { metric: "Production regressions introduced", result: "0" },
];

const toc = [
  { label: "Overview",   href: "#overview" },
  { label: "Challenges", href: "#challenges" },
  { label: "Solutions",  href: "#solutions" },
  { label: "Results",    href: "#results" },
  { label: "Stack",      href: "#stack" },
];

export default function AemSitesCaseStudy() {
  return (
    <div className="lg:grid lg:grid-cols-[1fr_148px] lg:gap-16 lg:items-start">
      <article className="space-y-16 min-w-0">
        <header>
          <SectionLabel>Case Study</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Enterprise Financial Web Platform
          </h1>
          <p className="mt-1 font-dm-mono text-xs text-accent uppercase tracking-widest">
            AEM Sites as a Cloud Service
          </p>
          <p className="mt-3 text-muted text-sm max-w-xl leading-relaxed">
            Full-stack AEM development for a European financial services enterprise — building new
            components, integrating backend services, and improving platform quality through
            accessibility, performance, and test coverage.
          </p>
          <span className="inline-block mt-4 font-dm-mono text-[10px] text-muted uppercase tracking-widest">
            Deloitte Digital · 2024-2025
          </span>
        </header>

        <section id="overview">
          <SectionLabel>Overview</SectionLabel>
          <p className="mt-4 text-muted text-sm leading-relaxed max-w-2xl">
            Led development of new features and components on an existing AEMaaCS platform for a
            European financial services client. Worked across the full AEM stack — Java backend
            (Sling Models, Sling Servlets, OSGi), HTL, Touch UI dialog customisation, clientlib
            architecture, and accessibility compliance. Delivered against strict quality standards
            with comprehensive unit test coverage.
          </p>
          <p className="mt-3 text-muted text-sm leading-relaxed max-w-2xl">
            Beyond technical delivery, I acted as tech lead for a team of 3–5 engineers — owning
            estimation, sprint organisation, and task breakdown in Agile. Worked directly with the
            client throughout the engagement to ensure business requirements were correctly
            translated into development features, managing SIT and UAT phases and coordinating the
            go-live plan. Maintained commercial awareness across the delivery, balancing scope,
            quality, and timeline at every stage.
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
          <AemSitesSolutions />
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
