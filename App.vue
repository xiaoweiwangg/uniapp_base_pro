<script>
	export default {
		onLaunch: function() {
			//连接socket服务
			this.$store.dispatch('connetsocket')
			// nvue中引入图标库
			
			// const domModule = weex.requireModule('dom')
			// domModule.addRule('fontFace', {
			//     'fontFamily': "iconfont",
			//     'src': "url('http://at.alicdn.com/t/font_1859985_7mxozsfdvib.ttf')"
			// });
			
			//网络切换提示
			uni.onNetworkStatusChange(function(res) {
				if (res.isConnected) {
					uni.showToast({
						title: `网络切换为${res.networkType}`,
						duration: 2500,
						icon: 'none'
					})
				}
			});
			//路由拦截
			let hastoken = uni.getStorageSync('token')
			if (hastoken) {
				uni.switchTab({
					url: 'pages/index/index'
				});
			}
			
		}
	} 
</script>

<style>
	/*每个页面公共css */
	@import url("/common/free.css");
	@import url("/common/basecommon.css");
	/* #ifndef APP-PLUS-NVUE */
	@import url("./common/ani.css");
	/* #endif */
</style>
