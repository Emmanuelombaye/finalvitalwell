import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = String.raw`C:\Users\user\.cursor\projects\d-ceo-vitalwell\assets`;
const root = path.join(process.cwd(), "public");

const jobs = [
  ["nodoctor-how-it-works.png", "images/cards/learn-how-it-works.webp", 960, 1200],
  ["nodoctor-provider-network.png", "images/cards/learn-provider-network.webp", 960, 1200],
  ["nodoctor-provider-network.png", "images/cards/provider-network.webp", 960, 1200],
  ["nodoctor-safety.png", "images/cards/learn-safety-eligibility.webp", 960, 1200],
  ["nodoctor-consult.png", "images/cards/consult.webp", 1200, 900],
  ["nodoctor-review.png", "images/how-it-works/step-4-review.webp", 1600, 1000],
  ["nodoctor-network-badge.png", "images/trust/provider-network.webp", 224, 224],
];

for (const [src, dest, w, h] of jobs) {
  const output = path.join(root, dest);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(path.join(assets, src))
    .resize(w, h, { fit: "cover", position: "centre" })
    .webp({ quality: 84, effort: 4 })
    .toFile(output);
  const meta = await sharp(output).metadata();
  console.log(dest, meta.width, "x", meta.height);
}
