import { createFileRoute } from "@tanstack/react-router";
import { Youtube, Linkedin, Sparkles, Repeat2, CheckCircle2 } from "lucide-react";
import { Section, CTAStrip } from "../components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AYMO Digital | Authority Content Systems" },
      { name: "description", content: "YouTube growth, LinkedIn authority, personal branding and short-form content systems for founders and CEOs." },
      { property: "og:title", content: "AYMO Digital Services" },
      { property: "og:description", content: "Everything you need to build a personal brand — done for you." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Youtube,
    title: "YouTube Growth",
    bullets: ["Channel & content strategy", "Premium editing & thumbnails", "Upload & SEO optimization", "Analytics & iteration"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Growth",
    bullets: ["Profile & banner optimization", "Daily post production", "Comment engagement strategy", "Inbound lead generation"],
  },
  {
    icon: Sparkles,
    title: "Personal Branding",
    bullets: ["Niche & positioning", "Narrative & messaging", "Authority signals", "Founder visual identity"],
  },
  {
    icon: Repeat2,
    title: "Shorts, Reels & Repurposing",
    bullets: ["Viral short-form scripting", "Multi-platform publishing", "1 → 20 asset repurposing", "Cross-channel funnel design"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-10 md:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Services</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
          Everything You Need To <span className="text-gold-gradient">Build A Personal Brand</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          A modular system — pick the lane that fits your stage or run the full engine.
        </p>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, bullets }) => (
            <div key={title} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <Icon size={22} />
                </div>
                <h2 className="text-2xl font-semibold">{title}</h2>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
