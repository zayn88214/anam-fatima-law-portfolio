import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ScrollToTopButton } from '@/components/layout/scroll-to-top-button';
import { AmbientBackground } from '@/components/layout/ambient-background';
import { site, person } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${person.name}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    images: [{ url: person.photo.src, width: 1024, height: 1536, alt: person.photo.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: 'Law Student',
    description:
      'Law student in Multan, Pakistan building a professional portfolio ahead of future legal practice.',
    url: site.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Multan',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <AmbientBackground />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
