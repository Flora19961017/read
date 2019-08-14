<template>
  <div>
    <!-- 关闭窗口小叉号 -->
    <div>
      <span class="btn-close">&times;</span>
    </div>
    <!-- 注册 -->
    <div class="login-path">
      <!-- 登录标题 -->
      <b class="tit-cue">手机号快捷登录</b>
      <input type="text" placeholder="请输入手机号" class="login-input">
      <input type="text" placeholder="请输入密码" class="login-input">
    </div>
    
    <!-- 做一个登录按钮，超大的 -->
    <div class="div-btn">
      <button class="login-button">登录</button>
      <div>注册送600书币，好书免费读</div>
    </div>
    <!-- 设置选中登录 -->
    <div class="login-method">
      <span class="login-method-line"></span>
      <b>用社交账号登录</b>
      <span class="login-method-line"></span>
    </div>
  </div>
</template>
<script>
export default {
  
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
  
  /* 设置输入框样式 */
  .login-input{
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
    width:217px;
    height:39px;
    border-radius:18px;
    border:0;
    color:rgba(0,0,0,.3);
    font-size:18px;
    font-weight:700;
    outline: none;
  }
 .login-button:active{
   background:rgba(0,0,0,.3)
 }
 /* 登录方式 */
 .login-method{
   text-align:center;
 }
  .login-method-line{
    display: inline-block;
    width: 30px;
    height: 1px;
    background-color: rgba(0,0,0,.3);
    margin-bottom: 5px;
  }
</style>