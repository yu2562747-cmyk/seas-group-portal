import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // monorepo/親フォルダ側へ辿って事故るのを避ける
  outputFileTracingRoot: __dirname,

  // Turbopack 設定（使わなくても害なし）
  turbopack: {
    root: __dirname,
  },

  // 開発中に許可するオリジン（必要なものだけ残す）
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.3.11:3000",
  ],
};

export default nextConfig;
