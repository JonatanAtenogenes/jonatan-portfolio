export const stackCategories = [
  {
    key: 'frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'React Native', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      {
        name: 'Flutter',
        icon: 'flutter',
      },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: '.NET / C#', icon: 'dotnet' },
      { name: 'Java', icon: null },
      { name: 'REST APIs', icon: null },
    ],
  },
  {
    key: 'database',
    items: [
      { name: 'SQL Server', icon: null },
      { name: 'SQL', icon: null },
    ],
  },
  {
    key: 'bi',
    items: [
      { name: 'Power BI', icon: null },
      { name: 'Excel / Power Query', icon: null },
      { name: 'Data Analysis', icon: null },
    ],
  },
] as const;

export const learning = ['Rust', 'Linux Administration', 'System Architecture'];
