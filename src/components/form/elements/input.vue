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
    value: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target ? e.target.value : e)
    }
  }
}
</script>

<style lang='sass' scoped>
@import '@/styles'

.wrapper
  +form-element

</style>
