import SectionLabel from "@/components/ui/SectionLabel";

const stack = [
  "Next.js 15",
  "Sanity v3",
  "Stripe",
  "NextAuth v5",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Turborepo",
  "Vercel",
  "Cloudflare",
];

const releases = [
  {
    label: "Release 1",
    title: "Base Headless",
    status: "In Progress" as const,
    items: [
      "Homepage and product pages driven by Sanity CMS",
      "Blog with GROQ queries and server-side rendering",
      "Design system in Tailwind CSS",
      "Monorepo setup with Turborepo",
      "Deploy on Vercel + Cloudflare CDN",
    ],
  },
  {
    label: "Release 2",
    title: "Private Area",
    status: "Pending" as const,
    items: [
      "Authentication with NextAuth v5",
      "Registration, login, and user dashboard",
      "Exclusive content for members",
      "Route protection via Middleware",
    ],
  },
  {
    label: "Release 3",
    title: "E-commerce",
    status: "Pending" as const,
    items: [
      "Product detail pages",
      "Cart and checkout flow",
      "Order management",
      "PostgreSQL + Prisma for users and orders",
    ],
  },
  {
    label: "Release 4",
    title: "Transactions",
    status: "Pending" as const,
    items: [
      "One-shot payments via Stripe",
      "Monthly subscription flow",
      "Stripe webhooks and event handling",
      "Order history in user dashboard",
    ],
  },
];

const statusStyle: Record<"In Progress" | "Pending" | "Live", string> = {
  Live: "text-accent",
  "In Progress": "text-foreground",
  Pending: "text-muted",
};

export default function AwakeCaseStudy() {
  return (
    <article className="space-y-16">
      <header>
        <SectionLabel>Case Study</SectionLabel>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Awake</h1>
        <p className="mt-1 font-dm-mono text-xs text-accent uppercase tracking-widest">
          Specialty Coffee Brand — Headless E-commerce
        </p>
        <p className="mt-3 text-muted text-sm max-w-xl leading-relaxed">
          Full-stack headless e-commerce platform for a fictional Italian specialty coffee
          brand. Built to demonstrate a production-grade architecture combining a headless CMS,
          authentication, e-commerce, and subscription payments.
        </p>
        <span className="inline-block mt-4 font-dm-mono text-[10px] text-muted uppercase tracking-widest">
          Personal Project · In Progress
        </span>
      </header>

      <section>
        <SectionLabel>Overview</SectionLabel>
        <p className="mt-4 text-muted text-sm leading-relaxed max-w-2xl">
          Awake is a portfolio project designed around a fictional specialty coffee brand.
          The goal is to demonstrate end-to-end ownership of a modern full-stack product:
          headless CMS integration with Sanity, server-side rendering with Next.js 15 App
          Router, authenticated private areas, and a complete e-commerce and subscription
          payment flow via Stripe. The project is structured as a Turborepo monorepo with a
          clear separation between the web application and the Sanity Studio.
        </p>
      </section>

      <section>
        <SectionLabel>Architecture</SectionLabel>
        <div className="mt-4 space-y-4 max-w-2xl">
          <pre className="p-4 bg-[#111111] border border-border rounded-sm text-xs text-muted font-dm-mono leading-relaxed overflow-x-auto">
            <code>{`Sanity Studio (CMS)
       ↓ GROQ
Next.js 15 App Router
  ├── Server Components   → fetch from Sanity (blog, products)
  ├── Client Components   → interactions (cart, auth UI)
  ├── Route Handlers      → Stripe webhooks, internal API
  └── Middleware          → private area route protection
       ↓
PostgreSQL (users, orders, sessions)
Stripe    (payments, subscriptions)`}</code>
          </pre>
          <div className="space-y-3">
            {[
              { name: "apps/web",              desc: "Next.js 15 — App Router, Server Components, client interactions" },
              { name: "apps/studio",           desc: "Sanity Studio v3 — content modelling, editorial interface" },
              { name: "packages/sanity-types", desc: "Shared TypeScript types generated from Sanity schema" },
            ].map(({ name, desc }) => (
              <div key={name} className="flex flex-col sm:flex-row sm:gap-6">
                <span className="font-dm-mono text-xs text-foreground uppercase tracking-wide w-52 shrink-0 pt-0.5">
                  {name}
                </span>
                <span className="text-sm text-muted leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Releases</SectionLabel>
        <div className="mt-4 space-y-3 max-w-2xl">
          {releases.map(({ label, title, status, items }) => (
            <div key={label} className="border border-border rounded-sm p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-dm-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{title}</p>
                </div>
                <span className={`font-dm-mono text-[10px] uppercase tracking-widest shrink-0 ${statusStyle[status]}`}>
                  {status}
                </span>
              </div>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-border shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
