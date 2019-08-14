<template>
  <div class="container">
    <!-- 右浮的铃铛 -->
    <div class="r-margin">
      <!-- 此按钮跳转到小写列表 -->
      <a href="javascript:;" @click="news" ><span class="bg-ld"></span></a>
    </div>
    <!-- 包裹图片，加文字 -->
    <div class="d-flex margin-b">
      <div class="imgAndText">
        <!-- 图片，头像 -->
        <img src="../../../public/imgs/mine/user.jpg" alt="" class="user">
        <div class="">
          <!-- 上下排列，文字加文字 -->
          <span class="text-f1 text-f1-posi">登录</span>
          <span>/</span>
          <span class="text-f1 text-f1-posi">注册</span>
        </div>
      </div>
      <div>
        <!-- 设置签到部分 -->
        <mt-button class="btn-qd">
          <i class="bg-qd"></i>签到<sup><small class="pic-red"></small></sup>
          <b class="qd-dire bgPosi"></b>
        </mt-button>
      </div>
    </div>
    <!--余额，福利水平 -->
    <div class="d-flex-around">
      <!-- 余额 -->
      <div class="text-flex text-align" @click="yuE">
        <!-- 上下 -->
        <span class="text-f1 m-bottom">10<i class="text-f1">猫豆</i></span>
        <span class="text-f2 ">余额</span>
      </div>
      <!-- 福利 -->
      <!-- 上下 -->
      <div class="text-flex posi text-align">
        <!-- i给个背景图片 -->
        <span class="text-f1">0/7<i class="littleImg">领</i></span>
        <span class="text-f2">福利中心</span>
      </div>
    </div>
    <!-- 轮播图 -->
    <!-- <div></div> -->
    <!-- 按钮，小图标+文字+小图标 -->
    <!-- 给一个div，背景为银色 -->
    <div class="bgColor"></div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg1"></small>阅读记录</i>
        <i class="bgPosi iStyle "></i>
      </a>
    </div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg2"></small>性别</i>
        <i class="iStyle"></i>
      </a>
    </div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg3"></small>阅读口味</i>
        <i class="iStyle"></i>
      </a>
    </div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg4"></small>用户反馈</i>
        <i class="iStyle"></i>
      </a>
    </div>
    <!-- 小间距 -->
    <div class="bgColor"></div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg5"></small>场景问题</i>
        <small class="text-f2 text-m">猫扑免费小说应该怎么玩?</small><i class="iStyle"></i>
      </a>
    </div>
    <div>
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg6"></small>设置</i>
        <i class="iStyle"></i>
      </a>
    </div>
  </div>
</template>
<script>
// 

export default {
  data(){
    return{}
  },
  // 注册
  methods:{
    news(){
      // 跳转页面
      this.$router.push("/Inform")
    },
    // 跳转到余额
    yuE(){
      this.$router.push("/Balance");
    }
  }
}
</script>
<style scoped>
  /* 消息右浮 */
  /* 设置i不倾斜 */
  /* 设置小图标 */
  .bgPosi{
    display: inline-block;
    width:17px;
    height:17px;
    vertical-align: middle;
    margin:0 8px;
  }
  i{
    font-style:normal;
  }
  .r-margin{
    margin-left:89%;
    margin-bottom:25px;
  }
  /* 弹性布局 */
  .d-flex{
    display: flex;
    justify-content: space-between;
  }
  /* 头像部分，弹性布局 */
  .imgAndText{
    display: flex;
  }
  /* 文字上下排列 */
  .text-flex{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  }
  /* 设置余额与福利中心的弹性 */
  .d-flex-around{
    display:flex;
    justify-content: space-around;
  }
  /* 设置页面文字 */
  .text-f1{
    font-size:15px;
    color:#000;
  }
  .text-f2{
    font-size:10px;
    color:#999;
  }
  /* 设置下外边距 */
  .margin-b{
    margin:0 0 20px 10px;
  }
  /* 设置a标签的样式 */
  .aStyle{
    text-decoration:none;
    color:#010101;
    font-style:normal;
  }
  /* 设置小箭头的样式 */
  .iStyle{
    width:20px;
    height:20px;
    background:url(../../../public/imgs/mine/arr-right.png) no-repeat;
    background-size:100%;
    margin:10px;
    opacity:.4;
  }
  /* 设置签到部分 */
  /* 设置按钮 */
  .btn-qd{
    width:70px;
    height:20px;
    font-size:10px;
    color:#ffff02;
    background-color:orange;
    border:0; 
    position:relative;
    line-height:13px;
  }
  /* 设置图标 */
  .bg-qd{
    display: inline-block;
    width:17px;
    height:17px;
    vertical-align: middle;
    margin:0 8px;
    background:url(../../../public/imgs/mine/signIn.png) no-repeat;
    background-size:100%;
    position:absolute;
    top:1px;
    left:-4px;
  }
  /* 设置新消息提示 */
  .pic-red{
    display:inline-block;
    width:6px;
    height:6px;
    background:red;
    border-radius:50%;
    border:1px solid #fff;
    position: absolute;
    left:43px;
    top:4px;
  }


  /* 设置头像图片规格 */
  .user{
    width:50px;
    height:50px;
    border-radius:50%;
  }
  /* 给父元素一个定位 */
  .posi{
    position:relative;
  }
  /* 设置气泡 */
  .littleImg{
    position:absolute;
    left:74%;
    top:-41%;
    display:inline-block;
    width:25px;
    height:25px;
    background:url(../../../public/imgs/mine/bubble.png) no-repeat;
    background-size:100%;
    margin-bottom:10px;
    margin-right:-10px;
    font-size: 10px;
    color:#fff;
    line-height: 25px;
    text-align:center;
    
  }
  /* 上下距离 */
  .m-bottom{
    margin-bottom:7px;
  }
  /* 设置背景颜色 */
  .bgColor{
    height:6px;
    background:#dedede;
    margin:15px 0 0 0;
  }
  
  .bgImg1{
    background:url(../../../public/imgs/mine/record.png) no-repeat;
    background-size:100%;
  }
  .bgImg2{
    background:url(../../../public/imgs/mine/sex.png) no-repeat;
    background-size:100%;
  }
  .bgImg3{
    background:url(../../../public/imgs/mine/taste.png) no-repeat;
    background-size:100%;
  }
  .bgImg4{
    background:url(../../../public/imgs/mine/fk.png) no-repeat;
    background-size:100%;
  }
  .bgImg5{
    background:url(../../../public/imgs/mine/quession.png) no-repeat;
    background-size:100%;
  }
  .bgImg6{
    background:url(../../../public/imgs/mine/set.png) no-repeat;
    background-size:100%;
  }
  /*让文字和图片居中 */
  .p-middle{
    line-height:45px;
  }
  /* 添加下边框 */
  .borderSty{
    border-bottom:1px solid #ccc;
  }
  /* 设置文字样式 */
  .text-f3{
    font-size:14px;
  }
  /* 设置铃铛背景图片 */
  .bg-ld{
    display:inline-block;
    width:20px;
    height:20px;
    vertical-align: middle;
    margin:8px 8px;
    background:url(../../../public/imgs/mine/news.png) no-repeat;
    background-size:100%;
  }
  /* 为按钮设置宽度 */
  .btn-wid{
    width:50%;
  }
  /* 位置微调 */
  .text-f1-posi{
    
  }
  .text-f2-posi{
   
  }
  /* 设置方向小图标 */
  .qd-dire{
    margin:0;
    background:url(../../../public/imgs/mine/arr-right.png) no-repeat;
    background-size:100%;
    position: absolute;
    right:4px
  }
  .text-align{
    text-align:center;
  }
  .text-m{
    line-height:45px;
    margin-left:53px;
  }
</style>

