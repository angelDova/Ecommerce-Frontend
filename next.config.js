/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: { domains: ["angeldova-next-ecommerce.s3.amazonaws.com"] },
};

module.exports = nextConfig;
