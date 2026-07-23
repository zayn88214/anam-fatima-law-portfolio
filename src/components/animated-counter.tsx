'use client';

import * as React from 'react';

export function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const animated = React.useRef(false);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const startAnimation = () => {
      if (animated.current) return;
      animated.current = true;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setDisplay(value);
        return;
      }

      const startedAt = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { rootMargin: '-40px' }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold sm:text-5xl" aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">{display}{suffix}</span>
    </span>
  );
}
