/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	images: {
		domains: ["media.graphassets.com"],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
