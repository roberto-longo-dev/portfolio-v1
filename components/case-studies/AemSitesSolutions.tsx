"use client";

import { useState } from "react";

type Solution = {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: React.ReactNode;
};

const solutions: Solution[] = [
  {
    id: "full-stack-components",
    number: "01",
    title: "Full-stack AEM Component Development",
    summary:
      "Built new components end-to-end: OSGi-registered Sling Models, Sling Servlets, HTL templates, and Touch UI dialogs — integrating cleanly with the existing production codebase.",
    content: (
      <div className="space-y-4 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          Built new components end-to-end: OSGi-registered Sling Models for business logic and
          content mapping, Sling Servlets for custom endpoint exposure, HTL templates for
          server-side rendering, and Touch UI dialogs for authoring configuration.
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Sling Models & OSGi",
              body: "Each component's business logic and JCR content mapping was encapsulated in an OSGi-registered Sling Model. Models were injected via @OSGiService and @ValueMapValue, keeping HTL templates free of logic.",
            },
            {
              label: "Sling Servlets",
              body: "Custom Sling Servlets exposed component-specific endpoints where out-of-the-box AEM content APIs were insufficient. Servlets were registered by resource type to keep concerns co-located with the component.",
            },
            {
              label: "HTL Templates",
              body: "Templates delegated all logic to Sling Models via the Use-API. HTL remained strictly presentational — no inline scripts, no business logic in markup.",
            },
            {
              label: "JCR Integration",
              body: "Component content persisted via Apache Jackrabbit (JCR). New node structures followed existing repository conventions to ensure clean merge with authored content already in production.",
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
      </div>
    ),
  },
  {
    id: "clientlib-architecture",
    number: "02",
    title: "Clientlib Architecture: Critical Path vs Component-Scoped",
    summary:
      "Separated clientlibs into two tiers — a critical <head> library for above-the-fold styles and component-scoped libraries loaded only when the component is present on the page.",
    content: (
      <div className="space-y-5 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          The existing clientlib strategy loaded all component CSS and JS at page level. As the
          component library grew, this created unnecessary render-blocking resources on pages
          where those components were not present.
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Critical clientlib (page <head>)",
              body: "Contains only above-the-fold styles: CSS reset, typography scale, and layout grid. Inlined in <head> to eliminate a render-blocking request. No component-specific styles.",
            },
            {
              label: "Component-scoped clientlibs",
              body: "Each component declares its own clientlib category. AEM includes the clientlib only when the component is placed on the page — unused components contribute zero bytes to the page payload.",
            },
            {
              label: "Webpack bundling for JS",
              body: "Applied Webpack-based bundling to JS modules within clientlibs — enabling tree-shaking, chunk splitting, and consistent module resolution across the component library.",
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
      </div>
    ),
  },
  {
    id: "touch-ui-dialogs",
    number: "03",
    title: "Touch UI Dialog Customisation",
    summary:
      "Extended standard Touch UI dialogs with Granite condition-based field visibility, custom clientlib validators, and nested multifield configurations for complex authoring requirements.",
    content: (
      <div className="space-y-4 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          Several components required non-standard authoring experiences that out-of-the-box
          AEM dialog patterns could not provide.
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Granite condition-based field visibility",
              body: "Fields shown or hidden dynamically based on authored selections — implemented via Granite UI conditions on dialog field nodes. Authors see only the fields relevant to their current configuration.",
            },
            {
              label: "Custom validators",
              body: "Field-level business rules enforced via clientlib-based validators attached to dialog fields. Validation runs before content is saved, preventing invalid data from reaching the JCR.",
            },
            {
              label: "Nested multifield configurations",
              body: "Repeatable content structures — lists of items with their own sub-fields — implemented with nested Granite multifields. All dialog extensions version-controlled and documented for team auditability.",
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
      </div>
    ),
  },
  {
    id: "accessibility",
    number: "04",
    title: "WCAG 2.1 AA Accessibility Remediation & Compliance",
    summary:
      "Audited new and existing components against WCAG 2.1 AA. All new components shipped accessibility-compliant by default; 100+ issues resolved across the existing component library.",
    content: (
      <div className="space-y-4 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          New components had to meet WCAG 2.1 AA requirements. Several existing components also
          had accessibility gaps identified during audit that needed remediation without disrupting
          authored content or visual design.
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Semantic HTML & landmark structure",
              body: "Correct landmark roles (main, nav, aside) and heading hierarchy enforced across all new components. Existing components audited and corrected where heading levels were skipped or roles were missing.",
            },
            {
              label: "Keyboard navigation & focus management",
              body: "Interactive components (tabs, accordions, modals) fully navigable via keyboard. Focus trapped appropriately in overlays; focus restored to trigger on close.",
            },
            {
              label: "Colour contrast",
              body: "All text and UI elements verified to meet the 4.5:1 (normal text) and 3:1 (large text / UI components) contrast ratios required by WCAG 2.1 AA.",
            },
            {
              label: "ARIA & alt text governance",
              body: "ARIA attributes added for dynamic content regions. Alt text requirements for image components enforced at the Touch UI dialog level — authors cannot publish without providing alternative text.",
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
      </div>
    ),
  },
  {
    id: "unit-testing",
    number: "05",
    title: "Unit Testing with AEM Mocks & Mockito",
    summary:
      "Comprehensive JUnit tests for all new Sling Models using io.wcm AEM Mocks and Mockito — covering content mapping, OSGi injection, edge cases, and servlet handling.",
    content: (
      <div className="space-y-4 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          The existing codebase had low unit test coverage on Java models. New models had to ship
          with comprehensive test coverage, and existing critical models were identified for
          retroactive test addition.
        </p>
        <div className="space-y-4">
          {[
            {
              label: "AEM Mocks (io.wcm)",
              body: "Tests run against a simulated AEM context — JCR content loaded from JSON fixtures, OSGi service registry mocked, Sling resource resolution working without a running AEM instance. Fast, deterministic, CI-compatible.",
            },
            {
              label: "Mockito for service dependencies",
              body: "External OSGi service dependencies mocked with Mockito. Tests verified that models behave correctly under all injection scenarios, including missing or null service references.",
            },
            {
              label: "Coverage scope",
              body: "Test coverage included: content mapping from JCR nodes to model fields, OSGi service injection, edge cases for optional and missing content, and Sling Servlet request/response handling.",
            },
            {
              label: "Retroactive coverage",
              body: "Existing critical models identified as high-risk (high page coverage, complex mapping logic) received retroactive test suites. Coverage added without modifying production model code.",
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
      </div>
    ),
  },
];

export default function AemSitesSolutions() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mt-4 space-y-3 max-w-2xl">
      {solutions.map(({ id, number, title, summary, content }) => {
        const isOpen = openId === id;
        return (
          <div
            key={id}
            className="border border-border rounded-sm hover:border-muted transition-colors"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : id)}
              className="w-full text-left p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-dm-mono text-[10px] text-muted uppercase tracking-widest">
                    {number}
                  </p>
                  <p className="text-sm font-medium text-foreground">{title}</p>
                  <p className="text-sm text-muted leading-relaxed">{summary}</p>
                </div>
                <span className="font-dm-mono text-muted text-sm shrink-0 mt-0.5 select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </div>
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">{content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
