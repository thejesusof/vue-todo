<template>
  <div class="todo-item">
    <span class="todo-text"> {{ todo.text }} </span>
    <button @click="showInput" class="edit-btn"> Edit </button>
    <button @click="deleteTodo(todo)" class="delete-btn"> Delete </button>
    <button @click="completeTodo(todo)" class="mark-btn"> Mark as completed </button>
    <span v-show="todo.done"> Done </span>
    <div v-show="isEditing" class="edit-todo-item">
      <input type="text" v-model="todo.text">
      <button @click="hideInput" class="edit-btn"> Finish editing </button>
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
      this.$store.dispatch('deleteTodo', todo)
    },
    completeTodo (todo) {
      this.$store.dispatch('completeTodo', todo)
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
.edit-btn {
  background: rgba(186,225,255, 1)
}
.delete-btn {
  background: rgba(255,179,186, 1)
}
.mark-btn {
  background: rgba(255,223,186, 1)
}
</style>
