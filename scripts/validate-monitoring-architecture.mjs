import fs from 'fs';
import path from 'path';

async function validateMonitoringArchitecture() {
    console.log("Validating Monitoring Architecture...");

    const filePath = path.resolve(process.cwd(), 'src/data/monitoringArchitecture.ts');

    if (!fs.existsSync(filePath)) {
        console.error("❌ Monitoring architecture file not found:", filePath);
        process.exit(1);
    }

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const idsMatches = fileContent.match(/id:\s*["']([^"']+)["']/g);
        if (!idsMatches) {
            console.error("❌ No IDs found in monitoring checks.");
            process.exit(1);
        }

        const ids = idsMatches.map(id => id.replace(/id:\s*["']([^"']+)["']/, '$1'));
        const uniqueIds = new Set(ids);

        if (uniqueIds.size !== ids.length) {
            console.error("❌ Duplicate IDs found in monitoring checks.");
            process.exit(1);
        }

        const validAreas = [
            "availability", "deployment", "crawl", "indexation", "analytics",
            "conversion", "performance", "cdn", "functions", "sanity",
            "content-freshness", "security"
        ];

        const areasMatches = fileContent.match(/area:\s*["']([^"']+)["']/g);
        if (areasMatches) {
             const areas = areasMatches.map(a => a.replace(/area:\s*["']([^"']+)["']/, '$1'));
             for (const area of areas) {
                 if (!validAreas.includes(area)) {
                     console.error(`❌ Invalid monitoring area found: ${area}`);
                     process.exit(1);
                 }
             }
        }

        const validSeverities = ["critical", "important", "warning", "informational"];
        const severitiesMatches = fileContent.match(/severity:\s*["']([^"']+)["']/g);
        if (severitiesMatches) {
             const severities = severitiesMatches.map(s => s.replace(/severity:\s*["']([^"']+)["']/, '$1'));
             for (const severity of severities) {
                 if (!validSeverities.includes(severity)) {
                     console.error(`❌ Invalid monitoring severity found: ${severity}`);
                     process.exit(1);
                 }
             }
        }

        const validCadences = ["continuous", "daily", "weekly", "monthly", "quarterly"];
        const cadencesMatches = fileContent.match(/cadence:\s*["']([^"']+)["']/g);
        if (cadencesMatches) {
             const cadences = cadencesMatches.map(c => c.replace(/cadence:\s*["']([^"']+)["']/, '$1'));
             for (const cadence of cadences) {
                 if (!validCadences.includes(cadence)) {
                     console.error(`❌ Invalid monitoring cadence found: ${cadence}`);
                     process.exit(1);
                 }
             }
        }

        if (fileContent.includes('@') && fileContent.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
            console.error("❌ Personal email found in monitoring architecture.");
            process.exit(1);
        }

        if (fileContent.includes('secret') || fileContent.includes('password') || fileContent.includes('token')) {
            // Very rudimentary check, but good enough for this script without complex AST
            // Will warn if 'token' is used in normal text, let's refine
            const forbiddenKeys = ['secret:', 'password:', 'token:'];
            for (const key of forbiddenKeys) {
                if (fileContent.toLowerCase().includes(key)) {
                    console.error(`❌ Potential secret value found: ${key}`);
                    process.exit(1);
                }
            }
        }

        const ownerMatches = fileContent.match(/ownerRole:\s*["']([^"']+)["']/g);
        if (!ownerMatches) {
             console.error("❌ No owner roles found in monitoring checks.");
             process.exit(1);
        }
        for(const match of ownerMatches){
            const owner = match.replace(/ownerRole:\s*["']([^"']+)["']/, '$1');
            if(owner.trim() === '' || owner.toLowerCase().includes('placeholder')){
                console.error("❌ Empty or placeholder owner role found.");
                process.exit(1);
            }
        }

        console.log("✅ Monitoring Architecture validated successfully.");
    } catch (e) {
        console.error("❌ Validation failed:", e);
        process.exit(1);
    }
}

validateMonitoringArchitecture().catch(err => {
    console.error(err);
    process.exit(1);
});
