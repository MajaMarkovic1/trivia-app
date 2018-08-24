import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './components/TriviaApp'

Vue.use(Router)

export default new Router ({

    mode: 'history',
    routes: [
        {path: '/', component: TriviaApp},
        
    ]

})