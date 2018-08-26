import axios from 'axios'

export default class Trivia{

    constructor(){
        axios.defaults.baseURL = 'http://jservice.io/api'
    }

    getRandomTrivia(categoryTrivia){
        return axios.get('/random', {
            params: { count: 30, category: categoryTrivia}
        })
    }

    getRandomCategory(){
        return axios.get('/categories', {
            params: { count: 10}
        })
    }

}

export const triviaService = new Trivia()