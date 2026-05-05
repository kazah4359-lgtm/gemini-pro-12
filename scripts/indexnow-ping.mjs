// Pings IndexNow (Bing + Yandex) with all sitemap URLs after deploy.
// Reads dist/sitemap-0.xml, extracts <loc>, sends to api.indexnow.org.
// Uses IndexNow keyLocation parameter because key file lives at site base, not host root.

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const SITE = 'https://kazah4359-lgtm.github.io';
const BASE = '/gemini-pro-12';
const KEY = '0ae8406eb07f1111ced8b5ac40b4b2b4';
const KEY_LOCATION = `${SITE}${BASE}/${KEY}.txt`;

const SITEMAP_PATH = resolve(process.cwd(), 'dist/sitemap-0.xml');

async function getUrls() {
  const xml = await readFile(SITEMAP_PATH, 'utf8');
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function ping(host, urls) {
  const body = JSON.stringify({
    host,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  });

  // Use api.indexnow.org as the unified endpoint (replicates to Bing, Yandex, Naver, Seznam).
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });

  return { status: res.status, statusText: res.statusText };
}

async function main() {
  const urls = await getUrls();
  if (urls.length === 0) {
    console.log('No URLs found in sitemap, skipping IndexNow ping.');
    return;
  }

  const host = new URL(SITE).hostname;
  console.log(`IndexNow: pinging ${urls.length} URLs from ${host}...`);
  for (const u of urls.slice(0, 5)) console.log(`  - ${u}`);
  if (urls.length > 5) console.log(`  ... and ${urls.length - 5} more`);

  const result = await ping(host, urls);
  console.log(`IndexNow response: ${result.status} ${result.statusText}`);

  // 200 = OK, 202 = Accepted, both are success
  if (result.status !== 200 && result.status !== 202) {
    console.warn(`IndexNow non-success status; not failing the build.`);
  }
}

main().catch((err) => {
  console.error('IndexNow ping failed:', err);
  // Don't fail the build if IndexNow is down
  process.exit(0);
});
