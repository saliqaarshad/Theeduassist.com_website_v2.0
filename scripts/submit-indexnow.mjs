import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'www.theeduassist.com';
const KEY = 'b50f16bdf5ffe352f6c93e5bcdfdd691';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'api.indexnow.org';

const isProduction = process.argv.includes('--production');

function loadManifest() {
  const manifestPath = path.join(__dirname, '../reports/website-2.5-phase-6-part-2-submission-manifest.json');
  try {
    const data = fs.readFileSync(manifestPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`❌ Failed to read submission manifest: ${error.message}`);
    process.exit(1);
  }
}

function validateUrl(url) {
  if (!url.startsWith(`https://${HOST}/`)) return false;
  if (url.includes('localhost') || url.includes('.vercel.app')) return false;
  if (url.includes('/api/')) return false;
  if (url.includes('?')) return false;
  return true;
}

async function submitIndexNow(urlList) {
    const validUrls = urlList.filter(validateUrl);

    if (validUrls.length === 0) {
        console.log('No valid URLs to submit.');
        return;
    }

    if (validUrls.length > 10000) {
         console.error('❌ Batch size exceeds IndexNow limit of 10,000 URLs.');
         process.exit(1);
    }

    const payload = JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: validUrls
    });

    if (!isProduction) {
        console.log('\n[DRY RUN] IndexNow Submission:');
        console.log(`Endpoint: https://${ENDPOINT}/indexnow`);
        console.log(`Host: ${HOST}`);
        console.log(`Key Location: ${KEY_LOCATION}`);
        console.log(`URLs to submit (${validUrls.length}):`);
        validUrls.forEach(u => console.log(`  - ${u}`));
        console.log('\nUse --production to submit to live endpoint.');
        return;
    }

    console.log(`\nSubmitting ${validUrls.length} URLs to IndexNow...`);

    const options = {
        hostname: ENDPOINT,
        port: 443,
        path: '/indexnow',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(payload)
        }
    };

    const req = https.request(options, (res) => {
        console.log(`IndexNow Response Status: ${res.statusCode}`);
        if (res.statusCode === 200 || res.statusCode === 202) {
             console.log('✅ URLs submitted successfully.');
        } else {
             console.error(`❌ Submission failed with status: ${res.statusCode}`);
        }
    });

    req.on('error', (error) => {
        console.error(`❌ Request error: ${error.message}`);
    });

    req.write(payload);
    req.end();
}

const manifest = loadManifest();
const changes = manifest.indexNowChanges || { added: [], updated: [], deleted: [] };
const allUrls = [...changes.added, ...changes.updated, ...changes.deleted];

submitIndexNow(allUrls);
