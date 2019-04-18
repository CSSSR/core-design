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

  return config
}
