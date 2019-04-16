module.exports = api => {
  api.cache(true)

  return {
    presets: [
      require.resolve('next/babel'),
      require.resolve('@zeit/next-typescript/babel'),
      require.resolve('@emotion/babel-preset-css-prop'),
    ],
  }
}
