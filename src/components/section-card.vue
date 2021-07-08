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
  +shadow
  +transition
  display: block
  height: 100%
  padding: d(4) d(2)
  border-radius: d(1)
  text-align: center

  &:hover
    +shadow(2)

  p
    +body-medium
    +fc-dark
    margin-top: d(2)

  .icon
    fill: #5938d9

</style>
