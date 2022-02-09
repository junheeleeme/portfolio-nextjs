module.exports ={
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  images: {
    domains: ['user-images.githubusercontent.com'],
  },
  webpack(config, options) {
      config.module.rules.push({
          test: /\.(mp3)$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/sounds/',
              outputPath: 'static/sounds/',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        });
    return config;
  }
}