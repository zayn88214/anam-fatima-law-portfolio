// Central site configuration for identity, location, metadata, and navigation.

export const person = {
  name: 'Anam Fatima',
  title: 'Future Lawyer',
  location: 'Multan, Pakistan',
  tagline: 'Protecting Your Rights with Confidence',
  subheading:
    'Professional legal guidance for individuals and businesses with integrity, clarity, and dedication.',
  photo: {
    src: '/images/anam-fatima-profile.webp',
    alt: 'Professional illustrated portrait of Anam Fatima',
  },
} as const;

export const contact = {
  address: 'Multan, Punjab, Pakistan',
  region: 'South Punjab',
  focus: 'Legal research, public legal education, and access to justice',
  languages: 'English, Urdu, Punjabi',
  availability: 'Educational portfolio enquiries only',
  response: 'No client intake or legal advice is offered at this stage.',
} as const;

export const site = {
  name: 'Anam Fatima | Future Lawyer',
  description:
    'The professional portfolio of Anam Fatima, a law student in Multan, Pakistan building a future legal practice grounded in integrity, research, and client-first values.',
  url: 'https://anamfatima-law.example.com',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Legal Guides', href: '/legal-guides' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  explore: mainNav,
  legal: [
    { label: 'Book a Consultation', href: '/booking' },
    { label: 'Free Case Evaluation', href: '/case-evaluation' },
  ],
};


