import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import '@/util/vant.js';
import '@/util/element.js';
// import 'amfe-flexible/index.js';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
