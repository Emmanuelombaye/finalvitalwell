import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const srcDir = path.join(process.cwd(), "images");
const publicDir = path.join(process.cwd(), "public", "images");

const CREAM = "#f7f5f2";
const NAVY = "#0b132b";

/** Resize without cropping — full image visible inside frame. */
async function exportContain(input, output, width, height, background = CREAM, quality = 82) {
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(input)
    .rotate()
    .resize(width, height, { fit: "contain", background })
    .webp({ quality, effort: 6 })
    .toFile(output);
  const stat = await fs.stat(output);
  console.log(`${path.relative(publicDir, output)} (${Math.round(stat.size / 1024)}KB)`);
}

/** Width-only resize for heroes/banners. */
async function exportWidth(input, output, width, quality = 78) {
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(output);
  const stat = await fs.stat(output);
  console.log(`${path.relative(publicDir, output)} (${Math.round(stat.size / 1024)}KB)`);
}

const jobs = [
  // How It Works — step cards (16:10)
  ["step-3-intake.jpg", "how-it-works/step-3-intake.webp", 960, 600],
  ["step-4-review.jpg", "how-it-works/step-4-review.webp", 960, 600],
  ["step-5-account.jpg", "how-it-works/step-5-account.webp", 960, 600],
  // How It Works — CTA wide card (16:10)
  ["cta-programs.jpg", "how-it-works/cta-programs.webp", 960, 600, NAVY],
  // How It Works — page hero (16:11)
  ["hero.jpg", "how-it-works/hero.webp", 1200, 825],
  // Site hero + category
  ["hero.jpg", "hero.webp", 1200, 900],
  ["category-weight.jpg", "category-weight.webp", 1200, 900],
  ["weight-management-hero.jpg", "weight-management-hero.webp", 1200, 900],
  // Browse tile cards (4:5)
  ["cardsconsult.jpg", "cards/consult.webp", 640, 800],
  ["cardsdelivery.jpg", "cards/delivery.webp", 640, 800],
  ["cardsprovider-network.jpg", "cards/provider-network.webp", 640, 800],
];

async function reprocessExisting(input, output, width, height, background = CREAM) {
  try {
    await fs.access(input);
    await exportContain(input, output, width, height, background);
  } catch {
    console.log(`skip ${path.basename(output)} (no source)`);
  }
}

async function run() {
  console.log("Importing from images/ …\n");

  for (const [file, out, w, h, bg = CREAM] of jobs) {
    const input = path.join(srcDir, file);
    const output = path.join(publicDir, out);
    try {
      await fs.access(input);
      if (out === "hero.webp" || out === "category-weight.webp" || out === "weight-management-hero.webp") {
        await exportWidth(input, output, w);
      } else {
        await exportContain(input, output, w, h, bg);
      }
    } catch {
      console.warn(`missing source: ${file}`);
    }
  }

  // Re-fit previously generated step 1 & 2 so all cards match (no crop)
  const assetsDir = "C:/Users/user/.cursor/projects/d-ceo-vitalwell/assets";
  await reprocessExisting(
    path.join(assetsDir, "hiw-step-1-choose.png"),
    path.join(publicDir, "how-it-works/step-1-choose.webp"),
    960,
    600
  );
  await reprocessExisting(
    path.join(assetsDir, "hiw-step-2-checkout.png"),
    path.join(publicDir, "how-it-works/step-2-checkout.webp"),
    960,
    600
  );

  console.log("\nDone.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
