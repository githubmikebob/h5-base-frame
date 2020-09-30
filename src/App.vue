<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import inobounce from './utils/inobounce'
import { getUrlKey } from './utils/global'

export default {
  beforeCreate() {
    if (getUrlKey('code')) this.$store.dispatch('user/wxLogin')
  },
  created() {
  },
  mounted() {
    inobounce.enable()
  }
}
</script>
<style lang="scss">
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
</style>

