# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


vue单页面开发项目（仿亚马逊官网）
实现技术：vue+CSS3+JS+JQuery+Mint UI+Nut UI+Swiper+webpack
项目难点：
(1)倒计时不生效问题
   多个页面使用倒计时功能时，会出现画面不渲染
   解决方案：将JS代码放置在mounted()里，确保在其生命周期中可以在画面完全渲染后再触发倒计时事件
(2)实现购物车功能
   解决方案:遍历数组渲染数据到页面中，实现购物车的商品价格、数量、总价效果，使用过滤器确保价格的精确性
(3)页面布局
   页面排版使用flex布局，减少代码量和工作量
(4)使用vue框架，以及vue-router构建单页面应用。
