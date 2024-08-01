<script>
export default {
    props:{
        character: Object
    }
}
</script>


<template lang="">
    <div class="col-12 col-md-3">
        <div class="card mt-1">
            <img :src="character.card_images[0].image_url" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{character.name}}</h5>
              <p class="card-text">{{ character.archetype}}</p>
              <p class="card-text">{{ character.race}}</p>
            </div>
          </div>
    </div>
</template>

<style lang="scss">
main{
    padding: 20px 0px;
    .container{
        background-color: white;
        
        .founded-cards{
            background-color: black;
            color:white
        }
    }
}
</style>