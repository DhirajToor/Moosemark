"use client";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="space-y-6 border border-border bg-card p-6 sm:p-10"
    >
      {sent ? (
        <div className="py-16 text-center">
          <p className="font-display text-3xl">Thank you.</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Your note has reached the workshop. We will reply within two working days.
          </p>
        </div>
      ) : (
        <>
          <Field label="Your name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Postcode" name="postcode" />
          <Field label="Project type" name="type" placeholder="Kitchen, wardrobe, library…" />
          <div>
            <label className="eyebrow block">About the room</label>
            <textarea
              rows={5}
              name="message"
              required
              className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-walnut"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-sm bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-walnut"
          >
            Send to the workshop
          </button>
          <p className="text-xs text-muted-foreground">
            We never share your details. Replies come from a real cabinetmaker.
          </p>
        </>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="eyebrow block" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-walnut"
      />
    </div>
  );
}
