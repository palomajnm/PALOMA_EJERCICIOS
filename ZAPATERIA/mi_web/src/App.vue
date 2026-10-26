<script setup>
import {ref} from 'vue'
import Cabecera from './components/Cabecera.vue'
import Pie from './components/Pie.vue'
import Catalogo from './components/catalogo.vue'

const mostrarCatalogo = ref(false)
</script>

<template>
  <Cabecera @abrir-modelos="mostrarCatalogo=true" />

  <router-view @abrir-modelos="mostrarCatalogo=true"/>
  
  <Pie />

  <Catalogo :visible="mostrarCatalogo" @cerrar="mostrarCatalogo=false"></Catalogo>
</template>
