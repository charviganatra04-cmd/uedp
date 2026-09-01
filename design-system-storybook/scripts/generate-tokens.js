import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const uedpRoot = path.join(projectRoot, '..');

const basePath = path.join(uedpRoot, 'base-palette-tokens.json');
const foundPath = path.join(uedpRoot, 'foundational-tokens.json');
const outputCss = path.join(projectRoot, 'src', 'styles', 'figma-tokens.css');

console.log('=== Figma Token CSS Generator ===');
if (!fs.existsSync(basePath) || !fs.existsSync(foundPath)) {
  console.error('❌ Token files missing in root directory!');
  process.exit(1);
}

const baseTokens = JSON.parse(fs.readFileSync(basePath, 'utf8'));
const foundTokens = JSON.parse(fs.readFileSync(foundPath, 'utf8'));

const cssEntries = new Map();

function addToken(varName, cssVal, varId) {
  cssEntries.set(varName, { cssVal, varId });
}

function processNode(obj, pathArr = []) {
  if (typeof obj === 'object' && obj !== null) {
    if ('$value' in obj && '$extensions' in obj && 'com.figma.variableId' in obj['$extensions']) {
      const varId = obj['$extensions']['com.figma.variableId'];
      const val = obj['$value'];
      const cleanSegments = pathArr.map(p => p.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-').replace(/,/g, '-'));
      const fullName = '--uedp-' + cleanSegments.join('-');
      
      let cssVal = val;
      if (typeof val === 'object' && val.hex) {
        cssVal = val.hex;
      } else if (typeof val === 'number') {
        if (cleanSegments.some(p => ['border-radius', 'gap', 'padding', 'max-w'].includes(p))) {
          cssVal = val === 0 ? '0' : `${val}px`;
        } else {
          cssVal = `${val}`;
        }
      }

      addToken(fullName, cssVal, varId);

      // Add student/prompt friendly aliases:
      // e.g. --uedp-rounded-3xl from border-radius/rounded-3xl
      // e.g. --uedp-gap-4 from gap/gap-4
      // e.g. --uedp-padding-6 from padding/p-6
      const last = cleanSegments[cleanSegments.length - 1];
      const category = cleanSegments[0];

      if (category === 'border-radius') {
        addToken(`--uedp-${last}`, cssVal, varId);
      } else if (category === 'gap') {
        addToken(`--uedp-${last}`, cssVal, varId);
        if (last.startsWith('gap-')) {
          addToken(`--uedp-gap-${last.replace('gap-', '')}`, cssVal, varId);
        }
      } else if (category === 'padding') {
        addToken(`--uedp-${last}`, cssVal, varId);
        if (last.startsWith('p-')) {
          addToken(`--uedp-padding-${last.replace('p-', '')}`, cssVal, varId);
        }
      }
    } else {
      for (const [k, v] of Object.entries(obj)) {
        if (k !== '$extensions') {
          processNode(v, [...pathArr, k]);
        }
      }
    }
  }
}

processNode(baseTokens);
processNode(foundTokens);

const cssLines = [
  '/* Generated Figma Tokens CSS */',
  '/* Synchronized from base-palette-tokens.json & foundational-tokens.json */',
  ':root {'
];

for (const [name, meta] of cssEntries.entries()) {
  cssLines.push(`  ${name}: ${meta.cssVal}; /* ${meta.varId} */`);
}

cssLines.push('}\n');

fs.mkdirSync(path.dirname(outputCss), { recursive: true });
fs.writeFileSync(outputCss, cssLines.join('\n'), 'utf8');
console.log(`✅ Successfully generated ${outputCss} (${cssEntries.size} tokens, ${cssLines.length} lines)`);
