/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = module.exports = {
  staticPageGeneration: true,
  webpack: {
    configure: {
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: ['node_modules'],
      },
    },
  },
};
