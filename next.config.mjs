/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'flowbite.s3.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: 'coralperfumes.cloud6.ae',
			},
		],
	},
}

export default nextConfig
