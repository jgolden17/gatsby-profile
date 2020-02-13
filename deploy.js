/* eslint no-console: 0 */
const ghPages = require('gh-pages');

ghPages.publish('public', {
  branch: 'master',
  repo: 'https://github.com/jgolden17/jgolden17.github.io.git',
}, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log('\nPublished to master\n');
});
