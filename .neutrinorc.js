module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'reactman',
          favicon: 'src/static/favicon.ico'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
