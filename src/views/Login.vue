<template>
  <div class="page">
    <van-row type="flex" justify="center">
      <van-image
        round
        width="30vw"
        height="30vw"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        style="margin:10px 0px;"
      />
    </van-row>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      size="large"
      @click="handleLogin"
    >登录</van-button>
  </div>
</template>

<script>
// components
import { Cell, CellGroup, Field, Image } from "vant";

export default {
  props: {},
  data() {
    return {
      username: null,
      password: null,
      sms: null
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async handleLogin() {
      try {
        let data = {
          username: this.username,
          password: this.password,
          sms: this.sms
        };
        await this.$store.dispatch("user/login", data);
        let self = this;
        this.$toast({
          message: "登录成功",
          position: "middle",
          duration: 1500,
          onClose() {
            self.$router.replace("/");
          }
        });
      } catch (error) {
        this.$toast(error.message);
        console.error(error);
      }
    }
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Image.name]: Image
  }
};
</script>

<style scoped lang="scss">
.page {
  padding: 10px 15px;
}
</style>
