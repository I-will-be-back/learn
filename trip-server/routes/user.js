const express = require('express');
const mysql = require('mysql');

const router = express.Router();
const data = {
  code: 200,
  msg: 'success',
};
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'trip',
});
// 定义接口

