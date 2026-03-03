const https = require('https');

const pages = [
    '/',
    '/about-us',
    '/services',
    '/our-lab',
    '/blog',
    '/contact'
];

const baseUrl = 'https://cogniqqai.com';

function fetchPage(path) {
    return new Promise((resolve, reject) => {
        https.get(baseUrl + path, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function extractImages(html) {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const urls = new Set();
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
        let url = match[1];
        if (url.startsWith('/')) url = baseUrl + url;
        if (!url.startsWith('data:')) {
            urls.add(url);
        }
    }

    // Also try to find background images or URLs in CSS/inline styles
    const bgRegex = /url\(['"]?([^'"\)]+)['"]?\)/g;
    while ((match = bgRegex.exec(html)) !== null) {
        let url = match[1];
        if (url.startsWith('/')) url = baseUrl + url;
        if (!url.startsWith('data:') && !url.startsWith('#')) {
            urls.add(url);
        }
    }
    return Array.from(urls);
}

async function main() {
    const allImages = new Set();
    for (const path of pages) {
        try {
            console.log(`Fetching ${path}...`);
            const html = await fetchPage(path);
            const images = extractImages(html);
            images.forEach(img => allImages.add(img));
        } catch (e) {
            console.error(`Error fetching ${path}:`, e.message);
        }
    }

    console.log('\n--- ALL FOUND IMAGES ---');
    Array.from(allImages).sort().forEach(url => console.log(url));
}

main();
