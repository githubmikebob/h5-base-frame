import { extend } from '../../utils/global'

export const buttons = generateButtons() // 按钮

export function generateButtons() {
  let base = {
    open: '打开',
    close: '关闭',
    search: '搜索',
    refresh: '刷新',
    create: '创建',
    update: '更新',
    action: '操作',
    new: '新增',
    add: '添加',
    delete: '删除',
    edit: '编辑',
    modify: '修改',
    save: '保存',
    confirm: '确认',
    cancel: '取消',
    back: '返回',
    loading: '加载中...',
  }
  let login = {
    login: '登录',
    logout: '退出',
    logging: '登录中...',
    login_now: '马上登陆',
    remember: '7天内自动登录',
    forget: '忘记密码？',
    verification_code: '获取验证码',
    retrieve_password: '取回密码'
  }
  let tab = {
    tabs_view: {
      close: '关闭',
      close_others: '关闭其他',
      close_all: '关闭所有',
      refresh: '刷新'
    }
  }
  let system = {
    system: '系统',
    clear_cache: '清除缓存',
    bind_weChat: '绑定微信',
    set_account: '帐号设置',
  }
  return extend(base, login, tab, system)
}

export default {
  buttons
}