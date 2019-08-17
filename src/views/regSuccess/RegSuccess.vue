<template>
  <div>
    <!-- 右浮的跳过按钮 -->
    <div class="clearfix">
      <span class="float-right">跳过</span>
    </div>
    <!-- 中间的文字提示 -->
    <div class="d-flex-col">
      <b class="d-flex-col-f1">注册成功</b>
      <i class="d-flex-col-f2">完成选择，还可再领取<small class="d-flex-col-f3">300书币！</small></i>
    </div>
    <!-- 选择按钮 -->
    <div class="d-flex" >
      <div class="chose-sex text-active" @click="choSex">
        <span class="chose-num">1</span>
        <small class="chose-text">选择性别</small>
      </div>
      <div class="chose-type" @click="choType">
        <span class="chose-num">2</span>
        <small>选择类型</small>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="spi-line"></div>
    <!-- 使用性别组件 -->
    <!-- <sex-view></sex-view> -->
    <!-- 使用类型组件 -->
    <type-view></type-view>
  </div>
</template>
<script>
// 1.引入组件
// 2.引入选择性别的组件
import sex from "../../components/choose/ChooseSex"
// 3.引入选择类型的组件
import type from "../../components/choose/ChooseType"
export default {
  
  components:{
    // 注册选择性别组件
    "sex-view":sex,
    // 注册选择类型组件
    "type-view":type
  },
  data(){
    return{}
  },
  methods:{
    // (1)添加选择性别的点击事件
    choSex(e){
      // 1.1添加text-active 类名
      var div = e.currentTarget;
      div.classList.add("text-active");
      // 1.2移除下一个兄弟元素的 text-active 类名
      div.nextElementSibling.classList.remove("text-active");
      // 1.3跳转组件
    },
    // (2)添加选择类型的点击事件
    choType(e){
      // 2.1添加active类名,并且取消兄弟元素的类名
      var div = e.currentTarget;
      div.classList.add("text-active");
      div.previousElementSibling.classList.remove("text-active");
      // 2.2跳转到类型组件
    }
  }
}
</script>
<style scoped>
  /* 父级元素清除浮动的影响 */
  .clearfix::after{
    display: block;
    content:"";
    clear:both;
  }
  /* 元素右浮 */
  .float-right{
    float:right;
    font-size:14px;
    margin:10px 8px;
    color:rgb(163, 151, 151);
  }
  /* 弹性布局 */
  .d-flex-col{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom:28px;
  }
  .d-flex-col-f1{
    font-size:18px;
    margin-bottom:12px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .d-flex-col-f2{
    font-size:16px;
    color:rgba(0,0,0,.8);
  }
  .d-flex-col-f3{
    font-size:16px;
    color:#ff6a00;
    font-style:italic;
    font-weight: 700;
  }
  /* 选择按钮，弹性布局 */
  .d-flex{
    display: flex;
    text-align: center;
    
  }
  /* 按钮位置 */
  .chose-sex{
    margin:auto;
    margin-left:82px;
    opacity: .4;
  }
  .chose-type{
    margin:auto;
    margin-right:82px;
    opacity: .4;
  }
  /* 按钮样式 编号样式 */
  .chose-num{
    display: inline-block;
    background:rgba(0,0,0,.6);
    color:#fff;
    width:18px;
    height:18px;
    border-radius:50%;
    line-height: 18px;
    margin-right:4px;
  }
  .text-active{
    opacity: 1;
  }
  /* 分割线 */
  .spi-line{
    border:.5px solid rgba(0,0,0,.07);
    margin-top:15px;
  }
</style>