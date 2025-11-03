<template>
  <div>
    <HeaderBar />

    <main>
      <h2>Productos disponibles</h2>

      <ul class="productos">
        <ProductItem
          v-for="(producto, index) in productos"
          :key="index"
          :title="producto.title"
          :image="producto.image"
          :description="producto.description"
          :price="producto.price"
        />
      </ul>

      <button @click="ordenarPorPrecio">Ordenar por precio</button>
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
import HeaderBar from '../components/HeaderBar.vue'
import ProductItem from '../components/ProductItem.vue'
import FooterBar from '../components/FooterBar.vue'

//  Estado reactivo
const productos = ref([
  {
    title: 'Cabello',
    image: '/imagenes/cabello.jpg',
    description: 'Con tijera o máquina, a gusto del cliente',
    price: 10.0
  },
  {
    title: 'Barba',
    image: '/imagenes/barba.jpg',
    description: 'Corte y diseño profesional de barba',
    price: 8.0
  },
  {
    title: 'Cabello + Barba',
    image: '/imagenes/cabello+barba.jpg',
    description: 'Paquete completo de cabello y barba',
    price: 15.0
  }
])

//  Interactividad
function ordenarPorPrecio() {
  productos.value.sort((a, b) => a.price - b.price)
}
</script>

<style scoped>
/* Estilo global cargado desde main.js */
</style>
