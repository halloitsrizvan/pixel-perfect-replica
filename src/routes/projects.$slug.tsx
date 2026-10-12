import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { waLink } from "@/data/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileWhatsApp } from "@/components/site/MobileWhatsApp";
import { useRevealAll } from "@/components/site/motion";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData && getProject(loaderData.slug);
    if (!p)
      return {
        meta: [{ title: "Project not found — Varatect" }, { name: "robots", content: "noindex" }],
      };
    const t = `${p.title} — ${p.category}, ${p.location} | Varatect`;
    return {
      meta: [
        { title: t },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: t },
        { property: "og:description", content: p.shortDescription },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const p = getProject(slug)!;
  const idx = projects.findIndex((x) => x.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const [lightbox, setLightbox] = useState<number | null>(null);
  useRevealAll();

  useEffect(() => {
    if (lightbox === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((l) => (l! + 1) % p.gallery.length);
      if (e.key === "ArrowLeft") setLightbox((l) => (l! - 1 + p.gallery.length) % p.gallery.length);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [lightbox, p.gallery.length]);

  const details = [
    ["Location", p.location],
    ["Type", p.category],
    ["Status", p.status ?? "Not supplied"],
  ];

  return (
    <>
      <Header />
      <main id="main">
        <section className="section-forest relative flex min-h-[85svh] flex-col overflow-hidden">
          <img
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.w}
            height={p.image.h}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="relative mx-auto mt-auto w-full max-w-[1440px] px-5 pb-14 pt-32 md:px-10">
            <Link
              to="/"
              hash="projects"
              className="eyebrow inline-flex min-h-11 items-center gap-2 text-on-forest-muted hover:text-on-forest"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>
            <p className="eyebrow mt-8 text-mint">
              {p.category} · {p.location}
            </p>
            <h1 className="display-xl mt-4">{p.title}</h1>
            {p.isConceptImagery && (
              <p className="mt-6 text-xs text-on-forest-muted">
                Illustrative image, not a photograph of this project.
              </p>
            )}
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <dl className="grid border-y border-rule sm:grid-cols-3">
              {details.map(([k, v]) => (
                <div
                  key={k}
                  className="border-rule py-6 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                >
                  <dt className="eyebrow text-muted-foreground">{k}</dt>
                  <dd className="mt-2 font-display text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-20 grid gap-12 md:grid-cols-12">
              <h2 className="display-lg fade md:col-span-5">{p.conceptHeadline}</h2>
              <div className="grid gap-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 lg:columns-1">
                {p.fullDescription.map((t, i) => (
                  <p key={i} className="fade max-w-prose">
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {p.gallery.length > 0 && (
          <section className="pb-20 md:pb-32">
            <div className="mx-auto grid max-w-[1440px] gap-6 px-5 md:grid-cols-2 md:px-10">
              {p.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="group reveal block aspect-[4/3] overflow-hidden bg-forest-900"
                  aria-label={`Open image: ${g.alt}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className="zoom-img h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            {p.isConceptImagery && (
              <p className="mx-auto mt-4 max-w-[1440px] px-5 text-xs text-muted-foreground md:px-10">
                Illustrative imagery — real project photographs to follow.
              </p>
            )}
          </section>
        )}

        <section className="section-forest py-24 md:py-32">
          <div className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
            <p className="font-display text-3xl italic leading-snug md:text-5xl">{p.closing}</p>
            <a
              href={waLink(
                `Hello Varatect, I saw the ${p.title} project and would like to discuss a project.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="group eyebrow mt-12 inline-flex min-h-11 items-center gap-3 bg-ivory px-7 py-5 text-forest-950"
            >
              Discuss a project like {p.title} <span className="arrow-shift">→</span>
            </a>
          </div>
        </section>

        <nav
          aria-label="More projects"
          className="mx-auto grid max-w-[1440px] gap-px border-t border-rule md:grid-cols-2"
        >
          {[
            ["Previous", prev],
            ["Next", next],
          ].map(([label, x]) => {
            const proj = x as typeof p;
            return (
              <Link
                key={label as string}
                to="/projects/$slug"
                params={{ slug: proj.slug }}
                className="group px-5 py-12 md:px-10"
              >
                <span className="eyebrow text-muted-foreground">{label as string}</span>
                <span className="mt-3 block font-display text-4xl">
                  {proj.title} <span className="arrow-shift inline-block">→</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </main>
      <Footer />
      <MobileWhatsApp
        text={`Hello Varatect, I saw the ${p.title} project and would like to discuss a project.`}
      />

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="section-forest fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            autoFocus
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center"
            aria-label="Close"
          >
            <X />
          </button>
          <img
            src={p.gallery[lightbox].src}
            alt={p.gallery[lightbox].alt}
            className="max-h-[85vh] max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
}
