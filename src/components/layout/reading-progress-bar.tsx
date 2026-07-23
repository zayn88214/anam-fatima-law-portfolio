'use client';

import * as React from 'react';

export function ReadingProgressBar() {
  const barRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={barRef}
      style={{ transform: 'scaleX(0)', transformOrigin: '0 50%' }}
      className="fixed left-0 top-0 z-50 h-1 w-full bg-emerald"
      aria-hidden="true"
    />
  );
}
