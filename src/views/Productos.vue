<template>
  <div>
    <header>
      <div class="caja">
        <h1><img src="/imagenes/logo.png" alt="Logo Barbería Alura" /></h1>
        <nav>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/productos">Productos</RouterLink></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <ul class="productos">
        <li>
          <h2>Cabello</h2>
          <img src="/imagenes/cabello.jpg" alt="Corte de cabello" />
          <p class="producto-descripcion">
            Con tijera o máquina, a gusto del cliente
          </p>
          <p class="producto-precio">$ 10.00</p>
        </li>
        <li>
          <h2>Barba</h2>
          <img src="/imagenes/barba.jpg" alt="Diseño de barba" />
          <p class="producto-descripcion">
            Corte y diseño profesional de barba
          </p>
          <p class="producto-precio">$ 08.00</p>
        </li>
        <li>
          <h2>Cabello + Barba</h2>
          <img src="/imagenes/cabello+barba.jpg" alt="Cabello y barba" />
          <p class="producto-descripcion">
            Paquete completo de cabello y barba
          </p>
          <p class="producto-precio">$ 15.00</p>
        </li>
      </ul>
    </main>

    <footer>
      <img src="/imagenes/logo-blanco.png" alt="Logo blanco Barbería Alura" />
      <p class="copyright">
        &copy; Copyright Barbería Alura - 2020
      </p>
    </footer>
  </div>
</template>

<script setup>
// Este componente no necesita lógica aún
</script>

<style scoped>
/* Estilo global cargado desde main.js */
</style>
