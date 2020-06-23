import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import VipPage from '@/components/VipPage.vue'
import SearchPage from '@/components/SearchPage.vue'
import PersonalPage from '@/components/PersonalPage.vue'


Vue.use(Router)
// const originalReplace = Router.prototype.replace;
// Router.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err);
// };

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/vip',
            name: 'vip',
            component: VipPage,
        },
        {
            path: '/search',
            name: 'search',
            component: SearchPage,
        },
        {
            path: '/personal',
            name: 'personal',
            component: PersonalPage,
        }
    ]
})
