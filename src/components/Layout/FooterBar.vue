<template>
  <van-tabbar route :safe-area-inset-bottom="true">
    <van-tabbar-item icon="wap-home-o" replace to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="location-o" replace to="/MapDemo">地图</van-tabbar-item>
    <van-tabbar-item replace to="/PersonCenter">
      <span>个人中心</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "FooterTabbar",
  data() {
    return {
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>
