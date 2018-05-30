<template>
  <div class="todo-list">
    <todo-item v-for="todo in todos" v-bind:todo="todo"></todo-item>
  </div>
</template>

<script type = "text/javascript">
import TodoItem from './TodoItem'

export default {
  components: {
    TodoItem
  },
  computed: {
    todos () {
      return this.$store.getters.todos
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
