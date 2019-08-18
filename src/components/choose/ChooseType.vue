<template>
  <div  @click="typem">
    <!-- 两张可选择的图片 -->
    <div class="container">
      <sex-view :on-man="toggle1" :on-men="toggle0"></sex-view>
    </div>
    <!-- 小说类型选择框 男 -->
    <div class="box-container">
      <div class="box-option">
        <i class="triangle1 man-posi1"></i>
        <i class="triangle2 man-posi2"></i>
        <small class="like-type">你喜欢的小说类型</small>
        <ul class="box-ul">
          <li>玄幻</li>
          <li>武侠</li>
          <li>都市</li>
          <li>军事</li>
          <li>历史</li>
          <li>竞技</li>
          <li>科幻</li>
          <li>灵异</li>
          <li>悬疑</li>
          <li>同人</li>
        </ul>
        <span class="big-btn" @click="start">开始体验</span>
      </div>
    </div>
    <!-- 小说类型选择框 女 -->
    <div class="box-container d-none">
      <div class="box-option">
        <i class="triangle1 women-posi1"></i>
        <i class="triangle2 women-posi2"></i>
        <small class="like-type">你喜欢的小说类型</small>
        <ul class="box-ul">
          <li>玄幻</li>
          <li>言情</li>
          <li>历史</li>
          <li>灵异</li>
          <li>悬疑</li>
        </ul>
        <span class="big-btn" @click="start">开始体验</span>
      </div>
    </div>
  </div>
</template>
<script>
// 引入组件
import sex from "./ChooseSex"
export default {
  data(){
    return{
      // 保存li数量的
      liNum:0,
      // 保存按钮的选中状态
      isDis:"",
    }
  },
  // 注册组件
  components:{
    "sex-view":sex
  },
  methods:{
    // 开始体验 按钮
    start(){
      console.log(1);
    },
    // 清除页面所有li的选中
    clearLi(){
      // 1.1对所有li进行遍历，有选中的，变成未选中
      // 1.2获取页面中的li
      var lis = document.querySelectorAll(".box-container li");
        // 1.3循环遍历，有选中，都取消
        for (var li of lis){
          if(li.classList.contains("li-checked")){
            // 1.4取消选中
            li.classList.remove("li-checked");
          }
        }
    },
    // 取消按钮的选中
    clearBtn(){
      // 1.获取元素
      var btns = document.getElementsByClassName("big-btn");
      // 2.如果选中，取消选中
      for(var btn of btns){
        if(btn.classList.contains("btn-checked")){
          // 3.取消选中
          btn.classList.remove("btn-checked");
        }
      }
    },
    // 男 方法
    toggle1(){
      console.log(this.liNum);
      // 1.找到男 div，
      var divs = document.getElementsByClassName("box-container");
      var list = divs[0].classList;
      // 2.div中有没有指定类名
      var bool = list.contains("d-none");
      // 3.如果有，则移除
      if(bool){
        // 4.为自己移除，(显示)
        list.toggle("d-none",!bool);
        // 5.给另一个添加(隐藏)
        divs[1].classList.toggle("d-none",bool);
        // 6.移除当前所有选中
        this.liNum=0;  
        // 7调用函数，清除所有li的选中
        this.clearLi();
        // 8.调用函数，取消按钮选中
        this.clearBtn();
      }
    },
   toggle0(){
    // 0.切换面板时，清除当前面板所有选中
    console.log(this.liNum);
    // 1.获取div元素
    var divs = document.getElementsByClassName("box-container");
    // 2.获取女 div.classList
    var list = divs[1].classList;
    // 3.判断是否存在 d-none 属性
    var bool = list.contains("d-none");
    // 4.使用开关属性，女 对判断结果取反 (强制移除)
    // 4.1如果存在，则移除当前  添加另外的
    if(bool){
      list.toggle("d-none",!bool);
      // 5.另一个使用判断结果值 (强制添加)
      divs[0].classList.toggle("d-none",bool);
      // 6调用函数，清除所有li的选中
      this.clearLi();
      // 6.调用函数，取消按钮选中
      this.clearBtn();
    }
   },
  // li绑定点击事件
  // 男 点击事件
  typem(e){
    // 0如果目标元素为li，触发该事件
    if(e.target.tagName=="LI"){
    // 1.点击添加选择状态样式
    var list = e.target.classList;
    var btns = document.getElementsByClassName("big-btn");
    
    // 1.1如果不存在，添加
    var bool = list.contains("li-checked");
    console.log(bool);
    if(!bool){
      list.toggle("li-checked",!bool);
      
      this.liNum++;
    }else{
      // 2.否则，再次点击取消
      list.toggle("li-checked",!bool);
      this.liNum--;
    }
    // 3.如果有一个li选中，为btn添加选中状态
    for(var btn of btns){
      if(this.liNum>0){
      btn.classList.toggle("btn-checked",this.liNum);
      // 4.并且按钮可以点击触发事件
      btn.style.pointerEvents = "auto";
    }else{
      btn.classList.toggle("btn-checked",this.liNum);
      // 5.否则并且按钮不能触发事件
      btn.style.pointerEvents = "none";
    }
  } 
}
}
}
}
</script>
<style scoped>
/* 子组件的修改 */
/* 修改子组件的外边距 */
.container>>>.container{
  margin-top:10px;
} 
/* 修改子组件图片的大小 */
  .container>>>.icon-posi{
    width:30px;
    height:30px;
  }
  /* 隐藏子组件的文字 */
  .container>>>.con-text{
    display:none;
  }
  /* 调整子组件中图片的距离 */
  .container>>>.con-man{
    margin-left:118px;
    margin-right:20px;
  }
  /* 调整子组件中图片的距离 */
  .container>>>.con-women{
    margin-right:118px
  }
   
  /* 添加样式控制元素的显示隐藏 */
  .d-none{
    display:none;
  }
  /* 男 选择框 */
  .box-container{
    padding:24px;
    margin:0 auto;
  }
  /* 选择框 */
  .box-option{
    position: relative;
    border:1px solid rgba(0,0,0,.18);
    border-radius:10px;
    text-align: center;
  }
  /* 小三角 */
  .triangle1{
    display: inline-block;
    width:0;
    position: absolute;
    border:8px solid transparent;
    border-bottom:9px solid rgba(0,0,0,.18);
  }
  .triangle2{
    display: inline-block;
    width:0;
    position: absolute;
    border:8px solid transparent;
    border-bottom:8px solid #fff;
    top:-16px;
    left:98px;
  }
  /* 男 小三角位置 */
  .man-posi1{
    top:-18px;
    left:98px;
  }
  .man-posi2{
    top:-16px;
    left:98px;
  }
  /* 女 小三角位置 */
  .women-posi1{
    top:-18px;
    left:151px;
  }
  .women-posi2{
    top:-16px;
    left:151px;
  }
  /* 提示文字 */
  .like-type{
    display: inline-block;
    font-size:12px;
    color:#999;
    margin:10px 0;
  }
  /* 为ul设置弹性 */
  .box-ul{
    margin:0  30px;
  }
   /* 为li添加选中样式 */
  /* 设置li */
   li{
    float:left;
    margin:7px 7px;
    background:#dedede;
    height:25px;
    width:56px;
    line-height:25px;
    border-radius:50px;
    font-size:12px;
  }
  
  /* 清除浮动带来的影响 */
  .box-ul::after{
    display: block;
    content:"";
    clear:both;
  }
  /* 设置按钮样式 */
  .big-btn{
    display: inline-block;
    width:222px;
    height:34px;
    background:rgba(0,0,0,.3);
    border-radius:18px;
    line-height: 34px;
    color:#fff;
    margin:14px 0 25px 0;
  }
  /* li选中时 */
 .li-checked{
   background:#ff6c12;
   color:#fff;
 }
 /* li选中时，btn的样式 */
.btn-checked{
   background:#0bb7b6;
 }
</style>