import Link from "next/link";
import type { Metadata } from "next";

const hero = "/assets/hero-kitchen.jpg";
const detail = "/assets/detail-handle.jpg";
const wardrobe = "/assets/portfolio-wardrobe.jpg";
const library = "/assets/portfolio-library.jpg";
const vanity = "/assets/portfolio-vanity.jpg";
const workshop = "/assets/workshop.jpg";

export const metadata: Metadata = {
  title: "Moosemark Cabinetry",
  description:
    "A small atelier of cabinetmakers crafting bespoke kitchens, wardrobes, libraries and architectural millwork from solid timber.",
  openGraph: {
    title: "Moosemark Cabinetry",
    description: "Handmade kitchens and millwork from a KItchner workshop.",
    images: [hero],
  },
  twitter: { images: [hero] },
};

export default function Home() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-10 sm:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3 text-xs text-muted-foreground">
            <span className="eyebrow">Vol. XVI · Edition 04</span>
            <span>KItchner, ON — Friday, 19 June 2026</span>
            <span className="eyebrow">A Cabinetmaker&apos;s Journal</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <p className="eyebrow">The Lede — Kitchens</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Rooms built the slow way, by people who still remember how.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              For eighteen years we have made kitchens, libraries and wardrobes from solid oak, ash
              and walnut. Each piece is drawn by hand, joined in our KItchner workshop, and installed
              by the same craftsmen who built it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 text-sm tracking-wide text-background transition-colors hover:bg-walnut"
              >
                Begin an enquiry
              </Link>
              <Link href="/portfolio" className="border-b border-foreground/60 pb-0.5 text-sm tracking-wide hover:border-foreground">
                See the portfolio →
              </Link>
            </div>
          </div>

          <aside className="space-y-5 lg:border-l lg:border-border lg:pl-10">
            <p className="eyebrow">In this issue</p>
            <ul className="divide-y divide-border">
              {[
                ["01", "An English oak kitchen in Alfriston", "Feature"],
                ["02", "On brass, and why it changes", "Notes"],
                ["03", "Fluted wardrobes for a Bloomsbury flat", "Project"],
                ["04", "The case for the unlacquered finish", "Essay"],
              ].map(([n, t, k]) => (
                <li key={n} className="flex items-baseline gap-4 py-4">
                  <span className="font-display text-xl text-clay">{n}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground">{t}</p>
                    <p className="text-xs text-muted-foreground">{k}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero} alt="Bespoke oak kitchen with brass hardware, sunlit" className="aspect-[16/10] w-full object-cover" />
            <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
              <span>The Alfriston kitchen, finished in oil and wax.</span>
              <span>Photograph — Tomas Hewitt</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Feature</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
              A kitchen is not a product. It is a room that has to last.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:columns-2 sm:gap-10 sm:space-y-0">
              <p>We begin every project at the house. We measure, we sit with the light, we listen to how the family lives. The drawings come later — in pencil first, then in pigment, then in plywood mock-ups taped onto the walls.</p>
              <p>Nothing is veneered, nothing is flat-packed, nothing is bought-in from a catalogue and badged as ours. The carcasses are solid pine; the doors are American white oak, English ash or black walnut, jointed with mortise and tenon.</p>
              <p>The hardware is unlacquered brass from a foundry in Birmingham that has been pouring the same patterns since the 1880s. It will dim and burnish with the touch of a hand, which is the point.</p>
              <p>Lead time is between four and seven months. We take on twelve commissions a year, no more, so that every room receives the attention it requires.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={detail} alt="Close detail of a brushed brass cabinet pull on walnut" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <p className="mt-3 text-xs text-muted-foreground">Detail — turned brass pull, walnut door, Lewes, 2025.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Disciplines</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Four things we do well.</h2>
            </div>
            <Link href="/services" className="border-b border-foreground/60 pb-0.5 text-sm hover:border-foreground">All services →</Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Kitchens", "Plate-rack, range, dresser. Designed around how you actually cook."],
              ["Wardrobes", "Fluted, panelled, or flush. Built into the architecture of the room."],
              ["Libraries", "Floor-to-ceiling shelving, ladders, sliding doors, hidden bars."],
              ["Millwork", "Panelling, window seats, vanities, staircases. Anything in timber."],
            ].map(([t, d]) => (
              <article key={t} className="bg-background p-8">
                <p className="font-display text-2xl">{t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Recent commissions</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">From the workshop, lately.</h2>
            </div>
            <Link href="/portfolio" className="border-b border-foreground/60 pb-0.5 text-sm hover:border-foreground">Full portfolio →</Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { src: wardrobe, t: "Fluted oak wardrobe", p: "Bloomsbury, London" },
              { src: library, t: "Painted library with ladder", p: "Charleston Farmhouse" },
              { src: vanity, t: "Oak vanity, stone top", p: "Brighton Townhouse" },
            ].map((p) => (
              <figure key={p.t}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-display text-lg">{p.t}</span>
                  <span className="text-xs text-muted-foreground">{p.p}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="eyebrow">From our clients</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Letters to the workshop.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              { q: "It is the only room in the house I never tire of being in. The brass has gone the colour of toffee, exactly as they said it would.", a: "Eleanor M.", w: "Alfriston" },
              { q: "Patient, exacting, and a pleasure to work with. They drew six versions before we landed on the right one — and never charged for it.", a: "James & Priya R.", w: "Bloomsbury" },
              { q: "Eighteen months on, every drawer still closes with the same soft click. That, to me, is the whole argument.", a: "Studio Halliwell", w: "Architects, Brighton" },
            ].map((t) => (
              <figure key={t.a} className="border-l-2 border-clay pl-6">
                <blockquote className="font-display text-xl leading-snug text-foreground">“{t.q}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="text-foreground">{t.a}</span>
                  <span className="text-muted-foreground"> · {t.w}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={workshop} alt="A cabinetmaker planing a board in a sunlit workshop" loading="lazy" className="aspect-[7/5] w-full object-cover" />
          <div>
            <p className="eyebrow">The atelier</p>
            <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">Six cabinetmakers. One workshop. No subcontractors.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We are small on purpose. Every commission is overseen from sketch to install by the same maker, working with material we have selected ourselves at the mill.
            </p>
            <Link href="/about" className="mt-8 inline-block border-b border-foreground/60 pb-0.5 text-sm hover:border-foreground">Meet the workshop →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
