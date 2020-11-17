# 

> A Vue.js project based on element-ui

## Introduce

为方便解读及参与后续开发，本业务遵循以下：

1.  采用element layout 基础布局 使用单一分栏创建基础的栅格布局。

2.  基于 elementUI + Less 开发

    --> elementUI 在入口引入后，单个文件需再次申明调用组件，具体查看官方文档

    less 安装 指令 npm install less less-loader -D

    依赖安装指令 npm install  

    项目运行指令 npm run sever 

3.  请求接口 axios

    接口：api/index 接口
    基础：api/api 请求的基础封装
    接口地址：api/server-url 接口请求业务和接口地址
    直接访问：api/base 

    如：请求登录接口
    组件引入 import { serverLogin } from "@/api/index";
    组件使用 serverLogin(params) params-->请求内容 返回一个promise

4.  
####    全局style样式
    reset.css --> 样式重置
    card.less  -->卡片功能单独样式
    common.less -->全局公用样式
    style/global-style --> less样式全局变量 （方便维护，颜色 渐变 字体等常用的可以存放）
    @orange
    @DarkBlack
    @lightYellow


5.  项目中安装依赖，慎用 -g ，请以--save-dev 或--save 代替

6.   路由:  采用异步组件，按需加载，减少首次加载的压力

   

7.  class 定义尽量遵循以下：

    模块 : (区块 - 功能) 方式命名 ， 如： login-from , home-hot

    内部 : (功能 - 结构) 方式命名 ， 如： special-item ,query-list

8. 组件封装 :

    @/components/

    @/views/
 

9.  模块




98. ...

    图片懒加载,

    默认加载图,

    默认loading

    默认事件


99. src内文件列表：
    src
    ├── main.js 入口 js 文件
    ├── APP.vue 根组件
    ├── utif 常用 js 工具
    ├── components 公共组件目录
    ├── assets 资源目录，这里的资源会被 wabpack 构建
        ├── css
        │ ├── reset.css 样式重置
        │ └── custom.less 自定义样式覆盖
        └── images
    ├── router 路由
         └── index.js
    ├── filters 过滤器
    ├── store vuex仓库管理
        └── index.js(vuex状态管理)
    ├── style 全局样式
        └── global-style 全局变量
    ├── api 接口请求
        ├── api.js 基础配置
        ├── axios.js axios基础配置
        ├── base.js 接口url直接访问
        └── index.js 接口请求封装方法
        └── sever-url.js 接口url

    └── views 页面目录
        ├── index  首页项
            ├── children 首页list文件目录
                ├── index.vue 单个页面的内容
        ├── home.vue 主页  
        ├── loginRegister 首页list文件目录
            ├── index.vue 登录注册页面
   


100.    build打包问题：

  
<!-- #########特别注意： ##################333-->
  vue.config.js跨域配置
  less 全局配置
  路径build
<!-- ############################ -->
