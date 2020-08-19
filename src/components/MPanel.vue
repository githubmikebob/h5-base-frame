<!-- 面板 -->
<template>
  <div class="m-panel-wrapper">
    <div class="m-panel-title" v-if="isTitle">{{title}}</div>
    <div class="m-panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MPanel",
  props: {
    /**
     * 面板标题
     */
    title: {
      type: String,
      default: "面板标题"
    },
    /**
     * 是否显示标题
     */
    isTitle: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    //...
  }
};
</script>
<style lang='scss' scoped>
.m-panel-wrapper {
  text-align: left;
  line-height: initial;
  .m-panel-title {
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 1em;
    position: relative;
    padding: 0px 30px;
    &::after {
      // content: "";
      // position: absolute;
      // width: 100%;
      // left: 0px;
      // bottom: 0px;
      // height: 1px;
      // border-bottom: 1px solid #9d9d99;
    }
  }
  .m-panel-content {
    padding: 10px 0px;
  }
}
</style>