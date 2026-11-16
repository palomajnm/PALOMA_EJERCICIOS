<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router= useRouter();

//definimos los eventos que va enviar al padre
const emit = defineEmits(['seleccionar-alumno']);

//lista inicial de alumnos
const alumnos= ref([
    'Ana Garcia',
    'Carlos Lopez',
    'Lucia Martinez'
]);

const nuevoAlumno= ref('');

const agregarAlumno= () =>{
    const nombreAlumno = nuevoAlumno.value.trim();
    if(nombreAlumno !== ''){
        alumnos.value.push(nombreAlumno);
        nuevoAlumno.value='';
    }
};

const eliminarAlumno = (indice) => {
    alumnos.value.splice(indice,1);
};

const irAnotas= (nombre) =>{
    router.push({name: 'Resultado', params: { nombre}});
};

</script>

<template>
    <div class="container my-5" style="max-width: 700px;">
        <h1 class="text-center text-primary fw-bold mb-4">Alumnos de la materia</h1>

        <!-- Formulario para añadir alumno -->
        <form @submit.prevent="agregarAlumno" class="input-group mb-4 shadow-sm">
            <input type="text"
            class="form-control"
            placeholder="Nombre y apellidos del nuevo alumno"
            v-model="nuevoAlumno"
            >
            <button class=" btn btn-primary fw-bold" type="submit"> + Añadir alumnos </button>
        </form>

        <!--Listado de alumnos-->
        <div v-if="alumnos.length>0" class="list-group shadow-sm">
            <div 
            v-for="(alumno, index) in alumnos" 
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-center p-3" >
                <span class="fw-semibold fs-5">{{ alumno }}</span>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-primary btn-sm"
                    @click="irAnotas(alumno)"
                    >Poner notas
                    </button>

                    <button class="btn btn-outline-danger btn-sm"
                    @click="eliminarAlumno(index)">
                        Quitar
                    </button>

                </div>

            </div>
        </div>
        <div v-else class="alert alert-warning text-center">
            No hay alumnos matriculados en esta materia
        </div>
    </div>
</template>