import $store from '@/store/index.js';
import $C from './config.js';
export default {
    // 全局配置
    common:{
        baseUrl:$C.baseUrl,
        header:{
            'Content-Type':'application/json;charset=UTF-8',
        },
        data:{},
        method:'GET',
        dataType:'json',
        token:''
    },
    // 请求 返回promise
    request(options = {}){
        options.url =this.common.baseUrl+options.url 
        options.header = options.header || this.common.header
        options.data = options.data || this.common.data 
        options.method = options.method || this.common.method
        options.dataType = options.dataType || this.common.dataType
        // 请求
        return new Promise((res,rej)=>{
			var token=uni.getStorageSync('token')
			if(token){
				options.header.token = token
			}
            uni.request({
                ...options,
                success: (result) => {
					console.log(options)
					return res(result.data)
                },
                fail: (error) => {
					console.log(error.errMsg)
                    uni.showToast({ title: error.errMsg || '请求失败', icon: 'none' });
                    return rej(error) 
                }
            });
        })
    },
    // get请求
    get(url,options = {}){
        options.url = url
        options.data = {}
        options.method = 'GET'
        return this.request(options)
    },
    // post请求
    post(url,data = {},options = {}){
        options.url = url
        options.data = data
        options.method = 'POST'
        return this.request(options)
    },
    // delete请求
    del(url,data = {},options = {}){
        options.url = url
        options.data = data
        options.method = 'DELETE'
        return this.request(options)
    },
	// 上传文件
	upload(url,data,onProgress = false){
		return new Promise((result,reject)=>{
			// 上传
			let token = uni.getStorageSync('token')
			if (!token) {
			    uni.showToast({ title: '请先登录', icon: 'none' });
			    // token不存在时跳转
			    return uni.reLaunch({
			        url: '/pages/login/login',
			    });
			}
			const uploadTask = uni.uploadFile({
				url:this.common.baseUrl + url,
				filePath:data.filePath,
				name:data.name || "files",
				header:{ token },
				formData:data.formData || {},
				success: (res) => {
					if(res.statusCode !== 200){
						result(false)
						return uni.showToast({
							title: '上传失败',
							icon: 'none'
						});
					}
					let message = JSON.parse(res.data)
					result(message.data);
				},
				fail: (err) => {
					console.log(err);
					reject(err)
				}
			})
			uploadTask.onProgressUpdate((res) => {
				if(typeof onProgress === 'function'){
					onProgress(res.progress)
				}
			});
			
		})
	}
}