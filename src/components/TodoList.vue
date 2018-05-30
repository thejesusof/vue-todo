<template>
  <div>
    <todo-item v-for="todo in todos" v-bind:todo="todo" v-on:delete-todo="deleteTodo"></todo-item>
  </div>
</template>

<script type = "text/javascript">
import TodoItem from './TodoItem';

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    deleteTodo(todo) {
      let index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
  },
}

</script>

<style>
</style>
