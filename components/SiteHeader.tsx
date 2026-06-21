"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  // { to: "/", label: "Journal" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  // { to: "/about", label: "Atelier" },
  { to: "/contact", label: "Enquire" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
      
        <Link href="/" className="min-w-0 truncate font-display text-xl tracking-tight sm:text-2xl">
          {/* <img src="/assets/logo.jpeg" alt="Moosemark Cabinetry" className="h-8 w-8 " /> */}
         Moosemark Cabinetry
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                href={n.to}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-sm border border-border p-2 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm last:border-0"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
