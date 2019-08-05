<template>
  <div class="c-carousel">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <div class="img-item">
          <img src="../../../public/imgs/choice/t5_295037.jpg" alt="">
          <p class="b-title"></p>
          <p class="b-author"></p>
        </div>
        <div class="img-item">
          <img src="../../../public/imgs/choice/t5_421661.jpg" alt="">
          <p class="b-title"></p>
          <p class="b-author"></p>
        </div>
        <div class="img-item">
          <img src="../../../public/imgs/choice/t5_728710.jpg" alt="">
          <p class="b-title"></p>
          <p class="b-author"></p>
        </div>
      </mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
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
/* 设置轮播图高度 */
.c-carousel .mint-swipe{
  height: 13rem;
}
/* 为item设置弹性布局 */
.c-carousel .mint-swipe-item{
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
</style>

