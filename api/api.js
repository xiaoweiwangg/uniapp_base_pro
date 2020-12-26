import $H from "../common/request.js"
/**
 * 接口
 */
//获取API接口
export function doLogin(data){
	return $H.post('/login',data)
}