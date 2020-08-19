<template>
  <div class="bottom-view-wrapper">
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/Layout/FooterBar'

export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {
  },
  mounted() {
  },
  watch: {},
  methods: {},
  components: {
    FooterBar
  }
}
</script>

<style scoped lang="scss">
  .bottom-view-wrapper {
    padding-bottom: 50px;
  }
</style>
