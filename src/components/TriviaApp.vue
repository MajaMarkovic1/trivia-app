<template>
    <div class="container">
        <div>
            <div class="card" v-for="trivia in trivias" :key="trivia.id" @click="toggle(trivia.id)">
            <div class="card-header">
                <h5 class="mb-0">
                {{ trivia.question }}
                </h5>
            </div>
            <div class="collapse" :class="{ 'show' : visibleTrivia(trivia.id) }">
                <div class="card-body">
                {{ trivia.answer }}
                </div>
            </div>
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
            selectedTrivias: []
        }
    },
    computed: {
         ...mapGetters({
            trivias: 'getTrivia',
            triviaCategory: 'getTriviaCategories'
            
        }),

    },

    methods: {
        ...mapActions([
            'fetchTrivia',
            'fetchTriviaCategory'
        ]),

        toggle(triviaId){
            if (this.selectedTrivias.indexOf(triviaId) < 0){
                return this.selectedTrivias.push(triviaId)  
            }
            console.log(this.selectedTrivias)
        },

        visibleTrivia(triviaId){
            return this.selectedTrivias.indexOf(triviaId) >= 0
        }

    },

    created(){
        this.fetchTrivia(),
        this.fetchTriviaCategory()
    }

    
}
</script>

