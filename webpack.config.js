const Encore = require('@symfony/webpack-encore')
const path = require('path')

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .enableVueLoader(() => {}, { version: 3 })
    // .addAliases({
    //     vue$: 'vue/dist/vue.runtime.esm.js',
    //     '@': path.resolve('assets/')
    // })
    .addEntry('app', './assets/app.js')
    .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .disableSingleRuntimeChunk()
    // .configureBabel(() => {}, {
    //     useBuiltIns: 'usage',
    //     corejs: 3
    // })
    .enableSassLoader()

module.exports = Encore.getWebpackConfig()
