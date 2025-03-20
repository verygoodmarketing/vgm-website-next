/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['verygoodmarketing.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'unsplash.com',
			},
		],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ['image/avif', 'image/webp'],
	},
	async redirects() {
		return [
			{
				source: '/articles',
				destination: '/resources/articles',
				permanent: true,
			},
			{
				source: '/articles/:slug*',
				destination: '/resources/articles/:slug*',
				permanent: true,
			},
		]
	},
	// Enable static optimization where possible
	swcMinify: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
}

module.exports = nextConfig
