const fs = require('fs');

const files = [
  'base-components/overview.mdx',
  'app-ui-components/overview.mdx',
  'marketing-components/overview.mdx',
  'shared-page-examples/overview.mdx',
  'marketing-examples/overview.mdx',
  'app-ui-examples/overview.mdx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // Change all CardGroup to 3 columns
  content = content.replace(/<CardGroup cols=\{[0-9]+\}>/g, '<CardGroup cols={3}>');

  // Replace text like "1 component + 6 variants" with smaller text class
  content = content.replace(/(<Card[^>]*>\n\s*)([^<]+?)(\s*\n\s*<\/Card>)/g, (match, p1, p2, p3) => {
    const trimmed = p2.trim();
    if (trimmed && !trimmed.startsWith('<span')) {
      return `${p1}<span className="text-sm text-gray-500 dark:text-gray-400">${trimmed}</span>${p3}`;
    }
    return match;
  });

  fs.writeFileSync(file, content, 'utf8');
}
