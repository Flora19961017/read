<template>
    <div>
        <search></search>
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
     <small class="hot-tit">热门搜素</small>
     <ul class="hot-door-ul">
       <li>
         <span>1</span>
         你好陌生人
       </li>
       <li>
         <span>2</span>
         不毛之地
         </li>
       <li>
         <span>3</span>
         我只是路过
         </li>
       <li>
         <span>4</span>
         武道大帝

       </li>
       <li>
         <span>5</span>
         统一霸业

       </li>
       <li>
         <span>6</span>
         甜过初恋的糖果
         
       </li>
       <li>
         <span>7</span>
         买一送一

       </li>
       <li>
         <span>8</span>
         宇宙最强

       </li>
     </ul>
   </div>
    </div>
</template>
<script>
import Search from "../../views/Search"
export default {
    components:{
        "search":Search,
    }
}
</script>
<style scoped>
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
  margin:5px 0;
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
  margin:5px 9px;
  background:#eee9e9;
  border-radius: 18px;
  font-size:12px;
  text-align: center;
  line-height: 20px;
  color:#78787a;
}
/* 热门搜素 */
.hot-door{
  padding:10px 15px;
}
.hot-door-ul{
  
}
.hot-door-ul:after{
  display:block;
  content:"";
  clear:both;
}
.hot-door-ul>li{
  float: left;
  width:130px;
  font-size:13px;
  padding:10px 0;
}
/* 设置ul下的li的基础样式 */
.hot-door-ul>li>span{
  display: inline-block;
  width:14px;
  height:14px;
  border-radius:3px;
  background:#b8b7b7;
  color:#fff;
  line-height:14px;
  text-align: center; 
  font-size:12px;
  letter-spacing: 2px;
}
/* 找到ul下的第一个li 下的span */
.hot-door-ul>li:first-child>span{
  background:#f84f53;
}
/* 找到ul下的第二个li 下的span */
.hot-door-ul>li:nth-child(2)>span{
  background:#fd6d06;
}
/* 找到ul下的第三个li 下的span */
.hot-door-ul>li:nth-child(3)>span{
  background:#faa205;
}
</style>