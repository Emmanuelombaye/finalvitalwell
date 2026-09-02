import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.join(process.cwd(), "public");

const jobs = [
  { in: "images/vials/semaglutide.png", out: "images/vials/semaglutide.webp", w: 800 },
  { in: "images/vials/tirzepatide.png", out: "images/vials/tirzepatide.webp", w: 800 },
  { in: "images/trust/provider-network.png", out: "images/trust/provider-network.webp", w: 112 },
  { in: "images/trust/usa-pharmacy.png", out: "images/trust/usa-pharmacy.webp", w: 112 },
  { in: "images/trust/hipaa.png", out: "images/trust/hipaa.webp", w: 112 },
  { in: "newlogo.webp", out: "brand/logo.webp", w: 320 },
  { in: "newlogo-nav.webp", out: "brand/logo-nav.webp", w: 320 },
  { in: "images/hero.jpg", out: "images/hero.webp", w: 1600 },
  { in: "images/category-weight.jpg", out: "images/category-weight.webp", w: 1600 },
];

async function run() {
  await fs.mkdir(path.join(root, "brand"), { recursive: true });

  for (const job of jobs) {
    const input = path.join(root, job.in);
    const output = path.join(root, job.out);
    await fs.mkdir(path.dirname(output), { recursive: true });

    try {
      await fs.access(input);
    } catch {
      console.warn(`skip missing: ${job.in}`);
      continue;
    }

    await sharp(input)
      .resize({ width: job.w, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(output);

    const inStat = await fs.stat(input);
    const outStat = await fs.stat(output);
    console.log(`${job.in} -> ${job.out} (${Math.round(inStat.size / 1024)}KB -> ${Math.round(outStat.size / 1024)}KB)`);
  }

  for (const file of ["icon.svg", "favicon.svg"]) {
    const src = path.join(root, file);
    const dest = path.join(root, "brand", file);
    try {
      await fs.copyFile(src, dest);
      console.log(`copied ${file} -> brand/${file}`);
    } catch {
      /* optional */
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
