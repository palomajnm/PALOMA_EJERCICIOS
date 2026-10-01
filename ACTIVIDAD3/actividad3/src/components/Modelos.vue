<script setup>
    import { ref } from 'vue'
    import Detalle from './Detalle.vue'

    const emit = defineEmits(['agregar-al-carrito'])
    const camisetas = [
        {
            id: 1,
            nombre: 'Urban Skull',
            descripcion: 'Diseño serigrafiado estilo urbano.',
            precioBase: 19.99,
            imagenDelante: 'https://images.unsplash.com/vector-1772568027819-49e82d9aaf4a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imagenDetras: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
            stock: { 'S': 5, 'M': 2, 'L': 0, 'XL': 3 }
        },
        {
            id: 2,
            nombre: 'Retro Waves',
            descripcion: 'Inspiración ochentera en algodón orgánico.',
            precioBase: 21.99,
            imagenDelante: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
            imagenDetras: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
            stock: { 'S': 0, 'M': 4, 'L': 1, 'XL': 2 }
        },
        {
            id: 3,
            nombre: 'Cyber Neon',
            descripcion: 'Tinta fosforescente de alta resistencia.',
            precioBase: 24.99,
            imagenDelante: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
            imagenDetras: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
            stock: { 'S': 2, 'M': 0, 'L': 5, 'XL': 0 }
        },
        {
            id: 4,
            nombre: 'Minimal Mountain',
            descripcion: 'Trazo fino serigrafiado a mano.',
            precioBase: 18.99,
            imagenDelante: 'https://images.unsplash.com/vector-1772568027819-49e82d9aaf4a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imagenDetras: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
            stock: { 'S': 3, 'M': 3, 'L': 3, 'XL': 3 }
        },
        {
            id: 5,
            nombre: 'Abstract Art',
            descripcion: 'Geometría y combinación de colores vivos.',
            precioBase: 22.99,
            imagenDelante: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
            imagenDetras: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
            stock: { 'S': 1, 'M': 0, 'L': 0, 'XL': 4 }
        },
        {
            id: 6,
            nombre: 'Vintage Tiger',
            descripcion: 'Ilustración detallada en serigrafía tradicional.',
            precioBase: 25.99,
            imagenDelante: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
            imagenDetras: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
            stock: { 'S': 4, 'M': 2, 'L': 1, 'XL': 0 }
        }
    ]

    const camisetaSeleccionada = ref(null)
    const mostrarModal = ref(false)

    const abrirDetalle = (camiseta) => {
    camisetaSeleccionada.value = camiseta
    mostrarModal.value = true
    }

    const alAgregarAlCarrito = (item) => {
    emit('agregar-al-carrito', item)
    }
</script>
<template>
    <section id="modelos" class="modelos">
        <p>COLECCIÓN EXCLUSIVA</p>
        <h2>Camisetas Serigrafiadas</h2>

        <div class="rejilla">
        <article 
            v-for="camiseta in camisetas" 
            :key="camiseta.id" 
            class="tarjeta-camiseta"
            @click="abrirDetalle(camiseta)"
        >
            <img :src="camiseta.imagenDelante" :alt="camiseta.nombre">
            <h3>{{ camiseta.nombre }}</h3>
            <p>{{ camiseta.descripcion }}</p>
            <strong>Desde {{ camiseta.precioBase.toFixed(2) }} EUR</strong>
        </article>
        </div>

        <Detalle 
        :visible="mostrarModal" 
        :camiseta="camisetaSeleccionada"
        @cerrar="mostrarModal = false"
        @agregar-al-carrito="alAgregarAlCarrito"
        />
    </section>
</template>

<style scoped>
h3{
    color:black;
}

.modelos { 
    max-width:1100px; 
    margin:auto; 
    padding:70px 24px; 
    text-align:center; }

.rejilla { 
    display:grid; 
    grid-template-columns:repeat(3, 1fr); 
    gap:18px; 
    margin-top: 20px; }
    
.tarjeta-camiseta { 
    background:#a9a8f0; 
    border-radius:12px; 
    padding:24px; 
    text-align:left; 
    cursor: pointer; 
    transition: transform 0.2s; }

.tarjeta-camiseta:hover { 
    transform: translateY(-4px); }

.tarjeta-camiseta img { 
    width: 100%; 
    height: 200px; 
    object-fit: cover; 
    border-radius: 8px; 
    margin-bottom: 12px; }

.tarjeta-camiseta h3 { 
    margin: 0 0 6px 0; 
}

.tarjeta-camiseta p { 
    margin: 0 0 10px 0; 
    color: #300452; }

.tarjeta-camiseta strong { 
    color: #2563eb; }

@media (max-width: 768px) {
    .rejilla { grid-template-columns: 1fr; }
}
</style>