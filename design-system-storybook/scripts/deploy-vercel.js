import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const staticDir = path.join(projectRoot, 'storybook-static');

console.log('🚀 === Vercel Deployment & Build Verification ===');

try {
  console.log('\n1. Running TypeScript Compilation Check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit', cwd: projectRoot });
  console.log('✅ TypeScript check passed with 0 errors!');

  console.log('\n2. Building Static Storybook Bundle...');
  execSync('npm run build-storybook', { stdio: 'inherit', cwd: projectRoot });
  console.log('✅ Storybook build finished successfully!');

  if (fs.existsSync(staticDir)) {
    const files = fs.readdirSync(staticDir);
    console.log(`\n🎉 Verification Passed: storybook-static exists with ${files.length} build artifacts.`);
    console.log('📁 Ready for Vercel Single Page App Deployment!');
  } else {
    console.error('\n❌ Build Failure: storybook-static output folder not found.');
    process.exit(1);
  }
} catch (error) {
  console.error('\n❌ Deployment check encountered an error:', error.message);
  process.exit(1);
}
