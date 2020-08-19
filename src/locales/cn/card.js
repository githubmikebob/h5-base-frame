export const card_order = {
  error: {
    already_has_card: '你已办理会员卡了',
    no_member: '会员不存在',
    no_card_type: '会员卡类型不存在',
    car_required: '请先绑定车辆才可进行后续操作。',
    number: {
      unique: '会员卡号已被使用'
    },
    order: {
      unique: '存在相同卡号的订单'
    }
  },
  pay_tip: '您有待一笔支付订单',
  placeholder: {
    card_password: '请输入会员卡密码',
    recharge_amount: '请输入充值金额'
  }
}

export const card = {
  type: '会员卡类型'
}

export const meal = {
  package: '套餐',
  package_detail: '套餐详情',
  addition_package: '追加套餐',
  purchase_package: '购买套餐',
  package_not_data: '暂无购买的套餐内容',
  package_item: '套餐项目',
  product_name: '商品名称',
  project_name: '项目名称',
  remaining_times: '剩余次数'
}
export default {
  card,
  card_order,
  meal
}
