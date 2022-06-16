<template>
  <div class="tag-item" :class="{isActive: active}" @click="changeClass">
  <span>{{ nameTag }}</span>
  </div>
</template>

<script>
export default {
  name: 'SelectTag',
  props: {
    nameTag: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    changeClass () {
      this.active = !this.active
    }
  }
}
</script>

<style>

</style>
