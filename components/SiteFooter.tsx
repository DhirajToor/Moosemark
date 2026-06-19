import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">Moosemark Cabinetry</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A small atelier of cabinetmakers building rooms — and the millwork that defines them —
            from solid timber and patience.
          </p>
        </div>
        <FooterCol title="Studio" items={[
          { label: "Portfolio", to: "/portfolio" },
          { label: "Services", to: "/services" },
          { label: "Atelier", to: "/about" },
        ]} />
        <FooterCol title="Contact" items={[
          { label: "Enquire", to: "/contact" },
          { label: "info@moosemarkcabinetry.co", to: "/contact" },
          { label: "+1 548 333 9788", to: "/contact" },
        ]} />
        <div>
          <p className="eyebrow">Workshop</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
               108 Birch Avenue, <br/>
               KItchner N2H 4W8
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground sm:px-8">
          <span>© {new Date().getFullYear()} Moosemark Cabinetry. Made by hand.</span>
          <span>Est. 2017 · KItchner, ON </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <Link href={i.to} className="text-foreground/80 hover:text-foreground">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
