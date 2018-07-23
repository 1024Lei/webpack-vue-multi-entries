'use strict'

const baseConfig = require('./base.env')
const devConfig = require('./dev.env')
const prodConfig = require('./prod.env')

module.exports = {
  base: baseConfig.CONFIG,
  dev: devConfig.CONFIG,
  build: prodConfig.CONFIG
}
