const Encore = require('@symfony/webpack-encore')
const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableVueLoader(() => {}, { version: 3 })
    .addEntry('app', './assets/app.js')
    .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .disableSingleRuntimeChunk()
    .enableSassLoader()

module.exports = Encore.getWebpackConfig()
