import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-white/60">
      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.68_0.13_210)] text-white shadow-md">
              <Sparkles size={16} />
            </span>
            <span>AYMO <span className="text-muted-foreground text-xs tracking-[0.3em]">DIGITAL</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            We help businesses grow faster through AI automation, content systems and
            performance marketing — done for you, end to end.
          </p>
          <a
            href="mailto:hello@aymo.digital"
            className="mt-4 inline-block text-sm font-semibold text-primary"
          >
            hello@aymo.digital
          </a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-foreground/80 hover:text-primary">About</Link></li>
            <li><Link to="/services" className="text-foreground/80 hover:text-primary">Services</Link></li>
            <li><Link to="/case-studies" className="text-foreground/80 hover:text-primary">Case Studies</Link></li>
            <li><Link to="/blog" className="text-foreground/80 hover:text-primary">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get Started</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/pricing" className="text-foreground/80 hover:text-primary">Pricing</Link></li>
            <li><Link to="/industries" className="text-foreground/80 hover:text-primary">Industries</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AYMO Digital. All rights reserved.</p>
          <p>Serving clients in USA · UK · UAE · Saudi Arabia · Canada</p>
        </div>
      </div>
    </footer>
  );
}
