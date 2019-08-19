<template>
  <div class="c-carousel">
    <mt-swipe :auto="0">
      <h3 class="c-title">一周热门</h3>
      <mt-swipe-item>
        <div class="img-box">
          <div class="img-item" v-for="(item,i) of list.slice(0,3)" :key="i" @click="goDetail(item)">
            <img :src="`http://127.0.0.1:5050/imgs/${item.pic}`" alt="">
            <p class="b-title">{{item.title}}</p>
            <p class="b-author">{{item.author}}</p>
          </div>
        </div>        
      </mt-swipe-item>

      <mt-swipe-item>
        <div class="img-box">
          <div class="img-item" v-for="(item,i) of list.slice(3,6)" :key="i" @click="goDetail(item)">
            <img :src="`http://127.0.0.1:5050/imgs/${item.pic}`" alt="">
            <p class="b-title">{{item.title}}</p>
            <p class="b-author">{{item.title}}</p>
          </div>
        </div>  
      </mt-swipe-item>

      <mt-swipe-item>
        <div class="img-box">
         <div class="img-item" v-for="(item,i) of list.slice(6,9)" :key="i" @click="goDetail(item)">
            <img :src="`http://127.0.0.1:5050/imgs/${item.pic}`" alt="">
            <p class="b-title">{{item.title}}</p>
            <p class="b-author">{{item.author}}</p>
          </div>
        </div>  
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        
        }
    },
    props:{
      list:{type:Array},
    },
    methods: {
      goDetail(item){
        this.$router.push(
          {
            path:"/BookDetail",
            query:{book:item}
          }
        );
      // console.log(item)
      }
  },
  }
</script>
<style scoped>
p,h3{
  padding: 0;
  margin: 0;
}
.c-carousel{
  padding: 1rem;
  background-color: #fff;
}
.c-carousel .c-title{
  font-weight: normal;
  color: #000;
  margin-bottom: 1rem;
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  width: 6.6rem;/*需要配合宽度来使用*/
}
/* 设置轮播图高度 */
.c-carousel .mint-swipe{
  height: 15.5rem;
}
.c-carousel >>> .mint-swipe-items-wrap{
  z-index: 1;
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
  font-size: 0.8rem;
  color: #9a9a9a;
}
/* 轮播指示图 */
.c-carousel >>> .mint-swipe-indicators{
    width: 100%;
    top: 0.2rem;
    text-align: right;
}
.c-carousel >>> .mint-swipe-indicator.is-active{
  background-color: #5DC7D3;
  height: 0.4rem;
}
.c-carousel >>> .mint-swipe-indicator{
  height: 0.2rem;
  background-color: #aaa;
  width: 1rem;
  border-radius: 25%;
  opacity: inherit;
}
</style>

