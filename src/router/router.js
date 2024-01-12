import {createRouter, createWebHistory} from "vue-router";
import PgHome from "@/pages/PgHome.vue";

const routes = [
    {
        path: '/',
        component: PgHome
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router