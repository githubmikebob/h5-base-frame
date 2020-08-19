import { deepClone } from "@/utils/index";

// 提供给混合初始化搜索对象
let tempSearch = {};

export default {
  data() {
    return {
      loading: false, // 是否加载中
      refreshing: false, // 是否刷新中
      finished: false, // 是否加载完成
      page: 0, // 页码
      size: 10, // 条数
      total: 0, // 总数
      list: [], // 数据源
      search: {}, // 搜索对象
    };
  },
  created() {
    // 拷贝搜索初始化对象属性和数据
    tempSearch = deepClone(this.search);
  },
  methods: {
    // 重置搜索
    _resetSearch() {
      this.search = deepClone(tempSearch);
      // console.log('重置搜索完成', this.search)
    },
    /**
     * 初始化分页的数据
     * @param {number} size 自定义页码 默认 10
     */
    _initPageData(size = 10) {
      this.refreshing = false;
      this.loading = false;
      this.finished = false;
      this.page = 0;
      this.total = 0;
      this.size = size;
      this.list = [];
    },
    // 条件搜索
    async _searchData() {
      this._initPageData();
      await this._getListFactory();
    },
    // 请求处理中心
    async _getListFactory() {
      // 如果已经全部加载完成直接终止执行
      if (this.finished) return;
      this.loading = true;
      this.page++;
      await this._getList();
      this.loading = false;
      // 判断是否全部加载完成
      if (this.list.length == this.total) {
        this.finished = true;
      }
    },
    /**
     * 上拉加载
     */
    async _onLoad() {
      console.log("上拉加载");
      this._getListFactory();
    },
    /**
     * 下拉刷新
     */
    async _onRefresh() {
      console.log("下拉刷新");
      // 初始化数据
      this._initPageData();
      this._resetSearch();
      this.refreshing = true;
      await this._getListFactory();
      this.refreshing = false;
    },
    async _getList() {
      // requset data ....
    },
  },
};
