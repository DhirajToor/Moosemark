import type { Metadata } from "next";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource/fira-sans/300.css";
import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/500.css";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Hollanden & Vale — Bespoke Cabinetry & Millwork",
  description:
    "A Sussex atelier crafting bespoke kitchens, wardrobes, libraries and architectural millwork in solid timber.",
  openGraph: {
    title: "Hollanden & Vale — Bespoke Cabinetry & Millwork",
    description:
      "Bespoke kitchens, wardrobes and architectural millwork, handmade in Sussex.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
