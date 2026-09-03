import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = String.raw`C:\Users\user\.cursor\projects\d-ceo-vitalwell\assets`;
const outDir = path.join(process.cwd(), "public", "images", "cards");

const jobs = [
  ["home-feature-licensed-care.png", "home-feature-licensed-care.webp"],
  ["home-feature-pricing.png", "home-feature-pricing.webp"],
  ["home-feature-fulfillment.png", "home-feature-fulfillment.webp"],
  ["home-feature-journey.png", "home-feature-journey.webp"],
];

await fs.mkdir(outDir, { recursive: true });

for (const [src, dest] of jobs) {
  const output = path.join(outDir, dest);
  await sharp(path.join(assets, src))
    .resize(1280, 960, { fit: "cover", position: "centre" })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);
  const meta = await sharp(output).metadata();
  const stat = await fs.stat(output);
  console.log(`${dest} ${meta.width}x${meta.height} ${(stat.size / 1024).toFixed(1)}kb`);
}
