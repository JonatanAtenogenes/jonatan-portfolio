export interface ExperienceEntry {
  key: 'daimler' | 'hackathon' | 'education';
  category: 'work' | 'hackathon' | 'personal';
  period: string;
}

export const experience: ExperienceEntry[] = [
  { key: 'daimler', category: 'work', period: 'current' },
  { key: 'hackathon', category: 'hackathon', period: '2025' },
  { key: 'education', category: 'personal', period: '2020-2026' },
];
