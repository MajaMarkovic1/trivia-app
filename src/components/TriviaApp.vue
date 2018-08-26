<template>
    <div class="container">
        <div>
            <h2>Categories:</h2>
            <ul class="list-group list-group-flush" v-for="category in triviaCategory" :key="category.id">
                <li class="list-group-item" @click="selectCategory">{{ category.title }}</li>
               
            </ul><br>
             <form class="form-inline">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input v-model="searchedTerm" class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search">
            </form><br>
            <h3>Questions:</h3><br>
            <div class="card" v-for="trivia in paginationVisibleTrivia" :key="trivia.id" @click="toggle(trivia.id)">
                <div class="card-header">
                    <h5 class="mb-0">{{ trivia.question }}</h5>
                </div>
                <div class="collapse" :class="{ 'show' : visibleTrivia(trivia.id) }">
                    <div class="card-body">{{ trivia.answer }}</div>
                </div>
            </div>
            
            <Pagination :numOfPage="numOfPage" :numberOfPages="numberOfPages" @selectPage="selectPage" />
        </div>
    </div>
</template>

<script>
import { store } from './../store'
import { mapGetters, mapActions } from 'vuex'
import Pagination from './Pagination'

export default {
    components: {
        Pagination
    },
    
    data(){
        return {
            selectedTrivias: [],
            searchedTerm: '',
            numOfPage: 1
        }
    },
    computed: {
         ...mapGetters({
            trivias: 'getTrivia',
            triviaCategory: 'getTriviaCategories'
            
        }),

        filteredTrivias(){
            return this.trivias.filter(
                trivia => trivia.question.toLowerCase().indexOf(this.searchedTerm.toLowerCase()) > -1)
        },

        paginationVisibleTrivia(){
            let bottom = (this.numOfPage - 1) * 5
            let top = bottom + 5
            return this.filteredTrivias.filter((trivia, index) => {
                return index > bottom && index <= top
            })
        },

        numberOfPages(){
            return Math.ceil(this.filteredTrivias.length / 5)
        }

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
        },

        selectCategory(event){
            this.fetchTrivia(event.target.value)
        },

        selectPage(page){
            return this.numOfPage = page
        }

    },

    created(){
        this.fetchTrivia(),
        this.fetchTriviaCategory()
    }

    
}
</script>

