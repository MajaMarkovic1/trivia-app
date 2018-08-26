<template>
  <div class="container">
    <div class="card" style="width: 30rem;">
        <img class="card-img-top" :src="chuck">
        <div class="card-body">
            <p class="card-text" v-text="getJoke.value"></p>
            <button @click="getNewJoke" class="btn btn-warning">Get new joke</button>
            <input @input="setCategory" type="hidden">
        </div>
    </div>
  </div>
</template>

<script>
import { store } from './../store'
import { mapGetters, mapMutations, mapActions } from 'vuex'

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

    methods: {
        ...mapMutations([
            'setJoke'
        ]),

        ...mapActions([
            'fetchRandomJoke'
        ]),

        getNewJoke(){
            store.dispatch('fetchRandomJoke').then(() => {
                {}
            })
        },

        setCategory(event) {
            this.setJoke(event.target.value);
        }
    },

    created(){
        this.fetchRandomJoke()
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
  
}
</style>

