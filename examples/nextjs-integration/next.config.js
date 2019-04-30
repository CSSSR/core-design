const { print } = require('q-i')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withMDX = require('@zeit/next-mdx')()
const withOptimizedImages = require('next-optimized-images')

const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const patchDefaultNextExternalsFn = defaultNextExternalsFn => {
  return (context, request, callback) => {
    const myCallback = (error, as) => {
      if (as === 'commonjs @asmy/core-design') {
        return callback()
      }

      return callback(error, as)
    }
    return defaultNextExternalsFn(context, request, myCallback)
  }
}

const withCoreDesignHMRPatch = nextConfig => ({
  ...nextConfig,
  webpack(config, options) {
    if (options.isServer) {
      if (options.dev) {
        config.externals[0] = patchDefaultNextExternalsFn(config.externals[0])
      }
    }

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

const withTypeChecker = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    if (options.isServer) {
      if (options.dev) {
        config.plugins.push(new ForkTsCheckerWebpackPlugin())
      }
    }

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = withPlugins([
  withTypescript,
  withTypeChecker,
  withCoreDesignHMRPatch,
  withOptimizedImages,
  [withMDX, { pageExtensions: ['tsx', 'mdx'] }],
  withFonts,
])
