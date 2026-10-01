<script setup>
    import { ref } from 'vue'

    defineEmits(['abrir-modelos'])
</script>

<template>
    <section id="inicio" class="hero">
        <div>
        <p>SERIGRAFÍA 100% ARTESANAL</p>
        <h1>Camisetas con estilo propio.</h1>
        <p>Diseñadas e impresas a mano por Manuel. Calidad, comodidad y diseños únicos.</p>
        <a href="#modelos" @click.prevent="$emit('abrir-modelos')">Ver catálogo completo</a>
        </div>
        <img 
        src="https://images.unsplash.com/vector-1776502140714-188ec1e9919e?q=80&w=777&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Camisetas serigrafiadas"
        >
    </section>
</template>

<style scoped>
.hero { 
    display:grid; 
    grid-template-columns:1fr 1fr; 
    gap:40px; 
    max-width:1300px; 
    margin:10px; 
    padding:24px; 
    align-items: center;
    background-color: #200547;
    border-radius:20px;
}
.hero img { 
    width:100%; 
    border-radius:18px; 
    object-fit: cover; 
    height: 350px; } 
.hero p:first-child { 
    color: #9c6edd; 
    font-weight: bold; 
    margin-bottom: 8px; }
.hero a { 
    background:#3e117e; 
    color:rgb(247, 243, 243); 
    padding:12px 20px; 
    text-decoration:none; 
    border-radius: 6px; 
    display: inline-block; 
    margin-top: 10px; }
.hero h1{
    font-size: 45px;
}
</style>