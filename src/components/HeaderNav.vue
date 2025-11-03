
<template>
  <header>
    <div class="caja">
      <h1>
        <img src="/imagenes/logo.png" alt="Logo Barbería Alura" />
      </h1>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/productos">Productos</RouterLink></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
