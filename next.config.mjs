


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

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "upload.wikimedia.org",
//       },
//     ],
//     formats: ["image/avif", "image/webp"],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256],
//     minimumCacheTTL: 31536000, // 1 year cache
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },

//   // Compress pages with gzip/brotli
//   compress: true,

//   // Enable SWC minification
//   swcMinify: true,

//   // Optimize production builds
//   productionBrowserSourceMaps: false,

//   // Reduce bundle size
//   modularizeImports: {
//     'lucide-react': {
//       transform: 'lucide-react/dist/esm/icons/{{member}}',
//     },
//   },

//   async headers() {
//     return [
//       {
//         source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//       {
//         source: '/_next/static/:path*',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },

//   async redirects() {
//     return [
//       {
//         source: "/about",
//         destination: "/about-venture-hive",
//         permanent: true,
//       },
//     ];
//   },

//   // Experimental features for better performance
//   experimental: {
//     optimizePackageImports: ['lucide-react'],
//   },
// };

// export default nextConfig;