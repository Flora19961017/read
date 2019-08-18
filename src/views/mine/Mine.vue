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
        <div class="loginOrReg" @click="logOrReg">
          <!-- 上下排列，文字加文字 -->
          <span class="text-f1 text-f1-posi">登录</span>
          <span>/</span>
          <span class="text-f1 text-f1-posi">注册</span>
        </div>
      </div>
      <div class="btn-posi">
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
        <span class="text-f1 m-bottom">10<i class="text-f1">0书币</i></span>
        <span class="text-f2 ">余额</span>
      </div>
      <!-- 福利 -->
      <!-- 上下 -->
      <div class="text-flex posi text-align">
        <!-- i给个背景图片 -->
        <span class="text-f1">0/8<i class="littleImg">领</i></span>
        <span class="text-f2">任务</span>
      </div>
      <!-- VIP -->
      <div class="text-flex">
        <span>图片</span>
        <span class="text-f2">VIP</span>
      </div>
    </div>
    <!-- 轮播图 -->
    <!-- <div></div> -->
    <!-- 按钮，小图标+文字+小图标 -->
    <!-- 给一个div，背景为银色 -->
    <div class="bgColor"></div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg1"></small>邀请好友</i>
        <div>
          <small class="small-text">领300书币</small>
          <i class="bgPosi iStyle "></i>
        </div>
      </a>
    </div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg2"></small>书币充值</i>
        <div>
          <small class="small-text">送30天VIP</small>
          <button class="borderSty-btn">充值</button>
          <i class="bgPosi iStyle"></i>
        </div>
      </a>
    </div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg3"></small>VIP专区</i>
        <div>
          <small CLASS="small-text">免费看小说</small>
          <i class="bgPosi iStyle"></i>
        </div>
        
      </a>
    </div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg4"></small>阅读记录</i>
        <i class="iStyle"></i>
      </a>
    </div>
    <div class="borderSty">
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg5"></small>帮助与反馈</i>
        
      </a>
    </div>
    <div>
      <a href="javascript:;" class="d-flex aStyle">
        <i class="p-middle text-f3"><small class="bgPosi bgImg6"></small>设置</i>
        <i class="iStyle"></i>
      </a>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import Footer2 from "../../components/Footer2.vue"
export default {
  data(){
    return{}
  },
  // 注册
  components:{
    "myfooter":Footer2
  },
  methods:{
    // 1.跳转页面到消息
    news(){
      // 跳转页面
      this.$router.push("/Inform")
    },
    // 2.跳转页面到余额
    // 跳转到余额
    yuE(){
      this.$router.push("/Balance");
    },
    // 3.跳转页面到注册或登录
    logOrReg(){
      // 点击条
      this.$router.push("/Login");
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
    margin-top:15px;
  }
  /* 头像旁边文字的位置 */
  .loginOrReg{
    margin-left:15px;
  }
  /* 头像旁边文字 */
  .text-f1-posi{
    line-height:50px;
    letter-spacing: 1px;
  }
  /* 签到位置微调 */
  .btn-posi{
    margin-top:25px;
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
    margin-left:0;
    opacity:.4;
  }
  /* 小文字 */
  .small-text{
    line-height: 45px;
    font-size:12px;
    color:#999999;
  }
  /* 小按钮样式 */
  .borderSty-btn{
    width:59px;
    height:25px;
    padding:0;
    border-radius: 18px;
    border:1px solid hsl(175, 74%, 42%);
    background:#fff;
    color:hsl(175, 74%, 42%);
    margin-left:6px;
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
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
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

