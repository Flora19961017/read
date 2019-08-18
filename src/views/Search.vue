<template>
  <div>
     <div class="dis">
      <head-view></head-view>
      <div class="posi">
        <!-- 搜索图标 -->
        <span class="bg-circle"></span>
        <i class="bg-icon-search"></i>
        <!-- 清空输入框 -->
        <span class="icon-del d-none" @click="empty">&times;</span>
        <input type="text" class="posi-text input" placeholder="请输入关键字" @keyup="isDis" v-model="content">
      </div>
     <a href="javascript:;" class="search">搜索</a>
   </div>
   <!-- 热词搜素 -->
   <div class="hot-world">
     <small class="hot-tit">热词搜素</small>
     <ul class="hot-ul">
       <li>言情</li>
       <li>都市</li>
       <li>重生</li>
       <li>爽文</li>
       <li>校园</li>
       <li>异能</li>
       <li>重生</li>
       <li>复仇</li>
       <li>虐恋</li>
       <li>豪门</li>
       <li>屌丝</li>
       <li>穿越</li>
     </ul>
   </div>
   <!-- 热门搜素 -->
   <div class="hot-door">
     <small class="hot-door-tit">热门搜素</small>
     <table>
       <tr>
         <td>你好陌生人</td>
         <td>不毛之地</td>
       </tr>
       <tr>
         <td>我只是路过</td>
         <td>武道大帝</td>
       </tr>
       <tr>
         <td>统一霸业</td>
         <td>甜过初恋的糖果</td>
       </tr>
       <tr>
         <td>买一送一</td>
         <td>宇宙最强</td>
       </tr>
     </table>
   </div>
  </div>
</template>
<script>
import Header from "../components/mine/Head"
export default {
  data(){
    return{
      // 输入框的内容
      content:"",
    }
  },
  components:{
    "head-view":Header
  },
  methods:{
    // 输入内容时，显示删除文字的按钮
    isDis(){
      // 1.获取元素
      var span = document.getElementsByClassName("icon-del")[0];
      // 2.判断元素，没有显示，则显示
      if(span.classList.contains("d-none")){
        // 3.移除该类名，使元素显示
        span.classList.remove("d-none");
        // 4.否则如果输入框没有内容则隐藏
      }else if(!this.content){
        span.classList.add("d-none");
      }
    },
    // 清空输入框内容，
    empty(){
      // 1.清空内容
      this.content = "";
      // 2.隐藏按钮
      var span = document.getElementsByClassName("icon-del")[0];
      // 3.添加类名，使其隐藏
      span.classList.add("d-none");
    }
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
 border:0;
/* 取消聚焦时input的样式 */
 outline: none;   
 box-shadow:none;
 color:#f00;
 background:#f2f2f2;
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
/* 设置输入内容时出来的删除按钮 */
.icon-del{
  position:absolute;
  width:16px;
  height:16px;
  background:#aaaaaa;
  line-height:14px;
  color:#fff;
  border-radius:50%;
  text-align:center;
  left:228px;
  top:9px;
}
/* 隐藏元素 */
.d-none{
  display:none;
}
/* 搜素按钮样式 */
.search{
  line-height: 33px;
  color:#000;
  text-decoration: none;
  font-size:14px;
  margin-right:5px;
}
/* 热词搜素 */
.hot-world{
  padding:10px 15px;
  margin:0 auto;
}
.hot-tit{
  font-size:13px;
  color:#666666;
}
/* 设置ul样式 */
.hot-ul{
  margin:5px 10px;
}
/* 清除浮动的影响 */
.hot-ul::after{
  display:block;
  content:"";
  clear:both;
}
/* li浮动 */
.hot-ul li{
  float:left;
  width:40px;
  height:20px;
  margin:5px 7px;
  background:#dedede;
  border-radius: 18px;
  font-size:12px;
  text-align: center;
  line-height: 20px;
}
/* 热门搜素 */
.hot-door{
  padding:8px;
}
.hot-door table{
  margin-right: 0px;
}
.hot-door table>tr>td{
  
}
</style>