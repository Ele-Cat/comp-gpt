import Vue from 'vue'
import App from './App.vue'
// import Antd from 'ant-design-vue';
import { Tabs, Icon, Modal } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'normalize.css';
// Vue.use(Antd);
Vue.use(Tabs);
Vue.use(Icon);
Vue.prototype.$confirm = Modal.confirm;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
