import Vue from 'vue'
import Vuex from 'vuex'
import { chuckService } from './../services/ChuckService'
import { triviaService } from './../services/TriviaService'


Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        joke: {},
        trivias: [],
        triviaCategories: []
    },

    mutations: {
        setJoke(state, joke){
            state.joke = joke
        },
        setTrivia(state, trivias){
            state.trivias = trivias
        },
        setTriviaCategory(state, triviaCategories){
            state.triviaCategories = triviaCategories
        }

    },

    getters: {
        getJoke(state){
            return state.joke
        },
        getTrivia(state){
            return state.trivias
        },
        getTriviaCategories(state){
            return state.triviaCategories
        }
        
    },

    actions: {
        fetchRandomJoke(context, joke){
            chuckService.getRandomJoke().then((joke) => {
                context.commit('setJoke', joke)
            })

        },
        fetchTrivia(context){
            triviaService.getRandomTrivia().then(({data}) => {
                context.commit('setTrivia', data)
            })
        },
        fetchTriviaCategory(context){
            triviaService.getRandomTrivia().then(({data}) => {
                context.commit('setTriviaCategory', data)
            })
        }
    }
})