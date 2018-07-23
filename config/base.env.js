/**
 * 通用环境配置
 */
'use strict'
const path = require('path')

module.exports = {
  CONFIG: {
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',

    //Url-loader 压缩限制单位
    imageLimit: 10000,
    audioLimit: 10000,
    fontLimit: 10000

  }
}
