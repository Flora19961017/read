<template>
  <div>
    <!-- 关闭窗口小叉号 -->
    <div>
      <span class="btn-close" @click="back">&times;</span>
    </div>
    <!-- 注册 -->
    <div class="login-path">
      <!-- 登录标题 -->
      <b class="tit-cue">手机号快捷登录</b>
      <div class="tit-cue-input">
        <input type="text" placeholder="请输入手机号" class="login-input" v-model="phoneNum" @blur="phoneBlur" @keyup="phoneBlur">
        <span class="tit-cue-text">?</span>
      </div>
      <div class="tit-cue-input">
        <input type="password" placeholder="请输入密码" class="login-input" v-model="loginPwd" @blur="pwdBlur" @keyup="pwdBlur">
        <span class="tit-cue-text">?</span>
      </div>
    </div>
    <!-- 做一个登录按钮，超大的 -->
    <div class="div-btn">
      <button class="login-button" @click="login">登录</button>
      <button class="login-button sign-in" @click="signIn">注册</button>
    </div>
    <!-- 注册福利 -->
     <div class="sign-in-boon">
       <b class="method-icon sign-in-boon-icon"></b>
       <i>注册送600书币，好书免费读</i>
     </div>
    <!-- 设置选中登录 -->
    <div class="login-method">
      <span class="login-method-line"></span>
      <b class="login-text">用社交账号登录</b>
      <span class="login-method-line"></span>
    </div>
     <!-- 图标 -->
  <div class="login-method-icon">
    <div class="login-method-flex">
      <span class="circle circle-WeChat">
        <span class="method-icon icon-WeChat"></span>
      </span>
      <i>微信</i>
    </div>
    <div class="login-method-flex">
      <span class="circle circle-QQ">
        <span class="method-icon icon-QQ"></span>
      </span>
      <i>QQ</i>
    </div>
    <div class="login-method-flex">
      <span class="circle circle-Sina">
        <span class="method-icon icon-Sina"></span>
      </span>
      <i>新浪</i>
    </div>
  </div>
  </div>
</template>
<script>
// 1.引入qs模块
import qs from 'qs'

export default {
  data(){
    return{
      phoneNum:"",
      loginPwd:"",
    }
  },
  props:{
    ons:{
      type:Function
    }
  },
  methods:{
    // 1.创建一个正则函数验证手机号
    phone(data){
      // (1)创建一个正则表达式用于验证手机号
      var regPho=/^1[3-9]\d{9}$/;
      // (2)将传入的参数进行
      regPho.test(data)
      if(regPho.test(data)){
        // (3)如果验证通过，返回true
        return true;
      }else{
        // (4)否则返回false
        return false;
      } 
    },
    // 2.创建一个正则函数验证密码
    password(data){
      // (1)创建一个正则表达式验证密码
      var regPwd=/^[a-zA-Z0-9]{6,12}$/;
      // (2)将传入的参数进行验证
      if(regPwd.test(data)){
       // (3)如果验证成，返回true
       return true; 
      }else{
        // (4)否则返回false
        return false;
      } 
    },
    // 3.获取手机号输入框焦点时触发，验证为空和格式
    phoneBlur(){
      // (1)获取显示提示语的元素
      var span = document.getElementsByClassName("tit-cue-text")[0];
      // (1.1)如果提示语为 手机号已存在，那么直接返回false
      if(span.innerHTML == "手机号已存在"){
        return false;
      }
      // (2)验证是否为空，
      if(!this.phoneNum){
        // (3)如果为空，提示手机号为空，并且return
        span.style.color = "red";
        span.innerHTML = "请输入手机号";
        return false;
      }
      // (4)调用正则表达式，验证是否符合格式
      if(this.phone(this.phoneNum)==false){
        // (5)如果不符合格式，提示请输入有效手机号
        span.style.color = "red";
        span.innerHTML = "请输入有效手机号";
        return false;
      }
      // (6)如果上述全部通过，绿色文字，手机号可用 
      span.style.color = "green";
      span.innerHTML = "手机号可用";
      return true;
    },
    // 4.密码框失去焦点，进行验证
    pwdBlur(){
      // (1).获取显示提示语的元素
      var span1 = document.getElementsByClassName("tit-cue-text")[0];
      var span2 = document.getElementsByClassName("tit-cue-text")[1];
      // (1.1)如果，提示语内容为 "手机号已存在"  直接返回false
      if(span1.innerHTML == "手机号已存在"){
        console.log(1);
        return false;
      }
      // (2).验证密码是否为空
      if(!this.loginPwd){
        // (3)如果为空，提示用户输入密码，提示语改为请输入密码
        span2.style.color = "red";
        span2.innerHTML = "请输入密码";
        return false;
      }
      // (4)如果上述通过，调用密码验证函数，
      if(this.password(this.loginPwd)==false){
        // (5)如果格式不正确，提示用户用户名或密码格式不正确
        span2.style.color = "red";
        span2.innerHTML = "密码格式不正确";
        return false;
      }
      // (6)如果上述全部通过，绿色文字提醒，格式正确
      span2.style.color = "green";
      span2.innerHTML = "密码格式正确";
      return true;
    },
    // 5.点击登录按钮时验证手机号和密码是否为空
    login(){
    // (1)验证手机号是否为空
    // 调用失去焦点的验证函数，如果两个函数都为true(非空验证和格式验证都通过时)，发送ajax请求
    var pho = this.phoneBlur();
    var pwd = this.pwdBlur();
      if(pho&&pwd){
        // (2)发送ajax请求，登录
        var uname = this.phoneNum;
        var upwd = this.loginPwd;
        this.axios.get("login",{params:{uname,upwd}}).then(res=>{
          // (3)接收服务器返回过来的数据
          var data = res.data;
          // (4)对数据的code进行判断，
          // (5)如果为1，登录成功，跳转页面重新用户加载数据
          if(data.code==1){      
            // (5.1)获取的数据传到Mine
            var obj = res.data.obj;
            var data = obj.user;
            this.$store.commit("data",obj);
            // (5.2) 页面跳转到 Index页面
            this.$router.push({
              name:"mine",
              params:{data}
            });
            
          }else if(data.code==-1){
            // (6)如果为0，登录失败并且清空密码，提示用户名或密码错误
            this.$toast("用户名或密码错误");
            // 清空密码输入框
            var span = document.getElementsByClassName("tit-cue-text")[1];
            span.style.color = "red";
            span.innerHTML = "请输入密码";
            this.loginPwd = ""; 
          }          
        })
      }
    },
    // 6.注册，用户注册
    signIn(){
      // 点击注册按钮时，调用两个验证函数，如果都返回true(手机号和密码都返回true),发送ajax请求，添加数据
      // (1)调用两个验证函数,并用变量接收返回值
      // (1.1)判断，如果提示语为 手机号不存在，不调用函数验证
      var span = document.getElementsByClassName("tit-cue-text")[0];
      
      if(this.phoneBlur()&&this.pwdBlur()){
        // (2)验证都通过，发送ajax请求,添加用户数据
        // (3)获取url 和要传递的参数
        var url = "signin";
        var uname = this.phoneNum;
        var upwd = this.loginPwd;
        this.axios.post(url,qs.stringify({uname,upwd})).then(res=>{
        // (3)对返回值进行判断 1 -1 0 
          // (4)如果为1，则代表成功，重新加载主页面
          var data = res.data;
          if(data.code==1){
            // 跳转页面，重新加载数据
            // (4.1)跳转到选中性别和类型页面
            this.$router.push("/RegSuccess");
          }else if(data.code==0){
            // (5)如果为0 ，代表手机号已经存在，提示用户
            // 获取span，提示用户手机号已经存在
            var spans = document.getElementsByClassName("tit-cue-text");
            this.loginPwd = "";
            spans[1].style.color = "transparent";
            spans[0].style.color = "red";
            spans[0].innerHTML = data.msg;
          }else if(data.code==-1){
            // (6)如果为-1，数据插入不成功，提示用户，网络错误
          }
        })
      }
    },
     // 7.叉号按钮，返回上一级
  back(){
    // 7.1返回个人信息按钮
    this.$router.push("/Mine");
    }
  }
 
}
</script>
<style scoped>
  /* 设置顶部关闭窗口 页面 */
  .btn-close{
    font-size:32px;
    opacity: .4;
  }
  /* 登录流程弹性 */
  .login-path{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:137px;
    margin:25px 20px;
    text-align: center;
  }
  /* 提示字体样式 */
  .tit-cue{
    font-size:20px;
    opacity: .7;
    letter-spacing: 1px;
  }
  /* 输入框及提示 */
  .tit-cue-input{
    text-align: left;
  }
  /* 提示区 */
  .tit-cue-text{
    display: inline-block;
    width:120px;
    padding:10px 0;
    border-bottom:2px solid #dedede;
    font-size:13px;
    color:transparent;
    text-align: right;
  }
  /* 设置输入框样式 */
  .login-input{
    width:135px;
    border:0;
    border-bottom:2px solid #dedede;
    outline: none;
    padding:10px 0;
    color:red;
    /* 隐藏输入的颜色，用阴影代替 */
    text-shadow: 0px 0px 0px #000;
    -webkit-text-fill-color: transparent;
    font-size:15px;
  }
  ::placeholder{
    font-size:15px;
    color:rgba(0,0,0,.5);
    font-weight: 500;
  }
  /* 设置按钮样式 */
  /* 设置按钮居中 */
  .div-btn{
    text-align:center;
    margin-top:65px;
  }
  .login-button{
    width:134px;
    height:39px;
    border-radius:18px;
    border:0;
    color:rgba(0,0,0,.3);
    font-size:18px;
    font-weight:700;
    outline: none;
    margin:0 5px;
  }
  /* 注册按钮 */
  .sign-in{
    color:#fff;
    background:#ff7008;
  }
 .login-button:active{
   background:rgba(0,0,0,.3)
 }
 .login-button.sign-in:active{
   background:#ffa008;
 }
 /* 注册福利 */
 .sign-in-boon{
   text-align: center;
   margin-top:15px;
 }
 /* 注册小图标 */
 .sign-in-boon-icon{
   background:url(../../public/imgs/login/signIn.png);
   background-size:100%;
   
 }
 .sign-in-boon>i{
  color:#ffa008;
  font-style:italic;
  font-weight: 500;
  font-size:18px;
 }
 /* 登录方式 */
 .login-method{
   text-align:center;
   margin-top:70px;
 }
 /* 登录字体样式 */
 .login-text{
   margin:0 8px;
   color:rgba(0,0,0,.5);
 }
 /* 登录分割线 */
  .login-method-line{
    display: inline-block;
    width: 40px;
    height: 1px;
    background-color: rgba(0,0,0,.2);
    margin-bottom: 5px;
  }
  /* 最外层弹性 */
  .login-method-icon {
      display: flex;
      justify-content: space-around;
      margin-top:18px;
    }
    /* 图片和文字上下弹性 */
    .login-method-flex{
      display:flex;
      flex-direction: column;
      text-align:center;
    }
    /* 背景图片基础样式 */
    .method-icon {
      display: inline-block;
      width: 35px;
      height: 35px;
    }
    .icon-WeChat {
      background: url(../../public/imgs/login/WeChat.png) no-repeat;
      background-size: 100%;
      border-radius: 50%;
    }
    .icon-QQ {
      background: url(../../public/imgs/login/QQ.png) no-repeat;
      background-size: 100%;
      border-radius: 50%;

    }
    .icon-Sina {
      background: url(../../public/imgs/login/Sina.png) no-repeat;
      background-size: 100%;
      border-radius: 50%;
    }

    /* 设置圆的样式 */
    .circle {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      padding: 3px;
    }
    .circle-WeChat{
      border: 2px solid rgba(1, 187, 8, .5);
    }
    .circle-QQ{
      border: 2px solid rgba(50, 141, 216, .5);
    }
    .circle-Sina{
      border: 2px solid rgba(216, 30, 6, .5);
    }
</style>