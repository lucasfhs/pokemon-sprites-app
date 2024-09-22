<template>

  <main>

    <div id="app">
      <search-bar @searchSignal="apiFetch($event)" />
    </div>
    <div class="sprites" v-if="objSprite">
      <sprite-container v-for="poke in this.urlSprite" :key="poke.id" :name="'oi'" :url="poke" />
    </div>

  </main>
</template>

<script>


export default {

  data: function () {
    return {
      url_api: 'https://pokeapi.co/api/v2/',
      objSprite: null,
      urlSprite: [],
    }
  },
  methods: {
    async apiFetch(query) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (data) {
          this.objSprite = data.sprites;
          // Chamada correta de generateSprites
          this.generateSprites(this.objSprite);
          // console.log(data);
          console.log(this.objSprite);
          console.log(this.urlSprite);
        }
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    },
    generateSprites(objSprite) {
      /*
  
      for (let [key, value] of Object.entries(objSprite)) {
        if (value && key && ) {
          this.urlSprite.push(value);
        }
      }
      */
      for (let v in objSprite) {
        if (typeof v === 'string' && v !== 'versions' && v !== 'other' && objSprite[v] != null)
          this.urlSprite.push(objSprite[v]);
      }
    }
  }
}
</script>

<style>
main {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('./assets/04-01.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}
</style>
