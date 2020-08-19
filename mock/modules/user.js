export default [
  {
    url: '/user/login',
    type: 'post',
    response: {
      code: 200,
      msg: 'success',
      data: {
        token: 'ASFJSOHFSJHAJJGJASJJKG556456ASGSADGSGDKGJKSJAKG'
      }
    }
  },
  {
    url: '/user/info',
    type: 'get',
    response: {
      code: 200,
      msg: 'success',
      data: {
        id: 154,
        name: '张三',
        age: 22
      }
    }
  }
]