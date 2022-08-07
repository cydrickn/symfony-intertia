import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import DefaultLayout from './layouts/default'

createInertiaApp({
    resolve: name => {
        const page = require(`./pages/${name}`).default
        page.layout = page.layout || DefaultLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
