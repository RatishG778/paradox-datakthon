"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1800,
}: CounterProps) {
  const [count, setCount] = useState<number>(0);

  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (started.current) return;

        started.current = true;

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;

          const progress = Math.min(
            elapsed / duration,
            1
          );

          // Smooth ease-out
          const eased =
            1 - Math.pow(1 - progress, 3);

          const nextValue = value * eased;

          setCount(nextValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  // Safety fallback
  const safeCount =
    typeof count === "number" && Number.isFinite(count)
      ? count
      : 0;

  return (
    <span ref={ref}>
      {prefix}
      {safeCount.toFixed(decimals)}
      {suffix}
    </span>
  );
}