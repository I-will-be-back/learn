import { sync } from './components/sync/index';

document.getElementById('btn').addEventListener('click', function() {
  // 执行 async
  import(/* webpackChunkName: 'async' */'./components/async/index.js')
  .then(_ => {
    // console.log(_);
    return _.default.init();
  })
});
sync();