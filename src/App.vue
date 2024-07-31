<script>

import { store } from './store.js';
// istallato axios e lo importo
import axios from 'axios';
// importo componente appheader
import AppHeader from './components/AppHeader.vue';
// importo componente CharacterList
import CharacterList from './components/CharacterList.vue';

export default {
  components: {
    // utilizzo la componente appheader
    AppHeader,
    // utilizzo componente CharacterList
    CharacterList
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
  
  
</template>

<style lang="scss">
  @import './styles/general.scss'

</style>
