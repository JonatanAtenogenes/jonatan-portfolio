export const stackCategories = [
  {
    key: 'frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'SvelteKit', icon: 'svelte' },
    ],
  },
  {
    key: 'mobile',
    items: [
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Jetpack Compose', icon: 'jetpackcompose' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'React Native', icon: 'react' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: '.NET / C#', icon: 'dotnet' },
      { name: 'Python / FastAPI', icon: 'fastapi' },
      { name: 'Node.js / Express', icon: 'nodedotjs' },
      { name: 'Java', icon: null },
      { name: 'REST APIs', icon: null },
    ],
  },
  {
    key: 'database',
    items: [
      { name: 'SQL Server', icon: null },
      { name: 'PostgreSQL (Supabase)', icon: 'postgresql' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    key: 'devops',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Git / GitHub Actions', icon: 'githubactions' },
      { name: 'Linux', icon: 'linux' },
    ],
  },
  {
    key: 'bi',
    items: [
      { name: 'Pandas', icon: 'pandas' },
      { name: 'Power BI', icon: null },
      { name: 'Excel / Power Query', icon: null },
      { name: 'Data Analysis', icon: null },
    ],
  },
] as const;

export const learning = ['Rust', 'Linux Administration', 'System Architecture'];
