<template>
  <div class="c-carousel">
    <mt-swipe :auto="0">
      <h3 class="c-title">扮猪吃虎</h3>
      <mt-swipe-item>
        <div class="img-box">
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_295037.jpg" alt="">
            <p class="b-title">最强兵王</p>
            <p class="b-author">丛林狼</p>
          </div>
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_421661.jpg" alt="">
            <p class="b-title">武道霸主</p>
            <p class="b-author">署狂人</p>
          </div>
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_11315975.jpg" alt="">
            <p class="b-title">邪神旌旗</p>
            <p class="b-author">楚白</p>
          </div>
        </div>        
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="img-box">
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_295037.jpg" alt="">
            <p class="b-title">最强兵王</p>
            <p class="b-author">丛林狼</p>
          </div>
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_421661.jpg" alt="">
            <p class="b-title">武道霸主</p>
            <p class="b-author">署狂人</p>
          </div>
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_11315975.jpg" alt="">
            <p class="b-title">邪神旌旗</p>
            <p class="b-author">楚白</p>
          </div>
        </div>  
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="img-box">
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_295037.jpg" alt="">
            <p class="b-title">最强兵王</p>
            <p class="b-author">丛林狼</p>
          </div>
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_421661.jpg" alt="">
            <p class="b-title">武道霸主</p>
            <p class="b-author">署狂人</p>
          </div>
          <div class="img-item">
            <img src="../../../public/imgs/choice/t5_11315975.jpg" alt="">
            <p class="b-title">邪神旌旗</p>
            <p class="b-author">楚白</p>
          </div>
        </div>  
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },

  }
</script>
<style scoped>
p{
  padding: 0;
  margin: 0;
}
.c-carousel{
  padding: 1rem;
}
.c-carousel .c-title{
  font-weight: normal;
  color: #000;
}
/* 设置轮播图高度 */
.c-carousel .mint-swipe{
  height: 15.5rem;
}
/* 为item设置弹性布局 */
.c-carousel .mint-swipe-item{
  display: flex;
  justify-content: space-between;
  height: 12rem;
}
/* 为轮播图添加box以免动画影响 */
.c-carousel .img-box{
  display: flex;
  justify-content: space-between;
}
/* 这设置轮播图子元素的宽度 */
.c-carousel .img-item{
  width:27%;
}
.c-carousel .img-item>img{
  width: 100%;
  border-radius: 0.2rem;
}
.c-carousel .b-title{
  margin-top: 0.4rem;
  color: #000;
}
.c-carousel .b-author{
  margin-top: 0.4rem;
  font-size: 12px;
  color: #9a9a9a;
}
/* 轮播指示图 */
.c-carousel >>> .mint-swipe-indicators{
    width: 100%;
    top: 1.4rem;
    /* left: 0rem; */
    text-align: right;
}
.c-carousel >>> .mint-swipe-indicator.is-active{
  background-color: #5DC7D3;
  height: 0.4rem;
}
.c-carousel >>> .mint-swipe-indicator{
  height: 0.2rem;
  background-color: #666;
  width: 1rem;
  border-radius: 25%
}
</style>

