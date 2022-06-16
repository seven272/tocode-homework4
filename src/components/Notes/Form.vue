<template>
<div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="handleSubmit">
      <textarea
      required
      v-model="message"
      placeholder="Type ur note"
      />
      <TagsList :items="tags"></TagsList>
      <button class="btn btnPrimary" type="submit">ADD NEW NOTE</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
import { mapState } from 'vuex'
export default {
  name: 'Form',
  components: {
    TagsList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      tags: 'tags',
      chooseTags: 'chooseTags'
    }),
    message: {
      get () {
        return this.$store.state.value
      },
      set (value) {
        this.$store.commit('updateValue', value)
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('setNote')
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
  }

</style>
