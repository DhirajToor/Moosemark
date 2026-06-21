import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Moosemark Cabinetry",
  description: "Bespoke kitchens, wardrobes, libraries and architectural millwork. Full design, build and install service from a Sussex atelier.",
  openGraph: {
    title: "Services — Moosemark Cabinetry",
    description: "Design, build and install of bespoke cabinetry.",
  },
};

const services = [
  { n: "01", t: "Kitchens", p: "Solid timber kitchens designed around how the room is actually used. Pantries, plate-racks, range surrounds, freestanding dressers."},
  { n: "02", t: "Wardrobes & Dressing Rooms", p: "Built-in wardrobes, fitted dressing rooms, walk-in cupboards. Fluted, panelled or flush, in oak, ash, walnut or painted poplar."},
  { n: "03", t: "Libraries & Studies", p: "Floor-to-ceiling shelving with rolling ladders, sliding doors, hidden bars and integrated desks. Engineered to take a lifetime of books." },
  { n: "04", t: "Architectural Millwork", p: "Wall panelling, window seats, staircases, vanities, boot rooms. Anything that calls for cabinetmaker-grade joinery." },
];

const process: [string, string][] = [
  ["Letter", "We meet at your home, walk the rooms, talk through the brief. There is no charge for this visit."],
  ["Drawings", "Hand-drawn elevations and a written specification, costed to the pound. Two rounds of revisions are included."],
  ["Mock-up", "Plywood mock-ups installed in situ so you can stand in the room before a single board is cut."],
  ["Build", "Eight to sixteen weeks in the workshop, depending on scope. You are welcome to visit at any point."],
  ["Install", "On site for one to three weeks, by the same makers who built the piece. Snags are seen to within forty days."],
  ["Aftercare", "We come back at one year, and again at five, to wax, adjust and re-true. The cabinetry is guaranteed for life."],
];

export default function Services() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
            Four disciplines. One workshop.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            From a single fitted wardrobe to a whole-house commission, every piece is drawn, built and installed by the same six cabinetmakers.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl divide-y divide-border px-5 sm:px-8">
          {services.map((s) => (
            <article key={s.n} className="grid gap-6 py-12 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-12">
              <p className="font-display text-3xl text-clay md:text-4xl">{s.n}</p>
              <div className="min-w-0">
                <h2 className="font-display text-2xl sm:text-3xl">{s.t}</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">{s.p}</p>
              </div>
              {/* <p className="text-sm tracking-wide text-walnut">{s.from}</p> */}
            </article>
          ))}
        </div>
      </section>

      
    </div>
  );
}
