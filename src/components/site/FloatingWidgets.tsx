import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "923001234567"; // International format, no + or spaces
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi AYMO Digital! I'd like to know more about your services."
);

export function FloatingWidgets() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="animate-fade-in w-[260px] rounded-2xl border border-border bg-white p-4 shadow-[0_20px_60px_-15px_rgba(15,50,70,0.25)]">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-white">
              <MessageCircle size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">AYMO Digital</div>
              <div className="text-[11px] text-emerald-600">● Online now</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Hi there 👋 How can we help you scale your business today?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-600"
          >
            <MessageCircle size={14} /> Chat on WhatsApp
          </a>
          <a
            href="tel:+923001234567"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2.5 text-xs font-semibold text-foreground transition hover:bg-secondary"
          >
            <Phone size={14} /> Call us
          </a>
        </div>
      )}

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-foreground shadow-lg transition hover:-translate-y-0.5 hover:border-primary/40"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with us on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_15px_40px_-10px_rgba(16,185,129,0.6)] transition hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-30" />
        <MessageCircle size={24} className="relative" />
      </button>
    </div>
  );
}
