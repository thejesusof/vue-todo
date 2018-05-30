<template>
  <div>
    <button @click="showForm" v-show="!isCreating" class="add-todo">
      Add new todo
    </button>
    <div v-show="isCreating">
      <input v-model="text" type="text" ref="text">
      <button @click="sendForm" class="create-btn">
        Create
      </button>
      <button @click="hideForm" class="cancel-btn">
        Cancel
      </button>
    </div>
  </div>
</template>

<script type = "text/javascript">
export default {
  data () {
    return {
      text: '',
      isCreating: false
    }
  },
  methods: {
    showForm () {
      this.isCreating = true
    },
    hideForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.text.length > 0) {
        const text = this.text
        this.$store.dispatch('addTodo', {
          text,
          done: false
        })
      }
      this.isCreating = false
    }
  }
}
</script>

<style>
.add-todo {
  transition: all 200ms;
  background: rgba(186,255,201, 0.7)
}
.add-todo:hover {
  background: rgba(186,255,201, 1)
}
.create-btn {
  transition: all 200ms;
  background: rgba(186,255,201, 0.7)
}
.cancel-btn {
  transition: all 200ms;
  background: rgba(255,179,186, 0.7)
}
.create-btn:hover {
  background: rgba(186,255,201, 1)
}
.cancel-btn:hover {
  background: rgba(255,179,186, 1)
}
</style>
