import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import promoAsset from "@/assets/promo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sankalp365 — Get Your Cricket ID Now" },
      {
        name: "description",
        content:
          "Get your Sankalp365 cricket ID instantly. 10% bonus on new ID, 5% on every deposit, 24x7 instant withdrawal and support on WhatsApp.",
      },
      { property: "og:title", content: "Sankalp365 — Get Your Cricket ID Now" },
      {
        property: "og:description",
        content:
          "Instant cricket ID with 10% welcome bonus, 5% on every deposit and 24x7 WhatsApp support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_NUMBER = "+91 95239 63807";
const WHATSAPP_LINK =
  "https://wa.me/919523963807?text=Hi%2C%20I%20want%20to%20create%20my%20ID";

function trackLead() {
  window.fbq?.("track", "Lead");
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const stats = [
  { value: "10 Lakh+", label: "Active Users" },
  { value: "NO", label: "Documentation" },
  { value: "24x7", label: "Withdrawal" },
  { value: "12+", label: "Years of Trust" },
  { value: "24x7", label: "Customer Care" },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-glow" />

      <div className="relative mx-auto flex w-full max-w-xl flex-col items-center px-5 pb-28 pt-4 text-center">
        <img
          src={logoAsset.url}
          alt="Sankalp365 official logo"
          className="h-40 w-40 -mt-4 rounded-full border-2 border-primary/70 object-cover shadow-gold sm:h-48 sm:w-48"
        />

        <p className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
          <span className="text-foreground">GET YOUR </span>
          <span className="text-gradient-gold">CRICKET ID</span>
          <span className="text-foreground"> NOW</span>
        </p>
        <p className="mt-5 text-lg font-bold text-primary">Click now 👇</p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLead}
          className="btn-whatsapp mt-3 w-full"
        >
          <WhatsAppIcon className="h-6 w-6" />
          WhatsApp now new 🆔
        </a>

        <a
          href="https://sankalp365.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-[1.9rem] py-[0.9rem] text-[1.05rem] font-extrabold uppercase tracking-wide text-primary-foreground shadow-gold transition-transform hover:scale-105"
        >
          Sign up
        </a>

        <img
          src={promoAsset.url}
          alt="Sankalp365 offer: 10% bonus on new ID and 5% on every deposit"
          className="mt-8 w-full rounded-2xl border border-primary/30 shadow-gold"
        />

        <div className="mt-8 grid w-full grid-cols-3 gap-3 sm:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="text-base font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-primary">
          <span className="text-lg tracking-widest">★★★★★</span>
          <span className="text-sm text-muted-foreground">10,000+ Members</span>
        </div>

        <section className="mt-8 w-full rounded-2xl border border-primary/25 bg-card p-6">
          <h2 className="text-lg font-bold uppercase tracking-wide">Need Help?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            WhatsApp support available 24×7 — instant withdrawal, 24 hours service.
          </p>
          <a
             href={WHATSAPP_LINK}
             target="_blank"
             rel="noopener noreferrer"
             onClick={trackLead}
             className="btn-whatsapp mt-5"
          >
            <WhatsAppIcon className="h-6 w-6" />
            {WHATSAPP_NUMBER}
          </a>
        </section>
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackLead}
        aria-label={`Chat on WhatsApp ${WHATSAPP_NUMBER}`}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </main>
  );
}
