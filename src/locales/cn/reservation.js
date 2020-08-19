export const transformReservation = {
  verify: {
    car: {
      required: '车辆不能为空'
    }
  },
  validator: {
    shop: {
      mark: 'true',
      required: 'true'
    },
    project: {
      required: 'true',
      mark: true
    }
  },
  placeholder: {
    pre_car: '请选择车牌前缀',
    inspection_annual_time: '请选择年检到期时间',
    insurance_time: '请选择保险到期时间',
    shop: '请选择门店',
    project: '请选择预约项目',
    time: '请选择预约时间',
    choose_address: '请输入上门地址',
    detail_address: '请输入详细地址（如：省、市、区、门牌号）',
    remark: '添加备注（选填）'
  },
  error: {
    no_car: '添加车辆',
    reservation_shop: '请先选择门店信息。',
    no_exists: '手机号不存在 或 密码错误'
  },
  confirm: {
    cancel: '确定取消该预约'
  },
  status: {
    wait_server: '待服务',
    canceled_reservation: '已取消',
    canceled_order: '已申请取消预约，退款流程请联系商家。'
  },
  info: '预约信息',
  shop: '预约门店',
  project: '预约项目',
  cost: '预约金额',
  time: '预约时间',
  type: '预约类型',
  type_shop: '预约到店',
  type_address: '预约上门',
  detail_address: '详细地址',
  remark: '备注',
  no_car: '添加车辆',
  canceled_reservation: '已取消',
  canceled_order: '已申请取消预约，退款流程请联系商家。',
  cancel: '确定取消该预约',
  item: '预约项目',
  choose_item: '请选择预约项目',
  require_address: '请输入上门地址',
  money: '预约金额',
  address: '上门地址',
  wait_server: '待服务',
  to_store: '预约到店',
  home: '预约上门'
}
export default {
  transformReservation
}
