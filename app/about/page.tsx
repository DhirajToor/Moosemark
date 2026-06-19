import type { Metadata } from "next";

const workshop = "/assets/workshop.jpg";
const detail = "/assets/detail-handle.jpg";

export const metadata: Metadata = {
  title: "The Atelier — Moosemark Cabinetry",
  description: "Six cabinetmakers in a KItchner workshop, making rooms the slow way since 2017.",
  openGraph: {
    title: "The Atelier — Moosemark Cabinetry",
    description: "A small KItchner atelier of cabinetmakers.",
    images: [workshop],
  },
};

export default function About() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">The atelier</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
              We started with one bench, a borrowed plane, and a very patient first client.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground">
             Moosemark Cabinetry was founded in 2008 by Marlow Hollanden and Iris Vale, who had
              trained together at Parnham House and wanted to make furniture the way their teachers
              had: by hand, in solid timber, without compromise.
            </p>
            <p className="mt-4 text-muted-foreground">
              Eighteen years on, we are still in the same converted granary outside Lewes, with a
              team of six and a waiting list of about nine months.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={workshop} alt="A cabinetmaker at work in the Lewes workshop" loading="lazy" className="aspect-[14/9] w-full object-cover" />
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="eyebrow">Convictions</p>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {[
              ["Solid over veneer", "Real timber moves, marks, mellows. We think that is a feature, not a fault."],
              ["Hand-cut joinery", "Mortise and tenon, dovetailed drawer boxes, mitred returns. The joinery is the structure."],
              ["English where we can", "Oak from Sussex coppices, ash from the Wye Valley, sycamore from the Downs."],
              ["Brass, unlacquered", "Made in Birmingham, allowed to patina. No two pulls will age the same way."],
              ["One client at a time", "Twelve commissions a year. Your project is on a single bench, not lost in a queue."],
              ["A guarantee for life", "We come back at one year and at five. We will be here when you need us."],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="font-display text-2xl">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={detail} alt="Brass pull detail" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div>
            <p className="eyebrow">Press &amp; recognition</p>
            <ul className="mt-6 divide-y divide-border">
              {[
                ["House & Garden", "100 Leading Interior Designers & Makers, 2025"],
                ["The World of Interiors", "Featured project — June 2024"],
                ["Country Life", "Best of British Craftsmanship, 2023"],
                ["The Wood Awards", "Shortlist, Bespoke Furniture, 2022"],
              ].map(([k, v]) => (
                <li key={k} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                  <span className="font-display text-lg">{k}</span>
                  <span className="text-sm text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
