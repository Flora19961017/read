<template>
  <div class="index">
    <!-- 头部子组件 -->
    <myheader></myheader>
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
    <!-- 引入底部导航栏子组件 -->
    <myfooter></myfooter>
  </div>
</template>
<script>
// 头部组件
import Header from "../components/Header.vue"
// 轮播图组件
import Carousel from "../components/index/Carousel.vue"
// 精彩小说内容子组件
import PartTwo from "../components/choice/PartTwo.vue"
// 经典完结内容子组件
import BookComm from "../components/choice/BookComm.vue"
import TwoRows from "../components/choice/TwoRows.vue"
// 底部导航子组件
import Footer from '../components/Footer.vue'
export default {
  data(){
    return {
      
    }
  },
 components:{
   "myheader":Header,
    "index-carousel":Carousel,
    "parttwo":PartTwo,
    "bookcomm":BookComm,
    "tworows":TwoRows,
    "myfooter":Footer,
  }
}
</script>
<style scoped>
/* 顶部导航 */
  html{
    font-size: 10px;
  }
  .index{
    background-color: #F1F1F1;
    margin-bottom: 56px;
  }
/* 5个图标按钮 */
.index .nav-img{
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 16px;
  margin-bottom: 4px;
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
/* 精品小说 */
.index .good-txt{
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  margin-top: 3px;
}
/* 更多 字体样式 */
.index .good-txt .more{
  font-size: 12px;
  color: #999;
}
/* 经典完结 */
.index .book-comm{
  background: #fff;
  padding: 10px 16px;
}
.index .tr-other{
  border-top: none;
  margin-top: 3px;
  background: #fff;
  padding: 10px 16px;
  box-sizing: border-box;
}
.index .allsee{
  background: #fff;
  margin-top: 3px;
  padding: 10px 16px;
}
.index .allsee-txt1,.allsee-txt2{
  display: flex;
  margin: 0 auto;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 15px;
}
.index .allsee-txt2{
  width: 60%;
}
.index .all{
  margin-bottom: 30px;
}
/* 完美狂兵样式 */
.index .first-tag{
  color: #FF9709;
}
/* 逍遥逍遥小村医 */
.index .two-tag{
  color: #13CAD6;
}
.index .three-tag{
  color: #519ADE;
}
.index .four-tag{
  color: #FF9709;
  font-size: 12px;
}
.index .allsee-txt{
  color: #13CAD6;
  margin: 0 auto;
  width: 50%;
  text-align: center
}
.index .hot{
  background: #fff;
  margin: 3px 0 6px;
}
.hot .hottext{
  padding: 10px 16px;
}
</style>
