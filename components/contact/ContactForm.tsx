"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      id="enquiry"
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-widest text-ink-800/50">
          Product / grade interest
        </label>
        <input
          name="product"
          className="mt-2 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/10"
          placeholder="e.g. Acetone, PVC K-67, Hydrogen peroxide 50%"
        />
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-widest text-ink-800/50">
          Monthly volume &amp; packaging
        </label>
        <textarea
          name="volume"
          rows={3}
          className="mt-2 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/10"
          placeholder="Drums, IBC, ISO tank, bulk — approximate quantity"
        />
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-widest text-ink-800/50">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="mt-2 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/10"
          placeholder="COA requirements, destination port, timeline…"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-2xl bg-brand py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-800 sm:w-auto sm:px-10"
      >
        Submit enquiry
      </button>
      {sent ? (
        <p className="text-sm text-ink-800/75" role="status">
          Thank you—this is a static demo. Please email{" "}
          <a className="font-semibold text-brand" href="mailto:sannidhhi@gmail.com">
            sannidhhi@gmail.com
          </a>{" "}
          or call{" "}
          <a className="font-semibold text-brand" href="tel:+917981162470">
            +91 7981162470
          </a>{" "}
          with the same details.
        </p>
      ) : (
        <p className="text-xs text-ink-800/55">
          Static site: form shows UX only. Use email, phone, or WhatsApp for a live response.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-widest text-ink-800/50">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}
