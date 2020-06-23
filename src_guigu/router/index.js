import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/msite',
        },
        {
            path: '/msite',
            component: Msite,
            meta: {
                state: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                state: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                state: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                state: true
            }
        },
        {
            path: '/login',
            component: Login,
        },
    ]
})