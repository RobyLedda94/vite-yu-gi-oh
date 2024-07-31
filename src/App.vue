<script>

import { store } from './store.js';
// istallato axios e lo importo
import axios from 'axios';


export default {
  components: {

  },

  // devo popolare l'array vuoto
  created() {

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

<template lang="">
  <div class='container'>
      <div class='row'>

      </div>
  </div>
</template>

<style lang="scss">
  @import './styles/general.scss'
</style>
