import { createRouter, createWebHistory } from "vue-router";
import Resultado from "./components/Resultado.vue";
import Alumnos from "./components/Alumnos.vue";


const routes =[
    { path: '/', redirect: '/Alumnos' },
    { path: '/Alumnos', name: 'Alumnos', component: Alumnos },
    // El "?" hace que el nombre sea opcional si entras desde el menú superior
    { path: '/Resultado/:nombre?', name: 'Resultado', component: Resultado }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        return { top: 0 }
    }
})

export default router