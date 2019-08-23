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
        <input type="text" class="posi-text input" placeholder="请输入关键字" @keyup="isDis" v-model="content" @keyup.13="search">
      </div>
     <a href="javascript:;" class="search" @click="search">搜索</a>
   </div>
   <!-- 热词搜素 -->
   <!-- <div class="hot-world">
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
   </div> -->
   <!-- 热门搜素 -->
   <!-- <div class="hot-door">
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
   </div> -->
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
  mounted() {
    this.content=this.$route.params.content;
  },
  methods:{
    // 输入内容时，显示删除文字的按钮
    isDis(){
      // 1.获取元素
      var span = document.getElementsByClassName("icon-del")[0];
      // 2.如果输入框没有内容，隐藏元素
      if(!this.content){
        // 3.移除该类名，使元素显示
        span.classList.add("d-none");
        // 4.否则如果输入框有内容则显示
      }else{
        span.classList.remove("d-none");
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
    },
    search(){
      this.$router.push("")
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