import Vue from 'vue'
import Vuex from 'vuex'
import io from '../common/uni-socket.io.js';
import $C from "../common/config.js"
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		token: "",
		socket:null,
	},
	actions: {
		connetsocket(state) {
			const s = io($C.socketUrl, {
				query: {},
				transports: ["websocket"],
				timeOut: 5000,
			}) 
			// 连接成功
			s.on("connect", () => {
				state.socket=s
				console.log("连接成功")
				s.emit('test',"this is test");
				const { id } = s
				s.on(id,(e)=>{
					console.log("后端发送数据:",e)
				})
			})
			// 连接失败
			s.on("error", () => {
				console.log("连接成功")
			})
			// 连接断开
			s.on("disconnect", () => {
				console.log("连接成功")
			})
		},

	},
	mutations: {

		setToken(state, token) {
			state.token = token
			uni.setStorageSync('token', token)
		},
		logOut(state) {
			uni.removeStorageSync('token', "")
		}
	},
})

export default store
