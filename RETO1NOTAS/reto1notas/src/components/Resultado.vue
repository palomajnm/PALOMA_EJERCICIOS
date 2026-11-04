<script setup>
import { ref, computed } from 'vue';

//Primera evaluacion(Minimo en examen: 70 y en recuperacion: 50)
const e1_ex1 = ref(0);
const e1_ex2 = ref(0);
const e1_ex3 = ref(0);
const e1_rec = ref(0);



//comprobamos si aprueba la primera evaluacion
const apruebaEval1 = computed(() => {
    if (e1_ex1.value >= 70 && e1_ex2.value >= 70 && e1_ex3.value >= 70) {
        return true;
    } else if (e1_rec.value >= 50) {
        return true;

    } else {
        return false;
    }
})

//Segunda evaluacion(Minimo en examen:60 y en recuperacion: 50)
const e2_ex1 = ref(0);
const e2_ex2 = ref(0);
const e2_ex3 = ref(0);
const e2_rec = ref(0);

const apruebaEval2 = computed(() => {
    if (e2_ex1.value >= 60 && e2_ex2.value >= 60 && e2_ex3.value >= 60) {
        return true;
    } else if (e2_rec.value >= 50) {
        return true;
    } else {
        return false;
    }
});

//Tercera evaluacion (minimo en examen: 50 y en recuperacion: 50)
const e3_ex1 = ref(0);
const e3_ex2 = ref(0);
const e3_ex3 = ref(0);
const e3_rec = ref(0);

const apruebaEval3 = computed(() => {
    if (e3_ex1.value >= 50 && e3_ex2.value >= 50 && e3_ex3.value >= 50) {
        return true;
    } else if (e3_rec.value >= 50) {
        return true;
    } else {
        return false;
    }
});

//Resultado general de todas las notas
const estaAprobado = computed(() => {
    if (apruebaEval1.value === true && apruebaEval2.value === true && apruebaEval3.value === true) {
        return true;
    } else {
        return false;
    }
})
</script>

<template>
    <div class="container my-5">
        <h1 class="text-center text-primary fw-bold mb-4">Resultado de las Evaluaciones</h1>
        <div class="alert text-center shadow-sm mb-5" 
        :class="estaAprobado ? 'alert-success' : 'alert-danger'">
            <h2 class="alert-heading m-0 fw-bold">Estado final: {{ estaAprobado ? 'APROBADO' : 'SUSPENSO' }}</h2>
        </div>

        <!--TARJETAS DE EVALUACIONES-->
        <div class="row g-4">
            <!--primera evaluacion-->
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-top border-4"
                    :class="apruebaEval1 ? 'border-success' : 'border-danger'">
                    <div class="card-body">
                        <h4 class="card-title text-center text-secondary mb-3">1.ª Evaluación</h4>
                        <p class="text-muted small text-center mb-3">
                            Mínimo ordinario: <strong>70</strong> | Recuperación: <strong>50</strong>
                        </p>

                        <div class="mb-2">
                            <label class="form-label">Examen 1</label>
                            <input type="number" min="0" max="100" class="form-control" v-model.number="e1_ex1">
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Examen 2</label>
                            <input type="number" min="0" max="100" class="form-control" v-model.number="e1_ex2">
                        </div>

                        <div class="mb-2">
                            <label class="form-label">Examen 3</label>
                            <input type="number" min="0" max="100" class="form-control" v-model.number="e1_ex3">
                        </div>

                        <hr class="my-3">

                        <div class="mb-3">
                            <label class="form-label fw-bold">Recuperación</label>
                            <input type="number" min="0" max="100" class="form-control" v-model.number="e1_rec">
                        </div>

                        <!-- RESULTADO DE LA 1.ª EVALUACIÓN -->
                        <div class="alert text-center fw-bold m-0 p-2"
                            :class="apruebaEval1 ? 'alert-success' : 'alert-danger'">
                            {{ apruebaEval1 ? '1.ª Eval: Aprobada' : '1.ª Eval: Suspensa' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
