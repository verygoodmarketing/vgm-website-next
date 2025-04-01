/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
		domains: ['verygoodmarketing.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	experimental: {
		// CSS optimization with critters is now properly supported with the installed package
		optimizeCss: true,
		turbo: {},
	},
}

module.exports = nextConfig
