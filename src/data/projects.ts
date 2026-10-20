export interface Project {
  key:
    | 'daimler'
    | 'hackathon'
    | 'homeserver'
    | 'subnetting'
    | 'technical-journal'
    | 'ops-terminal'
    | 'soundpulse'
    | 'financial-help'
    | 'attrition';
  featured: boolean;
  category: 'work' | 'hackathon' | 'personal';
  icons: string[];
  github?: string;
  demo?: string;
  journal?: string;
}

export const projects: Project[] = [
  {
    key: 'daimler',
    featured: true,
    category: 'work',
    icons: ['react', 'dotnet'],
  },
  {
    key: 'hackathon',
    featured: false,
    category: 'hackathon',
    icons: ['react', 'firebase'],
  },
  {
    key: 'homeserver',
    featured: false,
    category: 'personal',
    icons: ['rust', 'linux'],
    journal: 'https://technical-journal.onrender.com/projects/home-server',
  },
  {
    key: 'technical-journal',
    featured: true,
    category: 'personal',
    icons: ['nextdotjs', 'react', 'typescript', 'tailwindcss', 'shadcnui'],
    github: 'https://github.com/JonatanAtenogenes/technical-journal',
    demo: 'https://technical-journal.onrender.com/',
    journal: 'https://technical-journal.onrender.com/series/technical-journal',
  },
  {
    key: 'subnetting',
    featured: false,
    category: 'personal',
    icons: ['html5', 'css', 'javascript'],
    github: 'https://github.com/JonatanAtenogenes/Network-Subnetting',
    demo: 'https://network-subnetting.onrender.com/',
    journal:
      'https://technical-journal.onrender.com/projects/network-subnetting',
  },
  {
    key: 'ops-terminal',
    featured: false,
    category: 'personal',
    icons: ['svelte', 'typescript', 'tailwindcss', 'supabase'],
    github: 'https://github.com/JonatanAtenogenes/ops-terminal',
    journal: 'https://technical-journal.onrender.com/projects/ops-terminal',
  },
  {
    key: 'soundpulse',
    featured: false,
    category: 'personal',
    icons: ['kotlin', 'jetpackcompose'],
    github: 'https://github.com/JonatanAtenogenes/SoundPulse',
    journal: 'https://technical-journal.onrender.com/series/soundpulse',
  },
  {
    key: 'financial-help',
    featured: false,
    category: 'personal',
    icons: ['kotlin', 'jetpackcompose', 'firebase'],
    journal: 'https://technical-journal.onrender.com/series/financial-help',
  },
  {
    key: 'attrition',
    featured: false,
    category: 'personal',
    icons: ['python', 'pandas', 'jupyter'],
    journal:
      'https://technical-journal.onrender.com/projects/employee-attrition',
  },
];
