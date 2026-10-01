<script setup>
    defineProps({
    visible: { type: Boolean, default: false }
    })
    defineEmits(['cerrar'])

    const modelos = [
    { nombre: 'Urban Skull', descripcion: 'Diseño serigrafiado urbano.', precio: '19.99 EUR', imagen: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
    { nombre: 'Retro Waves', descripcion: 'Algodón orgánico retro.', precio: '21.99 EUR', imagen: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80' },
    { nombre: 'Cyber Neon', descripcion: 'Tinta fosforescente.', precio: '24.99 EUR', imagen: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80' },
    { nombre: 'Minimal Mountain', descripcion: 'Trazo fino serigrafiado.', precio: '18.99 EUR', imagen: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
    { nombre: 'Abstract Art', descripcion: 'Geometría y colores vivos.', precio: '22.99 EUR', imagen: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80' },
    { nombre: 'Vintage Tiger', descripcion: 'Ilustración serigrafiada.', precio: '25.99 EUR', imagen: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80' }
    ]
</script>

<template>
    <div v-if="visible" class="fondo" @click.self="$emit('cerrar')">
        <article class="catalogo">
        <header class="cab-mod">
            <div>
            <p class="etiqueta">6 MODELOS</p>
            <h3>Camisetas de Manuel</h3>
            </div>
            <button class="cerrar" @click="$emit('cerrar')">Cerrar</button>
        </header>
        <ul class="lista">
            <li v-for="modelo in modelos" :key="modelo.nombre" class="modelo">
            <img :src="modelo.imagen" :alt="modelo.nombre">
            <div class="info">
                <h4>{{ modelo.nombre }}</h4>
                <p>{{ modelo.descripcion }}</p>
                <strong>Desde {{ modelo.precio }}</strong>
            </div>
            </li>
        </ul>
        </article>
    </div>
</template>

<style scoped>
.fondo { 
    position: fixed; 
    inset: 0; 
    background: rgba(44, 55, 77, 0.6); 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding: 24px; 
    z-index: 100; }

.catalogo { 
    background: rgb(54, 3, 59); 
    border-radius: 18px; max-width: 
    760px; width: 100%; 
    max-height: 90vh; 
    overflow-y: auto; 
    padding: 28px; }

.cab-mod { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 20px; }
    
.etiqueta { 
    color: #2970c7; 
    font-weight: 
    bold; margin: 0; }

h3 { 
    margin: 0; 
    font-size: 26px; }
.cerrar { 
    background: none; 
    color: #fbfcfd; 
    border: 1px solid #eff1f4; 
    padding: 8px 16px; 
    cursor: pointer; 
    border-radius: 6px; }

.lista { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 18px; }
    
.modelo { 
    background: #7670c0; 
    border-radius: 12px; 
    overflow: hidden; }

.modelo img { 
    width: 100%; 
    height: 160px; 
    object-fit: cover; }

.info { 
    padding: 16px; 
    display: flex; 
    flex-direction: column; 
    gap: 6px; }

h4 { 
    margin: 0; 
    font-size: 18px;
    color:white;     
}

.info p { 
    margin: 0; 
    color: #172033; }

.info strong { 
    color: #04112d; 
    font-size: 18px; }

@media (max-width: 600px) {
    .lista { grid-template-columns: 1fr; }
}
</style>