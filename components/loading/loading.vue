<template>
	<view class="loading" catchtouchmove="return" @touchmove.prevent v-show="showloading">
		<view class="dot-floating">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showloading:false
			};
		},
		methods:{
			show(){
				this.showloading=true;
			},
			hide(){
				this.showloading=false
			}
		}
	}
</script>

<style lang="scss">
.loading{
	position: fixed;
	background-color: rgba($color: #000, $alpha: 0.4);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.text{
	color: #fff;
	position: relative;
	top: 30rpx;
}
</style>
