import { createRouter, createWebHistory } from "vue-router";
import Resultado from "./components/Resultado.vue";
import Alumnos from "./components/Alumnos.vue";


const routes =[
    { path: '/', name: 'Resultado', component:Resultado },
    { path: '/Resultado', name:'Resultado', component:Resultado},
    { path: '/Alumnos', name: Alumnos, component:Alumnos}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        return { top: 0 }
    }
})

export default router