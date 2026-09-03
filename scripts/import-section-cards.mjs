import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = String.raw`C:\Users\user\.cursor\projects\d-ceo-vitalwell\assets`;
const cardsDir = path.join(process.cwd(), "public", "images", "cards");
const hiwDir = path.join(process.cwd(), "public", "images", "how-it-works");

const portraitJobs = [
  ["learn-how-programs-work.png", "learn-how-programs-work.webp", 960, 1200],
  ["learn-compounded-meds.png", "learn-compounded-meds.webp", 960, 1200],
  ["learn-safety-eligibility.png", "learn-safety-eligibility.webp", 960, 1200],
];

const landscapeJobs = [
  ["cta-check-eligibility.png", path.join(hiwDir, "cta-eligibility.webp"), 1600, 1000],
  ["cta-browse-programs.png", path.join(hiwDir, "cta-programs.webp"), 1600, 1000],
  ["step-fulfilment-support.png", path.join(hiwDir, "step-6-delivery.webp"), 1600, 1000],
];

await fs.mkdir(cardsDir, { recursive: true });
await fs.mkdir(hiwDir, { recursive: true });

for (const [src, dest, w, h] of portraitJobs) {
  const output = path.join(cardsDir, dest);
  await sharp(path.join(assets, src))
    .resize(w, h, { fit: "cover", position: "centre" })
    .webp({ quality: 84, effort: 4 })
    .toFile(output);
  const meta = await sharp(output).metadata();
  console.log(dest, meta.width, meta.height);
}

for (const [src, dest, w, h] of landscapeJobs) {
  await sharp(path.join(assets, src))
    .resize(w, h, { fit: "cover", position: "centre" })
    .webp({ quality: 84, effort: 4 })
    .toFile(dest);
  const meta = await sharp(dest).metadata();
  console.log(path.basename(dest), meta.width, meta.height);
}
