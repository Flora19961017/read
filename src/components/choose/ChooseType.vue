<template>
  <div>
    <!-- 两张可选择的图片 -->
    <div class="container">
      <sex-view></sex-view>
    </div>
    <!-- 小说类型选择框 男 -->
    <div class="box-container d-none">
      <div class="box-option">
        <i class="triangle1 man-posi1"></i>
        <i class="triangle2 man-posi2"></i>
        <small class="like-type">你喜欢的小说类型</small>
        <ul class="box-ul">
          <li>玄幻</li>
          <li>武侠</li>
          <li>都市</li>
          <li>军事</li>
          <li>历史</li>
          <li>竞技</li>
          <li>科幻</li>
          <li>灵异</li>
          <li>悬疑</li>
          <li>同人</li>
        </ul>
        <span class="big-btn">开始体验</span>
      </div>
    </div>
    <!-- 小说类型选择框 女 -->
    <div class="box-container">
      <div class="box-option">
        <i class="triangle1 women-posi1"></i>
        <i class="triangle2 women-posi2"></i>
        <small class="like-type">你喜欢的小说类型</small>
        <ul class="box-ul">
          <li>玄幻</li>
          <li>言情</li>
          <li>历史</li>
          <li>灵异</li>
          <li>悬疑</li>
        </ul>
        <span class="big-btn">开始体验</span>
      </div>
    </div>
  </div>
</template>
<script>
// 引入组件
import sex from "./ChooseSex"
export default {
  // 注册组件
  components:{
    "sex-view":sex
  }
}
</script>
<style scoped>
/* 子组件的修改 */
/* 修改子组件的外边距 */
.container>>>.container{
  margin-top:10px;
} 
/* 修改子组件图片的大小 */
  .container>>>.icon-posi{
    width:30px;
    height:30px;
  }
  /* 隐藏子组件的文字 */
  .container>>>.con-text{
    display:none;
  }
  /* 调整子组件中图片的距离 */
  .container>>>.con-man{
    margin-left:118px
  }
  /* 调整子组件中图片的距离 */
  .container>>>.con-women{
    margin-right:118px
  }
  /* 添加样式控制元素的显示隐藏 */
  .d-none{
    display:none;
  }
  /* 男 选择框 */
  .box-container{
    padding:24px;
    margin:0 auto;
  }
  /* 选择框 */
  .box-option{
    position: relative;
    border:1px solid rgba(0,0,0,.18);
    border-radius:10px;
    text-align: center;
  }
  /* 小三角 */
  .triangle1{
    display: inline-block;
    width:0;
    position: absolute;
    border:8px solid transparent;
    border-bottom:9px solid rgba(0,0,0,.18);
    
   
  }
  .triangle2{
    display: inline-block;
    width:0;
    position: absolute;
    border:8px solid transparent;
    border-bottom:8px solid #fff;
    top:-16px;
    left:98px;
  }
  /* 男 小三角位置 */
  .man-posi1{
    top:-18px;
    left:98px;
  }
  .man-posi2{
    top:-16px;
    left:98px;
  }
  /* 女 小三角位置 */
  .women-posi1{
    top:-18px;
    left:151px;
  }
  .women-posi2{
    top:-16px;
    left:151px;
  }
  /* 提示文字 */
  .like-type{
    display: inline-block;
    font-size:12px;
    color:#999;
    margin:10px 0;
  }
  /* 为ul设置弹性 */
  .box-ul{
    margin:0  30px;
  }
  /* 设置li */
  .box-ul>li{
    float:left;
    margin:7px 7px;
    background:#dedede;
    height:25px;
    width:56px;
    line-height:25px;
    border-radius:50px;
    font-size:12px;
  }
  /* 清除浮动带来的影响 */
  .box-ul::after{
    display: block;
    content:"";
    clear:both;
  }
  /* 设置按钮样式 */
  .big-btn{
    display: inline-block;
    width:222px;
    height:34px;
    background:rgba(0,0,0,.3);
    border-radius:18px;
    line-height: 34px;
    color:#fff;
    margin:14px 0 25px 0;
  }

</style>