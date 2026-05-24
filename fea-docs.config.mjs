import path from 'node:path';

const appComponentsDir = path.resolve(process.cwd(), '.fea-docs/app/src/components');
const workspaceDocsDir = path.resolve(process.cwd(), 'docs');

export default {
  aliases: {
    '@components': appComponentsDir,
    '@workspace-docs': workspaceDocsDir,
  },
};
