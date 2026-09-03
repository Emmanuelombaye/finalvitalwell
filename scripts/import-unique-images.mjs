import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = String.raw`C:\Users\user\.cursor\projects\d-ceo-vitalwell\assets`;
const root = path.join(process.cwd(), "public");

const jobs = [
  ["unique-hiw-hero.png", "images/how-it-works/hero.webp", 1600, 900],
  ["unique-hiw-step-checkout.png", "images/how-it-works/step-2-checkout.webp", 1600, 1000],
  ["unique-home-step-intake.png", "images/cards/home-step-intake.webp", 1600, 1000],
  ["unique-home-step-review.png", "images/cards/home-step-review.webp", 1600, 1000],
  ["unique-page-treatments.png", "images/pages/treatments-hero.webp", 1600, 1100],
  ["unique-page-get-started.png", "images/pages/get-started-hero.webp", 1600, 1100],
  ["unique-page-pricing.png", "images/pages/pricing-hero.webp", 1600, 1100],
  ["unique-page-shop.png", "images/pages/shop-hero.webp", 1600, 1100],
  ["unique-page-learn.png", "images/pages/learn-hero.webp", 1600, 1100],
  ["unique-page-learn-glp1.png", "images/pages/learn-glp1-hero.webp", 1600, 1100],
  ["unique-page-care.png", "images/pages/care-hero.webp", 1600, 1100],
  ["unique-care-start-intake.png", "images/cards/care-start-intake.webp", 1200, 1500],
  ["unique-care-message.png", "images/cards/care-message.webp", 1200, 1500],
  ["unique-care-track-order.png", "images/cards/care-track-order.webp", 1200, 1500],
  ["unique-get-started-availability.png", "images/cards/get-started-availability.webp", 1200, 1500],
  ["unique-get-started-how-it-works.png", "images/cards/get-started-how-it-works.webp", 1200, 1500],
  ["unique-shop-weight-card.png", "images/cards/shop-weight-management.webp", 1200, 1500],
  ["unique-provider-network-alt.png", "images/cards/provider-network.webp", 1200, 1500],
  ["unique-learn-safety-topic.png", "images/cards/learn-glp1-safety-topic.webp", 1200, 1500],
];

for (const [src, dest, w, h] of jobs) {
  const input = path.join(assets, src);
  const output = path.join(root, dest);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(input)
    .rotate()
    .resize(w, h, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 72, effort: 6 })
    .toFile(output);
  const meta = await sharp(output).metadata();
  const stat = await fs.stat(output);
  console.log(`${dest} ${meta.width}x${meta.height} ${(stat.size / 1024).toFixed(1)}kb`);
}
