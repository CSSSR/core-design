const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withMDX = require('@zeit/next-mdx')()
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const svgrLoaderConfig = {
  loader: '@svgr/webpack',
  options: {
    svgoConfig: {
      plugins: [
        { inlineStyles: false },
        { prefixIds: false },
        {
          cleanupNumericValues: {
            floatPrecision: 3,
          },
        },
      ],
    },
  },
}
const svgrLoaderConfigWithOutSvgo = {
  ...svgrLoaderConfig,
  options: {
    ...svgrLoaderConfig.options,
    svgo: false,
  },
}
const fileLoaderConfig = {
  loader: 'file-loader',
  options: {
    publicPath: '/_next',
    name: '[path][name]-[hash:8].[ext]',
  },
}

const patchDefaultNextExternalsFn = defaultNextExternalsFn => {
  return (context, request, callback) => {
    const myCallback = (error, as) => {
      if (as === 'commonjs @csssr/core-design') {
        return callback()
      }

      return callback(error, as)
    }
    return defaultNextExternalsFn(context, request, myCallback)
  }
}

const withCoreDesignHMRPatch = (nextConfig = {}) => ({
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

const withImages = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|webp|ico)$/,
        use: [fileLoaderConfig],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /original/,
            use: [svgrLoaderConfigWithOutSvgo, fileLoaderConfig],
          },
          {
            use: [svgrLoaderConfig, fileLoaderConfig],
          },
        ],
      },
    )

    return config
  },
})

module.exports = withPlugins([
  withImages,
  withFonts,
  withTypescript,
  withTypeChecker,
  withCoreDesignHMRPatch,
  [withMDX, { pageExtensions: ['tsx', 'mdx'] }],
])
