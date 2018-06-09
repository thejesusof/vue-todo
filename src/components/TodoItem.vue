<template>
  <div class="todo-item">
    <div class="todo-text">
      <button @click="completeTodo(todo)" class="mark-btn" v-bind:class="{ active: todo.done }"> ✓ </button>
      <span class="todo-text" v-bind:class="{ done: todo.done }"> {{ todo.text }} </span>
    </div>
    <div class="todo-btns" v-show="!isEditing">
      <button @click="showInput" class="edit-btn"> Edit </button>
      <button @click="deleteTodo(todo)" class="delete-btn"> Delete </button>
    </div>
    <div v-show="isEditing" class="edit-todo-item">
      <input type="text" v-model="todo.text">
      <button @click="hideInput" class="edit-btn"> Finish </button>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(219,220,255, 0.3);
  border-bottom: 1px solid #ccc;
}
.todo-text {
  text-align: left;
}
.todo-text.done {
  text-decoration: line-through;
}
.todo-item:first-child {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
.todo-item:last-child {
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom: none;
}
.todo-item:nth-child(even) {
  background: rgba(219,220,255, 0.1)
}
.edit-todo-item {

}
.edit-btn {
  transition: all 200ms;
  background: rgba(186,225,255, 0.7)
}
.edit-btn:hover {
  background: rgba(186,225,255, 1)
}
.delete-btn {
  transition: all 200ms;
  background: rgba(255,179,186, 0.7)
}
.delete-btn:hover {
  background: rgba(255,179,186, 1)
}
.mark-btn {
  transition: all 200ms;
  background: none;
  border: 1px solid #ccc;
  padding: 6px 12px;
  color: #2c3e50;
  font-size: 22px;
  border-radius: 50%;
  margin-right: 20px;
}
.mark-btn:hover,
.mark-btn.active  {
  background: rgba(225,247,213, 1)
}
</style>
