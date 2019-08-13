<template>
  <div>
   <div class="dis">
      <head-view></head-view>
      <span class="posi-text">福利中心</span>
   </div>
   <!-- 右侧小图标加浮动 -->
   <div class="float-left margin"><i class="bg-littleImg bg-img-data"></i>查看明细</div>
   <div class="clear"></div>
   <!-- 设置签到部分 -->
   <div>
      <div class="signIn">
     <div class="signIn-circle3">
       <div class="signIn-circle2">
         <div class="signIn-circle1">已签到</div>
       </div>
     </div>
   </div>
    <div class="signIn-data">
       <!-- 设置签到天数 -->
       <ul class="singIn-data-ul">
         <li>
           <div class="singIn-data-ul-div already">+10</div>
         </li>
         <li>
           <div class="singIn-data-ul-div not">2天</div>
         </li>
         <li>
           <div class="singIn-data-ul-div not">3天</div>
         </li>
         <li>
           <div class="singIn-data-ul-div not">4天</div>
         </li>
         <li>
           <div class="singIn-data-ul-div not">5天</div>
         </li>
         <li>
           <div class="singIn-data-ul-div not">6天</div>
         </li>
         <li>
           <div class="singIn-data-ul-div not">7天</div>
         </li>
       </ul>
     </div>
   </div>
   <!-- 分隔线 -->
   <div class="bg-line"></div>
   <!-- 新手任务 -->
   <div class="task1">
     <b class="task1-tit">新手任务</b>
     <div class="task1-Newbie">
       <div class="task1-hobby"> 
         <span class="task1-font">选择阅读口味</span>
         <i>+10</i>
       </div>
       <div class="task1-do">
         <div class="posi">
            <span class="circle-f3 circle-posi1"></span>
            <span class="f-bg-s3">去完成</span>
            <span class="circle-f3 circle-posi2"></span>
          </div>
       </div>
     </div>
   </div>
   <!-- 分隔线 -->
   <div class="bg-line"></div>
   <!-- 日常任务 -->
   <div class="task2">
   <ul>
     <li class="task2-li"> 
     <b class="task1-tit">日常任务</b>
     <div class="task1-Newbie">
       <div class="task1-hobby"> 
         <span class="task1-font">累计阅读30分钟</span>
         <i>+10</i>
       </div>
       <div class="task1-do">
         <div class="posi">
            <span class="circle-f3 circle-posi1"></span>
            <span class="f-bg-s3">去完成</span>
            <span class="circle-f3 circle-posi2"></span>
          </div>
       </div>
     </div>
     </li>
   </ul>
  </div>
  </div>
</template>
<script>
import Header from "../../components/mine/Head"
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
/* 设置ul去点 */
ul{
  list-style-type: none;
  padding:0;
  margin:0;
}
.posi{
    position:relative;
    text-align:center;
  }
/* 设置头图导航 */
  .dis{
    display:flex;
    border-bottom:1px solid rgba(0,0,0,.1);
  }
  .posi-text{
   margin-left:127px;
   margin-top:7px;
   font-size:14px;
 }
 /* 设置右浮文字加小图标 */
 .float-left{
   float:right;
 }
 .margin{
  margin-top:10px;
  margin-right:12px;
}
/* 给背景图片设置基本样式*/
 .bg-littleImg{
   display: inline-block;
   width: 17px;
   height:17px;
   background:url(../../../public/imgs/mine/arr-left.png)no-repeat;
   }
   .bg-img-data{
  width: 14px;
  height:14px;
  background:url(../../../public/imgs/mine/data.png) no-repeat;
  background-size:100%;
  margin-right:5px;
  vertical-align: middle;
  opacity: .7;
}
/*清除浮动带来的影响  */
.clear{
   clear:both;
 }
 /* 设置签到部分样式 */
 .signIn{
   width:100%;
   height:116px;
   text-align: center;
   position:relative;
 }
 /* 设置最里层圆 */
 .signIn-circle1{
   position: absolute;
   width:68px;
   height:68px;
   border-radius: 50%;
   color:#fff;
   background:red;
   line-height:68px;
   font-size:16px;
   left:6px;
   top:6px;
   z-index: 0;
   letter-spacing: 1px;
 }
 /* 设置第二层 */
 .signIn-circle2{
  position: absolute;
  width:80px;
  height:80px;
  border-radius: 50%;
  background:rgba(255,0,0,.4);
  top:9px;
  left:9px;
  z-index: 1
 }
 .signIn-circle3{
  position: absolute;
  left:36%;
  width:98px;
  height:98px;
  border-radius: 50%;
  background:rgba(255,0,0,.2);
  z-index: 3;
  margin-bottom:15px;
 }
 
 /* 设置签到天数 */
 .singIn-data-ul{
   display: flex;
   justify-content: space-around;
   text-align: center;
 }
 .singIn-data-ul-div{
   height:35px;
   width:35px;
   line-height:35px;
   border-radius:50%;
 }
 /* 已签到过 */
 .already{
  background:rgba(255,0,0,.3);
  color:red;
 }
 /* 为签到 */
 .not{
  background:#dedede;
  color:rgba(0,0,0,.4);
 }
/* 设置分割线 */
.bg-line{
  height:6px;
  background:#dedede;
  margin:10px 0;
}
/* 新手任务 */
/* 设置标题 */
.task1-tit{
  display:inline-block;
  font-weight: 600;
  margin:3px 10px;
  
}
.task1-Newbie{
  display:flex;
  justify-content: space-between;
  margin:10px 8px 15px 8px;
}
/* 设置字体 */
.task1-font{
  font-size:13px;
  letter-spacing: 1px;
}
/* 设置完成样式 */
.circle-f3{
  display: inline-block;
  position: absolute;
  width:25px;
  height:20px;
  border:1px solid red;
  border-radius:50%;
}
/* 圆位置 */
.circle-posi1{
right:68px;
}
/* 圆位置 */
.circle-posi2{
right:25px;
}
/* 设置背景以及字体 */
.f-bg-s3{
  display: inline-block;
  width:45px;
  height:20px;
  border:1px solid red;
  border-left:0;
  border-right:0;
  background:#fff;
  color:red;
  position: absolute;
  left:-82px;
  z-index: 1;
  line-height:20px;
  font-size:14px;
  letter-spacing: 1px;
  
}
</style>