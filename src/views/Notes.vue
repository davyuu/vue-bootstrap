<template>
  <div class='wrapper'>

    <h1>This is the notes page</h1>

    <div class='section'>
      <ul>
        <li v-for='note in notes' :key='note.id'>
          <div class="card">
            <p>{{ note.title }}</p>
            <p>{{ note.body }}</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('notes')

export default {
  name: 'Notes',
  computed: {
    ...mapGetters([
      'notes'
    ])
  },
  methods: {
    ...mapActions([
      'getNotes',
      'createNote'
    ])
  },
  created () {
    this.getNotes();
  }
}
</script>

<style lang='sass' scoped>
@import '@/styles'

.wrapper
  +page-padding
  height: 100%

h1
  +title-large
  text-align: center

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

  .card
    display: block
    height: 100%
    padding: d(4) d(2)
    border-radius: d(1)
    box-shadow: $shadow
    text-align: center

    p
      margin-top: d(2)
      +body-medium
      +fc-dark
</style>