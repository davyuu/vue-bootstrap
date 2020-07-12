<template>
  <div class='wrapper'>

    <header>
      <img alt="Vue logo" src="@/assets/logo.png">
      <h1>Welcome</h1>
    </header>

    <div class='section'>
      <ul>
        <li v-for='section in sections' :key='section.key'>
          <section-card v-bind='section'/>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import SectionCard from '@/components/section-card'

export default {
  name: 'Home',
  components: {
    SectionCard
  },
  data: () => ({
    sections: [
      {
        key: 'notes',
        name: 'Notes',
        icon: 'description',
        route: '/notes'
      }
    ]
  })
}
</script>

<style lang='sass' scoped>
@import '@/styles'

.wrapper
  +page-padding

header
  display: flex
  flex-direction: column
  align-items: center

  img
    height: d(8)

  h1
    margin-top: d(4)
    +title-large

.section
  margin-top: d(4)

  ul
    display: flex
    flex-wrap: wrap

    li
      width: 50%
      padding: d(2)

      +mq($s-medium)
        width: calc(100% / 3)
</style>
