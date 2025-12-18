/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external images (keep what you already had)
    domains: ["upload.wikimedia.org"],

    // Serve modern formats
    formats: ["image/avif", "image/webp"],

    // Reduce number of generated image variants
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [32, 48, 64, 80, 120, 160],

    // Cache images longer (performance boost)
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
