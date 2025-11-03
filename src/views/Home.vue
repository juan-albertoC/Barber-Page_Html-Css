

<template>
  <div>
    <HeaderBar />

    <section class="principal">
      <h2>Sobre la Barbería Alura</h2>
      <p>{{ descripcion }}</p>

      <h3>Diferenciales</h3>
      <ul>
        <li v-for="(item, index) in diferenciales" :key="index">{{ item }}</li>
      </ul>

      <button @click="agregarDiferencial">Agregar diferencial</button>
    </section>

    <FooterBar />
  </div>
</template>


<script setup>

import { ref } from 'vue'
import HeaderBar from '../components/HeaderBar.vue'
import FooterBar from '../components/FooterBar.vue'

//  Variables reactivas
const descripcion = ref(
  'Ubicada en el corazón de la ciudad, la Barbería Alura ofrece lo mejor para tu cabello y barba.'
)

const diferenciales = ref([
  'Atención personalizada',
  'Espacio diferenciado',
  'Localización',
  'Profesionales calificados'
])

function agregarDiferencial() {
  diferenciales.value.push('Nuevo servicio agregado')
}
</script>

<style scoped></style>
