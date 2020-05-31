import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { todos } from './seed.js'

export default new Vuex.Store({
    state: {
        todos: todos
    }
})
