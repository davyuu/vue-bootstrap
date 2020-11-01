<template>
  <form @submit.prevent="submitForm">
    <h2>{{ title }}</h2>

    <div
      v-for="(row, rowIndex) in formBuilder"
      class="row"
      :key="`row${rowIndex}`"
    >

      <template v-if="Array.isArray(row)">
        <div class="column-wrapper">
          <div
            v-for="(column, columnIndex) in row"
            class="column"
            :key="`column${columnIndex}`"
          >

            <div class="form-element">
              <vb-element-mapper :componentProps="column" />
            </div>

          </div>
        </div>
      </template>

      <div v-else class="form-element">
        <vb-element-mapper :componentProps="row" />
      </div>

    </div>
  </form>
</template>

<script>
import VbElementMapper from './element-mapper'

export default {
  name: 'vb-form',
  components: {
    VbElementMapper
  },
  props: {
    title: {
      type: String,
      required: true
    },
    formBuilder: {
      type: Array,
      required: true
    }
  },
  methods: {
    submitForm (event) {
      console.log('value:', event.target.value)
    }
  },
  created() {

  }
}
</script>

<style lang='sass' scoped>
@import '@/styles'

form
  +shadow
  display: flex
  flex-direction: column
  justify-content: center
  margin-top: d(4)
  padding: d(4) d(2)
  border-radius: d(1)

  h2
    +title-medium
    text-align: center

  // .row
  //   margin-top: d(1)
  //   border-top: 1px dotted gray

  .column-wrapper
    display: flex
    flex-wrap: wrap
    margin: 0 d(-1)

    .column
      flex-grow: 1
      margin: 0 d(1)

  .form-element
    flex-grow: 1
    margin-top: d(2)

</style>
