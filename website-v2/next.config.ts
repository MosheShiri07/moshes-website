import type { NextConfig } from "next";

// Cloudflare dev platform — only in development, wrapped in async to avoid top-level await
if (process.env.NODE_ENV === "development") {
  void import("@cloudflare/next-on-pages/next-dev").then(({ setupDevPlatform }) =>
    setupDevPlatform()
  );
}

const nextConfig: NextConfig = {};

export default nextConfig;
