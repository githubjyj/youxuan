import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 在每一个页面中引入组件文件
import '@/vantui'

Vue.config.productionTip = false

// 引入 reset.css
import 'reset-css'

// 引入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
