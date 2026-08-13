"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT } from "@/lib/constants";

export function FloatingEnquiry() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={reduce ? false : { opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.45 }}
    >
      {/* WhatsApp — icon only, stays secondary to the main action */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-[#25D366] shadow-warm-lg ring-1 ring-ink-900/10 transition hover:scale-105 hover:border-copper/40"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.69 8.24-8.25 8.24z" />
        </svg>
      </a>

      {/* Primary enquiry action — solid brand fill so it reads on light and dark alike */}
      <Link
        href="/contact#enquiry"
        className="group flex items-center gap-2.5 rounded-full bg-gradient-to-br from-brand-600 to-brand px-5 py-3.5 text-sm font-semibold text-white shadow-warm-lg ring-1 ring-copper-200/40 transition hover:from-brand hover:to-brand-800 hover:ring-copper-200/70"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper-200 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-copper-200" />
        </span>
        Enquiry
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
      </Link>
    </motion.div>
  );
}
