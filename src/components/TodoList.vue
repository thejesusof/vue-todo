<template>
  <div class="todo-list">
    <todo-item v-for="todo in todos" v-bind:todo="todo" v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo"></todo-item>
  </div>
</template>

<script type = "text/javascript">
import TodoItem from './TodoItem'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    deleteTodo (todo) {
      let index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    completeTodo (todo) {
      const index = this.todos.indexOf(todo)
      this.todos[index].done = true
    }
  }
}

</script>

<style>
  .todo-list {
    border: 1px solid #ccc;
    max-width: 50%;
    margin: 0 auto;
    margin-bottom: 30px;
    border-radius: 25px;
    padding: 20px 0;
  }
</style>
