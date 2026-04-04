import Link from "next/link";
import { notFound } from "next/navigation";
import BetPlatformCaseStudy from "@/components/case-studies/BetPlatform";

const caseStudies: Record<string, { title: string; component: React.ComponentType }> = {
  betplatform: { title: "BetPlatform", component: BetPlatformCaseStudy },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
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
        Back to Projects
      </Link>
      <CaseStudy />
    </main>
  );
}
