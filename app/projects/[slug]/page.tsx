import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BetPlatformCaseStudy from "@/components/case-studies/BetPlatform";
import AemEdsCaseStudy from "@/components/case-studies/AemEds";

type CaseStudy = {
  title: string;
  description: string;
  ogImage: string;
  component: React.ComponentType;
};

const caseStudies: Record<string, CaseStudy> = {
  betplatform: {
    title: "BetPlatform",
    description:
      "Enterprise betting platform: JWT auth with refresh token rotation, geoblocking via Cloudflare Workers, real-time WebSockets, PostgreSQL and Redis.",
    ogImage: "/og-image-betplatform.png",
    component: BetPlatformCaseStudy,
  },
  "aem-eds": {
    title: "Enterprise Pharma Web Platform",
    description:
      "Zero Trust security architecture, component acceleration framework, and multi-language governance for a European pharma corporate client on AEM Edge Delivery Services.",
    ogImage: "/og-image-aem-eds.png",
    component: AemEdsCaseStudy,
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies[params.slug];
  if (!study) return {};

  return {
    title: `${study.title} — Roberto Longo`,
    description: study.description,
    openGraph: {
      title: `${study.title} — Roberto Longo`,
      description: study.description,
      images: [{ url: study.ogImage, width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — Roberto Longo`,
      description: study.description,
      images: [study.ogImage],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug];
  if (!study) notFound();

  const { component: CaseStudy } = study;

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link
        href="/#projects"
        className="font-dm-mono text-xs text-muted uppercase tracking-widest hover:text-foreground transition-colors mb-12 inline-block"
      >
        ← Back to Projects
      </Link>
      <CaseStudy />
    </main>
  );
}
