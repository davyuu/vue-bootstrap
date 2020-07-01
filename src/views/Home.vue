<template>
  <div class='home'>

    <Header/>

    <div class='section'>
      <ul>
        <li v-for='section in sections' :key='section.key'>
          <SectionCard v-bind='section'/>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SectionCard from '@/components/SectionCard.vue'

export default {
  name: 'Home',
  components: {
    Header,
    SectionCard
  },
  data: () => {
    return {
      sections: [
        {
          key: 'page',
          name: 'Page',
          icon: 'web',
          route: '/page'
        }
      ]
    }
  }
}
</script>

<style lang='sass' scoped>
@import '@/styles'

.home
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
