/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr'], // Add your supported languages here
    defaultLocale: 'en',
  },
  reactStrictMode: true,
};

export default nextConfig;
