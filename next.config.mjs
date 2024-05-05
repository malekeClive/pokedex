/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["unpkg.com", "raw.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
