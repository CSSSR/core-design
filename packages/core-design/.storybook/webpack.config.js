const path = require('path');

module.exports = async ({ config, mode }) => {
  if (mode === 'PRODUCTION' && process.env.PUBLIC_PATH) {
    config.output.publicPath = process.env.PUBLIC_PATH
  }

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-typescript'),
            require.resolve('@emotion/babel-preset-css-prop'),
          ],
        },
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')

  const fileLoaderRule = config.module.rules.find(rule =>
    rule.test.test('.png') ||
    rule.test.test('.jpg') ||
    rule.test.test('.jpeg') ||
    rule.test.test('.webp')
  )
  const pathToImages = path.resolve(__dirname, '../src/static/images')
  fileLoaderRule.exclude = pathToImages

  config.module.rules.push({
    test: /\.(png|jpe?g|webp)$/i,
    use: [
      {
        loader: 'image-resolution-loader',
        options: {
          name: '[path][name]-[hash:8][resolution].[ext]',
        },
      },
    ],
  })

  return config
}
