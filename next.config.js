/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "": undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};
