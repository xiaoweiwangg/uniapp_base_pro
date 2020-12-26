import Vue from 'vue'
import App from './App'
import Check from "./util/check.js"
//http请求封装
import $H from './common/request.js';
Vue.prototype.$H = $H

//自定义表单校验
Vue.prototype.$K = new Check()

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
