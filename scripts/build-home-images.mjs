import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.join(process.cwd(), "..", ".cursor", "projects", "d-ceo-vitalwell", "assets");
const altAssetsDir = "C:/Users/user/.cursor/projects/d-ceo-vitalwell/assets";
const publicDir = path.join(process.cwd(), "public", "images");

const brandCards = [
  {
    out: "cards/consult.webp",
    width: 800,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0b132b"/>
          <stop offset="100%" stop-color="#162347"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)"/>
      <circle cx="620" cy="120" r="180" fill="#d4af37" opacity="0.12"/>
      <rect x="80" y="90" width="320" height="220" rx="24" fill="#ffffff" opacity="0.95"/>
      <rect x="110" y="120" width="120" height="120" rx="60" fill="#dbeafe"/>
      <rect x="250" y="135" width="120" height="18" rx="9" fill="#cbd5e1"/>
      <rect x="250" y="165" width="90" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="250" y="195" width="100" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="430" y="170" width="250" height="300" rx="28" fill="#ffffff" opacity="0.08" stroke="#d4af37" stroke-width="2"/>
      <rect x="470" y="220" width="170" height="110" rx="16" fill="#ffffff" opacity="0.12"/>
      <circle cx="555" cy="275" r="34" fill="#d4af37" opacity="0.85"/>
      <rect x="470" y="360" width="110" height="12" rx="6" fill="#ffffff" opacity="0.35"/>
      <rect x="470" y="385" width="150" height="12" rx="6" fill="#ffffff" opacity="0.22"/>
    </svg>`,
  },
  {
    out: "cards/pricing.webp",
    width: 800,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#f8fafc"/>
      <rect x="0" y="0" width="800" height="600" fill="#0b132b" opacity="0.04"/>
      <rect x="90" y="110" width="280" height="380" rx="28" fill="#0b132b"/>
      <text x="130" y="190" fill="#d4af37" font-family="Arial, sans-serif" font-size="22" font-weight="700">SEMAGLUTIDE</text>
      <text x="130" y="250" fill="#ffffff" font-family="Arial, sans-serif" font-size="54" font-weight="800">$149</text>
      <text x="130" y="285" fill="#94a3b8" font-family="Arial, sans-serif" font-size="18">per month</text>
      <rect x="130" y="320" width="200" height="12" rx="6" fill="#ffffff" opacity="0.18"/>
      <rect x="130" y="345" width="170" height="12" rx="6" fill="#ffffff" opacity="0.12"/>
      <rect x="430" y="110" width="280" height="380" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <text x="470" y="190" fill="#8a7340" font-family="Arial, sans-serif" font-size="22" font-weight="700">TIRZEPATIDE</text>
      <text x="470" y="250" fill="#0b132b" font-family="Arial, sans-serif" font-size="54" font-weight="800">$249</text>
      <text x="470" y="285" fill="#64748b" font-family="Arial, sans-serif" font-size="18">per month</text>
      <rect x="470" y="320" width="200" height="12" rx="6" fill="#0b132b" opacity="0.08"/>
      <rect x="470" y="345" width="170" height="12" rx="6" fill="#0b132b" opacity="0.06"/>
    </svg>`,
  },
  {
    out: "cards/delivery.webp",
    width: 800,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#eef2f7"/>
      <rect x="120" y="340" width="560" height="16" rx="8" fill="#cbd5e1"/>
      <rect x="180" y="180" width="220" height="180" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
      <rect x="210" y="210" width="160" height="24" rx="6" fill="#0b132b" opacity="0.08"/>
      <rect x="210" y="250" width="120" height="16" rx="8" fill="#d4af37" opacity="0.35"/>
      <rect x="210" y="280" width="140" height="16" rx="8" fill="#0b132b" opacity="0.06"/>
      <rect x="470" y="250" width="180" height="110" rx="16" fill="#0b132b"/>
      <rect x="500" y="280" width="120" height="14" rx="7" fill="#ffffff" opacity="0.25"/>
      <rect x="500" y="305" width="90" height="14" rx="7" fill="#ffffff" opacity="0.18"/>
      <circle cx="520" cy="390" r="28" fill="#0b132b"/>
      <circle cx="620" cy="390" r="28" fill="#0b132b"/>
    </svg>`,
  },
  {
    out: "cards/step-choose.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#0b132b"/>
      <circle cx="700" cy="80" r="120" fill="#d4af37" opacity="0.15"/>
      <rect x="90" y="90" width="250" height="320" rx="24" fill="#ffffff" opacity="0.08" stroke="#d4af37" stroke-width="2"/>
      <rect x="380" y="90" width="250" height="320" rx="24" fill="#ffffff" opacity="0.08" stroke="#ffffff" stroke-width="1.5"/>
      <text x="130" y="160" fill="#d4af37" font-family="Arial, sans-serif" font-size="20" font-weight="700">PROGRAM A</text>
      <text x="420" y="160" fill="#ffffff" font-family="Arial, sans-serif" font-size="20" font-weight="700">PROGRAM B</text>
    </svg>`,
  },
  {
    out: "cards/step-checkout.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#f8fafc"/>
      <rect x="180" y="70" width="440" height="360" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="230" y="120" width="340" height="28" rx="14" fill="#0b132b" opacity="0.08"/>
      <rect x="230" y="170" width="280" height="18" rx="9" fill="#cbd5e1"/>
      <rect x="230" y="210" width="340" height="18" rx="9" fill="#cbd5e1"/>
      <rect x="230" y="280" width="180" height="46" rx="23" fill="#d4af37"/>
    </svg>`,
  },
  {
    out: "cards/step-review.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#162347"/>
      <circle cx="400" cy="220" r="90" fill="#d4af37" opacity="0.85"/>
      <path d="M370 220 L395 245 L445 195" fill="none" stroke="#0b132b" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="250" y="340" width="300" height="16" rx="8" fill="#ffffff" opacity="0.25"/>
      <rect x="290" y="370" width="220" height="16" rx="8" fill="#ffffff" opacity="0.15"/>
    </svg>`,
  },
];

async function resolveAsset(name) {
  for (const dir of [assetsDir, altAssetsDir]) {
    const file = path.join(dir, name);
    try {
      await fs.access(file);
      return file;
    } catch {
      /* try next */
    }
  }
  return null;
}

async function run() {
  await fs.mkdir(path.join(publicDir, "cards"), { recursive: true });

  const heroSrc = await resolveAsset("hero-vitalwell.jpg");
  if (heroSrc) {
    await sharp(heroSrc)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(path.join(publicDir, "hero.webp"));
    console.log("hero.webp created");
  }

  const wellnessSrc = await resolveAsset("card-wellness.jpg");
  if (wellnessSrc) {
    await sharp(wellnessSrc)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(path.join(publicDir, "cards", "wellness.webp"));
    await sharp(wellnessSrc)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(path.join(publicDir, "category-weight.webp"));
    console.log("wellness + category images created");
  }

  for (const card of brandCards) {
    const output = path.join(publicDir, card.out);
    await sharp(Buffer.from(card.svg))
      .resize(card.width, card.height)
      .webp({ quality: 85, effort: 4 })
      .toFile(output);
    console.log(card.out);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
