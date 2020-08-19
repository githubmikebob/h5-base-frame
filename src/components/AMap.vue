<template>
  <el-amap
    :ref="mId"
    vid="amapDemo"
    :amap-manager="amapManager"
    :center="center"
    :zoom="zoom"
    class="amap-demo"
  ></el-amap>
</template>

<script >
// NPM 方式
import Vue from "vue";
import VueAMap, { AMapManager } from "vue-amap";
VueAMap.initAMapApiLoader({
  key: "599dfe6bbe92b35d34d4e3d3f40aac6b",
  plugin: ["AMap.Scale", "AMap.OverView", "AMap.ToolBar", "AMap.MapType"],
  v: "2.0"
});
Vue.use(VueAMap);

export default {
  props: {
    mId: String
  },
  data() {
    return {
      amapManager: null,
      zoom: 12,
      center: [121.59996, 31.197646]
    };
  },
  mounted() {
    this.amapManager = new AMapManager();
  },
  methods: {
    getMap() {
      // amap vue component
      console.log(this.amapManager._componentMap);
      // gaode map instance
      console.log(this.amapManager._map);
    }
  }
};
</script>

