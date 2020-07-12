<template>
  <div class="icon" :class="size">
    <component :is="component"/>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator: value => ['tiny', 'small', 'medium', 'large'].includes(value)
    }
  },
  computed: {
    component () {
      return require(`@/assets/icons/${this.icon}.svg`);
    }
  }
}
</script>

<style lang="sass">
@import "@/styles"

div.icon
  display: inline-block
  fill: $gray-x-dark

  &.tiny
    height: d(2)
    width: d(2)

  &.small
    height: d(3)
    width: d(3)

  &.medium
    height: d(4)
    width: d(4)

  &.large
    height: d(5)
    width: d(5)

  svg
    display: block
    height: 100%
    width: 100%
</style>
