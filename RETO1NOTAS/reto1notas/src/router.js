import { createRouter, createWebHistory } from "vue-router";
import Resultado from "./components/Resultado.vue";


const routes =[
    { path: '/', name: 'Resultado', component:Resultado }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        return { top: 0 }
    }
})

export default router