// 客户信息
export const customer = {
  people: '人',
  store: '门店',
  shop: '店铺',
  base_info: '基本信息',
  phone: '联系电话',
  address: '联系地址',
  contact_way: '联系方式',
  industry_label: '行业标签',
  main_products: '主营产品',
  mobile: '电话',
  user: '收货人',
  customer: '客户',
  card_type: '卡类型',
  balance: '会员卡余额',
  card_psw: '会员卡密码',
  name: '客户姓名',
  user_name: '客户名称',
  driver: '驾驶证',
  identity: '身份证',
  birth: '生日',
  integral: '积分',
  lottery: '摇奖次数',
  cars: '拥有车辆',
  bussiness_category: '业务类型',
  status: '服务状态',
  no_yet_store: '距今未到店',
  customer_num: '总客户量',
  tel_phone: '手机号码',
  card: {
    wait_pay: '你有一张会员卡待付款',
    points_available: '可用积分',
    unlimited_consumption: '无限消费',
    unlimited: '无限次数',
    successive_consumption: '逐次消费'
  },
  points_details: '积分明细'
}
// 登录
export const transformLogin = {
  no_mobile: '手机号不能为空',
  no_checkcode: '验证码不能为空',
  get_checkcode: '获取验证码',
  check_code: '请输入验证码',
  name: '用户名',
  password: '密码',
  login: '登录',
  temporary_login: '临时登录',
  unbind_login: '解绑登录',
  link_other_account: '您的账号已绑定其他账号',
  disable_customer: '该用户被禁用，请联系商家',
  change_account: '该手机号为系统停用用户，请更换手机号',
  reset_mobile: '请输入您需要绑定的新手机号',
  unbind_wx: '确定解绑该微信号',
  account: '请输入手机号',
  new_mobile: '请输入新的手机号码'
}
// 退出
export const transformOut = {

}
// export const reservation = {
//   no_car: '添加车辆',
//   canceled_reservation: '已取消',
//   canceled_order: '已申请取消预约，退款流程请联系商家。',
//   cancel: '确定取消该预约',
//   type: '预约类型',
//   item: '预约项目',
//   choose_item: '请选择预约项目',
//   require_address: '请输入上门地址',
//   time: '预约时间',
//   money: '预约金额',
//   address: '上门地址',
//   wait_server: '待服务',
//   to_store: '预约到店',
//   home: '预约上门'
// }

// 车辆信息
export const transformCar = {
  placeholder: {
    plate_pre: '请选择车牌前缀',
    vin_no: '请输入车架号',
    model: '请选择车型',
    plate_number: '请输入车牌号码',
    engine_type: '请输入发动机型号',
    inspection_annual_time: '请选择年检到期时间',
    inspection_time: '请选择车险到期时间',
    insurance_company: '请输入保险公司',
    insurance_no: '请输入保险单号',
    insurance_time: '请选择保险到期时间',
  },
  confirm: {
    chose_car: '请选择车辆',
    no_province: '请先选择车牌的省份',
    district: '请先选择车牌的地区'
  },
  car_info: '车辆信息',
  choose_car: '选择车辆',
  insurance_info: '保险信息',
  switch_vehicle: '切换车辆',
  plate_pre: '车牌前缀',
  plate_number: '车牌号码',
  plate: '车牌号',
  brand: '品牌',
  type: '车系',
  car_type: '车  系',
  model: '车型',
  models: '汽车型号',
  detail: '详情',
  engine_type: '发动机型号',
  driving_license: '行驶证',
  engine_no: '发动机',
  vin_no: '车架号',
  insurance: '保险',
  inspection_annual_time: '年检到期',
  inspection_time: '车险到期',
  insurance_company: '保险公司',
  insurance_no: '保险单号',
  insurance_time: '保险到期',
  maintenance_mileage: '保养里程',
  maintenance_time: '保养时间',
  buy_time: '购车时间',
  car: '车辆',
  disabled_car: '该车辆已禁用',
  change_car: '正在切换车辆',
  verify: {
    number: {
      unique: '车牌号重复，请重新填写。'
    },
    vin_no: {
      unique: '车架号重复，请重新填写。'
    }
  }
}

export const shop = {
  limit_shop: '只限本店使用',
  company: '厦门客管家网络科技有限公司',
  name: '门店名称',
  shop: '门店',
  all: '所有门店',
  to_store: '到店',
  is_store: '是否到店',
  visit_times: '到店次数',
  departure_days: '离店天数',
  last_visit_time: '最近到店',
  visit: '进店逛逛'
}

// 我的
export const Mine = {
  check_in: '签到',
  congratulation: '恭喜你',
  get: '你获得',
  recharge: '充值',
  call_now: '立即办卡',
  look_allcard: '查看全部会员卡种信息',
  new_address: '新增地址',
  send_coupons: '发送优惠券',
  send_fission: '发送积客券',
  send_gift_bag: '发送礼包',
  coupons: '优惠券',
  passenger_coupon: '积客券',
  gift_bag: '礼包',
  complete_material: '完善资料',
  expenses_record: '消费记录',
  expenses_time: '消费时间',
  record: '领取记录',
  expenses_product: '消费产品',
  balance: '剩余',
  card_name: '会员卡名称',
  card_no: '会员卡号',
  card_money: '办卡金额',
  fitting_discount: '配件折扣',
  service_discount: '服务折扣',
  gift_amount: '赠送金额',
  recharge_amount: '充值金额'
}
// 我的钱包
export const wallet = {
  balance: '余额',
  withdraw: '提现',
  can: '可',
  no: '不可',
  cumulative_dividend: '累计分红',
  dividend_cost: '分红金额',
  expenses_record: '消费记录',
  consumption_cost: '消费金额',
  consumption_detail: '消费明细',
  withdraw_time: '提现时间',
  withdraw_money: '提现金额',
  bigger_zearo: '金额数值必须大于0',
  withdraw_record: '提现记录',
  cash_back_record: '返现记录',
  income_expenditure_details: '收支明细',
  cash_back: '可返现金额',
  withdraw_card: '提至会员卡',
  can_withdraw_money: '可提现金额',
  no_withdraw_money: '不可提现金额'
}
export const extention = {
  tip0: '人脉变钱脉',
  tip1: '等你一起来分红',
  day_dividend: '今日分红',
  available_dividends: '可用分红',
  dividend: '分红',
  total_dividend: '总分红',
  add_people: '新增人脉',
  total_number_connections: '人脉总数',
  dividend_source: '分红来源',
  number_of_people: '人数',
  cumulative_dividend: '累计分红',
  i_consume: '本人消费',
  offline_consumption: '下线消费',
  my_first_level_contacts: '我的一级人脉',
  my_second_person: '我的二级人脉',
  name: '成员名称',
  mobile: '手机号码',
  create_time: '注册时间'
}

export const feedback = {
  other: '其他',
  soft: '软件',
  fitting: '配件问题',
  product: '产品问题',
  service: '服务问题',
  good: '商品问题'
}

export const member = {
  error: {
    integral: '积分不足'
  }
}
export default {
  transformLogin,
  // reservation,
  customer,
  transformCar,
  shop,
  Mine,
  wallet,
  extention,
  feedback,
  member
}
