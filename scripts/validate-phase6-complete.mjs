import { execSync } from 'child_process';

async function validatePhase6Complete() {
    console.log("Validating Phase 6 Completion...");

    const validatorsToRun = [
        "validate:robots",
        "validate:canonicals",
        "validate:http",
        "validate:crawl",
        "validate:sitemap",
        "validate:internal-links",
        "validate:indexnow",
        "validate:webmaster-platforms",
        "validate:entities",
        "validate:answer-readiness",
        "validate:ai-crawlers",
        "validate:monitoring",
        "validate:analytics-governance",
        "validate:referrals"
    ];

    let hasErrors = false;

    for (const validator of validatorsToRun) {
        console.log(`\n--- Running ${validator} ---`);
        try {
            // we skip build inside here assuming it was run prior
            execSync(`npm run ${validator}`, { stdio: 'inherit' });
        } catch (error) {
            console.error(`❌ Validation failed for ${validator}`);
            hasErrors = true;
            // Depending on requirements, we can exit early or accumulate. We'll exit early to match normal CI behavior.
            process.exit(1);
        }
    }

    if (hasErrors) {
        console.error("\n❌ Phase 6 Completion Validation Failed.");
        process.exit(1);
    } else {
        console.log("\n✅ Phase 6 Completion Validation Passed Successfully.");
    }
}

validatePhase6Complete().catch(err => {
    console.error(err);
    process.exit(1);
});
