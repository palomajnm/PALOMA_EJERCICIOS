<script setup>
import {ref} from 'vue'
import Cabecera from './components/Cabecera.vue'
import Inicio from './components/Inicio.vue'
import Modelos from './components/Modelos.vue'
import Pie from './components/Pie.vue'
import Catalogo from './components/Catalogo.vue'

const mostrarCatalogo = ref(false)
const carrito = ref([])

const agregarAlCarrito = (producto) => {
  carrito.value.push(producto)

}

const eliminarDelCarrito = (index) => {
  carrito.value.splice(index, 1)
}
</script>

<template>
  <Cabecera 
  :carrito="carrito" 
  @abrir-modelos="mostrarCatalogo = true"
  @eliminar-carrito="eliminarDelCarrito"
  />
  <main>
    <Inicio @abrir-modelos="mostrarCatalogo = true" />
    <Modelos @agregar-al-carrito="agregarAlCarrito" />

  </main>
  <Pie />

  <Catalogo 
    :visible="mostrarCatalogo" 
    @cerrar="mostrarCatalogo = false" 
    @agregar-al-carrito="agregarAlCarrito"
  />
</template>