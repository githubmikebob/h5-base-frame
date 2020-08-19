export const transformOrg = {
  valid: {
    no_shop: '您还没创建或加入门店'
  },
  placeholder: {
    name: '请输入真实姓名',
    code: '验证码',
    mobile: '手机号码'
  },
  contact: '店铺主管',
  concator_mobile: '店铺电话',
  mobile: '手机号',
  get_checkcode: '获取验证码',
  real_name: '真实姓名',
  welcome: '邀请您加入',
  welcome_tip: '已启用客管家智能软件进行工作协作，请尽快加入',
  join: {
    welcome: 'HI~ 欢迎加入组织',
    welcome_tip: '客管家智能软件，助力店铺升级 创造工作新模式'
  },
  status: {
    un_auth: '未认证',
    auth: '已认证',
    detail: '查看详情',
    agree: '已同意',
    un_agree: '已同意'
  }
}
export const transformInvite = {
  new_password: '新用户，提示用户密码为手机号码的后6位',
  success: '已注册用户，提示用户申请成功，等待审核',
  verify: {
    mobile: {
      required: '手机号码不能为空',
      mobile: '手机号码格式错误'
    },
    org_id: '组织ID不能为空'
  },
  error: {
    already_in: '已在该团队',
    already_apply: '申请正在审核'
  }
}
export const transformApply = {
  check_info: '请核对店铺信息',
  employee_exists: '员工已经存在',
  apply_exists: '已经申请成功，请勿重复申请',
  reason: '申请理由(选填)',
  placeholder: {
    reason: '请输入申请理由'
  },
  action: {
    submit: '提交申请'
  }
}
export const transformUpload = {
  image: {
    verify: {
      type: {
        required: '上传类型必填'
      }
    }
  },
  error: {
    no_file: '没有上传文件',
    format: '文件格式错误',
    save: '上传失败',
    file_invalid: '文件无效'
  }
}
export default {
  transformOrg,
  transformUpload,
  transformApply,
  transformInvite
}
