import {
  Scale, Users, Building2, Globe2, Receipt, Home,
  Gavel, Lightbulb, Briefcase, type LucideIcon,
} from 'lucide-react';

export const practiceAreaIcons = {
  Scale, Users, Building2, Globe2, Receipt, Home, Gavel, Lightbulb, Briefcase,
} satisfies Record<string, LucideIcon>;

export type PracticeAreaIconName = keyof typeof practiceAreaIcons;

export interface PracticeAreaFAQ {
  question: string;
  answer: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  icon: PracticeAreaIconName;
  shortDescription: string;
  overview: string;
  commonIssues: string[];
  howItWorks: string[];
  faqs: PracticeAreaFAQ[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'criminal-law',
    title: 'Criminal Law',
    icon: "Gavel",
    shortDescription: 'Guidance on criminal charges, procedure, and defense strategy.',
    overview:
      'Criminal law governs offenses against the state and the rights of the accused throughout investigation, trial, and appeal. A thoughtful defense approach starts with understanding the charges, the evidence, and the procedural rights available at every stage.',
    commonIssues: [
      'Understanding formal charges and potential penalties',
      'Navigating arrest, bail, and remand procedures',
      'Evaluating evidence and procedural fairness',
      'Preparing for hearings and trial proceedings',
    ],
    howItWorks: [
      'Initial review of the charges and case background',
      'Explanation of rights, procedure, and realistic options',
      'Collaborative preparation of a defense strategy',
      'Ongoing communication through each stage of proceedings',
    ],
    faqs: [
      {
        question: 'What should I do immediately after being charged?',
        answer:
          'Avoid making statements without legal guidance, note all details you can recall, and seek qualified legal advice as early as possible to understand your rights and next steps.',
      },
      {
        question: 'How long do criminal proceedings typically take?',
        answer:
          'Timelines vary widely based on the nature of the charges, court schedules, and case complexity. A clear, case-specific timeline can only be given after reviewing the details.',
      },
    ],
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    icon: "Users",
    shortDescription: 'Matters involving marriage, divorce, custody, and inheritance.',
    overview:
      'Family law touches some of the most personal decisions a person will face — marriage, separation, child custody, and inheritance. A compassionate, clear-headed approach helps families navigate these matters with dignity.',
    commonIssues: [
      'Divorce and separation proceedings',
      'Child custody and guardianship arrangements',
      'Maintenance and financial support matters',
      'Inheritance and succession disputes',
    ],
    howItWorks: [
      'Confidential discussion of the family situation and goals',
      'Clear explanation of available legal paths',
      'Documentation and filing support',
      'Steady guidance through negotiation or court proceedings',
    ],
    faqs: [
      {
        question: 'Can family disputes be resolved without going to court?',
        answer:
          'Many family matters can be resolved through negotiation or mediation, which is often faster and less stressful than litigation. Court proceedings become necessary when an agreement cannot be reached.',
      },
      {
        question: 'What documents are usually needed for a family law matter?',
        answer:
          'Common documents include marriage certificates, identity documents, financial records, and any prior agreements. The exact list depends on the specific matter.',
      },
    ],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    icon: "Building2",
    shortDescription: 'Business formation, governance, contracts, and compliance.',
    overview:
      'Corporate law supports businesses from formation through growth — covering governance, contracts, and regulatory compliance. Sound legal structure early on helps prevent costly disputes later.',
    commonIssues: [
      'Business registration and entity structuring',
      'Drafting and reviewing commercial contracts',
      'Corporate governance and compliance',
      'Shareholder and partnership matters',
    ],
    howItWorks: [
      'Understanding the business model and objectives',
      'Structuring or reviewing agreements and governance documents',
      'Ongoing compliance guidance as the business grows',
      'Support during negotiations or disputes',
    ],
    faqs: [
      {
        question: 'What is the first legal step when starting a business?',
        answer:
          'Choosing the right business structure and completing registration requirements are typically the first steps, followed by putting core contracts and compliance practices in place.',
      },
      {
        question: 'Do small businesses need a formal contract for every deal?',
        answer:
          'Written agreements are strongly recommended even for smaller deals, since they clarify expectations and reduce the risk of disputes.',
      },
    ],
  },
  {
    slug: 'immigration-law',
    title: 'Immigration Law',
    icon: "Globe2",
    shortDescription: 'Visas, residency, and cross-border legal matters.',
    overview:
      'Immigration law covers the rules governing entry, residency, and status across borders. Requirements change frequently, making careful, up-to-date guidance essential.',
    commonIssues: [
      'Visa applications and renewals',
      'Residency and status changes',
      'Work authorization matters',
      'Documentation and compliance requirements',
    ],
    howItWorks: [
      'Review of current status and objectives',
      'Explanation of applicable requirements and timelines',
      'Support preparing documentation',
      'Guidance through submission and follow-up',
    ],
    faqs: [
      {
        question: 'How far in advance should I start an immigration application?',
        answer:
          'Processing times vary by category and jurisdiction, so it is best to begin preparation as early as possible once a need is identified.',
      },
      {
        question: 'What happens if an application is incomplete?',
        answer:
          'Incomplete applications are often delayed or rejected, which is why careful document preparation matters from the outset.',
      },
    ],
  },
  {
    slug: 'tax-law',
    title: 'Tax Law',
    icon: "Receipt",
    shortDescription: 'Tax compliance, planning, and dispute matters.',
    overview:
      'Tax law affects individuals and businesses alike, from routine compliance to more complex planning and disputes. Clear guidance helps avoid unnecessary risk and penalties.',
    commonIssues: [
      'Tax registration and filing compliance',
      'Understanding applicable tax obligations',
      'Responding to notices or audits',
      'Tax-efficient business structuring',
    ],
    howItWorks: [
      'Review of the current tax position',
      'Identification of compliance gaps or risks',
      'Guidance on filings, responses, or structuring',
      'Ongoing support as regulations change',
    ],
    faqs: [
      {
        question: 'What should I do if I receive a tax notice?',
        answer:
          'Read the notice carefully, note any deadlines, and seek guidance promptly — timely responses are usually important in tax matters.',
      },
      {
        question: 'Can tax planning help reduce future risk?',
        answer:
          'Proactive planning and accurate record-keeping can meaningfully reduce the risk of disputes and penalties over time.',
      },
    ],
  },
  {
    slug: 'property-law',
    title: 'Property Law',
    icon: "Home",
    shortDescription: 'Buying, selling, leasing, and property disputes.',
    overview:
      'Property law governs the purchase, sale, leasing, and ownership of real estate. Careful due diligence protects buyers, sellers, and tenants from future disputes.',
    commonIssues: [
      'Property purchase and sale agreements',
      'Title verification and due diligence',
      'Lease and tenancy matters',
      'Property disputes and boundary issues',
    ],
    howItWorks: [
      'Review of the property and transaction details',
      'Title and documentation verification',
      'Drafting or reviewing agreements',
      'Support resolving disputes if they arise',
    ],
    faqs: [
      {
        question: 'What checks matter most before buying property?',
        answer:
          'Verifying clear title, confirming there are no outstanding disputes or liens, and reviewing all agreement terms carefully are essential steps.',
      },
      {
        question: 'What can a tenant do if a landlord breaches a lease?',
        answer:
          'Reviewing the lease terms and applicable tenancy laws is the first step to understanding available remedies.',
      },
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    icon: "Scale",
    shortDescription: 'Resolving disputes between individuals or organizations.',
    overview:
      'Civil litigation covers disputes between individuals, businesses, or organizations that are resolved through the court system, from contract disagreements to personal injury claims.',
    commonIssues: [
      'Contract and commercial disputes',
      'Personal injury and liability claims',
      'Debt recovery matters',
      'Enforcement of judgments',
    ],
    howItWorks: [
      'Assessment of the dispute and available evidence',
      'Explanation of realistic options and likely process',
      'Preparation of filings and case materials',
      'Representation and communication throughout proceedings',
    ],
    faqs: [
      {
        question: 'Is litigation always necessary to resolve a dispute?',
        answer:
          'Not always — many disputes can be resolved through negotiation or settlement before reaching trial, which is often faster and less costly.',
      },
      {
        question: 'How is evidence gathered for a civil case?',
        answer:
          'Evidence typically includes documents, correspondence, and witness statements relevant to the dispute, gathered and organized early in the process.',
      },
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    icon: "Lightbulb",
    shortDescription: 'Protecting trademarks, copyrights, and creative work.',
    overview:
      'Intellectual property law protects the creative and commercial value of ideas, brands, and original work — an increasingly important area for businesses and creators alike.',
    commonIssues: [
      'Trademark registration and protection',
      'Copyright ownership and licensing',
      'Trade secret protection',
      'Responding to infringement concerns',
    ],
    howItWorks: [
      'Review of the intellectual property at stake',
      'Guidance on registration or protection options',
      'Support drafting licensing or protection agreements',
      'Assistance addressing potential infringement',
    ],
    faqs: [
      {
        question: 'Do I need to register a trademark to have rights to it?',
        answer:
          'Registration provides stronger, clearer legal protection, though some limited rights may exist through use alone depending on the jurisdiction.',
      },
      {
        question: 'How long does copyright protection typically last?',
        answer:
          'Duration varies by jurisdiction and type of work, so it is worth confirming the specific rules that apply to your situation.',
      },
    ],
  },
  {
    slug: 'employment-law',
    title: 'Employment Law',
    icon: "Briefcase",
    shortDescription: 'Workplace rights, contracts, and employment disputes.',
    overview:
      'Employment law governs the relationship between employers and employees, covering contracts, workplace rights, and dispute resolution for both sides of the relationship.',
    commonIssues: [
      'Employment contract review',
      'Workplace rights and obligations',
      'Termination and severance matters',
      'Workplace dispute resolution',
    ],
    howItWorks: [
      'Review of the employment relationship and documents',
      'Explanation of applicable rights and obligations',
      'Support drafting or responding to correspondence',
      'Guidance through resolution or proceedings',
    ],
    faqs: [
      {
        question: 'What should I review before signing an employment contract?',
        answer:
          'Pay close attention to compensation terms, termination clauses, confidentiality obligations, and any restrictive covenants before signing.',
      },
      {
        question: 'What are the options if a termination seems unfair?',
        answer:
          'The right course of action depends on the applicable employment laws and the specific circumstances of the termination.',
      },
    ],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
