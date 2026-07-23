import Link from 'next/link';
import { ArrowRight, FileText, MapPin, MessageCircle } from 'lucide-react';
import { Container } from '@/components/container';
import { FAQList } from '@/components/faq-list';
import { faqs } from '@/lib/faqs';
import { contact } from '@/lib/site-config';

export function FAQPreview() {
  return (
    <section id="faq" className="bg-background py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald">FAQ</p>
              <h2 className="mt-3 font-display text-3xl font-normal tracking-[-0.02em] text-foreground">Common questions</h2>
            </div>
            <Link href="/faq" className="hidden items-center gap-2 text-xs font-semibold text-emerald sm:inline-flex">View all FAQs <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
          </div>
          <div className="mt-7"><FAQList items={faqs.slice(0, 4)} idPrefix="home-faq" /></div>
        </div>

        <aside className="home-connect relative overflow-hidden rounded-xl border border-emerald/20 p-7 sm:p-9">
          <div className="relative z-10 grid h-full gap-8 sm:grid-cols-[1.15fr_0.85fr] sm:items-center">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white"><MessageCircle className="h-5 w-5" aria-hidden="true" /></span>
              <p className="mt-6 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/65">Let&apos;s connect</p>
              <h2 className="mt-2 font-display text-3xl font-normal leading-tight text-white">Start a professional conversation</h2>
              <p className="mt-4 text-xs leading-6 text-white/70">For research, writing, academic, or professional enquiries, use the contact page for current details and availability.</p>
              <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-lg bg-emerald px-5 py-3 text-sm font-semibold text-[#06131f] transition hover:bg-[#65e0d2]">Contact details <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="space-y-4 text-xs text-white/70">
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" aria-hidden="true" /><span><span className="block text-white/45">Location</span><span className="mt-1 block text-white">{contact.address}</span></span></p>
              <Link href="/legal-guides" className="flex items-start gap-3 border-t border-white/10 pt-4 transition hover:text-white"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-white/60" aria-hidden="true" /><span><span className="block text-white/45">Resources</span><span className="mt-1 block text-white">Free legal guides</span></span></Link>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
