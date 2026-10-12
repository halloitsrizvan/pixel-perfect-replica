import { useState } from "react";
import { waLink } from "@/data/site";

const types = ["Architecture", "Interior", "Landscape", "Renovation"];

export function EnquiryComposer() {
  const [f, setF] = useState({ name: "", type: "Architecture", location: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello Varatect,",
      f.name && `My name is ${f.name}.`,
      `Project type: ${f.type}`,
      f.location && `Location: ${f.location}`,
      f.message,
    ].filter(Boolean).join("\n");
    window.open(waLink(text), "_blank", "noopener");
  };

  const field = "w-full border-0 border-b border-on-forest/30 bg-transparent py-3 text-on-forest placeholder:text-on-forest-muted focus:border-mint focus:outline-none";
  return (
    <form onSubmit={submit} className="grid gap-6" aria-label="Enquiry composer">
      <label className="grid gap-1"><span className="eyebrow text-on-forest-muted">Name</span>
        <input className={field} value={f.name} onChange={set("name")} autoComplete="name" /></label>
      <label className="grid gap-1"><span className="eyebrow text-on-forest-muted">Project type</span>
        <select className={`${field} [&>option]:text-forest-950`} value={f.type} onChange={set("type")}>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select></label>
      <label className="grid gap-1"><span className="eyebrow text-on-forest-muted">Location</span>
        <input className={field} value={f.location} onChange={set("location")} /></label>
      <label className="grid gap-1"><span className="eyebrow text-on-forest-muted">Message</span>
        <textarea rows={3} className={field} value={f.message} onChange={set("message")} /></label>
      <div>
        <button type="submit" className="group eyebrow inline-flex min-h-11 items-center gap-3 bg-ivory px-6 py-4 text-forest-950">
          Compose on WhatsApp <span className="arrow-shift">→</span>
        </button>
        <p className="mt-3 text-xs text-on-forest-muted">Opens WhatsApp with your message. Nothing is sent from this site.</p>
      </div>
    </form>
  );
}
