<template>
  <div class="layout-header-bar">
    <van-nav-bar :title="this.$transform(`menu.${title}`)" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar } from 'vant';

export default {
  name: 'header-bar',
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: {
      type: String,
      default: 'demo.title'
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {
  },
  mounted() {
  },
  watch: {},
  methods: {
    onClickLeft() {
      // this.$toast('返回');
      this.$router.go(-1);
    },
    onClickRight() {
      this.$toast('按钮');
    }
  },
};
</script>

<style scoped lang="scss">
</style>
