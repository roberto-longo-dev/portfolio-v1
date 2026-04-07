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
    id: "zero-trust",
    number: "01",
    title: "Zero Trust Security Architecture",
    summary:
      "Two independent Cloudflare + AEM layers protecting all preview and production preview environments — each assuming the other can be bypassed.",
    content: (
      <div className="space-y-5 pt-5 border-t border-border mt-4">
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
        <pre className="p-4 bg-[#111111] border border-border rounded-sm text-xs text-muted font-dm-mono leading-relaxed overflow-x-auto">
          <code>{`User Browser
  → Cloudflare DNS (proxied CNAME)
    → Cloudflare Zero Trust (Azure AD JWT issued)
      → Cloudflare Worker (JWT validation + Site Token injection)
        → AEM EDS Origin (validates Site Token)`}</code>
        </pre>
      </div>
    ),
  },
  {
    id: "component-fw",
    number: "02",
    title: "Component Acceleration Framework",
    summary:
      "Model-driven JS utility layer that replaces per-developer querySelector logic with a single function call — keys derived from the AEM dialog model.",
    content: (
      <div className="space-y-5 pt-5 border-t border-border mt-4">
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
            canonical field map authored in Universal Editor. The framework reads this model at
            build time and uses it to drive automatic extraction at runtime. The developer calls a
            single function, passing the block element. The framework traverses the nested HTML,
            maps each node to its corresponding dialog field by position and type, and returns a
            plain object whose keys exactly match the component model.
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
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="text-accent shrink-0">—</span>
              <span>
                Reduced component development effort by 40% and eliminated an entire category of
                bugs caused by inconsistent dialog field extraction.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">—</span>
              <span>
                Model-driven architecture means component updates driven by evolving business
                requirements require little to no data-extraction refactoring.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "multi-language",
    number: "03",
    title: "Multi-language, Multi-brand Governance",
    summary:
      "Shared-codebase strategy for two brands, 29 languages, and 10+ content authoring teams — with ACL-based permissions and independent language deployments.",
    content: (
      <div className="space-y-4 pt-5 border-t border-border mt-4">
        <p className="text-muted text-sm leading-relaxed">
          Two corporate websites, up to 29 languages, shared repository. Information architecture
          and overall strategy were designed so that:
        </p>
        <ul className="space-y-2 text-sm text-muted leading-relaxed">
          {[
            "Language-specific content ensured by automated tag translation and custom i18n-like logic.",
            "Brand design differences handled at the component level — no separate codebases.",
            "Content authors across 10+ teams work within a consistent authoring model.",
            "Granular ACL-based permission model — content editable only by authorized team members, aligned with business governance.",
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
    ),
  },
  {
    id: "whats-next",
    number: "04",
    title: "What I'd Do Next — Edge Personalization",
    summary:
      "Identified gap in EDS for user-specific content. Proposed a Cloudflare Worker pattern to inject dynamic data server-side — no client-side API exposure, no dedicated backend.",
    content: (
      <div className="space-y-5 pt-5 border-t border-border mt-4">
        <div>
          <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
            The gap
          </p>
          <p className="text-muted text-sm leading-relaxed">
            EDS has no native mechanism for injecting user-specific content at request time.
            Handling this client-side would expose API credentials and introduce a visible loading
            phase — both unacceptable for a pharma corporate site.
          </p>
        </div>
        <div>
          <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
            Proposed approach
          </p>
          <p className="text-muted text-sm leading-relaxed mb-3">
            A Cloudflare Worker acting as a lightweight SSR layer at the edge. On each request,
            the Worker intercepts the EDS HTML response, fetches the relevant user data from a
            database or external API, injects it directly into the markup, and forwards the
            complete response to the browser.
          </p>
          <pre className="p-4 bg-[#111111] border border-border rounded-sm text-xs text-muted font-dm-mono leading-relaxed overflow-x-auto">
            <code>{`// Cloudflare Worker — edge personalization pattern
export default {
  async fetch(request, env) {
    const response = await fetch(request)           // fetch EDS page
    const html     = await response.text()

    const userId   = getUserIdFromCookie(request)
    const userData = await env.DB.get(userId)       // D1 / external API

    const personalized = injectUserData(html, userData)

    return new Response(personalized, response)
  }
}`}</code>
          </pre>
        </div>
        <div>
          <p className="font-dm-mono text-xs text-foreground uppercase tracking-widest mb-1">
            Why it matters
          </p>
          <ul className="space-y-2 text-sm text-muted leading-relaxed">
            {[
              "No API calls exposed to the client — credentials stay server-side.",
              "No additional application server — the Worker is the personalization layer.",
              "Consistent with the existing Cloudflare-first architecture already in place.",
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
];

export default function AemEdsSolutions() {
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
