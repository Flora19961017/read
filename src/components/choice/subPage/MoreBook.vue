<template>
  <div class="mb-page">
    <div class="big-item" v-for="(item,i) of list" :key="i" @click="goDetail(item)">
      <img :src="`http://127.0.0.1:5050/imgs/${item.pic}`" alt="">
      <div class="r-detail">
        <p class="d-title">{{item.title}}</p>
        <p class="d-author">{{item.author}}</p>
        <p class="d-detail">{{item.intr}}</p>
        <div class="f-btn">
          <span class="isEnd">已完结</span>
          <span class="f-flag">武神</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
.mb-page{
  padding: 1rem 0;
  border-bottom: 1px solid #f6f6f6;
}
.mb-page .big-item{
  display: flex;
  width: 100%;
  padding-bottom: 15px;
}
.mb-page .big-item>img{
  width: 27%;
  height: 27%;
  border-radius: 0.2rem; 
}
.mb-page .d-title{
  padding-bottom: 0.5rem;
  color: #000;
  font-size: 1rem;
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  width: 6.6rem;/*需要配合宽度来使用*/
}
.mb-page .d-detail{
  font-size: 0.9rem;
  color: #9a9a9a;
}
/* 主推书本简介 */
.mb-page .d-detail{
  overflow: hidden;
  text-overflow: ellipsis;/*省略号*/
  display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 2;/*行数*/
  -webkit-box-orient: vertical;
}
/* 主推图书明细 */
.mb-page .r-detail{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.9rem;
}
.mb-page .d-title{
  font-size: 1.1rem;
  color: #000;
}
.mb-page .d-author{
  font-size: 0.8rem;
  color: #c1c1c1;
}
/* 主推标签内容 */
.mb-page .f-btn .isEnd,.mb-page .f-btn .f-flag,.mb-page .f-btn .NotEnd{
  display: inline-block;
  padding: 0.1rem 0.4rem;
  border: 1px solid #9a9a9a;
  border-radius: 40%;
  color: #9a9a9a;
  font-size: 0.5rem;
  margin-right: 0.2rem;
}
/* 主推标签——已完结 */
.mb-page .f-btn .isEnd{
  border-color: aqua;
  color: aqua;
}
/* 主推标签——连载中 */
.mb-page .f-btn .NotEnd{
  border-color: #e55555;
  color: #e55555;
}
</style>

