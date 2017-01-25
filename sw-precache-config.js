module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  runtimeCaching: [{
    urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com/,
    handler: 'networkFirst'
  }, {
    urlPattern: /\/users\//,
    handler: 'fastest',
    options: {
        cache: {
          maxEntries: 10,
          name: 'users-cache'
        }
    }
  }]
};