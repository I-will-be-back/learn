// Builder mvc req与res 中拿到 pages/index.vue
const { Nuxt, Builder } = require('nuxt');
const express = require('express');
const path = require('path');
const config = require('../nuxt.config.js');

const app = express();
async function start() {
  const nuxt = new Nuxt(config);
  if (true) {
    // 开发阶段实时编译
    const builder = new Builder(nuxt);
    await builder.build();
  } else {

  }
  app.use(nuxt.render); // 使用此中间件
  // 前端/pages 路由
  // nuxt/index/about .vue template
  app.listen(3025, () => {
    console.log('server started at 127.0.0.1:3025');
  });
}
start();
