// 引入资源文件
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// 引入index.js路由配置文件
const indexRouter = require('./routes/index');
// 引入user.js路由配置文件
const userRouter = require('./routes/user');

// 用 express 创建一个app应用
const app = express();
