'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config/index')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('发布包构建中...')
spinner.start()

rm(path.join(config.build.assetsRoot), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  发布包构建 出现不可预知异常.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  发布包构建 成功.\n'))
    console.log(chalk.yellow('  生成如下模块： \n'))
    global.chunks.forEach(function (value) {
      console.log(chalk.magenta('   ', value, '\n'))
    })
  })
})
