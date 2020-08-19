<template>
  <div>
    <header-bar :title="$route.meta.title">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </header-bar>
    <van-search
      v-model="search.obj.a"
      placeholder="请输入搜索关键词"
      @search="searchSubmit"
    />
    <van-pull-refresh v-model="refreshing" @refresh="_onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="_onLoad"
      >
        <van-cell v-for="item in list" :key="item.id" :title="item.title" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import pageMixin from "@/utils/mixins/page";

import { List, Cell, PullRefresh, Search } from "vant";
export default {
  mixins: [pageMixin],
  // 数据列表
  data() {
    return {
      list: [],
      search: { text: "", obj: { a: 1 } },
    };
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [PullRefresh.name]: PullRefresh,
    [Search.name]: Search,
  },
  mounted() {
    console.log(this.$route.query);
  },
  methods: {
    // 搜索
    searchSubmit() {
      // 调用混合搜索
      this._searchData();
    },
    // 模拟后端分页
    getData(requestParams) {
      return new Promise((res, rej) => {
        let params = requestParams;
        if (!params) {
          params = {
            page: 1,
            size: 10,
            search: {},
          };
        }
        console.log(params);
        setTimeout(() => {
          const arr = [];
          for (
            let i = (params.page - 1) * params.size;
            i < params.page * params.size;
            i++
          ) {
            arr.push({
              id: i,
              title: "【新增" + i + "】 标题",
              content: "搜索对象为" + JSON.stringify(params.search),
            });
          }
          res({
            code: 200,
            data: {
              page: params.page,
              size: params.size,
              list: arr,
              total: 30, // 设置30就加载完成
            },
          });
        }, 500);
      });
    },
    // 数据请求(没错就是这么少的代码)
    async _getList() {
      // 根据实际情况修改自己修改key
      const result = await this.getData({
        page: this.page, // 传入页码
        size: this.size, // 传入每页条数
        search: this.search, // 传入搜索的对象
      });
      this.total = result.data.total;
      result.data.list.map((item) => {
        this.list.push(item);
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
