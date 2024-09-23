/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lgvhostapi.mannatech.com.br",
        // port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "fileupload.mannatech.com.br",
        // port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "www.mannatech.com.br",
        // port: "",
        pathname: "/**",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60 * 5, // tempo em segundos. 5 minutos
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

module.exports = nextConfig;
