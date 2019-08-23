<template>
  <div>
    <div class="page-head">
      <a href="javascript:;" @click="news">
        <i class="bg-back"></i>
      </a>
      <span class="m-lef">我的消息</span>
      <a href="javascript:;" @click="read" class="m-rig">
        <small>全部已读</small>
      </a>
    </div>
    <!-- 通知 -->
    <div class="nav">
      <div class="flex-column">
        <a href="javascript:;" class="" @click="Inf">通知</a>
        <span class=""></span>
      </div>
      <div class="flex-column">
        <a href="javascript:;" class="active">消息</a>
        <span class="readLine"></span>
      </div>
  </div>
  <!-- 消息列表 -->
  <div class="msg-list">
    <ul class="msg-ul">
      <li @click="goto">
        <div class="msg-con">
        <span class="img-icon"></span>
        <div class="msg-text">
          <i>猫扑小说官方</i>
          <p>安静的稻草人，你有一波免费书币可以领取，马上去翻牌领书币!</p>
          <span>2019-8-19 11:02:26</span>
        </div>
        <i class="msg-icon"></i>
      </div>
       
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    news(){
      this.$router.push("/Mine");
    },
    read(){
      this.$messagebox.confirm("是否确定已读?");
    },
    Inf(){
      this.$router.push("/Inform");
    },
    // 去签到页面领取福利
    goto(){
      console.log(1);
    }
  }
}
</script>
<style scoped>
 /* 取出a标签的默认样式 */
  a{
    color:#000;
    text-decoration: none;
  }
  /* 设置头部 */
  .page-head{
    display: flex;
    justify-content: space-between;
    margin:10px 0;
    /* 设置返回按钮小图标 */
  }
   .page-head small{
    font-size:14px;
    color:#666;
  }
  .bg-back{
    display:inline-block;
    width:24px;
    height:24px;
    background:url(../../../public/imgs/mine/arr-left.png) no-repeat;
    background-size:100%;
  }
  /* 设置导航 */
  .nav{
    display:flex;
    justify-content: space-around;
    border-bottom:1px solid #e9e9e9;
  }
  /* 微调 */
  .flex-column:first-child{
     margin-left:50px;
  }
  .flex-column:last-child{
     margin-right:41px;
  }
  /* 纵向排列 */
  .flex-column{
    display:flex;
    flex-direction: column;
  }
  /* 当访问时的颜色 */
  .active{
    color:#4cd8e1;
  }
   /* 设置小红线 */
  .readLine{
    display:inline-block;
    width:30px;
    height:3px;
    background:#4cd8e1;
    margin-top:4px;
  }
  /* 微调 */
  .m-rig{
   margin-right:9px;
  }
  .m-lef{
    margin-left:9px;
  }
  /* 消息列表 */
  .msg-list{
    margin:0 auto;
    padding:12px 16px;
  }
  /* 弹性布局 */
  .msg-con{
    display:flex;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9e9e9;
  }
  .msg-text{
    margin-left:5px;
  }
  /* 文字 */
  .msg-text>i{
    font-size:12px;
    color:#a2a2a2;
    
  }
  .msg-text>p{
    font-size:12px;
    letter-spacing: 1px;
    margin-top:7px;
  }
  .msg-text>span{
    display: inline-block;
    color:#c0c0c0;
    font-size:12px;
    margin-top:7px;
  }
  /* 左边头像图片 */
  .img-icon{
    display: inline-block;
    width:40px;
    height:30px;
    background:url(../../../public/imgs/mine/official.png) no-repeat;
    background-size: 100%;
    padding:5px;
  }
  /* 右边小箭头 */
  .msg-icon{
    display: inline-block;
    width:20px;
    height:20px;
    padding:4px;
    background:url(../../../public/imgs/mine/arr-right.png) no-repeat;
    background-size:100%;
    font-size:15px;
    opacity: .4;
    margin-top:10%;
  }
</style>