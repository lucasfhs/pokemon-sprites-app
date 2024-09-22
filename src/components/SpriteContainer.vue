<template>
    <div>
      <p>Nome do Sprite: {{ name }}</p>
      <img :src="url" alt="Sprite do Pokémon">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Seu estilo aqui */
  </style>
  