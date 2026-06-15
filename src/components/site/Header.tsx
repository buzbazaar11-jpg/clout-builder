import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-3 md:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/85 px-4 py-2.5 backdrop-blur-xl transition-shadow ${
          scrolled ? "shadow-[0_15px_50px_rgba(15,50,70,0.10)]" : "shadow-[0_10px_40px_rgba(15,50,70,0.06)]"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 pl-2 font-display text-base font-bold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.68_0.13_210)] text-white shadow-md">
            <Sparkles size={16} />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-foreground">AYMO</span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground">DIGITAL</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-[oklch(0.68_0.13_210)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_oklch(0.68_0.13_210)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Book a Call
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-2 mx-auto max-w-6xl rounded-3xl border border-border bg-white/95 backdrop-blur shadow-xl">
          <div className="p-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-foreground/80 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-primary to-[oklch(0.68_0.13_210)] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
