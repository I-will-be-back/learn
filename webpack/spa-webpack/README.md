# 其他打包工具
## rollup
three shaking
没用到的代码 不会被打包

## parcel
零配置

## Webpack 4.0
production 会自动开启 tree shaking
作用域里面的代码无法分析

NODE_ENV development

## css-modules
命名冲突
利用 hash 值解决重复命名

## webpack 3.0
import(/* webpackChunkName: 'async' */
magic comment 魔法注释
异步加载模板的
应用 路由
import Home from 'lazy!./components/Home';

用 babel-loader 检测有没有 lazy! 换成 magic comment
