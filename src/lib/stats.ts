export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// These are transparent, forward-looking placeholders describing the scope of
// study and future intent — not claims of professional experience or results.
export const stats: StatItem[] = [
  { value: 9, suffix: '', label: 'Practice areas being studied' },
  { value: 3, suffix: '+', label: 'Years of legal education in progress' },
  { value: 4, suffix: '', label: 'Free legal guides published' },
  { value: 100, suffix: '%', label: 'Commitment to ethical practice' },
];
