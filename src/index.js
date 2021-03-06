const core = require('@actions/core');

const ExpressAutodocs = require('./ExpressAutodocs');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
if (process.env.NODE_ENV === 'production') {
  const filePath = core.getInput('server-filepath');
  const appName = core.getInput('appName');
  const routerName = core.getInput('routerName');
  const outputFormat = core.getInput('outputFormat');
  const outputBranch = core.getInput('outputBranch');
  const docsTitle = core.getInput('docsTitle');
  ExpressAutodocs.generateDocs(
    filePath,
    appName,
    routerName,
    outputFormat,
    outputBranch,
    docsTitle
  );
} else {
  ExpressAutodocs.generateDocs(
    'test_output/server.js',
    'app',
    'router',
    'standard',
    'express-autodocs',
    'Express AutoDocs'
  );
}
