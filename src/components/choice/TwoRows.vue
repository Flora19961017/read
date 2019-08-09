<template>
  <div class="tr-other">
    <div class="o-item">
      <img src="../../../public/imgs/choice/t5_295037.jpg" alt="">
      <p class="o-title">最强兵王</p>
    </div>
    <div class="o-item">
      <img src="../../../public/imgs/choice/t5_421661.jpg" alt="">
      <p class="o-title">武道霸主</p>
    </div>
    <div class="o-item">
      <img src="../../../public/imgs/choice/t5_11315975.jpg" alt="">
      <p class="o-title">邪神旌旗</p>
    </div>
  </div>
</template>
<style scoped>
.tr-other{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
}
.tr-other .o-item{
  width: 27%;
}
.tr-other .o-item>img{
  width: 100%;
  border-radius: 0.2rem;
}
.tr-other .o-item .o-title{
  color: #000;
  font-size: 0.9rem;
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  width: 6.6rem;/*需要配合宽度来使用*/
}
</style>

