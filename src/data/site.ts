export const CONFIG = {
  mode: "concept_demo" as "concept_demo" | "production",
  preparedBy: "DepoX Studio",
};

const waText =
  "Hello Varatect, I would like to discuss an architecture or interior design project.";

export const site = {
  name: "Varatect Architecture Studio",
  short: "Varatect",
  disciplines: "Architecture · Interior · Landscape",
  presence: "Kerala · Dubai",
  lead: "Architect Roshan TS",
  about:
    "Varatect Concepts is an innovative architectural and design firm specializing in architecture, interior design, planning, and visualization services. The firm focuses on creating functional, sustainable, and aesthetically refined spaces that blend modern design with practical solutions. With a commitment to creativity, quality, and client satisfaction, Varatect Concepts delivers residential, commercial, and hospitality projects tailored to unique client visions.",
  address: "Varatect, Thuthiyil House, Malayalapuzha, Pathanamthitta, Keralam 689666",
  phone: { label: "+91 92072 47305", href: "tel:+919207247305" },
  whatsapp: { label: "+91 95449 80118", number: "919544980118" },
  instagram: {
    label: "@varatect",
    href: "https://www.instagram.com/varatect/",
    followers: "13K+ on Instagram",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Thuthiyil House, Malayalapuzha, Pathanamthitta, Kerala 689666"),
  nav: [
    { label: "Projects", hash: "projects" },
    { label: "Studio", hash: "studio" },
    { label: "Services", hash: "services" },
    { label: "Process", hash: "process" },
    { label: "Contact", hash: "contact" },
  ],
};

export function waLink(text: string = waText) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}
