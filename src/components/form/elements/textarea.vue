<template>
  <div class="wrapper">
    <label>{{ label }}</label>
    <textarea
      v-model="value"
      :placeholder="placeholder"
      :rows="rows"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  data: () => ({
    value: ''
  })
}
</script>

<style lang='sass' scoped>
@import '@/styles'

.wrapper
  +form-element

  textarea
    resize: vertical

</style>
