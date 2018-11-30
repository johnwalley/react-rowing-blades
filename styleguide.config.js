module.exports = {
  title: 'React Rowing Blades',
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
      name: 'Components',
      components: './src/**/[A-Z]*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
        },
      ],
    },
  },
};
