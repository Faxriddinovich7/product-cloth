import { createRouter, createWebHistory } from 'vue-router'

import Card from '../pages/Cart.vue'
import Orders from '../pages/Orders.vue'
import Support from '../pages/Support.vue'
import Contact from '../pages/Contact.vue'
import Profile from '../pages/Profile.vue'

const routes = [
    { path: '/card', component: Card },
    { path: '/others', component: Orders },
    { path: '/support', component: Support },
    { path: '/contact', component: Contact },
    { path: '/profile', component: Profile },
    { path: '/:pathMatch(.*)*', name: "Notfound", component: () => import('../pages/Notfound.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
