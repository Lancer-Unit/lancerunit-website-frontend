/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "aceternity.com",
      "www.profilebakery.com",
      "cdn.pixabay.com",
      "imgcdn.stablediffusionweb.com",
    ],
  },
};

export default nextConfig;
