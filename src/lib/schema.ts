import { z } from 'zod';

export const caseCategories = [
  'Criminal Law',
  'Family Law',
  'Corporate Law',
  'Immigration Law',
  'Tax Law',
  'Property Law',
  'Civil Litigation',
  'Intellectual Property',
  'Employment Law',
  'Not sure / other',
] as const;

export const caseEvaluationSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z.string().trim().optional().or(z.literal('')),
  category: z.enum(caseCategories, {
    error: () => 'Please select the area that best fits your situation.',
  }),
  description: z.string().trim().min(20, 'Please describe your situation in a bit more detail.'),
  website_hp: z.string().max(0).optional().or(z.literal('')),
});

export type CaseEvaluationValues = z.infer<typeof caseEvaluationSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address.'),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
