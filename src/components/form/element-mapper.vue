<template>
  <component
    v-bind="componentProps"
    :is="componentMap[componentProps.component]"
  ></component>
</template>

<script>
import VbButton from './elements/button'
import VbInput from './elements/input'
import VbSelect from './elements/select'
import VbTextarea from './elements/textarea'

const COMPONENT_MAP = {
  button: 'vb-button',
  input: 'vb-input',
  select: 'vb-select',
  textarea: 'vb-textarea'
}

export default {
  name: 'vb-form',
  components: {
    VbButton,
    VbInput,
    VbSelect,
    VbTextarea
  },
  props: {
    componentProps: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    componentMap: COMPONENT_MAP
  })
}
</script>
