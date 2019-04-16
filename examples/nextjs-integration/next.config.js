const { print } = require('q-i')

const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

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

module.exports = withTypescript({
  webpack(config, options) {
    if (options.isServer) {
      if (options.dev) {
        config.externals[0] = patchDefaultNextExternalsFn(config.externals[0])
      }

      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  },
})
