import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const ensureDir = async (p) => fs.mkdir(p, { recursive: true });

const ogpSvg = (title = "SEAS GROUP PORTAL", subtitle = "福祉グループの総合案内ポータル") => `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="55%" stop-color="#f3fbff"/>
      <stop offset="100%" stop-color="#dff3ff"/>
    </linearGradient>

    <radialGradient id="glow" cx="30%" cy="20%" r="70%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#bfeaff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#7ccfff" stop-opacity="0"/>
    </radialGradient>

    <filter id="blur12" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="12"/>
    </filter>

    <filter id="blur28" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="28"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- soft blobs -->
  <g filter="url(#blur28)" opacity="0.45">
    <circle cx="210" cy="120" r="120" fill="#ffffff"/>
    <circle cx="1050" cy="120" r="150" fill="#c9efff"/>
    <circle cx="980" cy="520" r="190" fill="#e9fbff"/>
    <circle cx="260" cy="520" r="160" fill="#d8f4ff"/>
  </g>

  <!-- bubbles -->
  <g opacity="0.65">
    <g filter="url(#blur12)">
      <circle cx="160" cy="260" r="26" fill="#ffffff"/>
      <circle cx="260" cy="320" r="18" fill="#ffffff"/>
      <circle cx="360" cy="210" r="14" fill="#ffffff"/>
      <circle cx="900" cy="250" r="22" fill="#ffffff"/>
      <circle cx="1010" cy="310" r="16" fill="#ffffff"/>
      <circle cx="860" cy="420" r="12" fill="#ffffff"/>
      <circle cx="520" cy="460" r="20" fill="#ffffff"/>
      <circle cx="620" cy="390" r="14" fill="#ffffff"/>
    </g>

    <circle cx="160" cy="260" r="26" fill="none" stroke="#9adfff" stroke-opacity="0.5" stroke-width="2"/>
    <circle cx="900" cy="250" r="22" fill="none" stroke="#9adfff" stroke-opacity="0.45" stroke-width="2"/>
    <circle cx="520" cy="460" r="20" fill="none" stroke="#9adfff" stroke-opacity="0.4" stroke-width="2"/>
  </g>

  <!-- text -->
  <g>
    <text x="80" y="320" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans JP, sans-serif"
          font-size="54" font-weight="700" fill="#0f172a" letter-spacing="1">
      ${title}
    </text>
    <text x="80" y="372" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans JP, sans-serif"
          font-size="26" font-weight="500" fill="#334155">
      ${subtitle}
    </text>

    <rect x="80" y="402" width="92" height="4" rx="2" fill="#38bdf8" opacity="0.7"/>
  </g>

  <!-- corner note -->
  <text x="80" y="560" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans JP, sans-serif"
        font-size="18" fill="#475569" opacity="0.85">
    各法人サイトへスムーズにアクセスできます
  </text>
</svg>
`;

const iconSvg = () => `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="45%" stop-color="#e6f8ff"/>
      <stop offset="100%" stop-color="#9adfff"/>
    </linearGradient>
    <radialGradient id="r" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="65%" stop-color="#7ccfff" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="512" height="512" rx="128" fill="url(#g)"/>
  <rect width="512" height="512" rx="128" fill="url(#r)"/>

  <!-- wave -->
  <path d="M70,290 C140,240 220,360 310,310 C380,270 420,250 442,262 L442,410 C442,442 416,468 384,468 L128,468 C96,468 70,442 70,410 Z"
        fill="#38bdf8" opacity="0.55"/>
  <path d="M70,320 C150,260 220,380 320,325 C390,287 420,275 442,286"
        fill="none" stroke="#0ea5e9" stroke-width="14" opacity="0.45" stroke-linecap="round"/>

  <!-- bubbles -->
  <circle cx="170" cy="190" r="34" fill="#ffffff" opacity="0.85"/>
  <circle cx="305" cy="165" r="22" fill="#ffffff" opacity="0.8"/>
  <circle cx="360" cy="220" r="16" fill="#ffffff" opacity="0.75"/>
  <circle cx="170" cy="190" r="34" fill="none" stroke="#9adfff" stroke-width="6" opacity="0.55"/>
</svg>
`;

const run = async () => {
  await ensureDir("public");
  await ensureDir(path.join("src", "app"));

  // OGP 1200x630
  const ogp = Buffer.from(ogpSvg());
  await sharp(ogp).png().toFile(path.join("public", "ogp.png"));

  // Icons
  const icon = Buffer.from(iconSvg());
  await sharp(icon).resize(512, 512).png().toFile(path.join("src", "app", "icon.png"));
  await sharp(icon).resize(180, 180).png().toFile(path.join("src", "app", "apple-icon.png"));

  // favicon.ico (32/48)
  const png32 = await sharp(icon).resize(32, 32).png().toBuffer();
  const png48 = await sharp(icon).resize(48, 48).png().toBuffer();
  const ico = await pngToIco([png32, png48]);
  await fs.writeFile(path.join("src", "app", "favicon.ico"), ico);

  console.log("✅ generated: public/ogp.png, src/app/icon.png, src/app/apple-icon.png, src/app/favicon.ico");
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
