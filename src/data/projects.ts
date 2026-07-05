export interface Project {
  key: 'daimler' | 'hackathon' | 'homeserver' | 'subnetting';
  featured: boolean;
  category: 'work' | 'hackathon' | 'personal';
  icons: string[];
  github?: string;
  demo?: string;
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
  },
  {
    key: 'subnetting',
    featured: false,
    category: 'personal',
    icons: ['html5', 'css3', 'javascript'],
    github: 'https://github.com/JonatanAtenogenes/Network-Subnetting',
    demo: 'https://network-subnetting.onrender.com/',
  },
];
