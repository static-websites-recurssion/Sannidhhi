"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, durationMs: number, enabled: boolean) {
  const [v, setV] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setV(0);
      return;
    }
    start.current = null;
    let raf = 0;
    const step = (t: number) => {
      if (start.current === null) start.current = t;
      const p = Math.min(1, (t - start.current) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, enabled]);

  return v;
}

export function AnimatedStats({
  items,
}: {
  items: { label: string; value: number; suffix?: string }[];
}) {
  const reduce = Boolean(useReducedMotion());
  const [on, setOn] = useState(false);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          onViewportEnter={() => setOn(true)}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <StatNumber
            target={item.value}
            suffix={item.suffix}
            active={on}
            reduce={reduce}
          />
          <p className="mt-2 text-sm font-medium text-white/70">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function StatNumber({
  target,
  suffix,
  active,
  reduce,
}: {
  target: number;
  suffix?: string;
  active: boolean;
  reduce: boolean;
}) {
  const n = useCountUp(target, 1400, active && !reduce);
  const display = reduce ? target : active ? n : 0;
  return (
    <p className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
      {display}
      {suffix ? (
        <span className="text-2xl font-semibold text-white/80">{suffix}</span>
      ) : null}
    </p>
  );
}
