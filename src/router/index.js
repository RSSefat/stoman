import {createRouter,createWebHistory} from 'vue-router'
import Home from '/src/components/home-page.vue'
import about from '/src/components/ab-page.vue'
import signIn from '/src/components/sign-in.vue'

const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: about,
    },
    {
        path: '/signin',
        name: 'signin',
        component: signIn,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
