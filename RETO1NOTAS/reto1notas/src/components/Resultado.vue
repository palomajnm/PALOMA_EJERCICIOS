<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route=useRoute();
const router=useRouter();

//recibimos el nombre del alumno desde el componente padre (Alumnos)
const nombreAlumno = computed(()=> route.params.nombre || 'sin alumno seleccionado');

//evento para volver a la lista de alumnos
const volverAlumnos =() => {
    router.push({name: 'Alumnos'});
}

//otra forma de hacerlo
const examenes=[
    ref([0,0,0,0]),//primera evaluacion
    ref([0,0,0,0]),//segunda evaluacion
    ref([0,0,0,0])//tercera evaluacion
];

const minimos=[
    [70,50],
    [60,50],
    [50,50]
];

const apruebaEval= computed(()=> {
    let resultados=[];

    for(let i=0; i<3; i++){
        let notas=examenes[i].value;
        let minExamen= minimos[i][0];
        let minRec=minimos[i][1];

        if(notas[0]>=minExamen && notas[1]>=minExamen && notas[2]>=minExamen ){
            resultados.push(true);
        }else if(notas[3]>=minRec){
            resultados.push(true);
        }else{
            resultados.push(false);
        }
    }
    return resultados;
})

//Resultado general de todas las notas
const estaAprobado = computed(() => {
    if (apruebaEval.value[0] && apruebaEval.value[1] && apruebaEval.value[2]) {
        return true;
    } else {
        return false;
    }
});
</script>

<template>
    <div class="container my-5">
        <div class="mb-3">
            <button class="btn btn-secondary btn-sm" @click="volverAlumnos" > ← Volver a lista de alumnos </button>
        </div>

        <h1 class="text-center text-primary fw-bold mb-4">Resultado de las Evaluaciones</h1>
        <h3 class="text-center text-secondary mb-4"><strong>{{ nombreAlumno }}</strong></h3>
        <div class="alert text-center shadow-sm mb-5" :class="estaAprobado ? 'alert-success' : 'alert-danger'">
            <h2 class="alert-heading m-0 fw-bold">Estado final: {{ estaAprobado ? 'APROBADO' : 'SUSPENSO' }}</h2>
        </div>

        <!--TARJETAS DE EVALUACIONES-->
        <div class="row ">
            <!--primera evaluacion-->
            <div v-for="(evaluacion, i) in examenes" :key="i" class="col-4">
                <div class="card h-100 shadow-sm border-top border-4"
                    :class="apruebaEval[i] ? 'border-success' : 'border-danger'">
                    <div class="card-body">
                        <h4 class="card-title text-center text-secondary mb-3">{{ i+1 }}.ª Evaluación</h4>
                        <p class="text-muted small text-center mb-3">
                            Mínimo ordinario: <strong>{{ minimos[i][0] }}</strong> | Recuperación: <strong>{{ minimos[i][1] }}</strong>
                        </p>

                        <div v-for="(nota, j) in evaluacion.value" :key="j" class="mb-2">
                            <label v-if="j<3" class="form-label">Examen {{ j+1 }} </label>
                            <label v-else class="form-label fw-bold">Recuperacion</label>
                            <input type="number" min="0" max="100" class="form-control" v-model.number="evaluacion.value[j]">
                        </div>


                        <!-- RESULTADO DE LA 1.ª EVALUACIÓN -->
                        <div class="alert text-center fw-bold m-0 p-2"
                            :class="apruebaEval[i] ? 'alert-success' : 'alert-danger'">
                            {{ i+1 }}ª Eval: {{ apruebaEval[i] ? 'Aprobada' : 'Suspensa' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
