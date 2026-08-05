import { execSync } from 'child_process';

console.log("Validating Phase 6 Part 3...");

try {
    execSync('npm run validate:entities', { stdio: 'inherit' });
    execSync('npm run validate:answer-readiness', { stdio: 'inherit' });
    execSync('npm run validate:ai-crawlers', { stdio: 'inherit' });
    console.log("Phase 6 Part 3 checks passed.");
} catch (e) {
    console.error("Phase 6 Part 3 validation failed.");
    process.exit(1);
}
