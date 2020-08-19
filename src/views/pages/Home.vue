<template>
  <div class="home">
    <p style="text-align: center;">vue-vant-base</p>
    <div>
      <img src="@/assets/logo.png" width="150" height="150" alt />
    </div>
    <p class="title">vue移动端H5快速开发架构</p>
    <van-row type="flex" justify="center">
      <van-image round width="20vw" height="20vw" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-row>
    <van-row type="flex" justify="center">
      <p style="margin:10px">欢迎您,{{ $store.state.user.user.name }}</p>
    </van-row>
    <m-panel title="图标">
      <van-row type="flex" justify="center" :gutter="2">
        <van-col>
          <van-icon size="30" name="chat-o" />
        </van-col>
        <van-col>
          <van-icon size="30" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        </van-col>
      </van-row>
    </m-panel>
    <m-panel title="拖拽">
      <draggable
        tag="van-grid"
        :list="myArray"
        @end="onEndCallback"
        :disabled="false"
        :component-data="{ props: { 'column-num': 3 } }"
      >
        <van-grid-item v-for="item in myArray" :key="item.id" icon="photo-o" :text="item.name"></van-grid-item>
      </draggable>
    </m-panel>
    <m-panel title="主题颜色">
      <van-row type="flex" justify="center">
        <van-button @click="handleLogOut" style="margin:10px">退出登录</van-button>
      </van-row>
    </m-panel>
    <m-panel title="svg">
      <van-row type="flex" justify="center" style="font-size:30px;">
        svg:
        <svg-icon iconClass="404"></svg-icon>
      </van-row>
    </m-panel>
    <m-panel title="scss全局变量颜色">
      <div class="theme">scss全局变量颜色</div>
    </m-panel>
    <m-panel title="图片上传">
      <van-row type="flex" justify="center" align="center">
        <van-uploader v-model="fileList" multiple></van-uploader>
        <van-button @click="uploadImage">上传</van-button>
      </van-row>
    </m-panel>
    <m-panel title="其他测试">
      <div style="text-align: center;line-height:1.5em;">
        <div>
          <router-link :to="{ name: 'WxTest' }">测试jssdk</router-link>
        </div>
        <div>
          <router-link :to="{ path: '/ListDemo', query: { plan: 'private' } }">列表 demo</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'MapDemo' }">高德地图 demo</router-link>
        </div>
      </div>
    </m-panel>
  </div>
</template>

<script>
// @ is an alias to /src
import draggable from "vuedraggable";
import { formatArrToFormData } from "@/utils";
export default {
  name: "home",
  components: {
    draggable
  },
  data() {
    return {
      fileList: [],
      time: 30 * 60 * 60 * 1000,
      value: 50,
      myArray: [
        { name: "1号彩笔", id: 1 },
        { name: "2号彩笔", id: 2 },
        { name: "3号彩笔", id: 3 },
        { name: "4号彩笔", id: 4 },
        { name: "5号彩笔", id: 5 },
        { name: "6号彩笔", id: 6 }
      ]
    };
  },
  methods: {
    onEndCallback(evt) {
      console.log(evt);
      console.log(this.myArray);
    },
    handleLogOut() {
      this.$store.dispatch("user/logout");
    },
    uploadImage() {
      const formData = new FormData();
      const fileList = this.fileList.map(item => item.file);
      formatArrToFormData(formData, "images", fileList);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  line-height: 80px;
  text-align: center;
  padding: 5px 10px;
}
.logo {
  width: 200px;
  height: 200px;
}
.theme {
  text-align: center;
  color: $theme;
  margin: 10px 0px;
}
</style>
