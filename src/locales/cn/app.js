export const transformApp = {
  it_service: '客管家',
  plate: '客管家智能软件使用平台',
  service_provider: '已启用客管家智能软件进行工作协作，请尽快加入'
}

// 公共参数
export const transformCommon = {
  loading: '加载中',
  no_more: '没有更多了',
  total: '共',
  common: '通用',
  is_common: '是否通用',
  card_title: '汽车维修',
  card_sub_title: '车主管家 一键即达',
  forever: '永久',
  quantity: '数量',
  remark: '备注',
  remarks: '备  注',
  full: '满',
  cut: '减',
  active_rule: '活动规则',
  award_record: '中奖纪录',
  please: '请',
  please_input: '请输入',
  please_select: '请选择',
  please_select_adr: '请选择地址',
  please_input_detail: '请输入详细地址如：（道路、门牌号、小区、楼号）',
  validity_period: '有效期',
  start_time: '开始日期',
  end_time: '截止日期',
  completed_time: '成交时间',
  delivery_time: '发货时间',
  end_skill: '已结束',
  end_distance: '距结束',
  start_skill: '未开始',
  countdown: '倒计时',
  history: '历史',
  time: '时间',
  today: '今日',
  today_add: '今日新增',
  month_add: '今日新增',
  month: '本月',
  current_select: '当天可选择时间',
  valid_time: '有效期自购买起',
  search_by_day: '按月查询',
  default_order: '默认排序',
  asc: '升序',
  desc: '降序'
}

// 地址参数
export const transformDistrict = {
  address: '详细地址',
  navigation: '导航',
  tip_name: '收件人姓名必填',
  tip_address: '详细地址必填',
  tip_area: '请选择地区',
  province: '省份',
  city: '城市',
  district: '地区',
  city_code: '城市编码',
  zip_code: '邮政编码',
  identifier: '编号',
  actions: {
    save_success: '保存成功'
  },
  verify: {
    name: '请输入收件人名称',
    mobile: '请输入收件人联系电话'
  }
}
// 单位
export const transformUnit = {
  day: '天',
  month: '月',
  piece: '个',
  leaf: '张',
  yuan: '元',
  times: '次',
  discount: '折',
  car: '辆'
}

export const we_chat = {
  error: {
    no_member: '会员不存在',
    no_account: '会员不存在'
  }
}
export const pay = {
  error: {
    card_status: '会员卡状态',
    no_card: '当前账户没有可用的会员卡'
  }
}
export default {
  transformApp,
  transformCommon,
  transformDistrict,
  transformUnit,
we_chat
}
