import Vue from 'vue'
import App from './App.vue'
import SearchBar from './components/SearchBar.vue'
import SpriteContainer from './components/SpriteContainer.vue';
Vue.component('SearchBar', SearchBar);
Vue.component('SpriteContainer', SpriteContainer);
Vue.config.productionTip = false
 new Vue({
  render: h => h(App),
}).$mount('#app')
