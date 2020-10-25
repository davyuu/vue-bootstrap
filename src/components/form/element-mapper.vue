<template>
  <component
    v-bind="componentProps"
    :is="componentMap[componentProps.component]"
  ></component>
</template>

<script>
import VbInput from './elements/input'
import VbSelect from './elements/select'
import VbTextarea from './elements/textarea'

const COMPONENT_MAP = {
  input: 'vb-input',
  select: 'vb-select',
  textarea: 'vb-textarea'
}

export default {
  name: 'vb-form',
  components: {
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
