<template>
  <main>
    <h1 class="pokemon-title">Pokémon Sprites</h1>
    <div id="app">
      <search-bar @searchSignal="apiFetch($event)" />
    </div>
    <div class="sprites">

      <div class="button-container">
        <p class="msg-error" v-if="errorSignal">Sprite not found &#128531;</p>
        <button class="button-30" @click="resetSprites">Clear Sprites</button>
      </div>
      <div class="sprites-container">
        <sprite-container v-for="(pokemon, index) in urlSprite" :key="index" :name="pokemon.nameSprite"
          :url="pokemon.urlSprite" />
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
      errorSignal: false
    }
  },
  methods: {
    async apiFetch(query) {
      try {
        const response = await fetch(`${this.url_api}pokemon/${query}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (data && data.sprites) {
          this.objSprite = data.sprites;
          this.generateSprites(this.objSprite);
        }
        this.errorSignal = false;
      } catch (error) {
        this.errorSignal = true;
        console.error('There has been a problem with your fetch operation:', error);
      }
    },
    generateSprites(objSprite) {
      this.urlSprite = [];
      for (let key in objSprite) {
        const spriteUrl = objSprite[key];
        if (typeof spriteUrl === 'string' && spriteUrl) {
          this.urlSprite.push({
            nameSprite: key,
            urlSprite: spriteUrl,
          });
        }
      }
    },
    resetSprites() {
      this.urlSprite = [];
      this.objSprite = null;
      console.log('Sprites limpos:', this.urlSprite);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
  font-family: 'pokemon-font';
  src: url('./assets/font/Pokemon_Solid.ttf');
  font-weight: normal;
  font-style: normal;
}


* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}

main {
  height: 100vh;
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
}

.msg-error {
  font-size: 24px;
  padding: 3px;
  border-radius: 3px;
  color: white;
  font-family: "Montserrat", sans-serif;
  margin-right: 46px;
}

.button-container {
  display: flex;
  justify-content: end;
  align-items: center;
}

.clear-button {
  width: 120px;
  height: 36px;
  padding: 2px;
  border: 1px solid black;
  background-color: #ffde00;
  outline: none;
  transition: 0.4ms all ease-out;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.clear-button:hover {
  background-color: #FFF;
}

.button-30 {
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

.sprites {

  padding: 6px;
  border: 0.5px solid black;
  margin: 0 auto;
  margin-top: 20px;
  min-height: 70vh;
  height: auto;
  max-width: 90%;
  width: auto;
  background-color: rgba(0, 0, 255, 0.6);
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  padding: 20px;
  position: relative;

}

.sprites-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
}

.pokemon-title {
  text-align: center;
  font-size: 46px;
  font-family: 'pokemon-font';
  color: #ffde00;
  text-shadow:
    -4px -4px 0 #3b4cca,
    4px -4px 0 #3b4cca,
    -4px 4px 0 #3b4cca,
    4px 4px 0 #3b4cca;
}
</style>
