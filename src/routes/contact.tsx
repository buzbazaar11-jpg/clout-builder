import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Section } from "../components/site/Section";
import { Toaster } from "../components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AYMO Digital | Book Your Strategy Call" },
      { name: "description", content: "Tell us about your brand and book a strategy call with the AYMO Digital team." },
      { property: "og:title", content: "Contact AYMO Digital" },
      { property: "og:description", content: "Let's build your authority." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  business: z.string().trim().min(2, "Tell us your business type").max(120),
  platform: z.string().trim().min(2, "Which platform?").max(120),
  goal: z.string().trim().min(10, "Add a bit more detail").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Got it. We'll be in touch within 24 hours.");
  }

  return (
    <>
      <Toaster />
      <section className="container-px mx-auto max-w-7xl pt-20 pb-10 md:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
          Let's Build Your <span className="text-gold-gradient">Authority</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Tell us about your brand and goals. We respond within one business day.
        </p>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <form onSubmit={onSubmit} className="glass rounded-3xl p-8 space-y-5">
            <Field label="Full Name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            <Field label="Business Type" name="business" placeholder="SaaS founder, Consultant, etc." />
            <Field label="Current Platform Focus" name="platform" placeholder="LinkedIn, YouTube, both…" />
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Primary Goal</label>
              <textarea
                name="goal"
                rows={4}
                maxLength={1000}
                placeholder="Tell us what authority would unlock for you…"
                className="mt-2 w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-primary/60"
              />
            </div>
            <button
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--gold)] transition hover:brightness-110 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Book Strategy Call"}
            </button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border/70 bg-card/60 p-7">
              <h3 className="font-semibold">Direct email</h3>
              <a href="mailto:hello@aymo.digital" className="mt-2 inline-block text-gold-gradient font-medium">
                hello@aymo.digital
              </a>
            </div>
            <div className="rounded-3xl border border-border/70 bg-card/60 p-7">
              <h3 className="font-semibold">Where we serve</h3>
              <p className="mt-2 text-sm text-muted-foreground">USA · UK · Canada · UAE — and select global founders.</p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-card/60 p-7">
              <h3 className="font-semibold">Response time</h3>
              <p className="mt-2 text-sm text-muted-foreground">Within 24 hours, Monday–Friday.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-primary/60"
      />
    </div>
  );
}
