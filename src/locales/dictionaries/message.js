import { extend } from '../../utils/global'

export const success = generateMessageSuccess() // 成功
export const error = generateMessageError() // 成功

export function generateMessageSuccess() {
  let base = {
    200: '保存成功',
    201: '创建成功',
    202: '更新成功',
    203: '设置成功',
  }
  let success = {
    login: '登录成功',
    welcome: '欢迎回来',
    Enable: '启用成功',
    Disable: '停用成功',
    auth: '设置成功，新设置的权限需重新登陆后才可生效',
    add: '添加成功',
    pay: '支付成功',
    clean: '缓存清除成功',
    logout: '退出成功',
  }
  return extend(base, success)
}

export function generateMessageError() {
  let base = {
    200: '请求失败',
    201: '创建失败',
    202: '更新失败',
    404: '网络错误',
  }
  let error = {
    add: '添加失败',
    store: '保存失败',
    post: '参数错误',
    Enable: '启用失败',
    Disable: '停用失败',
    deploy: '部署失败',
    network: '网络连接失败',
    apply: '申请失败',
    adopt: '开通失败',
    socket: 'Socket 连接失败',
    server: '服务器错误',
    login: '登录失败',
    create_log: '创建日志失败',
    no_scopes: '权限未开通',
    upload: { // 上传文件错误提示
      format: '图片格式错误',
      over_size: '文件大小超过限制',
      over_limit: '文件数量超过限制',
      no_file: '没有检测到上传文件',
      file_invalid: '上传文件不合法',
      save: '文件保存失败'
    }
  }
  return extend(base, error)
}

export default {
  success,
  error
}