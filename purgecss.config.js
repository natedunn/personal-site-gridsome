module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md',
    './docs/**/*.md',
    './posts/**/*.md',
  ],
  whitelist: [
    'body',
    'html',
    'img',
    'a',
    'g-image',
    'g-image--lazy',
    'g-image--loaded',
    'active',
  ],
  extractors: [
    {
      extractor: content => content.match(/[A-z0-9-:\\/]+/g),
      extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
    },
  ],
}
