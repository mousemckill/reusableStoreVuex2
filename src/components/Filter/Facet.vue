<template>
  <div>Facet <input type="text" :value="filter" @input="handleInput" /></div>
</template>

<script>
import get from 'lodash/get';

export default {
  props: ['filter'],
  methods: {
    handleInput (e) {
      const { value } = e.target

      this.$emit('change', value)
    }
  }
}
</script>

<style>
</style>