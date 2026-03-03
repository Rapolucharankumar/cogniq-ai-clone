const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    "/HeaderFooter/HeaderCompanyLogo.svg",
    "/OurLabPage/Arrow 1.svg",
    "/HomePage/HeroSectionBG.svg",
    "/HomePage/IdeaIconHero.svg",
    "/HomePage/BullsEyeHero.svg",
    "/HomePage/MagicSparklesHero.svg",
    "/HomePage/HomeAboutUsRobotHandImage.png",
    "/HomePage/OurServicesCustomer.svg",
    "/HomePage/OurServicesScheduling.svg",
    "/HomePage/OurServicesInventory.svg",
    "/HomePage/OurServicesTools.svg",
    "/HomePage/Arrow 2.svg",
    "/HomePage/WhyUsHandshake.svg",
    "/HomePage/WhyUsScale.svg",
    "/HomePage/WhyUsAI.svg",
    "/HomePage/WhyUsDesign.svg",
    "/HomePage/ProcessDiscovery.png",
    "/HomePage/ProcessDesign.png",
    "/HomePage/ProcessDevelopment.png",
    "/HomePage/ProcessLaunch.png",
    "/HomePage/ReadyToTransform.jpg",
    "/HeaderFooter/FooterCompanyLogo.svg",
    "/HeaderFooter/SocialInstagram.svg",
    "/HeaderFooter/SocialX.svg",
    "/HeaderFooter/SocialLinkedin.svg"
];

const publicDir = path.join(__dirname, 'public');

function downloadImage(urlPath) {
    const fullUrl = 'https://cogniqqai.com' + urlPath.split('/').map(encodeURIComponent).join('/');
    const destPath = path.join(publicDir, decodeURIComponent(urlPath));

    // ensure directory exists
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        https.get(fullUrl, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${fullUrl}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(destPath, () => reject(err));
        });
    });
}

async function main() {
    for (const img of images) {
        try {
            await downloadImage(img);
            console.log(`Downloaded ${img}`);
        } catch (err) {
            console.error(err.message);
        }
    }
}

main();
