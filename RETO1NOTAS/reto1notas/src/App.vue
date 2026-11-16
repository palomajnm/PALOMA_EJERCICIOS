<script setup>
  
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">MiLogo</router-link>
          <div>
            <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/">Inicio</router-link> | 
              <router-link to="/Resultado">Resultado</router-link> | 
              <router-link to="/Alumnos">Alumnos</router-link>
            </li>
          </ul>
          </div>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

