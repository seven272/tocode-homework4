<template>
  <Form></Form>
  <List></List>
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
  mounted () {
    this.$store.dispatch('getNotes')
  },
  watch: {
    'this.$store.state.notes': {
      handler: function (updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
