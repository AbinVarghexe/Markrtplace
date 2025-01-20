/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Correctly specify the allowed domain
    },
};

export default nextConfig;