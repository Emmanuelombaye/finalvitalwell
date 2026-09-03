import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");

const RULES = [
  { match: /hero\.webp$|category-weight\.webp$|weight-management-hero\.webp$/, width: 1200, quality: 76 },
  { match: /cards\//, width: 640, quality: 78 },
  { match: /vials\//, width: 560, quality: 80 },
  { match: /trust\//, width: 112, quality: 82 },
  { match: /brand\//, width: 320, quality: 82 },
];

async function collectWebpFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "brand") continue;
      files.push(...(await collectWebpFiles(full)));
    } else if (entry.name.endsWith(".webp")) {
      files.push(full);
    }
  }

  return files;
}

function ruleFor(file) {
  const rel = file.replace(/\\/g, "/");
  return RULES.find((rule) => rule.match.test(rel)) ?? { width: 800, quality: 78 };
}

async function optimizeFile(file) {
  const rule = ruleFor(file);
  const before = (await fs.stat(file)).size;

  const buffer = await sharp(file)
    .resize({ width: rule.width, withoutEnlargement: true })
    .webp({ quality: rule.quality, effort: 6 })
    .toBuffer();

  await fs.writeFile(file, buffer);

  const after = (await fs.stat(file)).size;
  const rel = path.relative(publicDir, file);
  console.log(`${rel}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`);
}

async function run() {
  const files = await collectWebpFiles(publicDir);
  for (const file of files) {
    await optimizeFile(file);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
