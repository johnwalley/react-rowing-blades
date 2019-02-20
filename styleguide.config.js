module.exports = {
  title: 'React Rowing Blades',
  pagePerSection: true,
  sections: [
    {
      name: 'Getting Started',
      content: 'docs/GetStarted.md',
    },
    {
      name: 'Cambridge Town Clubs',
      content: 'docs/CambridgeTownClubs.md',
    },
    {
      name: 'Cambridge College Clubs',
      content: 'docs/CambridgeCollegeClubs.md',
    },
    {
      name: 'Oxford College Clubs',
      content: 'docs/OxfordCollegeClubs.md',
    },
    {
      name: 'Components',
      components: './src/**/[A-Z]*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
};
