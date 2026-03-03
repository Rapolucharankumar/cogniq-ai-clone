const fs = require('fs');
const path = require('path');
const https = require('https');

const allImages = fs.readFileSync('all_images.txt', 'utf16le').split('\n').filter(l => l.startsWith('http'));

const publicDir = path.join(__dirname, 'public');

function download(url, dest) {
    return new Promise((resolve, reject) => {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        if (fs.existsSync(dest)) {
            console.log(`Exists: ${dest}`);
            return resolve();
        }
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function main() {
    for (let url of allImages) {
        url = url.trim();
        if (!url) continue;

        // For cogniqqai URLs
        let destPath = '';
        if (url.includes('cogniqqai.com') && !url.includes('unsplash.com')) {
            // e.g. https://cogniqqai.com/AboutUsPage/BookStrategyCall.png
            try {
                const urlObj = new URL(url);
                let pathname = decodeURIComponent(urlObj.pathname);
                if (pathname.startsWith('/_next/image')) {
                    const searchParams = new URLSearchParams(urlObj.search);
                    pathname = decodeURIComponent(searchParams.get('url'));
                }
                destPath = path.join(publicDir, pathname);
            } catch (e) { console.error(e) }
        } else {
            // Just save unsplash images in public/unsplash
            try {
                const urlObj = new URL(url);
                let ext = urlObj.pathname.split('.').pop();
                if (ext.length > 5 || !ext) ext = 'jpg';
                const filename = Buffer.from(url).toString('base64').substring(0, 20).replace(/[^a-zA-Z0-9]/g, '') + '.' + ext;
                destPath = path.join(publicDir, 'unsplash', filename);
            } catch (e) { console.error(e) }
        }

        if (destPath) {
            console.log(`Downloading: ${url} -> ${destPath}`);
            try {
                await download(url, destPath);
            } catch (e) {
                console.error(`Failed ${url}:`, e.message);
            }
        }
    }
}
main();
