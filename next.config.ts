import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Lets phones on the LAN load the dev site (http://192.168.1.73:3000 or
     http://Mac-mini.local:3000). Without this, Next blocks cross-origin dev
     resources and client JS (blob, card canvases) never boots on the phone. */
  allowedDevOrigins: ["192.168.1.73", "Mac-mini.local"],

  experimental: {
    /* Next 16.2.6's Turbopack dev cache (default on) corrupts Tailwind class
       candidates on read-back — recurring `Parsing CSS source code failed`
       500s with mojibake idents like var(-��e1). Rebuild from source instead;
       if a Next upgrade fixes the bug, this can be re-enabled. */
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
