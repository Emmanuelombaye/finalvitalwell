import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import os from "node:os";

const root = path.join(process.cwd(), "public", "images");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.webp$/i.test(entry.name)) files.push(full);
  }
  return files;
}

const files = await walk(root);
let saved = 0;
let beforeTotal = 0;
let afterTotal = 0;

for (const file of files) {
  try {
    const before = (await fs.stat(file)).size;
    beforeTotal += before;
    const meta = await sharp(file).metadata();
    const isTrust = file.includes(`${path.sep}trust${path.sep}`);
    const targetMax = isTrust ? 224 : 1280;
    const maxEdge = Math.max(meta.width || 0, meta.height || 0);

    let pipeline = sharp(file).rotate();
    if (maxEdge > targetMax) {
      pipeline = pipeline.resize({
        width: meta.width >= meta.height ? targetMax : undefined,
        height: meta.height > meta.width ? targetMax : undefined,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    const buf = await pipeline.webp({ quality: isTrust ? 80 : 70, effort: 6 }).toBuffer();
    const tmp = path.join(os.tmpdir(), `vw-opt-${path.basename(file)}`);
    await fs.writeFile(tmp, buf);
    await fs.copyFile(tmp, file);
    await fs.unlink(tmp).catch(() => {});

    const after = buf.length;
    afterTotal += after;
    if (after < before) saved += before - after;
    console.log(
      `${path.relative(root, file)} ${(before / 1024).toFixed(1)}kb -> ${(after / 1024).toFixed(1)}kb`,
    );
  } catch (err) {
    console.warn(`skip ${path.relative(root, file)}: ${err.message}`);
  }
}

console.log(
  `TOTAL ${(beforeTotal / 1024).toFixed(0)}kb -> ${(afterTotal / 1024).toFixed(0)}kb (saved ${(saved / 1024).toFixed(0)}kb)`,
);
