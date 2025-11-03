/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure Next uses this folder as the workspace root (fixes module resolution)
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

