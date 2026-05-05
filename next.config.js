/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Necessary for static export
  },
  // If your repo is at username.github.io/project-flow/, 
  // you must uncomment the lines below:
  // basePath: '/project-flow',
};

module.exports = nextConfig;
