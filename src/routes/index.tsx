import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import landscape from "@/assets/landscape.jpg";
import canopy from "@/assets/canopy.jpg";
import { site, waLink, CONFIG } from "@/data/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { process } from "@/data/process";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EnquiryComposer } from "@/components/site/EnquiryComposer";
import { MobileWhatsApp } from "@/components/site/MobileWhatsApp";
import { GrowthLine, useRevealAll } from "@/components/site/motion";

const title = "Varatect Architecture Studio — Architects in Pathanamthitta, Kerala";
const desc = `Architecture, interior and landscape design in Kerala and Dubai, led by Architect Roshan TS.${CONFIG.mode === "concept_demo" ? " Concept preview, not the official website." : ""}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
    ],
  }),
  component: Home,
});

// Layout of the works grid: [col span, aspect]
const layout = [
  "md:col-span-8 aspect-[4/3]",
  "md:col-span-4 aspect-[3/4] md:mt-32",
  "md:col-span-10 md:col-start-2 aspect-[16/9]",
];

function Home() {
  useRevealAll();
  return (
    <>
      <Header />
      <main id="main">
        {/* HERO */}
        <section className="section-forest relative flex min-h-[100svh] flex-col overflow-hidden">
          <img
            src={hero}
            alt="Illustrative contemporary tropical house among palms at dusk"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="relative mx-auto mt-auto w-full max-w-[1440px] px-5 pb-14 pt-32 md:px-10 md:pb-20">
            <p className="eyebrow fade text-mint">Architecture · Interior · Landscape</p>
            {/* PROPOSED COPY */}
            <h1 className="display-xl fade mt-6 max-w-5xl">
              Architecture that grows
              <br className="hidden sm:block" /> with its surroundings.
            </h1>
            <div className="mt-10 flex flex-col gap-8 border-t border-on-forest/20 pt-8 md:flex-row md:items-end md:justify-between">
              {/* PROPOSED COPY */}
              <p className="max-w-md text-lg text-on-forest-muted">
                Thoughtful spaces shaped by people, place and nature.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group eyebrow inline-flex min-h-11 items-center gap-3 bg-ivory px-6 py-4 text-forest-950"
                >
                  Explore Projects <span className="arrow-shift">→</span>
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow inline-flex min-h-11 items-center border border-on-forest/60 px-6 py-4 hover:bg-on-forest/10"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
            <div className="mt-8 flex justify-between text-on-forest-muted">
              <span className="eyebrow">{site.presence}</span>
              <span className="eyebrow hidden sm:inline">Scroll ↓</span>
            </div>
          </div>
        </section>

        {/* STUDIO */}
        <section id="studio" className="grain relative py-24 md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:grid-cols-12 md:px-10">
            <div className="md:col-span-6 lg:col-span-5">
              <p className="eyebrow text-leaf">The Studio</p>
              {/* PROPOSED COPY */}
              <h2 className="display-lg fade mt-6">
                Spaces designed
                <br />
                around life.
              </h2>
              <blockquote className="fade mt-10 border-l border-leaf pl-6 font-display text-2xl italic leading-snug md:text-3xl">
                {/* PROPOSED COPY */}
                “We begin with what is already there: the land, the light, the trees, and the people
                who will live with it.”
              </blockquote>
              <p className="mt-10 max-w-prose leading-relaxed text-muted-foreground">
                {site.about}
              </p>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-rule pt-6">
                <span className="eyebrow">Led by {site.lead}</span>
                <span className="eyebrow text-muted-foreground">{site.presence}</span>
              </div>
            </div>
            <div className="relative md:col-span-6 lg:col-span-6 lg:col-start-7">
              <GrowthLine
                className="pointer-events-none absolute -left-8 top-0 hidden h-full w-16 text-leaf md:block"
                d="M50 0 C 10 80, 90 140, 50 220 S 20 340, 50 400"
              />
              <div className="reveal aspect-[4/5] overflow-hidden">
                <img
                  src={studio}
                  alt="Illustrative interior with timber ceiling opening to a planted courtyard"
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Illustrative image</p>
            </div>
          </div>
        </section>

        {/* SELECTED WORKS */}
        <section id="projects" className="border-t border-rule py-24 md:py-36">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-leaf">Selected Works</p>
                <h2 className="display-lg fade mt-6">
                  Architecture,
                  <br />
                  shaped by context.
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Imagery shown is illustrative concept photography, not photographs of Varatect
                projects.
              </p>
            </div>
            <div className="mt-16 grid gap-x-8 gap-y-20 md:grid-cols-12">
              {projects.map((p, i) => {
                const [span, aspect] = [
                  layout[i].split(" aspect")[0],
                  "aspect" + layout[i].split(" aspect")[1],
                ];
                return (
                  <Link
                    key={p.slug}
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className={`group block ${span}`}
                  >
                    <div className={`reveal overflow-hidden bg-forest-900 ${aspect}`}>
                      <img
                        src={p.image.src}
                        alt={p.image.alt}
                        width={p.image.w}
                        height={p.image.h}
                        loading="lazy"
                        className="zoom-img h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline gap-5 border-t border-rule pt-4">
                      <span className="eyebrow text-leaf">0{i + 1}</span>
                      <div className="flex-1">
                        <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
                        <p className="eyebrow mt-2 text-muted-foreground">
                          {p.category} · {p.location}
                        </p>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                          {p.shortDescription}
                        </p>
                      </div>
                      <ArrowUpRight className="arrow-shift h-5 w-5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-forest relative overflow-hidden py-24 md:py-36">
          <img
            src={canopy}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
            <p className="eyebrow text-mint">What We Do</p>
            {/* PROPOSED COPY */}
            <h2 className="display-lg fade mt-6 max-w-3xl">
              Considered design, from ground to detail.
            </h2>
            <ul className="mt-16 border-t border-on-forest/20">
              {services.map((s, i) => (
                <li
                  key={s.title}
                  className="group grid gap-4 border-b border-on-forest/20 py-8 md:grid-cols-12 md:items-baseline"
                >
                  <span className="eyebrow text-mint md:col-span-1">0{i + 1}</span>
                  <h3 className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="max-w-md leading-relaxed text-on-forest-muted transition-opacity duration-500 md:col-span-6 md:opacity-50 md:group-hover:opacity-100">
                    {s.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PHILOSOPHY / PROCESS */}
        <section id="process" className="py-24 md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:grid-cols-12 md:px-10">
            <div className="md:col-span-7">
              <div className="reveal aspect-[16/11] overflow-hidden">
                <img
                  src={landscape}
                  alt="Illustrative aerial view of a tropical site with a clearing and stone path"
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Illustrative image</p>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pt-24">
              <p className="eyebrow text-leaf">Philosophy</p>
              {/* PROPOSED COPY */}
              <h2 className="display-lg fade mt-6">Let the landscape lead.</h2>
              <p className="mt-8 leading-relaxed text-muted-foreground">
                Across our projects, the site comes first. A tree is kept, a view is framed, a roof
                follows tradition. The architecture emerges from what is already there.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-24 max-w-[1100px] px-5 md:px-10">
            <p className="eyebrow mb-10 text-muted-foreground">A site-first approach</p>
            <ol className="relative">
              <GrowthLine
                className="absolute left-[7px] top-0 h-full w-px text-leaf"
                d="M50 0 L50 400"
              />
              {process.map((s, i) => (
                <li
                  key={s.title}
                  className="fade relative grid gap-2 pb-12 pl-12 md:grid-cols-12 md:gap-8"
                >
                  <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border border-leaf bg-background" />
                  <span className="eyebrow text-leaf md:col-span-1">0{i + 1}</span>
                  <h3 className="font-display text-3xl md:col-span-5">{s.title}</h3>
                  <p className="text-muted-foreground md:col-span-6">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* VOICES */}
        <section className="grain border-t border-rule py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <p className="eyebrow text-leaf">Voices</p>
            <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
              {reviews.map((r) => (
                <figure key={r.name} className="fade border-t border-forest-950 pt-6">
                  <blockquote className="font-display text-2xl leading-snug">“{r.text}”</blockquote>
                  <figcaption className="mt-6 flex justify-between">
                    <span className="eyebrow">{r.name}</span>
                    <span className="eyebrow text-muted-foreground">Google Review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-forest py-24 md:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:grid-cols-12 md:px-10">
            <div className="md:col-span-6">
              <p className="eyebrow text-mint">Contact</p>
              <h2 className="display-lg fade mt-6">Have a space in mind?</h2>
              <p className="mt-6 max-w-md text-lg text-on-forest-muted">
                Let's start a conversation about your next project.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="group eyebrow mt-10 inline-flex min-h-11 items-center gap-3 bg-ivory px-7 py-5 text-forest-950"
              >
                Message on WhatsApp <span className="arrow-shift">→</span>
              </a>
              <ul className="mt-12 grid gap-5 border-t border-on-forest/20 pt-8 text-on-forest-muted">
                <li>
                  <a
                    href={site.phone.href}
                    className="flex min-h-11 items-center gap-3 hover:text-on-forest"
                  >
                    <Phone className="h-4 w-4" />
                    {site.phone.label}
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-11 items-center gap-3 hover:text-on-forest"
                  >
                    <Instagram className="h-4 w-4" />
                    {site.instagram.label} · {site.instagram.followers}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0" />
                  <span>
                    {site.address}
                    <br />
                    <a
                      href={site.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-mint underline-offset-4 hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </span>
                </li>
                <li className="eyebrow">{site.presence}</li>
              </ul>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="eyebrow mb-8 text-on-forest-muted">Enquiry composer</p>
              <EnquiryComposer />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileWhatsApp />
    </>
  );
}
