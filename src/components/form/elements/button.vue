<template>
  <div class="wrapper">
    <button>{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data: () => ({
    value: ''
  })
}
</script>

<style lang='sass' scoped>
@import '@/styles'

button
  +interface-large
  +transition
  width: 100%
  padding: d(2) 0
  margin: d(2) 0
  border-radius: 8px
  text-align: center
  background-color: $color-primary
  color: white

  &:hover
    +shadow(1, $color-primary-light)

</style>
