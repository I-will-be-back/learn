const express = require('express');
const fs = require('fs');
const router = express.Router();

// 获取首页路由
router.get('/', (req, res, next) => {
  function readImage(path, res) {
    fs.readFile(path, 'binary', (err, file) => {
      if (err) return err;
      else {
        console.log('输出文件');
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.write(file, 'binary');
        res.end();
      }
    });
  }
  readImage('/publice/images/head.jpeg', res);
  next();
});

export default router;