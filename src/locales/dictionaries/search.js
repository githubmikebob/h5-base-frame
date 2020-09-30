import $base from './base'
import { extend } from '../../utils/global'

// 生成基础语言包
export function generateFields() {
  let base = {
    keyword: ' 关键词 搜索',
    common: ' 名称、首字母、简拼、全拼 进行搜索',
    area: ' 省、市、区 名称进行搜索'
  }
  let form = {
    name: ' 名字 搜索',
    type: ' 类型 搜索',
    leave: ' 级别 搜索',
  }
  let el = {
    el: {
      keyword: 'SearchInput',
      name: 'SearchInput',
      type: 'SearchInput',
      leave: 'SearchInput',
    }
  }
  return extend(base, form, el)
}

// 前端验证规则
export const validator = {}

// 生成验证规则
export function generateVerify() {
  return {}
}

export function generateError() {
  return {}
}

export const fields = generateFields()

// inputList为输入字段、selectList为选择字段
let inputList = ['keyword', 'common', 'area', 'name']
let selectList = ['type', 'leave']
export const placeholder = $base.generatePlaceholders(fields, inputList, selectList)

export const verify = generateVerify()
export const error = generateError()

// 生成最终语言包
export function generateLocales() {
  let search = generateFields()
  search.placeholder = placeholder
  search.validator = validator
  search.verify = verify
  return search
}

export const locales = generateLocales()

export default {
  fields,
  placeholder,
  locales
}
