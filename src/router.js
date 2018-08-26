import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './components/TriviaApp'
import Chuck from './components/Chuck'


Vue.use(Router)

export default new Router ({

    mode: 'history',
    routes: [
        {path: '/', component: TriviaApp},
        {path: '/chuck', component: Chuck},
        
        
    ]

})