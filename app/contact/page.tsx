import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Enquire —Moosemark Cabinetry",
  description: "Begin a bespoke cabinetry commission. Tell us about your room and we will reply within two working days.",
  openGraph: {
    title: "Enquire —Moosemark Cabinetry",
    description: "Begin a bespoke cabinetry commission.",
  },
};

export default function Contact() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">Enquire</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
              Tell us about the room.
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground">
              We reply to every enquiry within two working days. If your project feels like a fit,
              we will arrange a visit at your convenience — no charge, no obligation.
            </p>
            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="eyebrow">Workshop</p>
                <p className="mt-2">108 Birch Avenue,<br /> KItchner N2H 4W8</p>
              </div>
              <div>
                <p className="eyebrow">Direct</p>
                <p className="mt-2">info@moosemarkcabinetry.com<br />+1 548 333 9788</p>
              </div>
              <div>
                <p className="eyebrow">Visits</p>
                <p className="mt-2">By appointment, Tuesday to Friday.</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
