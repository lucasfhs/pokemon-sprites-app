<template>
  <div class="container">
    <p class="subtitle">Nome do Sprite: {{ name }}</p>
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
.container {
  width: 220px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  background-color: rgba(200, 0, 0, 0.608);
  border: 1px solid rgba(255, 255, 255, 0.089);
  cursor: pointer;
}
</style>