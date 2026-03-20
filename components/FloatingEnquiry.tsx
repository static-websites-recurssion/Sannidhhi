"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function FloatingEnquiry() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={reduce ? false : { opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.45 }}
    >
      <Link
        href="/contact#enquiry"
        className="group flex items-center gap-2 rounded-full border border-white/25 bg-navy-900/90 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-navy-900/30 backdrop-blur-md transition hover:border-brand-red/40 hover:bg-navy-900"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-red" />
        </span>
        Enquiry
      </Link>
    </motion.div>
  );
}
