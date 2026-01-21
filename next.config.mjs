


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
//     // Update to use remotePatterns instead of domains
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "upload.wikimedia.org", // Allows images from this hostname
//       },
//     ],

//     // Serve modern formats for better compression
//     formats: ["image/avif", "image/webp"],

//     // Reduce number of generated image variants to improve performance
//     deviceSizes: [320, 420, 768, 1024, 1200], // Adjusting the device sizes
//     imageSizes: [32, 48, 64, 80, 120, 160], // Optimized image sizes

//     // Cache images for a longer period (performance boost)
//     minimumCacheTTL: 60, // Minimum time-to-live for cached images in seconds
//   },

//   // Define redirects for pages that need to be permanently moved
//   async redirects() {
//     return [
//       {
//         source: "/about", // URL to redirect from
//         destination: "/about-venture-hive", // New destination URL
//         permanent: true, // Permanent redirect (HTTP 301)
//       },
//     ];
//   },

//   // Optional: Enable React Strict Mode for detecting potential issues
//   reactStrictMode: true,

//   // Optional: Minify CSS and JS for production (better performance)
//   swcMinify: true,
// };

// export default nextConfig;


