import { extend } from '../../utils/global'

export function generateFields() {
  let base = {
    type: '类型',
    price: '价格',
    discount: '折扣',
    sort: '排序',
    status: '状态',
    statuses: {
      '-1': '全部',
      1: '正常',
      2: '禁用',
      color: {
        1: 'primary',
        2: 'danger'
      }
    },
    remark: '备注',
    created_at: '创建时间',
    updated_at: '更新时间',
    action: '操作',
    more: '更多',
    search: '搜索',
    screen: '筛选',
  }
  // 省市区联级选择
  let region = {
    region: '所在地区', // 表单展示字段
    // 以下为实际交互字段
    province_id: '所在地区',
    city_id: '所在地区',
    district_id: '所在地区',
  }
  let title = {
    notify: {
      operation: '执行结果',
      sweet_tip: '温馨提示',
      message: '消息通知'
    }
  }
  let item = {
    all: '全部',
    time: '时间',
    content: '内容'
  }
  let week = {
    sun: '星期日',
    mon: '星期一',
    tues: '星期二',
    wed: '星期三',
    thur: '星期四',
    fri: '星期五',
    sat: '星期六'
  }
  return extend(base, region, title, item, week)
}

export function generateBaseRules() {

}

// 初始通用字段
export const fields = generateFields()

/**
 * 生成需要的基础词典
 * @param need
 * @returns {{}}
 */
export function generateBaseFields(need) {
  let base = {}
  for (let v of need) {
    base[v] = fields[v]
  }
  return base
}

/**
 * 生成 placeholder
 * @returns {{}}
 */
export function generatePlaceholders(fields, iL = [], sL = []) {
  let placeholder = {}
  for (let k in fields) {
    if (fields.hasOwnProperty(k) && iL.indexOf(k) > -1) placeholder[k] = '请输入' + fields[k]
    else if (fields.hasOwnProperty(k) && sL.indexOf(k) > -1) placeholder[k] = '请选择' + fields[k]
  }
  return placeholder
}

/**
 * 必填规则
 * @param field
 * @param type
 * @returns {string}
 */
export const requiredRule = (field, type = 1) => {
  switch (type) {
    default:
      return field + '不能为空'
    case 1:
      return '请填写' + field
    case 2:
      return '请选择' + field
  }
}

/**
 * 是否存在验证
 * @param field
 * @returns {string}
 */
export const existsRule = (field) => {
  return field + ' 不存在'
}

/**
 * 长度规则
 * @param field
 * @param length
 * @param type
 * @returns {string}
 */
export const lengthRule = (field, length, type = 1) => {
  switch (type) {
    default:
      return field + '不能超过' + length + '个字符'
    case 2:
      return field + '不能小于' + length + '个字符'
  }
}

/**
 * 长度规则
 * @param { string } field 语言包字段
 * @param { string } main 自定义语言
 * @param { number } type 返回模板类型
 * @returns {string}
 */
export const formatRule = (field, main = '格式错误', type = 1) => {
  switch (type) {
    default:
      return field + main
    case 2:
      return field + '不能输入' + main
  }
}

/**
 * 一致性规则
 * @param { string } fieldF 第一语言包字段
 * @param { string } fieldS 第二语言包字段
 * @param { number } type 返回模板类型
 * @returns {string}
 */
export const equalRule = (fieldF, fieldS, type = 1) => {
  switch (type) {
    default:
      return `${fieldF}与${fieldS}不一致`
  }
}

// 生成placeholder
let inputList = ['content']
let selectList = ['time']
export const placeholder = generatePlaceholders(fields, inputList, selectList)

// 生成最终语言包
export function generateLocales() {
  let base = generateFields()
  base.placeholder = placeholder
  // base.validator = validator
  // base.verify = verify
  return base
}

export const locales = generateLocales()


export default {
  locales,
  generateBaseFields,
  generatePlaceholders,
  requiredRule,
  lengthRule,
  formatRule
}