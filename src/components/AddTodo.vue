<template>
  <div>
    <button v-on:click="showForm" v-show="!isCreating">
      Add new todo
    </button>
    <div v-show="isCreating">
      <label> Text </label>
      <input v-model="text" type="text" ref="text" defaultValue="">
      <button v-on:click="sendForm">
        Create
      </button>
      <button v-on:click="hideForm">
        Cancel
      </button>
    </div>
  </div>
</template>

<script type = "text/javascript">
export default {
  props: ['todo'],
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
        this.$emit('add-todo', {
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
</style>
