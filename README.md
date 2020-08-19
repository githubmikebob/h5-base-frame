## 基于 vue-cli4+vant 搭建 H5 通用架子(支持微信公众号)

### 注意

目前架构还在测试、开发阶段。

### 功能介绍

01. 支持 px 自动转 vw(rem暂时废弃) 并且忽略 node_modules 下三方包
02. 常用目录别名设置
03. 支持 scss 全局样式、变量、函数......
04. 支持 gzip 压缩
05. 支持本地 mock 模拟数据
06. 支持网站标题动态设置
07. axios 封装
08. cdn 配置加载
09. 支持多环境模式
10. 内置微信公众号 sdk
11. 支持 vant 组件库的按需加载
12. 支持 svg 雪碧图

### 安装

下载 zip

### 运行

npm install 或者 yarn

npm run dev:mock 模拟数据模式

npm run dev 默认开发模式

npm run build 生产模式

### 目录结构

``` 
|-- vue-vant-base
    |-- .browserslistrc  浏览器兼容
    |-- .env.development 开发环境变量
    |-- .env.mock        mock环境变量
    |-- .env.production  生产环境变量
    |-- .eslintignore    忽略eslint配置
    |-- .eslintrc.js     eslint配置
    |-- .gitignore       git忽略
    |-- babel.config.js  babel配置文件
    |-- jest.config.js   test配置
    |-- LICENSE
    |-- package.json
    |-- README.md
    |-- vue.config.js    vue-cli配置
    |-- yarn.lock        yarn版本锁
    |-- config           公共配置
    |   |-- cdn.js       cdn配置
    |   |-- index.js     站点配置
    |-- mock
    |   |-- index.js
    |   |-- modules
    |       |-- user.js
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
    |   |-- App.vue
    |   |-- main.js
    |   |-- api          api目录
    |   |   |-- user.js
    |   |-- assets       资源文件
    |   |   |-- logo.png
    |   |   |-- css
    |   |   |   |-- common.scss
    |   |   |   |-- reset.css
    |   |   |   |-- themeVar.less   vant主题变量
    |   |   |-- font
    |   |   |-- js
    |   |       |-- rem.js      移动端rem适配js
    |   |-- components          公共组件
    |   |   |-- SvgIcon.vue
    |   |   |-- Layout
    |   |       |-- FooterBar.vue
    |   |-- icons
    |   |   |-- index.js
    |   |   |-- svg
    |   |       |-- 404.svg
    |   |-- router
    |   |   |-- index.js
    |   |   |-- routes.js
    |   |   |-- permission.js   路由权限拦截
    |   |-- store
    |   |   |-- index.js
    |   |   |-- modules
    |   |       |-- user.js
    |   |-- utils
    |   |   |-- auth.js         本地权限存储封装
    |   |   |-- components.js   全局组件注册
    |   |   |-- index.js        常用工具
    |   |   |-- jssdk.js        jssdk commonjs
    |   |   |-- request.js      http请求封装
    |   |   |-- validate.js
    |   |-- views               页面目录
    |       |-- 404.vue
    |       |-- Login.vue
    |       |-- components
    |       |   |-- BottomView
    |       |   |   |-- Index.vue
    |       |   |-- HeaderView
    |       |       |-- Index.vue
    |       |-- pages
    |           |-- Home.vue
    |           |-- ListDemo.vue
    |           |-- PersonCenter.vue
    |           |-- WxTest.vue
    |-- tests
        |-- unit
            |-- example.spec.js
```
