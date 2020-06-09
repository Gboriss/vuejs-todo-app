import Vue from 'vue'
import Vuex from 'vuex'

import localData from './modules/localData.js'

Vue.use(Vuex)

import { todos } from './seed.js'

export default new Vuex.Store({
    state: {
        todos: localData().get()
    },

    mutations: {
        addTask: (state, data) => {
            state.todos.push(data)
            localData().set(state.todos)
        },

        editTodo: (state, id) => {
            let todo = state.todos.find(todo => 
                (todo.id === id))
            todo.edit = true
            localData().set(state.todos)
        },

        remove: (state, id) => {
            let todo = state.todos.findIndex(todo => 
                (todo.id === id))

                state.todos = [
                    ...state.todos.slice(0, todo),
                    ...state.todos.slice(todo + 1)
                ]

            // state.todos.splice(todo, 1)
            localData().set(state.todos)
        },

        check: (state, id) => {
            let todo = state.todos.find(todo => 
                (todo.id === id))
            todo.completed = !todo.completed
            localData().set(state.todos)
        }
    }
})
