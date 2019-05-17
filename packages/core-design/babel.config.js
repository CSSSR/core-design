module.exports = api => {
  api.cache(true)

  return {
    presets: [
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-typescript'),
      require.resolve('@emotion/babel-preset-css-prop'),
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          absoluteRuntime: false,
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: false,
        },
      ],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  }
}
