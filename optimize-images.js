const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImage(src, dest, options = { quality: 80 }) {
  try {
    const start = Date.now();
    await sharp(src)
      .webp(options)
      .toFile(dest);
    console.log(`✅ Converted ${path.basename(src)} -> ${path.basename(dest)} in ${Date.now() - start}ms`);
  } catch (err) {
    console.error(`❌ Failed to convert ${src}:`, err);
  }
}

async function main() {
  const publicDir = path.join(__dirname, 'public');
  
  // 1. Convert Logo
  await convertImage(
    path.join(publicDir, 'logo.png'),
    path.join(publicDir, 'logo.webp'),
    { quality: 90 } // higher quality for logo
  );

  // 2. Convert Hero Glass
  await convertImage(
    path.join(publicDir, 'hero-glass.png'),
    path.join(publicDir, 'hero-glass.webp'),
    { quality: 80 }
  );

  // 3. Convert Services
  const servicesDir = path.join(publicDir, 'services');
  if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.png'));
    for (const file of files) {
      await convertImage(
        path.join(servicesDir, file),
        path.join(servicesDir, file.replace('.png', '.webp')),
        { quality: 75 } // slightly more aggressive compression for big service images
      );
    }
  }

  console.log('🎉 Optimization complete!');
}

main();
