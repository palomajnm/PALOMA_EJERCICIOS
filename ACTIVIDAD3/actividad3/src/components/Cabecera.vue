<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    carrito: {
        type: Array,
        default: () => []
    }
})

const emits = defineEmits(['abrir-modelos', 'eliminar-carrito'])

const mostrarCarrito = ref(false)

const totalCarrito = computed(() => {
    return props.carrito.reduce((total, producto) => total + producto.precio, 0)
})

const eliminarItem = (index) => {
    emits('eliminar-carrito', index)
}
</script>

<template>
    <header>
        <a class="marca" href="#inicio"><h1>MANUEL SHIRTS</h1></a>
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
                    
                    <!-- Envolvemos todo el bloque de lista + total dentro del v-else -->
                    <div v-else>
                        <ul>
                            <li v-for="(item, index) in carrito" :key="index">
                                <div>
                                    <strong>{{ item.nombre }}</strong> (Talla {{ item.talla }})
                                    <br>
                                    <span>{{ item.precio.toFixed(2) }} EUR</span>
                                </div>
                                <button class="btn-eliminar-item" @click="eliminarItem(index)" title="Eliminar producto">
                                    ✕
                                </button>
                            </li>
                        </ul>
                        
                        <div class="total-container">
                            <strong>Total:</strong>
                            <strong>{{ totalCarrito.toFixed(2) }} EUR</strong>
                        </div>
                    </div>
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
    position: relative; 
}

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
    gap: 10px; 
}

nav a { 
    color:#f6f7f8; 
    text-decoration:none; 
    margin:10px;
}

img{
    width: 0.5cm;
}

.carrito-container { 
    position: relative; 
}

.btn-carrito { 
    background: #c478d5; 
    color: white; 
    border: none; 
    padding: 8px 14px; 
    border-radius: 8px; 
    cursor: pointer; 
    font-weight: bold; 
}

.carrito-dropdown { 
    position: absolute; 
    right: 0; 
    top: 40px; 
    background: white; 
    border: 1px solid #ddd; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
    width: 280px; 
    padding: 16px; 
    border-radius: 8px; 
    z-index: 200; 
    color: #333; /* Garantizamos que el texto dentro del menú desplegable sea oscuro */
}

.carrito-dropdown h4 { 
    margin-top: 0; 
    margin-bottom: 10px; 
    border-bottom: 1px solid #eee; 
    padding-bottom: 5px; 
}

.carrito-dropdown ul { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
    max-height: 200px; 
    overflow-y: auto; 
}

.carrito-dropdown li { 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    font-size: 14px; 
    margin-bottom: 8px; 
    border-bottom: 1px dashed #eee; 
    padding-bottom: 4px; 
}

.vacio { 
    font-size: 14px; 
    color: #6a6767; 
    margin: 0; 
}

/* ESTILOS AÑADIDOS PARA EL BOTÓN Y EL TOTAL */
.btn-eliminar-item {
    background: #e11d48;
    color: white;
    border: none;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-eliminar-item:hover {
    background: #be123c;
}

.total-container {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    padding-top: 8px;
    border-top: 2px solid #eee;
    color: #111827;
    font-size: 15px;
}
</style>