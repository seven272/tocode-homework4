<template>
  <Form @onSubmit="handleSubmit"></Form>
  <List @onRemove="handleRemove" :items="notes"></List>
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
export default {
  name: 'Home',
  components: {
    Form,
    List
  },
  data () {
    return {
      notes: [
        {
          title: 'Learn Vue 3',
          tags: ['work']
        },
        {
          title: 'finish course',
          tags: ['work', 'home']
        },
        {
          title: 'hello',
          tags: []
        }
      ]
    }
  },
  mounted () {
    this.getNotes()
  },
  watch: {
    notes: {
      handler: function (updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    getNotes () {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    handleSubmit (obj) {
      const note = {
        title: obj.title,
        tags: obj.tags
      }
      this.notes.push(note)
    },
    handleRemove (index) {
      this.notes.splice(index, 1)
    }

  }

}
</script>

<style>

</style>
