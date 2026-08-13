import type { Metadata } from "next";
import {
  CONTACT,
  ESTABLISHED_YEAR,
  OG_IMAGE,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} in Hyderabad—IDA Jeedimetla. Phone ${CONTACT.phone}, email ${CONTACT.email}. Export inquiries and catalog requests welcome.`,
  openGraph: {
    images: [OG_IMAGE],
    title: `Contact | ${SITE_NAME}`,
    url: `${getSiteUrl()}/contact`,
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: `${getSiteUrl()}/assets/logo.png`,
  telephone: [CONTACT.phone, CONTACT.phoneAlt],
  email: [CONTACT.email, CONTACT.emailAlt],
  taxID: CONTACT.gstin,
  vatID: CONTACT.gstin,
  foundingDate: String(ESTABLISHED_YEAR),
  hasMap: CONTACT.mapsLink,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.addressLines.slice(0, 2).join(", "),
    addressLocality: "Hyderabad",
    postalCode: "500055",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  url: getSiteUrl(),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusiness} />
      <section className="relative overflow-hidden border-b border-copper/20 bg-ink-950 py-14 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_-10%,rgba(120,0,24,0.45),transparent_60%),radial-gradient(ellipse_at_90%_40%,rgba(139,74,38,0.25),transparent_55%)]" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper-400/50 to-transparent" />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            Contact
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold">Reach the trading desk</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Export inquiries, COA requests, and campaign planning—share specifications and we will
            align availability, lead time, and documentation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={CONTACT.phoneTel} variant="secondary" className="rounded-2xl">
              Call {CONTACT.phone}
            </Button>
            <Button
              href={CONTACT.whatsapp}
              variant="outlineLight"
              external
              className="rounded-2xl"
            >
              WhatsApp
            </Button>
            <Button
              href={`mailto:${CONTACT.email}`}
              variant="outlineLight"
              className="rounded-2xl"
            >
              Email
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 lg:py-20" id="catalog">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-ink-900/10 bg-white p-6 shadow-lg shadow-ink-900/5 lg:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-brand">
                  Business card
                </p>
                <div className="mt-4 border-t border-ink-900/10 pt-6">
                  <p className="text-xl font-bold text-ink-900">{SITE_NAME}</p>
                  <p className="mt-1 text-sm font-semibold text-ink-800/70">
                    Bulk chemicals · Trading · Export
                  </p>
                  <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-ink-800/85">
                    {CONTACT.addressLines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </address>
                  <div className="mt-6 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-ink-900">Phone:</span>{" "}
                      <a className="text-brand hover:underline" href={CONTACT.phoneTel}>
                        {CONTACT.phone}
                      </a>
                      <span className="text-ink-800/40"> · </span>
                      <a className="text-brand hover:underline" href={CONTACT.phoneAltTel}>
                        {CONTACT.phoneAlt}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-ink-900">Email:</span>{" "}
                      <a
                        className="text-brand hover:underline"
                        href={`mailto:${CONTACT.email}`}
                      >
                        {CONTACT.email}
                      </a>
                      <span className="text-ink-800/40"> · </span>
                      <a
                        className="text-brand hover:underline"
                        href={`mailto:${CONTACT.emailAlt}`}
                      >
                        {CONTACT.emailAlt}
                      </a>
                    </p>
                  </div>

                  <dl className="mt-6 space-y-2 border-t border-ink-900/10 pt-5 text-sm">
                    <div className="flex flex-wrap gap-x-2">
                      <dt className="font-semibold text-ink-900">GSTIN / UIN:</dt>
                      <dd className="font-mono text-ink-800/85">{CONTACT.gstin}</dd>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                      <dt className="font-semibold text-ink-900">State &amp; code:</dt>
                      <dd className="text-ink-800/85">{CONTACT.stateCode}</dd>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                      <dt className="font-semibold text-ink-900">Established:</dt>
                      <dd className="text-ink-800/85">{ESTABLISHED_YEAR}</dd>
                    </div>
                  </dl>
                  <a
                    href="/assets/sannidhhi-product-catalog.pdf"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-ink-900/15 bg-surface/80 py-3 text-sm font-semibold text-ink-900 transition hover:border-brand/40 hover:text-brand"
                  >
                    Download product catalog (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-ink-900/10 bg-white/90 p-6 shadow-sm backdrop-blur-md lg:p-8">
                <h2 className="text-lg font-bold text-ink-900">Enquiry form</h2>
                <p className="mt-2 text-sm text-ink-800/70">
                  Tell us what you need—we will confirm specifications and next steps.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-sm">
            <div className="border-b border-ink-900/10 px-6 py-4">
              <h2 className="font-bold text-ink-900">Location</h2>
              <p className="text-sm text-ink-800/70">
                Plot No. 245/Part, SVCIE · IDA Jeedimetla · Hyderabad – 500055
              </p>
            </div>
            <iframe
              title="Sannidhhi Chemical Industries location"
              src={CONTACT.mapsEmbed}
              className="h-[320px] w-full grayscale-[20%] contrast-[1.05] sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink-900/10 px-6 py-4">
              <a
                href={CONTACT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand hover:underline"
              >
                Open in Google Maps
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
