/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lgvhostapi.mannatech.com.br",
        port: ``,
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "fileupload.mannatech.com.br",
        port: ``,
        pathname: "/files/**",
      },
    ],
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
