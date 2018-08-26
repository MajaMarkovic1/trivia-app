import axios from 'axios'

export default class Trivia{

    constructor(){
        axios.defaults.baseURL = 'http://jservice.io/api'
    }

    getRandomTrivia(){
        return axios.get('/random', {
            params: { count: 30}
        })
    }
}

export const triviaService = new Trivia()