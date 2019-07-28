const path = require('path');

module.exports = {
  require: [path.resolve(__dirname, 'styleguide.setup.js')],
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
      name: 'United Kingdom Clubs',
      content: 'docs/UnitedKingdomClubs.md',
    },
    {
      name: 'Components',
      components: './src/**/[A-Z]*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
