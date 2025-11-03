<template>
  <div>
    <HeaderNav />

    <main>
      <ul class="productos">
        <ProductItem
          title="Cabello"
          image="/imagenes/cabello.jpg"
          description="Con tijera o máquina, a gusto del cliente"
          price="$10.00"
        />
        <ProductItem
          title="Barba"
          image="/imagenes/barba.jpg"
          description="Corte y diseño profesional de barba"
          price="$8.00"
        />
        <ProductItem
          title="Cabello + Barba"
          image="/imagenes/cabello+barba.jpg"
          description="Paquete completo de cabello y barba"
          price="$15.00"
        />
      </ul>
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
   import HeaderNav from '../components/HeaderNav.vue'
   import ProductItem from '../components/ProductItem.vue'
   import FooterBar from '../components/FooterBar.vue'
</script>

<style scoped>
/* Estilo global cargado desde main.js */
</style>
