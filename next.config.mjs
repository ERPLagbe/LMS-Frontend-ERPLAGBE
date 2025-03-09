/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['portal.jobayeracademy.com'], 
      },
      experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;
