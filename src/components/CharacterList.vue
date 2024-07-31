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
                <div class="col-12 col-md-4" v-for="character in store.charactersList" :key="character.id">
                    {{ character.name }}
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss">
    main{
        padding: 20px 0px;
    }
</style>