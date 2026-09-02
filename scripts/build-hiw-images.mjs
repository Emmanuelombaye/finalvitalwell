import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images", "how-it-works");

const cards = [
  {
    out: "hero.webp",
    width: 1200,
    height: 825,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="825" viewBox="0 0 1200 825">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff7ed"/><stop offset="55%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fde68a"/></linearGradient>
        <linearGradient id="shadow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0b132b" stop-opacity="0"/><stop offset="100%" stop-color="#0b132b" stop-opacity="0.18"/></linearGradient>
      </defs>
      <rect width="1200" height="825" fill="url(#sky)"/>
      <rect x="0" y="560" width="1200" height="265" fill="url(#shadow)"/>
      <ellipse cx="980" cy="130" rx="180" ry="120" fill="#ffffff" opacity="0.55"/>
      <rect x="120" y="430" width="520" height="28" rx="14" fill="#0b132b" opacity="0.08"/>
      <rect x="120" y="480" width="420" height="18" rx="9" fill="#0b132b" opacity="0.05"/>
      <rect x="680" y="220" width="380" height="430" rx="28" fill="#ffffff" opacity="0.92" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="720" y="280" width="300" height="190" rx="16" fill="#0b132b" opacity="0.06"/>
      <circle cx="870" cy="360" r="48" fill="#d4af37" opacity="0.35"/>
      <rect x="720" y="500" width="220" height="14" rx="7" fill="#cbd5e1"/>
      <rect x="720" y="530" width="260" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="720" y="570" width="180" height="44" rx="22" fill="#0b132b" opacity="0.88"/>
      <circle cx="300" cy="300" r="110" fill="#fdba74" opacity="0.35"/>
      <path d="M220 520 C220 420 260 360 300 340 C340 360 380 420 380 520 Z" fill="#0b132b" opacity="0.82"/>
      <path d="M250 520 L250 430 C250 390 270 360 300 350 C330 360 350 390 350 430 L350 520 Z" fill="#d4af37" opacity="0.85"/>
      <rect x="180" y="250" width="240" height="120" rx="60" fill="#0b132b" opacity="0.82"/>
      <rect x="250" y="300" width="420" height="180" rx="20" fill="#ffffff" opacity="0.15"/>
    </svg>`,
  },
  {
    out: "step-1-choose.webp",
    width: 960,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
      <rect width="960" height="600" fill="#f8fafc"/>
      <rect x="70" y="80" width="360" height="440" rx="28" fill="#ffffff" stroke="#7dd3fc" stroke-width="3"/>
      <rect x="530" y="80" width="360" height="440" rx="28" fill="#ffffff" stroke="#fbbf24" stroke-width="3"/>
      <circle cx="250" cy="220" r="70" fill="#bae6fd" opacity="0.55"/>
      <circle cx="710" cy="220" r="70" fill="#fde68a" opacity="0.55"/>
      <text x="250" y="340" text-anchor="middle" fill="#0b132b" font-family="Arial,sans-serif" font-size="28" font-weight="800">Semaglutide</text>
      <text x="710" y="340" text-anchor="middle" fill="#0b132b" font-family="Arial,sans-serif" font-size="28" font-weight="800">Tirzepatide</text>
      <text x="250" y="380" text-anchor="middle" fill="#64748b" font-family="Arial,sans-serif" font-size="20">From $149/mo</text>
      <text x="710" y="380" text-anchor="middle" fill="#64748b" font-family="Arial,sans-serif" font-size="20">From $249/mo</text>
      <rect x="150" y="420" width="200" height="44" rx="22" fill="#0b132b" opacity="0.88"/>
      <rect x="610" y="420" width="200" height="44" rx="22" fill="#d4af37"/>
    </svg>`,
  },
  {
    out: "step-2-checkout.webp",
    width: 960,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
      <defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#eff6ff"/><stop offset="100%" stop-color="#ffffff"/></linearGradient></defs>
      <rect width="960" height="600" fill="url(#bg2)"/>
      <rect x="180" y="70" width="600" height="460" rx="32" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <rect x="240" y="130" width="480" height="34" rx="17" fill="#0b132b" opacity="0.08"/>
      <rect x="240" y="190" width="360" height="18" rx="9" fill="#e2e8f0"/>
      <rect x="240" y="230" width="420" height="18" rx="9" fill="#e2e8f0"/>
      <rect x="240" y="290" width="480" height="120" rx="18" fill="#f8fafc" stroke="#e2e8f0"/>
      <rect x="270" y="330" width="90" height="56" rx="10" fill="#0b132b" opacity="0.12"/>
      <rect x="380" y="340" width="180" height="14" rx="7" fill="#cbd5e1"/>
      <rect x="380" y="365" width="120" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="240" y="440" width="220" height="52" rx="26" fill="#d4af37"/>
      <circle cx="700" cy="470" r="34" fill="#10b981" opacity="0.2"/>
      <path d="M688 470 L698 480 L718 455" fill="none" stroke="#059669" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
  },
  {
    out: "step-3-intake.webp",
    width: 960,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
      <rect width="960" height="600" fill="#ecfdf5"/>
      <rect x="250" y="60" width="460" height="480" rx="36" fill="#ffffff" stroke="#a7f3d0" stroke-width="3"/>
      <rect x="300" y="120" width="360" height="24" rx="12" fill="#0b132b" opacity="0.08"/>
      <rect x="300" y="170" width="300" height="14" rx="7" fill="#d1fae5"/>
      <rect x="300" y="200" width="340" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="300" y="230" width="280" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="300" y="260" width="320" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="300" y="320" width="160" height="44" rx="22" fill="#0b132b" opacity="0.88"/>
      <circle cx="480" cy="430" r="56" fill="#d4af37" opacity="0.18"/>
      <path d="M420 520 C420 460 450 420 480 400 C510 420 540 460 540 520 Z" fill="#0b132b" opacity="0.12"/>
    </svg>`,
  },
  {
    out: "step-4-review.webp",
    width: 960,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
      <rect width="960" height="600" fill="#0b132b"/>
      <circle cx="480" cy="250" r="120" fill="#d4af37" opacity="0.22"/>
      <rect x="220" y="140" width="520" height="300" rx="28" fill="#ffffff" opacity="0.06" stroke="#d4af37" stroke-width="2"/>
      <circle cx="480" cy="250" r="72" fill="#d4af37"/>
      <path d="M450 250 L472 272 L520 228" fill="none" stroke="#0b132b" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="300" y="390" width="360" height="16" rx="8" fill="#ffffff" opacity="0.22"/>
      <rect x="340" y="425" width="280" height="16" rx="8" fill="#ffffff" opacity="0.14"/>
      <text x="480" y="500" text-anchor="middle" fill="#94a3b8" font-family="Arial,sans-serif" font-size="22">Licensed provider review</text>
    </svg>`,
  },
  {
    out: "step-5-account.webp",
    width: 960,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
      <rect width="960" height="600" fill="#eef2ff"/>
      <rect x="120" y="80" width="720" height="440" rx="28" fill="#0b132b"/>
      <rect x="170" y="130" width="620" height="42" rx="10" fill="#ffffff" opacity="0.12"/>
      <rect x="170" y="200" width="280" height="140" rx="18" fill="#ffffff" opacity="0.08"/>
      <rect x="510" y="200" width="280" height="140" rx="18" fill="#d4af37" opacity="0.22"/>
      <circle cx="310" cy="260" r="36" fill="#ffffff" opacity="0.18"/>
      <rect x="540" y="240" width="180" height="14" rx="7" fill="#ffffff" opacity="0.28"/>
      <rect x="540" y="270" width="140" height="14" rx="7" fill="#ffffff" opacity="0.16"/>
      <rect x="170" y="380" width="620" height="14" rx="7" fill="#ffffff" opacity="0.14"/>
      <rect x="170" y="420" width="200" height="44" rx="22" fill="#d4af37"/>
    </svg>`,
  },
  {
    out: "step-6-delivery.webp",
    width: 960,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
      <rect width="960" height="600" fill="#fffbeb"/>
      <rect x="0" y="390" width="960" height="210" fill="#fde68a" opacity="0.25"/>
      <rect x="150" y="180" width="180" height="150" rx="16" fill="#ffffff" stroke="#fcd34d" stroke-width="2"/>
      <rect x="180" y="210" width="120" height="18" rx="9" fill="#0b132b" opacity="0.08"/>
      <rect x="180" y="245" width="90" height="12" rx="6" fill="#d4af37" opacity="0.45"/>
      <rect x="520" y="260" width="280" height="130" rx="18" fill="#0b132b"/>
      <rect x="560" y="295" width="160" height="14" rx="7" fill="#ffffff" opacity="0.22"/>
      <circle cx="570" cy="420" r="30" fill="#0b132b"/>
      <circle cx="720" cy="420" r="30" fill="#0b132b"/>
      <path d="M120 520 C260 470 420 470 560 520" fill="none" stroke="#0b132b" stroke-width="8" stroke-linecap="round" opacity="0.08"/>
    </svg>`,
  },
  {
    out: "cta-eligibility.webp",
    width: 960,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
      <rect width="960" height="600" fill="#f0f9ff"/>
      <path d="M480 70 L700 160 V340 C700 430 480 490 480 490 C480 490 260 430 260 340 V160 Z" fill="#0b132b"/>
      <path d="M450 315 L475 340 L525 290" fill="none" stroke="#d4af37" stroke-width="16" stroke-linecap="round"/>
      <circle cx="760" cy="420" r="90" fill="#d4af37" opacity="0.16"/>
      <rect x="120" y="390" width="220" height="120" rx="20" fill="#ffffff" stroke="#bae6fd" stroke-width="2"/>
      <rect x="150" y="425" width="160" height="14" rx="7" fill="#cbd5e1"/>
      <rect x="150" y="450" width="120" height="14" rx="7" fill="#e2e8f0"/>
    </svg>`,
  },
  {
    out: "cta-programs.webp",
    width: 960,
    height: 600,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
      <rect width="960" height="600" fill="#0b132b"/>
      <circle cx="780" cy="120" r="140" fill="#d4af37" opacity="0.16"/>
      <rect x="90" y="120" width="780" height="320" rx="32" fill="#ffffff" opacity="0.06" stroke="#d4af37" stroke-width="2"/>
      <circle cx="320" cy="280" r="84" fill="#7dd3fc" opacity="0.35"/>
      <circle cx="640" cy="280" r="84" fill="#fbbf24" opacity="0.35"/>
      <text x="320" y="290" text-anchor="middle" fill="#ffffff" font-family="Arial,sans-serif" font-size="22" font-weight="700">$149</text>
      <text x="640" y="290" text-anchor="middle" fill="#ffffff" font-family="Arial,sans-serif" font-size="22" font-weight="700">$249</text>
      <text x="480" y="500" text-anchor="middle" fill="#ffffff" font-family="Arial,sans-serif" font-size="30" font-weight="800">Compare programs</text>
    </svg>`,
  },
];

async function run() {
  await fs.mkdir(outDir, { recursive: true });
  for (const card of cards) {
    const output = path.join(outDir, card.out);
    await sharp(Buffer.from(card.svg)).resize(card.width, card.height).webp({ quality: 86, effort: 4 }).toFile(output);
    const stat = await fs.stat(output);
    console.log(`${card.out} (${Math.round(stat.size / 1024)}KB)`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
