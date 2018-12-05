module.exports = {
  title: 'React Rowing Blades',
  pagePerSection: true,
  sections: [
    {
      name: 'Intro',
      content: 'docs/ReactRowingBlades.md',
      description: 'Welcome',
    },
    {
      name: 'Cambridge Town Clubs',
      content: 'docs/CambridgeTownClubs.md',
      description: 'Cambridge Town Clubs',
    },
    {
      name: 'Cambridge College Clubs',
      content: 'docs/CambridgeCollegeClubs.md',
      description: 'Cambridge College Clubs',
    },
    {
      name: 'Oxford College Clubs',
      content: 'docs/OxfordCollegeClubs.md',
      description: 'Oxford College Clubs',
    },
    {
      name: 'Components',
      components: './src/**/[A-Z]*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
};
