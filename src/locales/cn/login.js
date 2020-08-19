export const transformRegister = {
  verify: {
    mobile: {
      required: '手机号不能为空',
      exists: '手机号格式不正确',
      unique: '账号已注册，请登录'
    },
    password: {
      required: '请输入密码',
      confirme: '请输入确认密码',
      between: '密码必须在 6～12 位之间'
    },
    source: {
      required: '用户来源不能为空'
    },
    code: {
      exists: '验证码格式不正确',
      required: '验证码不能为空'
    }
  },
  validator: {
    username: {
      mark: 'true',
      required: 'true'
    },
    password: {
      required: 'true',
      length_lt: '4'
    }
  },
  placeholder: {
    input_mobile: '请输入手机号码',
    smscode: '请输入您的验证码',
    password: '请输入您的密码',
    check_password: '请确认您的密码',
    mobile: '请输入您的注册手机号'
  },
  error: {
    no_exists: '手机号不存在 或 密码错误'
  },
  name: '注册',
  title: '快速注册',
  mobile: '手机号',
  checkcode: '验证码',
  get_checkcode: '获取验证码',
  logout: '退出',
  logging: '正在登录'
}
export const transformLogin = {
  error: {
    no_member: '请先注册账号',
    user_info: '更新用户信息'
  },
  verify: {
    mobile: {
      required: '手机号不能为空',
      exists: '账号不存在',
      wrong_format: '手机号格式错误',
      unique: '账号已注册，请登录'
    },
    password: {
      required: '请输入密码',
      confirme: '请输入确认密码',
      between: '密码必须在 6～12 位之间'
    },
    source: {
      required: '用户来源不能为空'
    },
    type: {
      required: '登录类型错误'
    },
    driver_code: {
      required_if: '识别码必填'
    },
    code: {
      required: '验证码不能为空'
    }
  },
  title: '快速登陆',
  expired: '登录过期，请重新登录',
  expired_title: '登录过期',
  forget_password: '忘记密码？',
  no_mobile: '手机号不能为空',
  no_checkcode: '验证码不能为空',
  get_checkcode: '获取验证码',
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
  placeholder: {
    check_code: '请输入验证码',
    account: '请输入手机号',
    mobile: '请输入手机号码'
  }
}
export default {
  transformRegister,
  transformLogin
}
