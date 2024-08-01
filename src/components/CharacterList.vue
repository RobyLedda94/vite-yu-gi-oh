<script>
// importo lo store

import { store } from '../store.js'

export default {
    data () {
        return {
            store
        }
    }
}
</script>


<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3" v-for="character in store.charactersList" :key="character.id">
                    <div class="card mt-1">
                        <img :src="character.card_images[0].image_url" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">{{character.name}}</h5>
                          <p class="card-text">{{ character.archetype}}</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
    main{
        padding: 20px 0px;
    }
</style>