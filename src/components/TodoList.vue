<template>
  <div class="todo-list">
    <todo-item v-for="(todo, index) in todos" :key="index" v-bind:todo="todo"></todo-item>
  </div>
</template>

<script type = "text/javascript">
import TodoItem from './TodoItem'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    }),
    ...mapGetters([
      'completedTodos'
    ])
  },
  watch: {
    todos: {
      handler () {
        this.$store.dispatch('setLocalStorage')
      },
      deep: true
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
