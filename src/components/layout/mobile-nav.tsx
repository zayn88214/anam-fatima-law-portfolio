'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { mainNav } from '@/lib/site-config';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';

export function MobileNav({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="mobile-nav-overlay fixed inset-0 z-40 bg-[#020a10]/75 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="mobile-nav-panel fixed right-0 top-0 z-50 flex h-dvh w-[86%] max-w-xs flex-col border-l border-border bg-surface p-6 shadow-2xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-base font-semibold text-foreground">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-7 flex flex-col gap-1" aria-label="Primary">
          {mainNav.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                aria-current={active ? 'page' : undefined}
                className={`min-h-11 rounded-lg px-3 py-3 font-display text-base font-medium transition-colors ${
                  active ? 'bg-emerald-light text-emerald-dark' : 'text-foreground hover:bg-emerald-light hover:text-emerald-dark'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-border pt-5">
          <div className="mb-3 grid grid-cols-2 gap-2">
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/search" onClick={onClose}><Search className="h-4 w-4" aria-hidden="true" />Search</Link>
            </Button>
            <ThemeToggle showLabel className="w-full" />
          </div>
          <Button asChild className="w-full">
            <Link href="/booking" onClick={onClose}>View availability</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
