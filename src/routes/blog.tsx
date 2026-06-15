import { createFileRoute } from "@tanstack/react-router";
import { Section, CTAStrip } from "../components/site/Section";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AYMO Digital | Personal Brand & Authority Insights" },
      { name: "description", content: "Personal branding, YouTube growth, LinkedIn strategy and authority building — playbooks from the AYMO team." },
      { property: "og:title", content: "AYMO Digital Blog" },
      { property: "og:description", content: "Playbooks for founders building authority." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = ["Personal Branding", "YouTube Growth", "LinkedIn Strategy", "Authority Building"];

const posts = [
  { title: "The Authority Flywheel: Why Founders Win With Content", cat: "Authority Building", date: "Jun 2026", read: "8 min" },
  { title: "YouTube For CEOs: A 90-Day Foundation Plan", cat: "YouTube Growth", date: "Jun 2026", read: "11 min" },
  { title: "LinkedIn Posts That Generate Inbound Calls", cat: "LinkedIn Strategy", date: "May 2026", read: "7 min" },
  { title: "Niche Like A Specialist, Speak Like A Generalist", cat: "Personal Branding", date: "May 2026", read: "6 min" },
];

function BlogPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-10 md:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Blog</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
          Playbooks For Building <span className="text-gold-gradient">Authority</span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-border/70 bg-secondary/40 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="group glass rounded-3xl p-7 transition hover:-translate-y-1 hover:border-primary/50">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-primary">{p.cat}</span>
                <span>·</span>
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.read} read</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-snug">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A breakdown of the systems, frameworks and tactics we use with AYMO clients to
                turn expertise into measurable authority.
              </p>
              <div className="mt-6 text-sm text-primary opacity-80 group-hover:opacity-100">Read article →</div>
            </article>
          ))}
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
