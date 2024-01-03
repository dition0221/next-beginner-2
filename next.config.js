/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Deploy gh-pages config.
  // output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "https://dition0221.github.io/next-beginner-2/"
      : "",
};

module.exports = nextConfig;
