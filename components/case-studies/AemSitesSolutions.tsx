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
      "Built new components end-to-end: OSGi-registered Sling Models, Sling Servlets, HTL for server-side rendering, AEM Editable Templates with Style System policies, and Touch UI dialogs, integrating cleanly with the existing production codebase.",
    content: (
      <div className="space-y-4 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          Built new components end-to-end: OSGi-registered Sling Models for business logic and
          content mapping, Sling Servlets for custom endpoint exposure, HTL for server-side
          rendering, AEM Editable Templates with Style System policies for template and variant
          configuration, and Touch UI dialogs for authoring setup.
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              Sling Models &amp; OSGi
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Each component&apos;s business logic and JCR content mapping was encapsulated in an
              OSGi-registered Sling Model. Models were injected via @OSGiService and @ValueMapValue,
              keeping HTL scripts free of logic.
            </p>
          </div>

          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              Sling Servlets
            </p>
            <p className="text-muted text-sm leading-relaxed">
              A custom Sling Servlet was implemented to handle form submission and integrate with an
              external mail service, covering a use case where the out-of-the-box AEM Forms and
              content APIs were insufficient. The Servlet was registered by resource type, keeping
              the endpoint co-located with the form component it served.
            </p>
            <p className="text-muted text-sm leading-relaxed mt-2">
              To manage the mail service credentials and endpoint configuration securely, a dedicated
              OSGi configuration was created. This allowed environment-specific values (API keys,
              sender addresses, service URLs) to be injected at runtime via AEM&apos;s OSGi config
              files, no hardcoded values in code, and no redeployment required to update
              configuration across environments.
            </p>
            <p className="text-muted text-sm leading-relaxed mt-2">
              This was a targeted, single-purpose integration, not a general pattern applied across
              components.
            </p>
          </div>

          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              HTL
            </p>
            <p className="text-muted text-sm leading-relaxed">
              HTL was used as the server-side rendering language for all component markup, delegating
              business logic entirely to Sling Models via the Use-API. Beyond basic rendering, the
              implementation applied advanced HTL patterns to ensure robustness and maintainability:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-muted leading-relaxed">
              {[
                "data-sly-test for conditional rendering, preventing empty or broken HTML from reaching the DOM when optional model values were missing or null",
                "data-sly-template and data-sly-call for intra-component templating, used when a component needed to cover multiple layout scenarios, keeping the markup clean and avoiding duplication",
                "data-sly-use with scoped variables to compose complex component structures without logic leaking into markup",
                "context attribute applied correctly where needed, for example, when working with the OOTB Embed component, context was set explicitly to avoid XSS vulnerabilities introduced by unescaped HTML output",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted text-sm leading-relaxed mt-2">
              The result was markup that was strictly presentational, resilient to missing content,
              and safe by default.
            </p>
          </div>

          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              AEM Editable Templates &amp; Style System
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Component behaviour and visual variants were configured per-template via policy
              definitions, no code changes required to enable or restrict features per template. The
              Style System allowed authors to select pre-approved component variants directly from the
              Touch UI, with the corresponding CSS classes injected at runtime based on the active
              policy. This decoupled visual variation from component code, reducing the need for
              separate component variants.
            </p>
          </div>

          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              JCR Integration
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Component content persisted via Apache Jackrabbit (JCR). New node structures followed
              existing repository conventions to ensure clean merge with authored content already in
              production.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "clientlib-architecture",
    number: "02",
    title: "Clientlib Architecture: Critical Path vs Component-Scoped",
    summary:
      "Separated clientlibs into two tiers with a structured naming convention, a critical <head> library for above-the-fold styles and component-scoped libraries loaded only when present. All JS and CSS minified via Webpack for production.",
    content: (
      <div className="space-y-5 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          The existing clientlib strategy loaded all component CSS and JS at page level. As the
          component library grew, this created unnecessary render-blocking resources on pages where
          those components were not present. There was also no consistent naming convention, making
          it difficult to resolve the correct clientlib programmatically at runtime.
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Critical clientlib (page <head>)",
              body: "Contains only above-the-fold styles: CSS reset, typography scale, and layout grid. Kept intentionally minimal to avoid render-blocking. No component-specific styles.",
            },
            {
              label: "Component-scoped clientlibs",
              body: "Each component owns its own clientlib, loaded only when that component is present on the page: unused components contribute zero bytes to the page payload.",
            },
            {
              label: "Naming convention & programmatic resolution",
              body: "A naming convention was established across all component clientlibs: each clientlib category followed a structured pattern (e.g. project.component.<component-name>). At page component runtime, the AEM page component resolves and includes the correct clientlib programmatically based on the component name present on the page, without hardcoding a static list of dependencies. This made the inclusion mechanism self-maintaining as new components were added.",
            },
            {
              label: "Webpack minification",
              body: "All frontend JavaScript and CSS was minified via Webpack bundling for production builds, reducing asset payload and improving page load performance.",
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
        <div>
          <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-2">
            Impact
          </p>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            {[
              "Eliminated render-blocking resources for components not present on a given page.",
              "Naming convention made clientlib resolution automatic and consistent across the team.",
              "Webpack minification reduced JS and CSS production payload.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
              body: "Fields shown or hidden dynamically based on authored selections, implemented via Granite UI conditions on dialog field nodes. Authors see only the fields relevant to their current configuration.",
            },
            {
              label: "Custom validators",
              body: "Field-level business rules enforced via clientlib-based validators attached to dialog fields. Validation runs before content is saved, preventing invalid data from reaching the JCR.",
            },
            {
              label: "Nested multifield configurations",
              body: "Repeatable content structures, lists of items with their own sub-fields, implemented with nested Granite multifields. All dialog extensions version-controlled and documented for team auditability.",
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
              body: "ARIA attributes added for dynamic content regions. Alt text requirements for image components enforced at the Touch UI dialog level, authors cannot publish without providing alternative text.",
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
      "Comprehensive JUnit tests for all new Sling Models using io.wcm AEM Mocks and Mockito, covering content mapping, OSGi injection, edge cases, and servlet handling.",
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
              body: "Tests run against a simulated AEM context, JCR content loaded from JSON fixtures, OSGi service registry mocked, Sling resource resolution working without a running AEM instance. Fast, deterministic, CI-compatible.",
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
  {
    id: "german-regulatory",
    number: "06",
    title: "German Regulatory Requirements",
    summary:
      "Extended existing components with locale-aware conditional rendering, regulatory disclosures injected via HTL path/locale checks and hidden from non-German authors at the Touch UI dialog level. No duplicate components.",
    content: (
      <div className="space-y-4 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          The financial services client operated under German regulatory requirements that mandated
          additional content disclosures on certain pages, legally required for the German market
          but must not appear on other regional sites.
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              HTL conditional rendering
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Components were extended with additional optional authoring fields, for example, a
              disclaimer text field for the German section. At the HTL level,{" "}
              <span className="font-dm-mono text-xs">data-sly-test</span> checked the page path or
              locale, ensuring regulatory content was injected into the markup only when rendering
              within the appropriate regional context.
            </p>
          </div>
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              Touch UI dialog visibility
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Authors outside the German section would not see the regulatory field in the Touch UI
              dialog, controlled via custom JS logic attached to the dialog. This kept the authoring
              experience clean for non-German markets while enforcing compliance at the component
              level for those that required it.
            </p>
          </div>
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              No component duplication
            </p>
            <p className="text-muted text-sm leading-relaxed">
              No separate component variants or duplicated code were required. The same component
              served all markets, regulatory content was conditionally present or absent based on
              context.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "rtl-support",
    number: "07",
    title: "RTL Language Support",
    summary:
      "Replaced directional CSS properties with logical equivalents across all affected components, layout direction driven entirely by the document dir attribute, with no duplicate stylesheets or per-language overrides.",
    content: (
      <div className="space-y-4 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          The platform served multiple languages and countries, including right-to-left (RTL)
          languages. Component layouts built with directional CSS properties (left, right,
          margin-left, padding-right) would break or display incorrectly when rendered in RTL
          context, requiring either duplicated stylesheets or brittle overrides.
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              CSS logical properties
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Directional properties were replaced with their logical equivalents across all affected
              components:{" "}
              <span className="font-dm-mono text-xs">margin-inline-start</span> instead of{" "}
              <span className="font-dm-mono text-xs">margin-left</span>,{" "}
              <span className="font-dm-mono text-xs">padding-inline-end</span> instead of{" "}
              <span className="font-dm-mono text-xs">padding-right</span>,{" "}
              <span className="font-dm-mono text-xs">inset-inline-start</span> instead of{" "}
              <span className="font-dm-mono text-xs">left</span>. Layout direction is driven
              entirely by the{" "}
              <span className="font-dm-mono text-xs">dir</span> attribute (
              <span className="font-dm-mono text-xs">dir=&quot;rtl&quot;</span> /{" "}
              <span className="font-dm-mono text-xs">dir=&quot;ltr&quot;</span>) set at the HTML
              element level on the page template.
            </p>
          </div>
          <div>
            <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
              Zero per-language overhead
            </p>
            <p className="text-muted text-sm leading-relaxed">
              No duplicate stylesheets, no per-language CSS overrides. The switch between LTR and
              RTL is seamless and automatic, adding a new RTL language requires no CSS changes,
              only correct{" "}
              <span className="font-dm-mono text-xs">dir</span> attribute configuration on the page
              template.
            </p>
          </div>
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
