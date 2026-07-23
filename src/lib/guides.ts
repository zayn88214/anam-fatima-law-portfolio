import { FileText, Home, Building2, Users, Scale, ClipboardCheck, ShieldAlert, Laptop, ReceiptText, Landmark, type LucideIcon } from 'lucide-react';

export const guideIcons = { FileText, Home, Building2, Users, Scale, ClipboardCheck, ShieldAlert, Laptop, ReceiptText, Landmark } satisfies Record<string, LucideIcon>;
export type GuideIconName = keyof typeof guideIcons;

export interface Guide {
  slug: string;
  title: string;
  description: string;
  icon: GuideIconName;
  fileHref: string;
  pages: number;
  updated: string;
}

const updated = 'July 2026';

export const guides: Guide[] = [
  { slug: 'employment-rights-guide', title: 'Employment Rights Guide', description: 'A plain-language overview of core workplace rights and protections.', icon: 'FileText', fileHref: '/guides/employment-rights-guide.pdf', pages: 5, updated },
  { slug: 'property-buying-checklist', title: 'Property Buying Checklist', description: 'Key steps and documents to review before purchasing property.', icon: 'Home', fileHref: '/guides/property-buying-checklist.pdf', pages: 5, updated },
  { slug: 'business-registration-guide', title: 'Business Registration Guide', description: 'An introductory walkthrough of registering a new business.', icon: 'Building2', fileHref: '/guides/business-registration-guide.pdf', pages: 5, updated },
  { slug: 'family-law-basics', title: 'Family Law Basics', description: 'A gentle introduction to common family law concepts and terms.', icon: 'Users', fileHref: '/guides/family-law-basics.pdf', pages: 5, updated },
  { slug: 'workplace-harassment-guide', title: 'Workplace Harassment Guide', description: 'Understand reporting routes, inquiry procedures, and evidence under Pakistan’s workplace-harassment framework.', icon: 'ShieldAlert', fileHref: '/guides/workplace-harassment-guide.pdf', pages: 5, updated },
  { slug: 'contract-review-checklist', title: 'Contract Review Checklist', description: 'A practical checklist for spotting key terms, risks, approvals, and records before signing an agreement.', icon: 'ClipboardCheck', fileHref: '/guides/contract-review-checklist.pdf', pages: 5, updated },
  { slug: 'consumer-rights-punjab', title: 'Consumer Rights in Punjab', description: 'Organize a complaint about defective goods, poor service, misleading claims, or an unfair transaction.', icon: 'Scale', fileHref: '/guides/consumer-rights-punjab.pdf', pages: 5, updated },
  { slug: 'cybercrime-reporting-guide', title: 'Cybercrime Reporting Guide', description: 'Preserve digital evidence and identify the official reporting channel for online offences in Pakistan.', icon: 'Laptop', fileHref: '/guides/cybercrime-reporting-guide.pdf', pages: 5, updated },
  { slug: 'tax-registration-basics', title: 'Tax Registration Basics', description: 'A plain-language preparation guide for individuals and businesses registering with Pakistan’s FBR.', icon: 'ReceiptText', fileHref: '/guides/tax-registration-basics.pdf', pages: 5, updated },
  { slug: 'succession-planning-basics', title: 'Succession Planning Basics', description: 'Prepare an inheritance file and understand the documents commonly needed after a death in the family.', icon: 'Landmark', fileHref: '/guides/succession-planning-basics.pdf', pages: 5, updated },
];
