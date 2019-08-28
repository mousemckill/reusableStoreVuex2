<template>
  <div>
    SRP: {{ data }}
    <Facet :value="value" @change="handleChangeFilter" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import Facet from '../Filter/Facet'
import { filter as FilterStore } from '../../store/Filter'

export default {
  computed: {
    ...mapState('SRP', ['data']),
    ...mapGetters('SRP/filter', { value: 'getFilter' })
  },
  methods: {
    ...mapMutations('SRP/filter', ['setFilter']),
    ...mapActions('SRP', { updateSRP: 'update' }),
    handleChangeFilter (value) {
      this.setFilter(value.length > 3 ? '' : value)
      this.updateSRP(this.value)
    }
  },
  beforeCreate() {
    this.$store.registerModule('SRP/filter', FilterStore)
  },
  beforeDestroy() {
    this.$store.unregisterModule('SRP/filter')
  },
  components: {
    Facet
  }
}
</script>

<style>

</style>