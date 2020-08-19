export const transformMall = {
  goods: '商品',
  discount_goods: '优惠商品',
  project_name: '项目名称',
  type: '类型',
  classify_list: '分类列表',
  classify: '商品类型',
  chose_type: '选择类型',
  service: '服务',
  accessories: '配件',
  postage_status: {
    0: '系统发放',
    1: '快递:包邮',
    2: '到店自取',
    3: '可邮寄/到店'
  },
  system_delivery: '系统发放',
  express_delivery: '快递:包邮',
  delivery_way: '可邮寄/到店',
  delivery: '到店自取',
  sales_volume: '销量',
  origin_price: '原价',
  price: '价格',
  shipping: '包邮',
  fare: '运费',
  min_price: '抢购价',
  pick_store: '到店领取',
  number: '商品数量',
  good_num: '请选择商品数量',
  del_good: '至少选择一个商品删除',
  select_good: '至少选择一个商品结算',
  integral: '积分不足',
  good_shop: '请选择门店信息',
  skill_unstart: '商品未上架',
  shift_skill: '已下架',
  ending_skill: '已结束',
  starting_skill: '即将开场',
  end_skill: '秒杀已结束',
  change_batch: '后换一批',
  limited: '数量有限',
  first_come: '先到先得',
  min_prower: '助力最低至',
  all_goods: '全部商品',
  in_store: '进店逛逛',
  brief: '商品简介',
  robbed: '已抢',
  boost: '助力',
  power: '立即助力',
  boost_help: '帮好友助力',
  invite_friend: '邀请好友',
  spell: '小伙伴在拼单',
  join: '可以直接参与',
  worse: '还差',
  spell_num: '人拼成',
  spell_single: '去拼单',
  single_buy: '单独购买',
  Initiate_single: '发起拼单'
}

export const transformSecKill = {
  hot_grab: '实时热抢',
  un_start: '秒杀还未开始',
  end: '秒杀已结束',
  on_going: '抢购进行中',
}
// 订单
export const transformOrder = {
  11: '会员办卡',
  12: '会员充值',
  13: '购买套餐',
  14: '追加套餐',
  types: {
    1: '普通商品',
    2: '积分商品',
    3: '最新优惠',
    4: '秒杀商品'
  },
  status: {
    0: '全部',
    1: '支付完成',
    2: '作废',
    4: '待付款',
    8: '支付超时',
  },
  record_status: { // 消费记录状态
    1: '完成',
    2: '作废',
    3: '待结算',
    4: '待付款',
    5: '已付款'
  },
  mall_status: {
    1: '已完成',
    2: '已取消',
    4: '待付款',
    5: '待发货',
    6: '待收货',
    7: '待付款',
    8: '已超时',
    9: '待自取',
  },
  postage_status: {
    0: '系统发送',
    1: '快递:包邮',
    2: '到店领取',
    3: '可邮寄/到店'
  },
  menu: {
    speed: '限时助力',
    group: '限时拼单',
    kill: '限时抢购',
    grab_imediate: '马上抢',
    robbed: '已抢'
  },
  confirms: {
    card_password: '请输入会员卡密码'
  },
  actions: {

  },
  send_status: {
    1: '完成签收或自取',
    2: '待发货或待自取',
    3: '已发货'
  },
  payment: '付款',
  pending_payment: '待付款',
  over_time: '支付超时',
  invalid: '作废',
  pay_over: '支付完成',
  tobe_delivered: '待发货',
  pending_receipt: '待收货',
  pending: '待自取',
  pickup_self: '自取',
  confirm_pending: '确认自取',
  remind_delibered: '已提醒商家发货',
  cancled: '已取消',
  outDate: '已作废',
  over_date: '已超时',
  completed: '已完成',
  consignee: '收货人',
  shipping_address: '收货地址',
  address_detail: '详情地址',
  success_shipping_address: '确认收货成功',
  shop_address: '店铺地址',
  post: '邮寄',
  optional: '选填',
  classification: '分类',
  business: '业务',
  pay_way: '请选择结算方式',
  category: '类别',
  type: '类型',
  project: '项目信息',
  info: '订单信息',
  remark: '备注',
  order_remark: '订单备注',
  order: '订单编号',
  cost: '订单金额',
  order_type: '订单类型',
  time: '订单时间',
  order_discount: '满减优惠',
  discount_pay: '优惠金额',
  amounts_pay: '应付金额',
  actually_pay: '实付金额',
  confirm_pay: '确认支付',
  submit: '提交订单',
  wx_pay: '微信支付',
  summation: '合 计',
  sum: '合计',
  freight: '运费',
  wait_pay: '待付金额',
  real_payment: '实付款',
  including_shipping: '含运费'
}

export const transformPay = {
  error: {
    no_card: '会员卡不存在',
    card_money: '会员卡余额不足',
    money: '订单金额错误',
    order_type_error: '订单类型不存在',
    card_password: '会员卡密码错误'
  }
}

export const transformGood = {
  error: {
    surplus: '商品库存不足'
  }
}
export default {
  transformPay,
  transformMall,
  transformSecKill,
  transformOrder,
  transformGood
}
