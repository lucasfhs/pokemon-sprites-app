<template>
  <div class="container">
    <p class="subtitle">Sprite name:</p>
    <p class="subtitle">{{ name }}</p>
    <img :src="url" alt="pokemon game sprite" loading="lazy">
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

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
  background-color: rgba(200, 0, 0, 0.708);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.subtitle {
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 1.2em;
  color: white;
  text-shadow:
    -0.5px -0.5px 0 #000,
    0.5px -0.5px 0 #000,
    -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
}
</style>
