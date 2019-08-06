<template>
  <div class="index">
    <div class="title" fixed>
      <input type="text" name="" id="" class="search">
      <img src="../assets/index_search.jpg" alt="" class="imgstyle">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">男频</mt-tab-item>
        <mt-tab-item id="3">女频</mt-tab-item>
        <mt-tab-item id="4">免费</mt-tab-item>
      </mt-navbar>
    </div>
     <!-- 轮播图组件 -->
    <index-carousel></index-carousel>
    <!-- 5个图标栏 -->
    <div class="nav-img">
      <div class="nav-img-item">
        <img src="../../public/imgs/index/nav1.png" alt="" class="firstImg"> 
        <p>送书币</p>
      </div>
      <div class="nav-img-item"> 
        <img src="../../public/imgs/index/nav2.jpg" alt="">
        <p>排行</p>
      </div>
      <div class="nav-img-item">
        <img src="../../public/imgs/index/nav3.png" alt="">
        <p>分类</p>
      </div>
      <div class="nav-img-item">
        <img src="../../public/imgs/index/nav4.png" alt="">
        <p>包月</p>
      </div>
      <div class="nav-img-item">
        <img src="../../public/imgs/index/nav5.png" alt="">
        <p>完结</p>
      </div>
    </div>
    <!-- 引入全局组件轮播图2 -->
    <my-carousel></my-carousel>
  </div>
</template>
<script>
import Carousel from "../components/index/Carousel.vue"
export default {
  data(){
    return {
      selected:"",
    }
  },
 components:{
    "index-carousel":Carousel,
  }
}
</script>
<style scoped>
/* 顶部导航 */
p{margin: 0;padding: 0;}
  html{
    font-size: 10px;
  }
  .title{
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 7px;
    margin-bottom: 8px;
  }
  .search{
    background-color:#f2f2f2;
    border-radius: 5rem;
    margin: 0 auto;
    width:100%;
    height: 1.5rem;
    outline: none;
    padding:0 6px;
    box-sizing: border-box;
    border: none;
  }
  .imgstyle{
    height: 0.95rem;
    position: absolute;
    top: 2.5%;
    left: 5%;
  }
  .mint-navbar .mint-tab-item{
    padding: 12px 0 5px;
    margin-right:20px; 
  }
  /* 导航标签选中样式 */
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #5DC7D3;
    color: #5DC7D3;
    /* margin-bottom: 0px; */
}
/* 5个图标按钮 */
.index .nav-img{
  display: flex;
  justify-content: space-between;
}
.index .nav-img{
   margin-top: 10px;
}
.index .nav-img-item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nav-img-item img{
  width:40px;
  height:40px;
}
.nav-img-item .firstImg{
  display: inline-block;
  margin-top: -5px;
}
/* 图标下面文字水平居中 */
.nav-img-item p{
  text-align: center;
  font-size: 12px;
}

</style>
