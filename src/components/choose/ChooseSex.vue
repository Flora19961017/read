<template>
  <div>
    <!-- 上外边距 -->
    <!-- 选择性别 -->
    <div class="container">
      <!-- 性别男 -->
      <div class="con-man" @click="sex1" >
        <i :class="img1Style" @click="toggle1"></i>
        <span :class="btn1Style">男生</span>
      </div>
      <!-- 性别女 -->
      <div class="con-women" @click="sex0">
        <i :class="img0Style" @click="toggle0"></i>
        <span :class="btn0Style">女生</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    onMan:{
      // 定义onMan属性
      type:Function
    },
    onMen:{
      // 定义onMen属性
      type:Function
    }
  },
  data(){
    return{
      // 1.保存图片和文字样式 男
      img1Style:"icon-posi con-man-img img1-active border-active",
      btn1Style:"con-text btn-active",
      // 2.保存图片和文字样式 女
      img0Style:"icon-posi con-women-img",
      btn0Style:"con-text",
    }
  },
  methods:{
    // 点击事件1，点击判断是否含有该样式，有则return，没有则添加，并删除另一个元素的class
    sex1(){
      // 1.1判断，字符串中是否含有指定字符串
      var num = this.img1Style.lastIndexOf("img1-active");
      // 1.2如果返回值>-1 ，直接return
      if(num>-1){
        return;
      }else{
        // 1.4位图片添加
        this.img1Style = this.img1Style+=" img1-active border-active";
        // 1.5位文字添加
        this.btn1Style = this.btn1Style+=" btn-active";
        // 1.6删除另外的 图片样式
        var index = this.img0Style.lastIndexOf(" ",this.img0Style.lastIndexOf(" ")-1);
        this.img0Style=this.img0Style.slice(0,index);
        // 1.6删除另外的 文字样式
        this.btn0Style=this.btn0Style.slice(0,this.btn0Style.lastIndexOf(" "));
        
      } 
    },
    sex0(e){
      // 点击事件2，点击判断是否含有该样式，有则return，没有则添加，并删除另一个元素的class
      // 1.1接收字符串的返回值
      var num = this.img0Style.lastIndexOf("img0-active");
      // 1.2判断返回值是否大于-1
      if(num>-1){
        return;
      // 1.3否则，说明没有该类名，添加当前 并删除另外的
      }else{
        // 1.4位图片添加
        this.img0Style = this.img0Style+=" img0-active border-active";
        // 1.5位文字添加
        this.btn0Style = this.btn0Style+=" btn-active";
        // 1.6删除另外的 图片样式
        //获取下标
        var index = this.img1Style.lastIndexOf(" ",this.img1Style.lastIndexOf(" ")-1);
        // 1.7改变图片的样式
        this.img1Style=this.img1Style.slice(0,index);
        // 1.8改变按钮的样式
        this.btn1Style=this.btn1Style.slice(0,this.btn1Style.lastIndexOf(" "));   
      }
      
    },
    // 触发 男 事件
    toggle1(){
      // 子组件中触发父组件方法
      if(this.onMan){
        this.onMan();
      }
    },
    // 触发 女 事件
   toggle0(){
     if(this.onMen){
       this.onMen();
     }
   }
  }
}
</script>
<style scoped>
  /* 设置弹性，上外边距 */
  .container{
    display: flex;
    margin-top:50px;
  }
  /* 选择  男 */
  .con-man{
    display: flex;
    margin:0 60px 0 76px;
    flex-direction: column;
  }
  /* 选择  女 */
  .con-women{
    display: flex;
    margin-right:50px;
    flex-direction: column;
  }
  /* 背景图基本样式 */
  .icon-posi{
    display:inline-block;
    height: 50px;
    width:50px;
    border:1px solid #d8d8d8;
    border-radius:50%;
  }
  /* 设置头像 男 */
  .con-man-img{
    background: url(../../../public/imgs/login/chose1.png) no-repeat;
    background-position: 50% 50%;
    background-size:78%;
  }
  /* 设置头像 女*/
  .con-women-img{
    background: url(../../../public/imgs/login/chose0.png) no-repeat;
    background-position: 50% 50%;
    background-size:78%;
  }
  /* 设置按钮 */
  .con-text{
    display: inline-block;
    width:50px;
    height:20px;
    background: #d8d8d8;
    border-radius:18px;
    font-size:12px;
    line-height:20px;
    color:#fff;
    text-align: center;
    letter-spacing: 1px;
    margin-top:7px;
  }
  /* 选中状态 图片路径 边框颜色 背景颜色(白) 按钮背景颜色 */
  .border-active{
    border:1px solid #05bfc9;
  }
  .btn-active{
    background:#05bfc9;
  }
  /* 女选中样式 */
  .img0-active{
    background: url(../../../public/imgs/login/chosed0.png) no-repeat;
    background-position: 50% 50%;
    background-size:78%;
    background-color: #f0f0f0;
  }
  /* 男选中样式 */
  .img1-active{
    background: url(../../../public/imgs/login/chosed1.png) no-repeat;
    background-position: 50% 50%;
    background-size:78%;
    background-color: #f0f0f0;
  }
</style>