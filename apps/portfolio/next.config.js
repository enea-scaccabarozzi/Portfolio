//@ts-check
const { composePlugins, withNx } = require('@nx/next')
const bundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.WEB_BUNDLE_ANALYZE === 'true',
})

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	nx: {
		svgr: false,
	},
}

const plugins = [withNx, withBundleAnalyzer]

module.exports = composePlugins(...plugins)(nextConfig)
