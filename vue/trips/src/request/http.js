import axios from 'axios';
import { stringify } from 'qs';
import { Toast } from 'mand-mobile';
import store from '../store/index';

const tmpTrip = store.state.trip;

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = false; // 表示跨域请求是是否使用凭证, 默认否

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // 每次请求之前判断vuex中是否存在token
    // 如果存在, 则统一请求的header都加上token, 这样后台就能根据token判断你的登录状态
    // 即使本地存在token, 也可能是过期的, 所以要在响应拦截器中对返回的状态进行判断
    const aconfig = config;
    aconfig.header['Content-type'] = 'application/x-www-form-urlencoded';
    return aconfig;
  },
  (error) => {
    Toast.failed('请求过程出错!');
    return Promise.error(error);
  },
);

// 响应拦截
axios.interceptors.response.use(
  response => response,
  (error) => {
    Toast.failed('响应过程出错');
    return Promise.reject(error);
  },
);

const request = (aoptions) => {
  const options = aoptions;
  // 每次请求都带上当前的用户id
  if (tmpTrip.user) {
    if (options.body) {
      options.body.userId = tmpTrip.user.userId;
    }
    if (options.params) {
      options.params.userId = tmpTrip.user.userId;
    }
  }

  // 表单传值参数格式化
  return axios.request({
    url: `http://localhost:3000${options.url}`,
    method: options.method,
    data: options.data,
    params: options.params,
  }).then(response => response, (err) => {
    Toast.failed(err.message);
    throw err;
  }).catch((error) => {
    Toast.failed('请求失败');
    throw error;
  });
};


// http请求方式
export const http = {};
const methods = ['get', 'post', 'put', 'delete'];
methods.forEach((method) => {
  http[method] = (url, params = {}) => {
    if (method === 'get') {
      return request({ url, params, method });
    }
    return request({ url, body: stringify(params), method });
  };
});

export default function plugin(Vue) {
  if (plugin.installed) return;
  plugin.installed = true;
  // 该方法用在一个对象上定义新的属性或修改现有属性
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        const obj = {
          get: http.get,
          post: http.post,
          put: http.put,
          delete: http.delete,
        };
        return obj;
      },
    },
  });
}