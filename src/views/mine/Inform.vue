<template>
  <div class="container">
    <!-- 头部分 -->
    <div class="page-head">
      <a href="javascript:;" @click="back1">
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
        <a href="javascript:;" class="active">通知</a>
        <span class="readLine"></span>
      </div>
      <a href="javascript:;" @click="message">
        <span>消息</span>
      </a>
    </div>
    <div class="d-text">
      <a href="javascript:;" class="d-block">
        <span class="text-f1">它曾对我许诺终身，却成了我的</span>
        <i class="text-f2">每个孤独的夜晚，都在想着你</i>
        <small class="text-f3">2019-03-06 11:53:37</small>
      </a>
      <span class="arr-right"></span>
    </div>
    <div class="d-text">
      <a href="javascript:;" class="d-block">
        <span class="text-f1">它曾对我许诺终身，却成了我的</span>
        <i class="text-f2">每个孤独的夜晚，都在想着你</i>
        <small class="text-f3">2019-03-06 11:53:37</small>
      </a>
      <span class="arr-right"></span>
    </div>
    <div class="d-text">
      <a href="javascript:;" class="d-block">
        <span class="text-f1">它曾对我许诺终身，却成了我的</span>
        <i class="text-f2">每个孤独的夜晚，都在想着你</i>
        <small class="text-f3">2019-03-06 11:53:37</small>
      </a>
      <span class="arr-right"></span>
    </div>
    <div class="d-text">
      <a href="javascript:;" class="d-block">
        <span class="text-f1">它曾对我许诺终身，却成了我的</span>
        <i class="text-f2">每个孤独的夜晚，都在想着你</i>
        <small class="text-f3">2019-03-06 11:53:37</small>
      </a>
      <span class="arr-right"></span>
    </div>
    <div class="d-text">
      <a href="javascript:;" class="d-block">
        <span class="text-f1">它曾对我许诺终身，却成了我的</span>
        <i class="text-f2">每个孤独的夜晚，都在想着你</i>
        <small class="text-f3">2019-03-06 11:53:37</small>
      </a>
      <span class="arr-right"></span>
    </div>
    <div class="d-text">
      <a href="javascript:;" class="d-block">
        <span class="text-f1">它曾对我许诺终身，却成了我的</span>
        <i class="text-f2">每个孤独的夜晚，都在想着你</i>
        <small class="text-f3">2019-03-06 11:53:37</small>
      </a>
      <span class="arr-right"></span>
    </div>
    <div class="d-text">
      <a href="javascript:;" class="d-block">
        <span class="text-f1">它曾对我许诺终身，却成了我的</span>
        <i class="text-f2">每个孤独的夜晚，都在想着你</i>
        <small class="text-f3">2019-03-06 11:53:37</small>
      </a>
      <span class="arr-right"></span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    // 回退
    back1(){
      this.$router.push("/Mine");
    },
    // 点击已读
    read(){
      this.$messagebox.confirm("是否确定已读?");
    },
    // 到消息列表
    message(){
      this.$router.push("/Message");
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
  }
  /* 头部下的样式 */
  .page-head i{
    font-size:20px;
  }
  .page-head span{
    font-size:15px;
  }
  .page-head small{
    font-size:14px;
    color:#666;
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
  /* 设置小红线 */
  .readLine{
    display:inline-block;
    width:30px;
    height:3px;
    background:red;
    margin-top:4px;
  }
  /* 当访问时的颜色 */
  .active{
    color:red;
  }
  /* 显示为block，并加弹性 */
  .d-block{
    display:flex;
    flex-direction: column;
    
  }
  /* 设置弹性，文字 */
  .d-text{
    display:flex;
    justify-content: space-between;
    border-bottom:1px solid #cccccc;
    position:relative;
  }
  /* 设置字体样式 */
  .text-f1{
    font-size:15px;
    margin-top:4px;
  }
  .text-f2{
    font-size:10px;
    text-align:left;
    margin-top:4px;
    font-style:normal;
  }
  .text-f3{
    font-size:8px;
    text-align:left;
    margin-top:4px;
    margin-bottom:8px;
    color:#666;
  }
  /* 设置返回按钮小图标 */
  .bg-back{
    display:inline-block;
    width:24px;
    height:24px;
    background:url(../../../public/imgs/mine/arr-left.png) no-repeat;
    background-size:100%;
    opacity:.6;
  }
  /* 设置右箭头 */
  .arr-right{
    display:inline-block;
    width:20px;
    height:20px;
    background:url(../../../public/imgs/mine/arr-right.png) no-repeat;
    background-size:100%;
    opacity:0.4;
    position:absolute;
    top:30%;
    left:91%;
  }
  /* 微调 */
  .m-rig{
   margin-right:9px;
  }
  .m-lef{
    margin-left:9px;
  }

</style>