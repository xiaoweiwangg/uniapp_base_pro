<template>
	<view class="main  justify-center">
		<input type="text" value="" placeholder="请输入用户名" v-model="username" />
		<input type="text" value="" placeholder="请输入密码" v-model="password" />
		<button type="default" @click="submit()">确定</button>
	</view>
</template>

<script>
	import {
		doLogin
	} from "../../api/api.js"
	export default {
		data() {
			return {
				username: '1341342eqrwere',
				password: '13412341qewrqw23412'
			};
		},
		methods: {
			submit() {
				doLogin({
					username: this.username,
					password: this.password
				}).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	input {
		border: 1rpx solid #ccc;
	}
</style>
