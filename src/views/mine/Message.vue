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
  <h1>暂无消息</h1>
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
    border-bottom:1px solid #cccccc;
  }
  /* 纵向排列 */
  .flex-column{
    display:flex;
    flex-direction: column;
  }
  /* 当访问时的颜色 */
  .active{
    color:red;
  }
   /* 设置小红线 */
  .readLine{
    display:inline-block;
    width:30px;
    height:3px;
    background:red;
    margin-top:4px;
  }
  /* 微调 */
  .m-rig{
   margin-right:9px;
  }
  .m-lef{
    margin-left:9px;
  }
</style>