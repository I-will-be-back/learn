// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'mand-mobile/lib/mand-mobile.css';
import mandMobile from 'mand-mobile';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(mandMobile);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
