import Link from "next/link";
import type { Metadata } from "next";

const hero = "/assets/hero.jpeg";
const wardrobe = "/assets/wardrobe.jpeg";
const library = "/assets/library.jpeg";
const vanity = "/assets/vanity.jpeg";
const detail = "/assets/handle.jpeg";

export const metadata: Metadata = {
  title: "Portfolio — Moosemark Cabinetry",
  description: "Selected kitchens, wardrobes, libraries and millwork commissions from the Moosemark Cabinetry workshop.",
  openGraph: {
    title: "Portfolio —Moosemark Cabinetry",
    description: "Selected commissions from a Sussex cabinetmaking atelier.",
    images: [hero],
  },
};

const projects = [
  { src: hero, t: " ", year: "2025", loc: " ", tag: " ", w: "lg:col-span-8" },
  { src: detail, t: " ", year: "2025", loc: " ", tag: " ", w: "lg:col-span-4" },
  { src: library, t: " ", year: "2024", loc: " ", tag: " ", w: "lg:col-span-5" },
  { src: wardrobe, t: " ", year: "2024", loc: " ", tag: " ", w: "lg:col-span-7" },
  { src: vanity, t: " ", year: "2024", loc: " ", tag: " ", w: "lg:col-span-6" },
  { src: hero, t: " ", year: "2023", loc: " ", tag: " ", w: "lg:col-span-6" },
];

export default function Portfolio() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
            A ledger of rooms we have made.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Twelve commissions a year, each documented at the moment of handover.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {projects.map((p, i) => (
            <figure key={i} className={`${p.w} col-span-12`}>
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="font-display text-xl">{p.t}</p>
                  <p className="text-sm text-muted-foreground">{p.loc} · {p.year}</p>
                </div>
                <span className="eyebrow">{p.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10 text-center">
          <p className="font-display text-2xl sm:text-3xl">Commissioning for autumn 2026.</p>
          <Link href="/contact" className="mt-5 inline-block border-b border-foreground/60 pb-0.5 text-sm">
            Begin an enquiry →
          </Link>
        </div>
      </section>
    </div>
  );
}
