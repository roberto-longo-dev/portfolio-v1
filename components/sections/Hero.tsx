"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pb-4">
      <p className="font-dm-mono text-xs text-muted uppercase tracking-widest mb-8">
        Available for opportunities
      </p>

      <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.08] mb-6">
        Roberto Longo
      </h1>

      <p className="text-lg text-muted font-medium mb-3">
        Senior Web Engineer · Enterprise Systems &amp; Modern Stack
      </p>

      <p className="text-base text-muted max-w-xl leading-relaxed mb-12">
          Dev lead on two major enterprise projects. Full-stack background across content platforms, edge infrastructure, and modern web delivery.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => scrollTo("projects")}
          className="px-5 py-2.5 bg-accent text-background text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:border-muted transition-colors"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}
