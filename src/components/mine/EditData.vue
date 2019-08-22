<template>
  <div>
    <div class="head">
      <head-view></head-view>
      <b>编辑资料</b>
      <span>保存</span>
    </div>
    <!-- 修改资料 -->
    <ul class="person-ul">
      <li>
        <div class="person-detail">
          <!-- 头像 -->
          <i>头像</i>
          <!-- 详细信息 -->
          <div class="person-right">
            <img src="../../../public/imgs/mine/official.png" width="50px" height="50px" alt="">
            <span class="posi-icon detail-arr"></span>
          </div>
        </div>
      </li>
      <li>
        <div class="person-detail">
          <!-- 昵称 -->
          <i>昵称</i>
          <div class="person-right">
            <i>安静的稻草人</i>
            <span class="posi-icon detail-arr"></span>
          </div>
        </div>
      </li>
      <li>
        <div class="person-detail">
          <!-- 昵称 -->
          <i>性别</i>
          <div class="person-right">
            <i>男</i>
            <span class="posi-icon detail-arr"></span>
          </div>
        </div>
      </li>
      <li>
        <div class="person-detail">
          <!-- 昵称 -->
          <i>偏好</i>
          <div class="person-right">
            <i></i>
            <span class="posi-icon detail-arr"></span>
          </div>
        </div>
      </li>
      <li>
        <div class="person-detail">
          <!-- 昵称 -->
          <i>出生日期</i>
          <div class="person-right">
            <i>填写生日</i>
            <span class="posi-icon detail-arr"></span>
          </div>
        </div>
      </li>
      <li>
        <div class="person-detail">
          <!-- 昵称 -->
          <i>所在城市</i>
          <div class="person-right">
            <i>选择城市</i>
            <span class="posi-icon detail-arr"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import header from './Head.vue'
export default {
  data(){
    return{}
  },
  components:{
    "head-view":header
  }
}
</script>
<style scoped>
  /* 顶部样式 */
  .head{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e9e9e9;
  }
  .head>b{
    font-size:14px;
    line-height: 35px;
    font-weight: normal;
    letter-spacing: 1px;
    margin-left: 10px;
  }
  .head>span{
    font-size: 13px;
    color:#1acfda;
    line-height:35px;
    letter-spacing:1px;
    margin-right:7px;
  }
  /* 小箭头基本样式 */
  .posi-icon{
    display: inline-block;
    width:24px;
    height:24px;
    opacity: .3;
  }
  /* 设置ul样式 */
  .person-ul>li{
   padding:0 5px 0 10px;
  
  }
   /* 点击li时的背景 */
  .person-ul>li:active{
    
    background: #f8f8f8;
  }
  /* 修改资料内容 */
  .person-detail{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px 15px 8px;
    border-bottom: 1px solid #e9e9e9;
  }
  /* 左边的提示文字 */
  .person-detail>i{
    font-size: 13px;
  }
  /* 右边的提示文字 */
  .person-right>i{
    font-size:12px;
    color:#a2a2a2;
  }
  /* 右边弹性 使项目垂直居中 */
  .person-right{
    display: flex;
    align-items: center;
  }
  /* 小箭头 */
  .detail-arr{
    background:url(../../../public/imgs/mine/arr-right.png);
    background-size: 100%;
    
  }
</style>