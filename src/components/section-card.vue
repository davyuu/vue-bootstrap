<template>
  <router-link class="card" :to='route'>
    <icon :icon='icon' size='large' />
    <p>{{ name }}</p>
  </router-link>
</template>

<script>

export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='sass' scoped>
@import '@/styles'

.card
  display: block
  height: 100%
  padding: d(4) d(2)
  border-radius: d(1)
  box-shadow: $shadow
  text-align: center
  +transition-fast

  &:hover
    box-shadow: $shadow-thick

  p
    margin-top: d(2)
    +body-medium
    +fc-dark

  .icon
    fill: #5938d9

</style>
