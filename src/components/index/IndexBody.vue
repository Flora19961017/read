<template>
    <div>
        <!-- 头部子组件 -->
        <myheader></myheader>
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
    <!-- 精品小说 -->
    <div>
      <div class="good-txt">
        <span>精品小说</span>
        <span class="more">更多&gt;</span>
      </div>
      <parttwo></parttwo>
    </div>
    <!-- 经典完结 -->
    <div>
      <div class="good-txt">
        <span>经典完结</span>
        <span class="more">更多&gt;</span>
      </div>
      <bookcomm></bookcomm>
      <bookcomm></bookcomm>
    </div>
    <tworows></tworows>
    <!-- 大家都在看 -->
    <div class="allsee">
      <div class="all">大家都在看</div>
      <div class="allsee-txt1">
        <span class="first-tag">完美狂兵</span>
        <span class="two-tag">逍遥小村医</span>
      </div>
      <div class="allsee-txt2">
        <span class="three-tag">爱你在雷霆之间</span>
        <span class="four-tag">婚不由己</span>
      </div>
      <div class="allsee-txt1">
        <span class="two-tag">龙族-晨曦</span>
        <span class="first-tag">婚不由己</span>
      </div>
      <div class="allsee-txt">乡村小神仙</div>
    </div>
    <!-- 热门小说 -->
    <div class="hot">
      <div class="hottext">热门小说</div>
      <bookcomm></bookcomm>
    </div>
    </div>
</template>
<script>
import Header from "../components/Header.vue"
// 轮播图组件
import Carousel from "../components/index/Carousel.vue"
// 精彩小说内容子组件
import PartTwo from "../components/choice/PartTwo.vue"
// 经典完结内容子组件
import BookComm from "../components/choice/BookComm.vue"
import TwoRows from "../components/choice/TwoRows.vue"
export default {
    data(){
        return {

        }
    },
    components:{
        "myheader":Header,
    }
}
</script>