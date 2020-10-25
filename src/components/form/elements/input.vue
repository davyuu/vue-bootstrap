<template>
  <div class="wrapper">
    <label>{{ label }}</label>
    <input
      v-model="value"
      :placeholder="placeholder"
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

</style>
