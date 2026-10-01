<script setup>
import {ref} from 'vue'
import Cabecera from './components/Cabecera.vue'
import Inicio from './components/Inicio.vue'
import Modelos from './components/Modelos.vue'
import Pie from './components/Pie.vue'
import Catalogo from './components/catalogo.vue'

const mostrarCatalogo = ref(false)
</script>

<template>
  <Cabecera @abrir-modelos="mostrarCatalogo=true" />
  <main>
    <Inicio @abrir-modelos="mostrarCatalogo=true"/>
    <Modelos />
  </main>
  <Pie />

  <Catalogo :visible="mostrarCatalogo" @cerrar="mostrarCatalogo=false"></Catalogo>
</template>
