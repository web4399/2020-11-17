import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/style/reset.css';
import './assets/style/common.css'
Vue.use(ElementUI);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
