import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images", "vials");

function vialSvg(name, strength, liquid, glowA, glowB, accent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs>
      <radialGradient id="glow" cx="50%" cy="42%" r="55%">
        <stop offset="0%" stop-color="${glowA}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="${glowB}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#f8fafc" stop-opacity="0.92"/>
      </linearGradient>
      <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${liquid}" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="800" height="800" fill="#f8fafc"/>
    <circle cx="400" cy="360" r="250" fill="url(#glow)"/>
    <rect x="285" y="130" width="230" height="520" rx="28" fill="url(#glass)" stroke="#e2e8f0" stroke-width="3"/>
    <rect x="315" y="250" width="170" height="300" rx="85" fill="url(#liquid)"/>
    <rect x="330" y="180" width="140" height="28" rx="14" fill="#cbd5e1" opacity="0.55"/>
    <rect x="318" y="470" width="164" height="120" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    <text x="400" y="510" text-anchor="middle" fill="#0b132b" font-family="Arial,sans-serif" font-size="28" font-weight="800">${name}</text>
    <text x="400" y="545" text-anchor="middle" fill="#64748b" font-family="Arial,sans-serif" font-size="18">${strength}</text>
    <text x="400" y="572" text-anchor="middle" fill="#64748b" font-family="Arial,sans-serif" font-size="16">Injectable solution</text>
    <line x1="340" y1="585" x2="460" y2="585" stroke="#d4af37" stroke-width="2"/>
    <text x="400" y="610" text-anchor="middle" fill="#8a7340" font-family="Arial,sans-serif" font-size="14" font-weight="700">RX ONLY</text>
  </svg>`;
}

const vials = [
  {
    out: "semaglutide.webp",
    svg: vialSvg("Semaglutide", "2.5 mg/mL", "#7dd3fc", "#bae6fd", "#ffffff", "#0284c7"),
  },
  {
    out: "tirzepatide.webp",
    svg: vialSvg("Tirzepatide", "5 mg/mL", "#fde68a", "#fef3c7", "#ffffff", "#d97706"),
  },
];

async function run() {
  await fs.mkdir(outDir, { recursive: true });
  for (const vial of vials) {
    await sharp(Buffer.from(vial.svg)).resize(800, 800).webp({ quality: 88, effort: 4 }).toFile(path.join(outDir, vial.out));
    console.log(vial.out);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
