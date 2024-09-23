<template>

  <main>
    <h1 class="pokemon-title">Pokémon Sprites</h1>
    <div id="app">
      <search-bar @searchSignal="apiFetch($event)" />
    </div>
    <div class="sprites">
      <div  class="sprites-container">
        <sprite-container v-for="poke in this.urlSprite" :key="poke.id" :name="'oi'" :url="poke" />
      </div>
    </div>
  </main>

</template>

<script>
import 'boxicons/css/boxicons.min.css';

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

.sprites {
  padding: 6px;
  border: 0.5px solid black;
  margin: 0 auto;
  margin-top: 20px;
  min-height: 70vh;
  height: auto;
  width: 80%;
  background-color: rgba(0, 0, 255, 0.6);
  grid-template-columns: repeat(3, 1fr);
  /* Cria 3 colunas com tamanhos iguais */
  gap: 6px;
  /* Espaçamento entre os itens */
  padding: 20px;

}
.sprites-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Cria 3 colunas com tamanhos iguais */
  gap: 20px; /* Espaçamento entre os itens */
  padding: 20px;
  justify-content: center; /* Centraliza o grid horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente (se necessário) */
}


@font-face {
  font-family: 'pokemon-font';
  src: url('./assets/font/Pokemon\ Solid.ttf');
  font-weight: normal;
  font-style: normal;
}

.pokemon-title {
  text-align: center;
  font-size: 46px;
  font-family: 'pokemon-font';
  color: #ffde00;
  text-shadow:
    -4px -4px 0 #3b4cca,
    /* Sombra no topo à esquerda */
    4px -4px 0 #3b4cca,
    /* Sombra no topo à direita */
    -4px 4px 0 #3b4cca,
    /* Sombra na base à esquerda */
    4px 4px 0 #3b4cca;
  /* Sombra na base à direita */
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #b3a125;
  background-image:
    linear-gradient(to right, #3b4cca 1px, transparent 1px),
    linear-gradient(to bottom, #3b4cca 1px, transparent 1px);
  background-size: 50px 50px;
  /* Tamanho de cada quadrado do grid */
}


main {
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}
</style>
