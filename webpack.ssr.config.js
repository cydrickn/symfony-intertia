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
    // .addAliases({
    //     vue$: 'vue/dist/vue.runtime.esm.js',
    //     '@': path.resolve('assets/')
    // })
    .addEntry('ssr', './assets/ssr.js')
    // .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .disableSingleRuntimeChunk()
    // .configureBabel(() => {}, {
    //     useBuiltIns: 'usage',
    //     corejs: 3
    // })
    .enableSassLoader()

const config = Encore.getWebpackConfig();
config.target = 'node';
config.externals = [webpackNodeExternals()];

module.exports = config
