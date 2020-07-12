import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('modals')

const ModalMixin = {
  computed: {
    $modal () {
      return {
        open: (name, context) => this._openModal({ name, context }),
        close: this._closeModal
      }
    }
  },
  methods: {
    ...mapActions({
      _openModal: 'open',
      _closeModal: 'close'
    })
  }
}

export default ModalMixin
