<template>
  <div class="book-comm">
    <div class="big-item" v-for="(item,i) of list" :key="i" @click="goDetail(item)">
      <img :src="`http://127.0.0.1:5050/imgs/${item.pic}`" alt="">
      <div class="r-detail">
        <div class="d-comm">
          <p class="d-title">{{item.title}}</p>
          <p class="d-detail">{{item.intr}}</p>
        </div>
        <div class="d-flag">
          <div class="f-author">
            <img src="../../../public\imgs\choice\author.png" alt="">
            <span>{{item.author}}</span>
          </div>
          <div class="f-btn">
            <span class="isEnd">已完结</span>
            <span class="f-flag">武神</span>
          </div>
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
  created() {
    
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
.book-comm .big-item{
  display: flex;
  padding-bottom: 15px;
  width: 100%;
}
.book-comm .big-item>img{
  width: 27%;
  height: 27%;
  border-radius: 0.2rem; 
}
.book-comm .d-title{
  padding-bottom: 0.5rem;
  color: #000;
  font-size: 1rem;
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  width: 6.6rem;/*需要配合宽度来使用*/
}
.book-comm .d-detail,.book-comm .f-author{
  font-size: 0.9rem;
  color: #9a9a9a;
}
/* 主推书本简介 */
.book-comm .d-detail{
  overflow: hidden;
  text-overflow: ellipsis;/*省略号*/
  display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 3;/*行数*/
  -webkit-box-orient: vertical;
}
/* 主推图片 */
.book-comm .f-author>img{
  width: 1rem;
  height: 1rem;
}
/* 主推图书明细 */
.book-comm .r-detail{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.9rem;
}
/* 主推标签盒子 */
.book-comm .d-flag{
  display: flex;
  justify-content: space-between;
}
/* 主推标签内容 */
.book-comm .f-btn .isEnd,.book-comm .f-btn .f-flag,.book-comm .f-btn .NotEnd{
  display: inline-block;
  padding: 0.2rem;
  border: 1px solid #9a9a9a;
  border-radius: 35%;
  color: #9a9a9a;
  font-size: 0.5rem;
  margin-left: 0.2rem;
}
/* 主推标签——已完结 */
.book-comm .f-btn .isEnd{
  border-color: aqua;
  color: aqua;
}
/* 主推标签——连载中 */
.book-comm .f-btn .NotEnd{
  border-color: #e55555;
  color: #e55555;
}
</style>