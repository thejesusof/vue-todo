<template>
  <div>
    {{ todo.text }}
    <div v-show="isEditing">
      <input type="text" v-model="todo.text">
      <button v-on:click="hideInput"> Finish editing </button>
    </div>
    <button v-on:click="showInput"> Edit </button>
    <button v-on:click="deleteTodo(todo)"> Delete </button>
    <button> Mark as completed </button>
    <span v-show="todo.done">
      Done
    </span>
  </div>
</template>

<script type = "text/javascript">

export default {
  props: ['todo'],
  data () {
    return {
      isEditing: false,
    }
  },
  methods: {
    showInput () {
      this.isEditing = true;
    },
    hideInput () {
      this.isEditing = false;
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo)
    },
  },
}
</script>

<style>
</style>
