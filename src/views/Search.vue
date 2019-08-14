<template>
  <div>
     <div class="dis">
      <head-view></head-view>
      <div class="posi">
        <!-- 搜索图标 -->
        <span class="bg-circle"></span>
        <i class="bg-icon-search"></i>
        <input type="text" class="posi-text input" placeholder="请输入关键字">
      </div>
     <a href="javascript:;">搜索</a>
   </div>
  </div>
</template>
<script>
import Header from "../components/mine/Head"
export default {
  data(){
    return{}
  },
  components:{
    "head-view":Header
  }
}
</script>
<style scoped>
  /* 设置头图导航 */
  .dis{
    display:flex;
    border-bottom:1px solid rgba(0,0,0,.1);
    justify-content: space-between;
  }
  .posi-text{
 
   font-size:14px;
 }
 .posi{
   position:relative;
 }
 .input{ width:207px; height:25px; color:#666666; line-height:25px; border:1px #cccccc solid; 
 border-radius:18px;
 margin-top:5px;
 margin-left:23px;
 padding:0 0 0 25px;
/* 取消聚焦时input的样式 */
 outline: none;   
 box-shadow:none;
 color:#f00;
 background:#dedede;
 color: red;
 text-shadow: 0px 0px 0px #000;
 -webkit-text-fill-color: transparent;
} 
.bg-icon-search{
  position:absolute;
  left:29px;
  top:10px;
  width:18px;
  height:18px;
  
  background:url(../../public/imgs/mine/search.png) no-repeat;
  background-size:100%;
  opacity: .6;
 }

</style>