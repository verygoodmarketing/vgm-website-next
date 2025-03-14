/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
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
}

module.exports = nextConfig
