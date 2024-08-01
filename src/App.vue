<script>

import { store } from './store.js';
// istallato axios e lo importo
import axios from 'axios';
// importo componente appheader
import AppHeader from './components/AppHeader.vue';
// importo componente CharacterList
import CharacterList from './components/CharacterList.vue';
// importo la componenete CharacterCard
import CharacterCard from './components/CharacterCard.vue';

export default {
  components: {
    // utilizzo la componente appheader
    AppHeader,
    // utilizzo componente CharacterList
    CharacterList,
    // utilizzo la componenete CharacterCard
    CharacterCard
  },

  // devo popolare l'array vuoto
  created() {
    this.getCharactersList()
  },

  methods: {
    getCharactersList(){
      axios.get(store.apiUrl).then((result) => {
        store.charactersList = result.data.data;
      });
    }
  },

  data() {
    return {
      store,
    }
  }
}
</script>

<template>

    <AppHeader />
  
    <CharacterList />

    <div class="container">
      <div class="row">
        <CharacterCard v-for="character in store.charactersList" :key="character.id" :character="character"/>
      </div>
    </div>
   
  
  
</template>

<style lang="scss">
  @import './styles/general.scss'



</style>
