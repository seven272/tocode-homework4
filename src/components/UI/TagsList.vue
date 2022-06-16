<template>
  <div class="tags-list">
      <SelectTag
      v-for="(item, ind) in items" :key="ind"
      :class="{isPreview: isPreview}"
      @click="checkTags(item)"
      :name-tag="item"
      ></SelectTag>
  </div>
</template>

<script>
import SelectTag from '@/components/UI/SelectTag.vue'
export default {
  name: 'TagsList',
  components: {
    SelectTag
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  methods: {
    checkTags (item) {
      this.$store.dispatch('checkArrayTags', item)
    }
  }

}
</script>

<style lang='scss'>
  .tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #ffffff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}

</style>
