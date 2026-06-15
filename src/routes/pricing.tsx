import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Section, CTAStrip } from "../components/site/Section";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — AYMO Digital | Authority Tiers" },
      { name: "description", content: "Transparent monthly retainers for personal brand and authority building. Starter, Growth and Elite tiers." },
      { property: "og:title", content: "AYMO Digital Pricing" },
      { property: "og:description", content: "Three tiers. Done-for-you. Cancel anytime." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Starter Authority", price: "$497", period: "/month", desc: "LinkedIn-first foundation.", features: ["LinkedIn strategy & posts", "Profile optimization", "Basic content production", "Monthly analytics review"], highlight: false },
  { name: "Growth Authority", price: "$1,497", period: "/month", desc: "Multi-platform authority engine.", features: ["LinkedIn + YouTube", "Shorts engine", "Weekly editorial syncs", "Lead-gen frameworks", "Repurposing system"], highlight: true },
  { name: "Elite Authority", price: "$2,997", period: "/month", desc: "Full done-for-you brand operation.", features: ["YouTube + LinkedIn + Podcast", "Dedicated growth team", "Priority production", "Quarterly brand strategy", "Founder visual identity"], highlight: false },
];

const faqs = [
  { q: "How long is the engagement?", a: "Month-to-month after a 90-day foundation period." },
  { q: "Do you guarantee growth?", a: "We guarantee the system and the work — we cannot guarantee outcomes, but we publish our results openly." },
  { q: "Do I need to film a lot?", a: "Most clients film 2–4 hours per month. We handle everything else." },
];

function PricingPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-10 md:pt-28 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Pricing</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
          Choose Your <span className="text-gold-gradient">Authority Tier</span>
        </h1>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-8 ${
                t.highlight
                  ? "bg-gradient-to-br from-primary/15 via-card to-card border border-primary/50 shadow-[0_20px_80px_-30px_var(--gold)]"
                  : "border border-border/70 bg-card/60"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h2 className="text-lg font-semibold">{t.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border hover:border-primary/50"
                }`}
              >
                Book Strategy Call
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title={<>Common <span className="text-gold-gradient">Questions</span></>}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border/70 bg-card/60 p-6">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
