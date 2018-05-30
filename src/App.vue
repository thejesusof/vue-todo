<template>
  <div id="app">
    <h1>TODO App</h1>
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
      todos: []
    }
  },
  methods: {
    addTodo (text) {
      this.todos.push(text)
    }
  }
}
</script>

<style>
* {
  outline: none;
}
body {
  margin: 0;
}
button {
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}
input {
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 0 10px;
  font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
