import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

async function validateReferralClassifications() {
    console.log("Validating Referral Classifications...");

    const tsConfigPath = path.resolve(process.cwd(), 'tsconfig.json');
    const hasTsConfig = fs.existsSync(tsConfigPath);
    if (!hasTsConfig) {
      console.error("❌ Could not find tsconfig.json");
      process.exit(1);
    }

    // As it is a module written in TS, let's use a quick script to check it using node natively if possible, or tsc
    const filePath = path.resolve(process.cwd(), 'src/data/analytics/referralClassification.ts');

    if (!fs.existsSync(filePath)) {
        console.error("❌ Referral classification file not found:", filePath);
        process.exit(1);
    }

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Simple regex-based validation for the script to avoid complex TS compilation in basic validator
        if (!fileContent.includes('export const referralClassifications: ReferralClassification[]')) {
           console.error("❌ `referralClassifications` array not found.");
           process.exit(1);
        }

        // Extract array content loosely to check IDs and patterns
        const idsMatches = fileContent.match(/id:\s*["']([^"']+)["']/g);
        if (!idsMatches) {
            console.error("❌ No IDs found in referral classifications.");
            process.exit(1);
        }

        const ids = idsMatches.map(id => id.replace(/id:\s*["']([^"']+)["']/, '$1'));
        const uniqueIds = new Set(ids);

        if (uniqueIds.size !== ids.length) {
            console.error("❌ Duplicate IDs found in referral classifications.");
            process.exit(1);
        }

        const patternsMatches = fileContent.match(/hostnamePatterns:\s*\[(.*?)\]/g);
        if (patternsMatches) {
             const allPatterns = [];
             for (const match of patternsMatches) {
                 const extracted = match.replace(/hostnamePatterns:\s*\[/, '').replace(/\]$/, '');
                 const patterns = extracted.split(',').map(s => s.trim().replace(/['"]/g, '')).filter(s => s.length > 0);
                 allPatterns.push(...patterns);

                 for (const p of patterns) {
                     if (p.includes('http://') || p.includes('https://') || p.includes('/')) {
                         console.error(`❌ Invalid hostname pattern found (contains full URL or paths): ${p}`);
                         process.exit(1);
                     }
                     if (p.includes('?') || p.includes('&') || p.includes('utm_')) {
                          console.error(`❌ Invalid hostname pattern found (contains tracking parameters): ${p}`);
                          process.exit(1);
                     }
                 }
             }

             const uniquePatterns = new Set(allPatterns);
             if (uniquePatterns.size !== allPatterns.length) {
                 console.error("❌ Duplicate hostname patterns found in referral classifications.");
                 process.exit(1);
             }
        }

        // Ensure unknown fallback exists
        if (!fileContent.includes('id: "unknown"')) {
            console.error("❌ Unknown fallback ID not found in classification logic.");
            process.exit(1);
        }

        console.log("✅ Referral Classifications validated successfully.");
    } catch (e) {
        console.error("❌ Validation failed:", e);
        process.exit(1);
    }
}

validateReferralClassifications().catch(err => {
    console.error(err);
    process.exit(1);
});
