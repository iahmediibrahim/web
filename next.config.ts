import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// output: 'standalone', // Required for Azure Web Apps (Node.js server)
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				port: '',
				pathname: '/**',
			},
		],
	},
	webpack: (config) => {
		config.module?.rules?.push({
			test: /\.js$/,
			type: 'javascript/auto',
			resolve: {
				fullySpecified: false,
			},
		})
		return config
	},
}

export default nextConfig
