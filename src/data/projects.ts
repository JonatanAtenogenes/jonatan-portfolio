export interface Project {
  key:
    | 'daimler'
    | 'hackathon'
    | 'homeserver'
    | 'subnetting'
    | 'technical-journal';
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
    github: 'https://github.com/JonatanAtenogenes/Network-Subnetting',
    demo: 'https://network-subnetting.onrender.com/',
    journal:
      'https://technical-journal.onrender.com/projects/technical-journal',
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
];
