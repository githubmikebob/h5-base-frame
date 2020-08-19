<template>
  <div>
    jssdk测试
    <button @click="chooseImage">拍照或从手机相册中选图接口</button>
  </div>
</template>

<script>
import WxJsSDK from "@/utils/jssdk";
import * as $wxApi from "@/api/wx";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  async created() {},
  async mounted() {
    let resultConfig = await $wxApi.getWxSdkConfig();
    WxJsSDK.config({
      debug: true,
      jsApiList: ["openLocation", "chooseImage", "getLocation"],
      ...resultConfig
    });
    WxJsSDK.ready(function() {
      WxJsSDK.checkJsApi({
        jsApiList: ["openLocation", "chooseImage", "getLocation"],
        success: function(res) {
          console.log("测试结果:", res);
        }
      });
    });
  },
  watch: {},
  methods: {
    chooseImage() {
      WxJsSDK.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          alert(localIds);
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
