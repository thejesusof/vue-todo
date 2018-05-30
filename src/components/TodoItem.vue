<template>
  <div class="todo-item">
    <span class="todo-text"> {{ todo.text }} </span>
    <button v-on:click="showInput" class="edit-btn"> Edit </button>
    <button v-on:click="deleteTodo(todo)" class="delete-btn"> Delete </button>
    <button v-on:click="completeTodo(todo)" class="mark-btn"> Mark as completed </button>
    <span v-show="todo.done"> Done </span>
    <div v-show="isEditing" class="edit-todo-item">
      <input type="text" v-model="todo.text">
      <button v-on:click="hideInput"> Finish editing </button>
    </div>
  </div>
</template>

<script type = "text/javascript">
export default {
  props: ['todo'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    showInput () {
      this.isEditing = true
    },
    hideInput () {
      this.isEditing = false
    },
    deleteTodo (todo) {
      this.$emit('delete-todo', todo)
    },
    completeTodo (todo) {
      this.$emit('complete-todo', todo)
    }
  }
}
</script>

<style>
.todo-item {
  margin-bottom: 10px;
}
.edit-todo-item {
  margin-top: 10px;
}
</style>
