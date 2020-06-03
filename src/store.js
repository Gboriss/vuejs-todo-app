import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { todos } from './seed.js'

export default new Vuex.Store({
    state: {
        todos: todos
    },

    mutations: {
        addTask: (state, data) => {
            state.todos.push(data)
        },

        editTodo: (state, id) => {
            let todo = state.todos.find(todo => 
                (todo.id === id))
            todo.edit = true
        },

        remove: (state, id) => {
            let todo = state.todos.find(todo => 
                (todo.id === id))

            state.todos.splice(todo, 1)
        },
    }
})
