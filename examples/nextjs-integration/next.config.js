const { print } = require('q-i')
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

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

module.exports = withPlugins([[withTypescript, {
  webpack(config, options) {
    if (options.isServer) {
      if (options.dev) {
        config.externals[0] = patchDefaultNextExternalsFn(config.externals[0])
      }

      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  },
}], withFonts]);

// module.exports = withTypescript()
