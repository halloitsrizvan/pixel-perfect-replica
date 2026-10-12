import { Link } from "@tanstack/react-router";
import { CONFIG, site, waLink } from "@/data/site";
import { Wordmark } from "./Header";

export function Footer() {
  return (
    <footer className="section-forest pb-24 pt-16 md:pb-10">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="eyebrow mt-5 text-on-forest-muted">{site.disciplines}</p>
          <p className="eyebrow mt-2 text-on-forest-muted">{site.presence}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-3 md:col-span-3">
          {site.nav.map((n) => (
            <Link key={n.hash} to="/" hash={n.hash} className="text-sm text-on-forest-muted hover:text-on-forest">{n.label}</Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-sm text-on-forest-muted md:col-span-4">
          <a href={site.phone.href} className="hover:text-on-forest">{site.phone.label}</a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-on-forest">WhatsApp {site.whatsapp.label}</a>
          <a href={site.instagram.href} target="_blank" rel="noreferrer" className="hover:text-on-forest">Instagram {site.instagram.label}</a>
          <address className="not-italic leading-relaxed">{site.address}</address>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1440px] flex-col gap-2 border-t border-on-forest/15 px-5 pt-6 text-xs text-on-forest-muted md:flex-row md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} {site.name}</span>
        {CONFIG.mode === "concept_demo" && (
          <span>Concept preview by {CONFIG.preparedBy}, not the official Varatect website.</span>
        )}
      </div>
    </footer>
  );
}
