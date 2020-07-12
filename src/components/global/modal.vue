<template>
  <transition name="modal">
    <div v-if="open" class="wrapper">
      <div class="mask" @click="closeModal()"></div>
      <div class="container">
        <button @click="closeModal()">
          <icon icon="close" size="small"/>
        </button>
        <div v-if="hasHeaderSlot" class="header">
          <slot name="header" />
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <div v-if="hasFooterSlot" class="footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapGetters } = createNamespacedHelpers('modals')

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(['modalOpen', 'modalContext']),
    hasHeaderSlot () {
      return !!this.$slots.header
    },
    hasFooterSlot () {
      return !!this.$slots.footer
    },
    open () {
      return this.modalOpen(this.name)
    },
    context () {
      return this.modalContext(this.name)
    }
  },
  methods: {
    ...mapActions(['close']),
    closeModal () {
      this.close(this.name)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/styles"

.wrapper
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 1000
  display: flex
  justify-content: center
  align-items: center

  .mask
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba(0, 0, 0, .5)

  .container
    position: relative
    background-color: $white
    display: flex
    flex-direction: column
    padding: d(3)
    border-radius: d(.5)

    button
      position: absolute
      top: 0
      right: 0
      padding: d(1)
</style>
