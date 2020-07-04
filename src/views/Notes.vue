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

    <form @submit.prevent="submitForm">
      <h2>Create a note</h2>
      <input v-model="title"/>
      <textarea v-model="body"/>
      <button>Submit</button>
    </form>

  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('notes')

export default {
  name: 'Notes',
  data: () => ({
    title: '',
    body: ''
  }),
  computed: {
    ...mapGetters({
      notes: 'items'
    })
  },
  methods: {
    ...mapActions([
      'fetchNotes',
      'createNote'
    ]),

    async submitForm () {
      const { title, body } = this
      const note = {
        title, body
      }
      if (await this.createNote(note)) {
        this.title = ''
        this.body = ''
      } else {
        alert('Failed, try again!')
      }
    }
  },
  created () {
    this.fetchNotes();
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
    margin: 0 d(-2)

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

form
  display: flex
  flex-direction: column
  justify-content: center
  margin-top: d(4)
  padding: d(4) d(2)
  border-radius: d(1)
  box-shadow: $shadow

  h2
    +title-medium
    text-align: center

  input,
  textarea,
  button
    margin-top: d(2)
</style>