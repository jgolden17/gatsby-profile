/* eslint no-console: 0 */
const ghPages = require('gh-pages');

ghPages.publish('public', {
  branch: 'main',
  repo: 'https://github.com/jgolden17/jgolden17.github.io.git',
}, () => {
  console.log('\nPublished to main\n');
});
