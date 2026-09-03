import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = String.raw`C:\Users\user\.cursor\projects\d-ceo-vitalwell\assets`;
const root = path.join(process.cwd(), "public");

const jobs = [
  ["realistic-checkout.png", "images/cards/home-step-checkout.webp", 1600, 1000],
  ["realistic-checkout.png", "images/how-it-works/step-2-checkout.webp", 1600, 1000],
  ["realistic-intake.png", "images/cards/home-feature-licensed-care.webp", 1280, 960],
  ["realistic-consult-phone.png", "images/cards/consult.webp", 1280, 960],
];

for (const [src, dest, w, h] of jobs) {
  const output = path.join(root, dest);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(path.join(assets, src))
    .resize(w, h, { fit: "cover", position: "centre" })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);
  const meta = await sharp(output).metadata();
  const stat = await fs.stat(output);
  console.log(`${dest} ${meta.width}x${meta.height} ${(stat.size / 1024).toFixed(1)}kb`);
}
