<template>
  <div>
    <a-map mId="m1" class="a-map custom-map"></a-map>
  </div>
</template>

<script>
import AMap from "@/components/AMap.vue";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    AMap
  }
};
</script>

<style scoped lang="scss">
.a-map {
  position: absolute;
  width: 100%;
  z-index: 1;
}
.custom-map {
  height: calc(100% - 46px);
}
</style>

