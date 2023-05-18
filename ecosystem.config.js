module.exports = {
    apps: [
      {
        name: 'NuxtAppName',
        exec_mode: 'cluster',
        instances: 'max',
        script: './node_modules/nuxt/bin/nuxt.mjs',
        args: 'start'
      }
    ]
  }