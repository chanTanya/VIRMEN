# test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

#### 响应式路由分发实现pc端和移动端兼容
##### 优点：对比媒体查询，pc和移动端页面完全逻辑分离；
##### 缺点：在开发阶段，电脑浏览器切换pc和移动屏幕的时候需要刷新才能触发路由跳转（但是这不会影响生产阶段客户的使用）；
##### 实现细节:
###### 1、通过vue mixin封装 页面组件的beforeCreate钩子函数 ,钩子函数触发 judgePlatfom()方法，利用userAgent判断客户端设备pc还是移动端，进行对应端的页面跳转；
###### 2、pc端使用element ui,移动端使用vant ui;
###### 3、postcss-pxtorem插件需要设置两个rootValue分别对应pc端和移动端；
