const path = require('path')

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }
    config.resolve.alias.canvas = false

    return config
  },
  async redirects() {
    return [
      {
        source: '/profile/:id', // Source path pattern
        destination: '/members/profile/:id', // Destination path pattern
        permanent: true // This sets the redirect as permanent (HTTP 301)
      }
    ]
  }
}
