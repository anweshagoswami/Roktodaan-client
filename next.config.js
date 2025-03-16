/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SITE_NAME: "Roktodaan", // Change the name here
  },
}
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

module.exports = nextConfig;
