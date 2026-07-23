'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search } from 'lucide-react';
import { Container } from '@/components/container';
import { mainNav } from '@/lib/site-config';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  const closeMenu = React.useCallback(() => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/8 bg-[#04111b]/98">
        <Container className="flex min-h-16 items-center justify-between py-2.5">
          <Link href="/" className="flex shrink-0 items-center gap-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald to-[#277e79] font-display text-xs font-bold text-white shadow-[0_8px_22px_-12px_rgba(76,201,187,0.8)]">
              AF
            </span>
            <span>
              <span className="block font-display text-sm font-semibold leading-none">Anam Fatima</span>
              <span className="mt-1 block text-[0.58rem] text-white/48">Future lawyer &amp; legal researcher</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {mainNav.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-lg px-2.5 py-2 text-[0.68rem] font-medium transition-colors ${
                    active ? 'text-emerald' : 'text-white/58 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="hidden text-white/70 hover:bg-white/8 hover:text-white sm:inline-flex"
              aria-label="Search"
              asChild
            >
              <Link href="/search"><Search className="h-4.5 w-4.5" aria-hidden="true" /></Link>
            </Button>
            <ThemeToggle className="hidden text-white/70 hover:bg-white/8 hover:text-white sm:inline-flex" />
            <Button asChild size="sm" className="hidden xl:inline-flex">
              <Link href="/booking">View availability</Link>
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={menuOpen} onClose={closeMenu} pathname={pathname} />
    </>
  );
}
