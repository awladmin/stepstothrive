// Trace a PNG into a real vector SVG using imagetracerjs.
// Usage: node scripts/trace-logo.mjs <source.png> <output.svg>

import fs from 'node:fs/promises';

import ImageTracer from 'imagetracerjs';
import sharp from 'sharp';

const [, , srcArg, destArg, ...colorArgs] = process.argv;
if (!srcArg || !destArg) {
  console.error(
    'Usage: node scripts/trace-logo.mjs <source.png> <output.svg> [#hex1] [#hex2] ...',
  );
  console.error('  Hex colours form the palette (transparent is always added).');
  process.exit(1);
}

function hexToRgba(hex) {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
    a: 255,
  };
}

// Preserve transparency. Trim only the empty alpha border (no colour fill).
// Then threshold the alpha channel to binary (fully opaque or fully transparent)
// so the tracer's colour quantisation doesn't mistake anti-aliased edges for
// semi-transparent fills.
const { data, info } = await sharp(srcArg)
  .ensureAlpha()
  .trim()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Binary alpha: any pixel >= 50% opacity becomes fully opaque, below becomes
// fully transparent. Removes the soft alpha edges that confused the tracer.
for (let i = 3; i < data.length; i += 4) {
  data[i] = data[i] >= 128 ? 255 : 0;
}

const imageData = {
  data: new Uint8ClampedArray(data),
  width: info.width,
  height: info.height,
};

// Force the palette to the exact entries given on the CLI, plus transparent
// at the end. This stops the quantiser inventing intermediate colours and
// keeps the transparent background actually transparent in the output.
const pal = [
  ...colorArgs.map(hexToRgba),
  { r: 0, g: 0, b: 0, a: 0 }, // transparent
];

const svg = ImageTracer.imagedataToSVG(imageData, {
  pal,
  pathomit: 8,
  ltres: 1,
  qtres: 1,
  strokewidth: 0,
  linefilter: true,
  rightangleenhance: false,
});

await fs.writeFile(destArg, svg);
const stats = await fs.stat(destArg);
console.log(`Traced ${srcArg} -> ${destArg} (${Math.round(stats.size / 1024)} KB)`);
