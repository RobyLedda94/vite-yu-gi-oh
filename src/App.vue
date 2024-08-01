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

    <main>
      <div class="container-fluid text-center py-4">
        <div class="row">
            <div class="col-12">
                <div class="btn">prova</div>
            </div>
        </div>
    </div>
        <div class="container">
          <div class="row">
            <div class="founded-cards py-4">
              <h2>Founded 20 cards</h2>
          </div>
          <CharacterCard v-for="character in store.charactersList" :key="character.id" :character="character"/>
        </div>
      </div>
    </main>

   
  
  
</template>

<style lang="scss">
  @import './styles/general.scss'



</style>
