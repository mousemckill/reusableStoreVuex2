<template>
  <div>
    PLP: {{ data }}
    <Facet :value="value" @change="handleChangeFilter" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import Facet from '../Filter/Facet'
import { filter as FilterStore } from '../../store/Filter'

export default {
  computed: {
    ...mapState('PLP', ['data']),
    ...mapGetters('PLP/filter', { value: 'getFilter' })
  },
  methods: {
    ...mapMutations('PLP/filter', ['setFilter']),
    ...mapActions('PLP', { updatePLP: 'update' }),
    handleChangeFilter (value) {
      this.setFilter(value)
      this.updatePLP(this.value.replace('a', 'b'))
    }
  },
  beforeCreate() {
    this.$store.registerModule('PLP/filter', FilterStore)
  },
  beforeDestroy() {
    this.$store.unregisterModule('PLP/filter')
  },
  components: {
    Facet
  }
}
</script>

<style>

</style>