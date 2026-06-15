import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, CTAStrip } from "../components/site/Section";
import aboutBg from "../assets/about-bg.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AYMO Digital | Authority Building Agency" },
      { name: "description", content: "AYMO Digital is a personal brand growth agency helping founders and CEOs become industry authorities." },
      { property: "og:title", content: "About AYMO Digital" },
      { property: "og:description", content: "We build authorities, not influencers." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <img src={aboutBg} alt="" width={1280} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="container-px mx-auto max-w-5xl relative py-24 md:py-36 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">About</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
            We Build <span className="text-gold-gradient">Authorities</span>,<br /> Not Influencers.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground text-lg">
            AYMO Digital is a personal brand growth agency helping professionals become
            recognized leaders in their industry — through systems, not hustle.
          </p>
        </div>
      </section>

      <Section eyebrow="Mission" title={<>Turn expertise into <span className="text-gold-gradient">influence and revenue</span>.</>}>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Most experts hide behind their work. We give them a stage, a story, and a system —
          so the right clients, partners, and opportunities find them.
        </p>
      </Section>

      <Section eyebrow="Vision" title={<>Help <span className="text-gold-gradient">10,000 founders</span> become industry authorities.</>}>
        <p className="text-muted-foreground text-lg max-w-3xl">
          A world where credibility is engineered, not gambled. Where the smartest operators
          are also the most visible.
        </p>
      </Section>

      <Section eyebrow="Our Story" title={<>From Frustration To <span className="text-gold-gradient">Framework</span></>}>
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-muted-foreground leading-relaxed">
            AYMO began with a simple observation: brilliant founders were losing to louder
            competitors. Not because their work was weaker — but because no one knew about it.
            We started AYMO to fix that gap with a repeatable system: positioning, production,
            and distribution under one roof.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we partner with founders and CEOs across the USA, UK, Canada and UAE —
            running their YouTube, LinkedIn, podcast and short-form engines so they can stay
            focused on building their business while their authority compounds in the background.
          </p>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
