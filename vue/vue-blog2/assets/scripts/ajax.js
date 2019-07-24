import axios from 'axios';
import Vue from 'vue';

const basURL = 'http://localhost:3025/api';
const ajax = axios.create({
  basURL,
  responseTypr: 'json',
  withCredentials: true
});

export default ajax;