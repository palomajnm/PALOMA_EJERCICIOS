<script setup>
    import { ref, computed, watch } from 'vue'

    const props = defineProps({
    visible: { type: Boolean, default: false },
    camiseta: { type: Object, default: null }
    })

    const emit = defineEmits(['cerrar', 'agregar-al-carrito'])

    const vistaPosterior = ref(false)
    const tallaSeleccionada = ref('M')

    const suplementosTalla = {
        'S': 0,
        'M': 0,
        'L': 2.00,  
        'XL': 3.50  
    }

    watch(() => props.camiseta, () => {
        vistaPosterior.value = false
        tallaSeleccionada.value = 'M'
        })
    
    const precioCalculado = computed(() => {
    if (!props.camiseta) return 0
    const extra = suplementosTalla[tallaSeleccionada.value] || 0
    return props.camiseta.precioBase + extra
    })

    const unidadesDisponibles = computed(() => {
    if (!props.camiseta || !props.camiseta.stock) return 0
    return props.camiseta.stock[tallaSeleccionada.value] || 0
    })

    const hayStock = computed(() => unidadesDisponibles.value > 0)


    const comprar = () => {
        if (!hayStock.value) return
        
        emit('agregar-al-carrito', {
            id: props.camiseta.id,
            nombre: props.camiseta.nombre,
            talla: tallaSeleccionada.value,
            precio: precioCalculado.value,
        })
        emit('cerrar')
        }
</script>

<template>
    <div v-if="visible && camiseta" class="fondo" @click.self="$emit('cerrar')">
        <article class="tarjeta">
        <div class="galeria">
            <img :src="vistaPosterior ? camiseta.imagenDetras : camiseta.imagenDelante" :alt="camiseta.nombre">
            <div class="botones-vista">
            <button :class="{ activo: !vistaPosterior }" @click="vistaPosterior = false">Delante</button>
            <button :class="{ activo: vistaPosterior }" @click="vistaPosterior = true">Detrás</button>
            </div>
        </div>

        <div class="info">
            <p class="etiqueta">SERIGRAFÍA ARTESANAL</p>
            <h3>{{ camiseta.nombre }}</h3>
            <p>{{ camiseta.descripcion }}</p>
            
            <strong class="precio">{{ precioCalculado.toFixed(2) }} EUR</strong>

            
            <div class="selector-talla">
            <label>Selecciona tu talla:</label>
            <div class="opciones-talla">
                <button 
                v-for="(extra, talla) in suplementosTalla" 
                :key="talla"
                :class="{ seleccionada: tallaSeleccionada === talla }"
                @click="tallaSeleccionada = talla"
                >
                {{ talla }}
                </button>
            </div>
            </div>

        
            <div class="disponibilidad" :class="{ 'sin-stock': !hayStock, 'con-stock': hayStock }">
            <span v-if="hayStock">✓ Disponible: ¡Quedan {{ unidadesDisponibles }} unidades en talla {{ tallaSeleccionada }}!</span>
            <span v-else>✕ Agotado: No hay disponibilidad en talla {{ tallaSeleccionada }}</span>
            </div>

            <div class="acciones">
            <button class="btn-comprar" :disabled="!hayStock" @click="comprar">Añadir al carrito</button>
            <button class="btn-cerrar" @click="$emit('cerrar')">Cerrar</button>
            </div>
        </div>
        </article>
    </div>
</template>

<style scoped>
.fondo { 
    position: fixed; 
    inset: 0; background: 
    rgba(46, 61, 93, 0.6); 
    display: flex; 
    align-items: center; 
    justify-content: 
    center; 
    padding: 24px; 
    z-index: 100; }
.tarjeta { background: rgb(226, 189, 241); 
    border-radius: 18px; 
    max-width: 740px; 
    width: 100%; 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    overflow: hidden; }

.galeria { 
    display: flex; 
    flex-direction: column; 
    background: rgb(226, 189, 241); }
.galeria img { 
    width: 100%; 
    height: 320px; 
    object-fit: cover; }
.botones-vista { 
    display: flex; 
    justify-content: center; 
    gap: 8px; 
    padding: 10px; }
.botones-vista button { 
    padding: 6px 12px; 
    border: 1px solid #ccc; 
    background: rgb(230, 10, 10); 
    cursor: pointer; 
    border-radius: 4px; }
.botones-vista button.activo { 
    background: #2563eb; 
    color: white; 
    border-color: #2563eb; }

.info { 
    padding: 28px; 
    display: flex; 
    flex-direction: column; 
    gap: 12px; }
.etiqueta { 
    color: #3c0977; 
    font-weight: bold; 
    margin: 0; 
    font-size: 12px; }
h3 { 
    margin: 0; 
    font-size: 26px;
    color:rgb(85, 0, 128) }
.precio { 
    color: #29106e; 
    font-size: 24px; }

.selector-talla { 
    margin-top: 5px; }
.selector-talla label { 
    display: block; 
    font-size: 14px; 
    font-weight: bold; 
    margin-bottom: 6px; }
.opciones-talla { 
    display: flex; 
    gap: 8px; }
.opciones-talla button { 
    border: 1px solid #ccc; 
    background: rgb(152, 187, 251); 
    padding: 6px 14px; 
    border-radius: 6px; cursor: pointer; font-weight: bold; }
.opciones-talla button.seleccionada { 
    border-color: #2563eb; 
    background: #eff6ff; 
    color: #2563eb; }

.disponibilidad { 
    font-size: 13px; 
    font-weight: bold; 
    padding: 8px 12px; 
    border-radius: 6px; 
    margin-top: 4px; }
.disponibilidad.con-stock { 
    background: #dcfce7; 
    color: #166534; }
.disponibilidad.sin-stock { 
    background: #fee2e2; 
    color: #991b1b; }

.acciones { 
    display: flex; 
    gap: 10px; 
    margin-top: 10px; }
.btn-comprar { 
    background: #2563eb; 
    color: white; 
    border: none; 
    padding: 12px 20px; 
    cursor: pointer; 
    border-radius: 6px; 
    font-weight: bold; 
    flex: 1; }
.btn-comprar:disabled { 
    background: #9ca3af; 
    cursor: not-allowed; }
.btn-cerrar { 
    background: transparent; 
    color: #172033; 
    border: 1px solid #ccc; 
    padding: 12px 16px; 
    cursor: pointer; 
    border-radius: 6px; }

@media (max-width: 650px) {
    .tarjeta { grid-template-columns: 1fr; }
}
</style>