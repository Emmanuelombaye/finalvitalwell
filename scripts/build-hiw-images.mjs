import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images", "how-it-works");

const cards = [
  {
    out: "hero.webp",
    width: 960,
    height: 660,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="660" viewBox="0 0 960 660">
      <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b132b"/><stop offset="100%" stop-color="#1a2744"/></linearGradient></defs>
      <rect width="960" height="660" fill="url(#bg)"/>
      <circle cx="780" cy="120" r="160" fill="#d4af37" opacity="0.14"/>
      <rect x="80" y="100" width="420" height="460" rx="28" fill="#ffffff" opacity="0.95"/>
      <rect x="120" y="150" width="160" height="160" rx="80" fill="#dbeafe"/>
      <rect x="310" y="170" width="150" height="18" rx="9" fill="#cbd5e1"/>
      <rect x="310" y="205" width="120" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="310" y="235" width="130" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="560" y="180" width="280" height="340" rx="24" fill="#ffffff" opacity="0.08" stroke="#d4af37" stroke-width="2"/>
      <rect x="600" y="230" width="200" height="140" rx="16" fill="#ffffff" opacity="0.12"/>
      <circle cx="700" cy="300" r="36" fill="#d4af37" opacity="0.9"/>
    </svg>`,
  },
  {
    out: "step-1-choose.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#0b132b"/>
      <circle cx="680" cy="90" r="110" fill="#d4af37" opacity="0.16"/>
      <rect x="70" y="90" width="280" height="320" rx="24" fill="#ffffff" opacity="0.08" stroke="#d4af37" stroke-width="2"/>
      <rect x="450" y="90" width="280" height="320" rx="24" fill="#ffffff" opacity="0.06" stroke="#ffffff" stroke-width="1.5"/>
      <text x="110" y="170" fill="#d4af37" font-family="Arial,sans-serif" font-size="22" font-weight="700">SEMAGLUTIDE</text>
      <text x="490" y="170" fill="#ffffff" font-family="Arial,sans-serif" font-size="22" font-weight="700">TIRZEPATIDE</text>
      <text x="110" y="220" fill="#94a3b8" font-family="Arial,sans-serif" font-size="18">Compare programs</text>
      <text x="490" y="220" fill="#94a3b8" font-family="Arial,sans-serif" font-size="18">Compare programs</text>
    </svg>`,
  },
  {
    out: "step-2-checkout.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#f8fafc"/>
      <rect x="160" y="60" width="480" height="380" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="210" y="110" width="380" height="26" rx="13" fill="#0b132b" opacity="0.08"/>
      <rect x="210" y="160" width="300" height="16" rx="8" fill="#cbd5e1"/>
      <rect x="210" y="195" width="360" height="16" rx="8" fill="#cbd5e1"/>
      <rect x="210" y="260" width="200" height="48" rx="24" fill="#d4af37"/>
      <rect x="520" y="300" width="80" height="50" rx="8" fill="#0b132b" opacity="0.06"/>
    </svg>`,
  },
  {
    out: "step-3-intake.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#eef2f7"/>
      <rect x="200" y="50" width="400" height="400" rx="32" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <rect x="240" y="100" width="320" height="20" rx="10" fill="#0b132b" opacity="0.08"/>
      <rect x="240" y="140" width="280" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="240" y="170" width="300" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="240" y="200" width="260" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="240" y="260" width="180" height="44" rx="22" fill="#0b132b" opacity="0.85"/>
      <circle cx="400" cy="360" r="40" fill="#d4af37" opacity="0.25"/>
    </svg>`,
  },
  {
    out: "step-4-review.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#162347"/>
      <circle cx="400" cy="210" r="88" fill="#d4af37" opacity="0.88"/>
      <path d="M370 210 L392 232 L440 188" fill="none" stroke="#0b132b" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="220" y="330" width="360" height="14" rx="7" fill="#ffffff" opacity="0.22"/>
      <rect x="260" y="360" width="280" height="14" rx="7" fill="#ffffff" opacity="0.14"/>
      <rect x="300" y="390" width="200" height="14" rx="7" fill="#ffffff" opacity="0.1"/>
    </svg>`,
  },
  {
    out: "step-5-account.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#eef2f7"/>
      <rect x="120" y="60" width="560" height="380" rx="24" fill="#0b132b"/>
      <rect x="160" y="100" width="480" height="32" rx="8" fill="#ffffff" opacity="0.12"/>
      <rect x="160" y="160" width="220" height="110" rx="14" fill="#ffffff" opacity="0.08"/>
      <rect x="420" y="160" width="220" height="110" rx="14" fill="#d4af37" opacity="0.22"/>
      <rect x="160" y="300" width="480" height="14" rx="7" fill="#ffffff" opacity="0.14"/>
      <rect x="160" y="330" width="400" height="14" rx="7" fill="#ffffff" opacity="0.1"/>
      <rect x="160" y="380" width="170" height="38" rx="19" fill="#d4af37"/>
    </svg>`,
  },
  {
    out: "step-6-delivery.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#ecfdf5"/>
      <rect x="100" y="280" width="600" height="14" rx="7" fill="#cbd5e1"/>
      <rect x="160" y="140" width="200" height="160" rx="16" fill="#ffffff" stroke="#a7f3d0" stroke-width="2"/>
      <rect x="190" y="170" width="140" height="20" rx="10" fill="#0b132b" opacity="0.08"/>
      <rect x="190" y="205" width="100" height="14" rx="7" fill="#d4af37" opacity="0.35"/>
      <rect x="450" y="220" width="200" height="100" rx="14" fill="#0b132b"/>
      <circle cx="490" cy="360" r="26" fill="#0b132b"/>
      <circle cx="590" cy="360" r="26" fill="#0b132b"/>
    </svg>`,
  },
  {
    out: "cta-eligibility.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#f0f9ff"/>
      <path d="M400 80 L580 150 V300 C580 380 400 430 400 430 C400 430 220 380 220 300 V150 Z" fill="#0b132b" opacity="0.92"/>
      <path d="M372 285 L395 308 L440 265" fill="none" stroke="#d4af37" stroke-width="14" stroke-linecap="round"/>
      <rect x="620" y="320" width="120" height="120" rx="60" fill="#d4af37" opacity="0.15"/>
    </svg>`,
  },
  {
    out: "cta-programs.webp",
    width: 800,
    height: 500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#0b132b"/>
      <circle cx="650" cy="100" r="130" fill="#d4af37" opacity="0.16"/>
      <rect x="80" y="120" width="640" height="260" rx="28" fill="#ffffff" opacity="0.06" stroke="#d4af37" stroke-width="2"/>
      <circle cx="280" cy="250" r="70" fill="#7dd3fc" opacity="0.35"/>
      <circle cx="520" cy="250" r="70" fill="#fbbf24" opacity="0.35"/>
      <text x="400" y="430" text-anchor="middle" fill="#ffffff" font-family="Arial,sans-serif" font-size="28" font-weight="800">Browse programs</text>
    </svg>`,
  },
];

async function run() {
  await fs.mkdir(outDir, { recursive: true });
  for (const card of cards) {
    const output = path.join(outDir, card.out);
    await sharp(Buffer.from(card.svg))
      .resize(card.width, card.height)
      .webp({ quality: 84, effort: 4 })
      .toFile(output);
    console.log(`how-it-works/${card.out}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
