import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'导航一',
        component: Index,
        redirect:"/pageOne",
        children: [
            {
                path: '/pageOne',
                name:'页面一',
                component: () => import('../views/page/PageOne.vue')
            },
            {
                path: '/pageTwo',
                name:'页面二',
                component: () => import('../views/page/PageTwo.vue')
            }
        ]
    },
    {
        path:'/navigation',
        name: "导航二",
        component:Index,
        children: [
            {
                path: '/pageThree',
                name:'页面三',
                component: () => import('../views/page/PageThree.vue')
            },
            {
                path: '/pageFour',
                name:'页面四',
                component: () => import('../views/page/PageFour.vue')
            }
        ]
    }

]

const router = new VueRouter({
    mode:"history",
    routes
})

export default router
