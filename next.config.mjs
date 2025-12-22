

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     // Update to use remotePatterns instead of domains
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'upload.wikimedia.org',
//       },
//     ],

//     // Serve modern formats
//     formats: ['image/avif', 'image/webp'],

//     // Reduce number of generated image variants
//     deviceSizes: [320, 420, 768, 1024, 1200],
//     imageSizes: [32, 48, 64, 80, 120, 160],

//     // Cache images longer (performance boost)
//     minimumCacheTTL: 60,
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [32, 48, 64, 80, 120, 160],
    minimumCacheTTL: 60,
  },

  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-venture-hive",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


