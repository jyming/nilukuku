import {
    createRouter,
    createWebHashHistory
} from "vue-router";

/* Layout */
import Layout from '../layout/index.vue'

import routerConfig from '../../pages.json'

const handleRouter = function () {
    const pages = routerConfig.pages
    let router = []

    for (let page of pages) {
        const {
            name,
            path,
            style = {}
        } = page

        router.push({
            path: name === 'Index' ? '' : name.toLowerCase(),
            name,
            meta: {
                style
            },
            component: () => import(`../${path}.vue`)
        })
    }

    return router
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/pages',
        alias: '/',
        component: Layout,
        children: handleRouter()
    }]
})

export default router;