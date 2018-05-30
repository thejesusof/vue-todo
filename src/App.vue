<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <add-todo v-on:add-todo="addTodo"></add-todo>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo
  },
  data () {
    return {
      todos: [{
        text: 'Todo',
        done: false
      }, {
        text: 'Todo',
        done: true
      }, {
        text: 'Todo',
        done: false
      }, {
        text: 'Todo',
        done: false
      }]
    }
  },
  methods: {
    addTodo (text) {
      console.log(text)
      this.todos.push(text)
      console.log(this.todos)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
