import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import DefaultLayout from './layouts/default'

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
        const pageInternal = require(`./pages/${name}`).default
        pageInternal.layout = pageInternal.layout || DefaultLayout
        return pageInternal
    },
    setup({ el, App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .use(plugin)
    },
}));
