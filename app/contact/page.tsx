import type { Metadata } from "next";
import { SITE_NAME, CONTACT, getSiteUrl } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} in Hyderabad—IDA Jeedimetla. Phone ${CONTACT.phone}, email ${CONTACT.email}. Export inquiries and catalog requests welcome.`,
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    url: `${getSiteUrl()}/contact`,
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: `${getSiteUrl()}/assets/logo-mark.svg`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
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
      <section className="border-b border-navy-900/10 bg-navy-900 py-14 text-white lg:py-16">
        <Container>
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
              variant="outline"
              external
              className="rounded-2xl border-white/35 bg-white/5 text-white hover:bg-white/10"
            >
              WhatsApp
            </Button>
            <Button
              href={`mailto:${CONTACT.email}`}
              variant="outline"
              className="rounded-2xl border-white/35 bg-white/5 text-white hover:bg-white/10"
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
              <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-lg shadow-navy-900/5 lg:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Business card
                </p>
                <div className="mt-4 border-t border-navy-900/10 pt-6">
                  <p className="text-xl font-bold text-navy-900">{SITE_NAME}</p>
                  <p className="mt-1 text-sm font-semibold text-navy-800/70">
                    Bulk chemicals · Trading · Export
                  </p>
                  <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-navy-800/85">
                    {CONTACT.addressLines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </address>
                  <div className="mt-6 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-navy-900">Phone:</span>{" "}
                      <a className="text-brand-red hover:underline" href={CONTACT.phoneTel}>
                        {CONTACT.phone}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-navy-900">Email:</span>{" "}
                      <a
                        className="text-brand-red hover:underline"
                        href={`mailto:${CONTACT.email}`}
                      >
                        {CONTACT.email}
                      </a>
                    </p>
                  </div>
                  <a
                    href="/assets/sannidhhi-product-catalog.pdf"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-navy-900/15 bg-surface/80 py-3 text-sm font-semibold text-navy-900 transition hover:border-brand-red/40 hover:text-brand-red"
                  >
                    Download product catalog (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-navy-900/10 bg-white/90 p-6 shadow-sm backdrop-blur-md lg:p-8">
                <h2 className="text-lg font-bold text-navy-900">Enquiry form</h2>
                <p className="mt-2 text-sm text-navy-800/70">
                  Tell us what you need—we will confirm specifications and next steps.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-sm">
            <div className="border-b border-navy-900/10 px-6 py-4">
              <h2 className="font-bold text-navy-900">Location</h2>
              <p className="text-sm text-navy-800/70">IDA Jeedimetla · Hyderabad</p>
            </div>
            <iframe
              title="Sannidhhi Chemical Industries location"
              src={CONTACT.mapsEmbed}
              className="h-[320px] w-full grayscale-[20%] contrast-[1.05] sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-navy-900/10 px-6 py-4">
              <a
                href={CONTACT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand-red hover:underline"
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
