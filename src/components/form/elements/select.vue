<template>
  <div class="wrapper">
    <label>{{ label }}</label>
    <select
      v-model="value"
     >

        <option
          v-if="placeholder"
          class="placeholder"
          disabled
          hidden
          value=""
        >{{ placeholder }}</option>

        <option
          v-for="(option, index) in options"
          :value="option.value"
          :key="`option${index}`"
        >{{ option.label }}</option>

    </select>
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
    options: {
      type: Array,
      required: true,
      default: () => []
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

  select

    &:invalid
      color: red

</style>
