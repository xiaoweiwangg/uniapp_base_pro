class Validate {
  constructor() {
    this.rules = {
      ismoble: {
        msg: "手机号格式错误",
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
	  },
	  ispwd:{
		  msg:'密码中必须包含字母、数字,且大于7位',
		  reg:(val)=>/(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}/.test(val)
	  }
    };
  }
  validate(checkitem="", rules=[],fn) {
   return rules.some((item) => {
      if (this.rules[item].reg(checkitem)) {
		  fn(this.rules[item].msg)
      }
	  return this.rules[item].reg(checkitem);
    });
  }
}
export default Validate;
