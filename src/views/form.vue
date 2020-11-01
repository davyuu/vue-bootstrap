<template>
  <div class='wrapper'>

    <h1>This is the form page</h1>

    <section>
      <vb-form v-bind="form"></vb-form>
    </section>

  </div>
</template>

<script>
import Form from '@/components/form/index'

export default {
  name: 'form-view',
  components: {
    'vb-form': Form
  },
  data: () => ({
    form: {
      title: 'Form',
      formBuilder: [
        [
          {
            component: 'input',
            label: 'First Name',
            placeholder: 'First Name'
          },
          {
            component: 'input',
            label: 'Last Name',
            placeholder: 'Last Name'
          }
        ],
        {
          component: 'input',
          label: 'Email',
          placeholder: 'youremailaddress@example.com'
        },
        {
          component: 'input',
          label: 'Phone',
          placeholder: '4161234567'
        },
        {
          component: 'select',
          label: 'Select an option',
          placeholder: 'Some placeholder',
          options: [
            {
              label: 'option1',
              value: 1
            },
            {
              label: 'option2',
              value: 2
            }
          ]
        },
        {
          component: 'textarea',
          label: 'Message',
          placeholder: 'Add your message (Optional)'
        },
        {
          component: 'button',
          label: 'Submit'
        }
      ]
    }
  }),
  computed: {
  },
  methods: {
    submitForm (event) {
      console.log('value:', event.target.value)
    }
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

section
  margin-top: d(4)

form
  +shadow
  display: flex
  flex-direction: column
  justify-content: center
  margin-top: d(4)
  padding: d(4) d(2)
  border-radius: d(1)

  input,
  textarea,
  button
    margin-top: d(2)
</style>