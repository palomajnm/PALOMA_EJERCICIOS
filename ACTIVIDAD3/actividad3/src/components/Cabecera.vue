<script setup>
import {ref} from 'vue'

defineProps({
    carrito: {
        type: Array,
        default: () => []
    }
})

const mostrarCarrito = ref(false)

defineEmits(['abrir-modelos'])
</script>

<template>
    <header>
        <a  class="marca" href="#inicio"><h1>MANUEL SHIRTS</h1></a>
        <nav>
            <a href="#modelos" @click.prevent="$emit('abrir-modelos')">Catálogo Completo</a>
            <a href="#contacto">Contacto</a>

            <div class="carrito-container">
                <button class="btn-carrito" @click="mostrarCarrito = !mostrarCarrito">
                    <img src="https://images.unsplash.com/vector-1763382329927-1b1f16b5b5aa?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="cesta">({{ carrito.length }})
                </button>

                <div v-if="mostrarCarrito" class="carrito-dropdown">
                    <h4>Tus Camisetas</h4>
                    <p v-if="carrito.length === 0" class="vacio">El carrito está vacío.</p>
                    <ul v-else>
                        <li v-for="(item, index) in carrito" :key="index">
                        <span><strong>{{ item.nombre }}</strong> (Talla {{ item.talla }})</span>
                        <span>{{ item.precio.toFixed(2) }} EUR</span>
                        
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.cabecera { 
    display:flex; 
    justify-content:space-between; 
    align-items:center; 
    max-width:1200px; 
    margin:20px; 
    padding:24px; 
    position: relative; }

.marca {
    color:#a20bed; 
    font-size:50px; 
    font-weight:bold; 
    text-decoration:none;
    
}

h1{
    color:#a20bed;
    font-style: bold;
}

nav { 
    display: flex; 
    align-items: center; 
    gap: 10px; }
nav a { 
    color:#f6f7f8; 
    text-decoration:none; 
    margin:10px;
}
img{
    width: 0.5cm;
}

.carrito-container { 
    position: relative; }

.btn-carrito { 
    background: #c478d5; 
    color: white; border: 
    none; padding: 8px 14px; 
    border-radius: 8px; 
    cursor: pointer; 
    font-weight: bold; }

.carrito-dropdown { 
    position: absolute; 
    right: 0; 
    top: 40px; 
    background: white; 
    border: 1px solid #ddd; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
    width: 280px; padding: 16px; 
    border-radius: 8px; 
    z-index: 200; }

.carrito-dropdown h4 { 
    margin-top: 0; 
    margin-bottom: 10px; 
    border-bottom: 1px solid #eee; 
    padding-bottom: 5px; }
.carrito-dropdown ul { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
    max-height: 200px; 
    overflow-y: auto; }

.carrito-dropdown li { 
    display: flex; 
    justify-content: 
    space-between; font-size: 14px; 
    margin-bottom: 8px; 
    border-bottom: 1px dashed #eee; 
    padding-bottom: 4px; }
.vacio { 
    font-size: 14px; 
    color: #6a6767; 
    margin: 0; }
</style>