import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Container } from '@/components/container';
import { mainNav, contact, person } from '@/lib/site-config';
import { practiceAreas } from '@/lib/practice-areas';

const siteDeveloper = {
  name: 'Zain Ul Abideen',
  url: 'https://zainfolio.com/',
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#04111b] text-white/85">
      <Container className="py-10">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald to-[#277e79] font-display text-xs font-bold text-white">
                AF
              </span>
              <span>
                <span className="block font-display text-sm font-semibold leading-none">{person.name}</span>
                <span className="mt-1 block text-[0.58rem] text-white/45">Future lawyer &amp; legal researcher</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-5 text-white/48">
              A professional legal portfolio grounded in clarity, disciplined research, and public service.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-white/55">
              <MapPin className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
              {contact.address}
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-emerald">Navigate</p>
            <ul className="mt-3 space-y-2">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-white/52 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-emerald">Legal Focus</p>
            <ul className="mt-3 space-y-2">
              {practiceAreas.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="text-xs text-white/52 transition-colors hover:text-white">
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-emerald">Location</p>
            <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-white/52">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              {contact.address}
            </p>
            <Link href="/contact" className="mt-3 inline-block text-xs font-semibold text-emerald transition-colors hover:text-emerald-dark">
              View location
            </Link>
          </div>
        </div>

        <div className="mt-9 flex flex-col-reverse items-center gap-3 border-t border-white/8 pt-5 sm:flex-row sm:justify-between">
          <p className="text-center text-[0.66rem] text-white/38 sm:text-left">
            &copy; {year} {person.name}. All rights reserved. Developed by{' '}
            <a
              href={siteDeveloper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/58 transition-colors hover:text-emerald"
            >
              {siteDeveloper.name}
            </a>
            .
          </p>
          <p className="text-center text-[0.66rem] text-white/32 sm:text-right">
            A professional portfolio; information here is not legal advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
