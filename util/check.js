class Check {
  constructor() {
    this.rules = {
      max20: {
        msg: "超出最大限制",
        reg: (val) => !val.length > 20,
      },
      ismoble: {
        msg: "手机号格式不正确",
        reg: (val) => !/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(val),
      },
      min8: {
        msg: "不能低于8位数",
        reg: (val) => val.length < 8,
      },
      hasnum:{
          msg:'必须包含数字',
          reg:(val)=>!/[0-9]/.test(val)
      },
      nottrim:{
          msg:"输入不能为空",
          reg:(val)=>!val.trim().length
      },
      hasbig:{
          msg:"必须包含大写字母",
          reg:(val)=>!(/[A-Z]/.test(val))
      },
	  lis4:{
		  msg:"验证码为4位数",
		  reg:(val)=>val.length!=4
	  },
	  lis8:{
		  msg:"邀请码为8位数的字母数字组合",
		  reg:(val)=>val.length!=8
	  }
    };
  }
  check(checkitem="", rules=[]) {
   return rules.some((item) => {
      if (this.rules[item].reg(checkitem)) {
		  uni.showToast({
		  	title: this.rules[item].msg,
		  	icon: 'none'
		  });
      }
	  return this.rules[item].reg(checkitem);
    });
  }
}
export default Check;
