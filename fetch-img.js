const https = require('https');

function fetchHTML() {
    return new Promise((resolve, reject) => {
        https.get('https://cogniqqai.com', (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

function fetchCSS(url) {
    if (!url.startsWith('https:')) url = 'https://cogniqqai.com' + url;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

async function main() {
    try {
        const html = await fetchHTML();
        const urls = new Set();

        // Extract images from html
        const imgRegex = /src="([^"]+\.(png|jpg|jpeg|svg|webp|gif).*?)"/gi;
        let match;
        while ((match = imgRegex.exec(html)) !== null) {
            // Decode html entities like &amp;
            urls.add(match[1].replace(/&amp;/g, '&'));
        }

        // Extract next/image srcs too 
        const nextRegex = /<img[^>]+src="([^">]+)"/gi;
        while ((match = nextRegex.exec(html)) !== null) {
            urls.add(match[1].replace(/&amp;/g, '&'));
        }

        // Check inline styles or links to css
        console.log(Array.from(urls).join('\n'));

    } catch (err) {
        console.error(err);
    }
}

main();
