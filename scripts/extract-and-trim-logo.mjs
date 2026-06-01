import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SVG_PATH = 'C:/Users/danny/Downloads/Steps to Thrive.svg';
const OUT_PATH = path.join(process.cwd(), 'public', 'logo.png');

const svg = await fs.readFile(SVG_PATH);

// Render SVG (filters applied) to a high-resolution PNG, then trim
// the surrounding whitespace (Canva pads heavily around its exports).
const rendered = await sharp(svg, { density: 300 })
  .resize({ width: 2000, withoutEnlargement: true })
  .png()
  .toBuffer();

const renderedMeta = await sharp(rendered).metadata();
console.log(`Rendered: ${renderedMeta.width}x${renderedMeta.height}, channels=${renderedMeta.channels}, hasAlpha=${renderedMeta.hasAlpha}`);

// Top-left pixel is transparent on a Canva SVG export, so the default
// trim() will remove the surrounding alpha=0 area.
const trimmed = await sharp(rendered)
  .trim()
  .png()
  .toFile(OUT_PATH);

console.log(`Trimmed: ${trimmed.width}x${trimmed.height} -> ${OUT_PATH}`);

// Clean up raw extract if it was created on a previous run
try {
  await fs.unlink(path.join(process.cwd(), 'public', 'logo-raw.png'));
} catch {}
