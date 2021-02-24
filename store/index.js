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
				query: {
					token:'123'
				},
				transports: ["websocket"],
				timeOut: 5000,
			}) 
			// 连接成功
			s.on("connect", () => {
				state.socket=s
				console.log("连接成功")
				s.emit('test1',"来自客户端啊test1");   
				s.emit('test2',"来自客户端啊test2");   
				const { id } = s
				s.on('online',(e)=>{
					console.log("联机成功",e)
				})
			})
			// 连接失败
			s.on("error", () => {
				console.log("连接失败")
			})
			// 连接断开
			s.on("disconnect", () => {
				console.log("连接已中断")
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
