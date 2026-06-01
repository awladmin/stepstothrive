import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const PUBLIC = path.join(process.cwd(), 'public');

const jobs = [
  {
    src: 'jo-headshot-1.png',
    dest: 'jo-portrait.jpg',
    width: 1200,
    height: 1500,
    fit: 'cover',
    description: 'About page hero (4:5 portrait)',
  },
  {
    src: 'square.png',
    dest: 'jo-thumb.jpg',
    width: 600,
    height: 600,
    fit: 'cover',
    description: 'Home page bio thumbnail (square)',
  },
  {
    src: 'jo-headshot-2.png',
    dest: 'jo-desk.jpg',
    width: 1200,
    height: 1500,
    fit: 'cover',
    description: 'Optional Contact page image (4:5 portrait)',
  },
];

for (const job of jobs) {
  const srcPath = path.join(PUBLIC, job.src);
  const destPath = path.join(PUBLIC, job.dest);
  const meta = await sharp(srcPath).metadata();
  const { size } = await sharp(srcPath)
    .resize({
      width: job.width,
      height: job.height,
      fit: job.fit,
      position: 'centre',
    })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(destPath);
  console.log(
    `${job.dest.padEnd(20)} ${job.width}x${job.height}  ${Math.round(size / 1024)} KB  (from ${meta.width}x${meta.height} ${job.src})`,
  );
}

// Tidy up the originals so the public folder stays clean
for (const job of jobs) {
  await fs.unlink(path.join(PUBLIC, job.src));
}
console.log('Originals removed.');
