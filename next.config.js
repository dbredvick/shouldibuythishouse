module.exports = {
  target: 'serverless',
  serverRuntimeConfig: {
    ZILLOW_API_KEY: process.env.ZILLOW_API_KEY,
  },
  publicRuntimeConfig: {
  },
}