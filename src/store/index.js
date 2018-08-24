import Vue from 'vue'
import Vuex from 'vuex'
import ChuckService from './../services/ChuckService'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        joke: {}
    },

    mutations: {
        setJoke(state, joke){
            state.joke = joke
        }
    },

    getters: {
        getJoke(joke){
            return state.joke
        }
    },

    actions: {
        fetchRandomJoke(context){
            ChuckService.getRandomJoke().then((joke) => {
                context.commit('setJoke', joke)
            })

        }
    }
})