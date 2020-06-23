// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';

Vue.use(MintUI);
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://localhost:8696/';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
