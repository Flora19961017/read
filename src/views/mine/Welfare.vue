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
         <div class="signIn-circle1">签到</div>
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
         +10<i></i>
       </div>
       <div class="task1-do">
         <div class="posi">
            
            <span class="f-bg-s3">去完成</span>
            
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
            
            <span class="f-bg-s3">去完成</span>
            
          </div>
       </div>
     </div>
     <!-- 分割线 -->
     <div class="cut-off"></div>
     </li>
      <li class="task2-li"> 
     <div class="task1-Newbie">
       <div class="task1-hobby"> 
         <span class="task1-font">累计阅读60分钟</span>
         <i>+20</i>
       </div>
       <div class="task1-do">
         <div class="posi">
            
            <span class="f-bg-s3">去完成</span>
            
          </div>
       </div>
     </div>
     <!-- 分割线 -->
     <div class="cut-off"></div>
     </li>
      <li class="task2-li"> 
     <div class="task1-Newbie">
       <div class="task1-hobby"> 
         <span class="task1-font">累计阅读120分钟</span>
         <i>+30</i>
       </div>
       <div class="task1-do">
         <div class="posi">
            
            <span class="f-bg-s3">去完成</span>
            
          </div>
       </div>
     </div>
     <!-- 分割线 -->
     <div class="cut-off"></div>
     </li>
     <li class="task2-li"> 
     <div class="task1-Newbie">
       <div class="task1-hobby"> 
         <span class="task1-font">累计阅读180分钟</span>
         <i>+30</i>
       </div>
       <div class="task1-do">
         <div class="posi">
            
            <span class="f-bg-s3">去完成</span>
            
          </div>
       </div>
     </div>
     <!-- 分割线 -->
     <div class="cut-off"></div>
     </li>
     <li class="task2-li"> 
     <div class="task1-Newbie">
       <div class="task1-hobby"> 
         <span class="task1-font">浏览广告送猫豆</span>
         <i>+5</i>
       </div>
       <div class="task1-do">
         <div class="posi">
            
            <span class="f-bg-s3">去完成</span>
            
          </div>
       </div>
     </div>
     <!-- 分割线 -->
     <div class="cut-off"></div>
     </li>
     <li class="task2-li"> 
     <div class="task1-Newbie">
       <div class="task1-hobby"> 
         <span class="task1-font">免费领现金</span>
         +0<i></i>
       </div>
       <div class="task1-do">
         <div class="posi">
            
            <span class="f-bg-s3">去完成</span>
            
          </div>
       </div>
     </div>
     <!-- 分割线 -->
     <div class="cut-off"></div>
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
   background:#19cedc;
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
  background:#cdf7fc;
  top:9px;
  left:9px;
  z-index: 1;
  animation: circle2 900ms linear infinite;
 }
 /* 第三层动画 */
 @keyframes circle3{
   from{background:rgba(25,206,220,.2);}
   to{background:rgba(25,206,220,0);}
 }
  /* 第二层设置动画 */
 @keyframes circle2{
   from{
     width:80px;
     height:80px;
     background:rgba(25,206,220,.5);
   }
   
   20%{
     width:81px;
     height:81px;
     background:rgba(25,206,220,.4);
   }
   40%{
     width:82px;
     height:82px;
     background:rgba(25,206,220,.3);
   }
   60%{
     width:83px;
     height:83px;
     background:rgba(25,206,220,.2);
   }
   80%{
     width:84px;
     height:84px;
     background:rgba(25,206,220,.1);
   }
   to{
     width:85px;
     height:85px;
     background:rgba(25,206,220,0);
   }
 }

 .signIn-circle3{
  position: absolute;
  left:36%;
  width:98px;
  height:98px;
  border-radius: 50%;
  
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
  margin-right:10px;
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
  width:63px;
  height:25px;
  border-left:0;
  border-right:0;
  background:#1bd0d8;
  color:#fff;
  position: absolute;
  left:-82px;
  z-index: 1;
  line-height:25px;
  font-size:12px;
  letter-spacing: 1px;
  border-radius:18px;
  
}
/* 分割线样式 */
.cut-off{
  border-bottom:1px solid #000;
  opacity:.2;
  margin:18px 8px;
}
</style>