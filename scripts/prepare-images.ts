import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import { join, parse } from 'node:path';

const source = join(process.cwd(), 'assets/source');
const destination = join(process.cwd(), 'public/images');
await mkdir(destination, { recursive: true });
for (const file of await readdir(source)) {
  if (!/\.(png|jpg)$/i.test(file)) continue;
  for (const width of [640, 1280]) {
    await sharp(join(source, file)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(destination, `${parse(file).name}-${width}.webp`));
  }
}
console.log('Prepared 640px and 1280px WebP images.');
