'use client';

import * as React from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);
  const visibleRef = React.useRef(false);

  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const nextVisible = window.scrollY > 480;
      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible;
        setVisible(nextVisible);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-emerald text-[#06131f] shadow-[0_10px_28px_-10px_rgba(76,201,187,0.72)] transition-[opacity,transform] duration-300 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <ArrowUp className="h-4.5 w-4.5" aria-hidden="true" />
    </button>
  );
}
