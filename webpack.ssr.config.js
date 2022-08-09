const Encore = require('@symfony/webpack-encore')
const webpackNodeExternals = require('webpack-node-externals')
const path = require('path')

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
    .setOutputPath('public/build-ssr/')
    .setPublicPath('/build-ssr')
    .enableVueLoader(() => {}, { version: 3 })
    .addEntry('ssr', './assets/ssr.js')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .disableSingleRuntimeChunk()
    .enableSassLoader()

const config = Encore.getWebpackConfig();
config.target = 'node';
config.externals = [webpackNodeExternals()];
config.output.globalObject = 'this';


module.exports = config
