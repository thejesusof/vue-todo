import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        text: 'ololo',
        done: false
      }
    ]
  },
  mutations: {
    ADD_TODO (state, todo) {
      state.todos.push(todo)
    },
    EDIT_TODO (state, todo) {
      let todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.text
    },
    DELETE_TODO (state, todo) {
      let todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO (state, todo) {
      todo.done = !todo.done
    }
  },
  actions: {
    addTodo ({commit}, todo) {
      commit('ADD_TODO', todo)
    },
    editTodo ({commit}, todo) {
      commit('EDIT_TODO', todo)
    },
    deleteTodo ({commit}, todo) {
      commit('DELETE_TODO', todo)
    },
    completeTodo ({commit}, todo) {
      commit('COMPLETE_TODO', todo)
    }
  },
  getters: {
    todos: state => state.todos,
    completedTodos: state => state.todos.filter((todo) => {
      return todo.done
    })
  }
})
