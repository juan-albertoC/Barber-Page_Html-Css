
<template>
  <li>
    <h2>{{ title }}</h2>
    <img :src="image" :alt="title" />
    <p class="producto-descripcion">{{ description }}</p>
    <p class="producto-precio">{{ price }}</p>
  </li>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
  price: String
})
</script>

