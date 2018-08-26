<template>
  <div class="container">
    <div class="card" style="width: 30rem;">
        <img class="card-img-top" :src="chuck">
        <div class="card-body">
            <p class="card-text" v-text="getJoke.value"></p>
        </div>
    </div>
  </div>
</template>

<script>
import { store } from './../store'
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            chuck: require('./../assets/chuck.jpg')
        }
    },

    computed: {
         ...mapGetters({
            getJoke: 'getJoke'
        })

    },

    created(){
        this.$store.dispatch('fetchRandomJoke')
    },

    beforeRouteEnter(to, from, next){
        store.dispatch('fetchRandomJoke').then(() => {
            next()
        })
    }
}
</script>

<style>
.container {
   margin-top: 1rem;
    width: 40%;
}
</style>

