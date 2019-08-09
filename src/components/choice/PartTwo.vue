<template>
  <div class="pw-page">
    <div class="pw-b-list">
      <div class="b-item">
        <img src="../../../public/imgs/choice/t5_295037.jpg" alt="">
        <p class="b-title">最强兵王</p>
        <p class="b-author">丛林狼</p>
      </div>
      <div class="b-item">
        <img src="../../../public/imgs/choice/t5_421661.jpg" alt="">
        <p class="b-title">武道霸主</p>
        <p class="b-author">署狂人</p>
      </div>
      <div class="b-item">
        <img src="../../../public/imgs/choice/t5_11315975.jpg" alt="">
        <p class="b-title">邪神旌旗</p>
        <p class="b-author">楚白</p>
      </div>
      <div class="b-item">
        <img src="../../../public/imgs/choice/t5_295037.jpg" alt="">
        <p class="b-title">最强兵王</p>
        <p class="b-author">丛林狼</p>
      </div>
      <div class="b-item">
        <img src="../../../public/imgs/choice/t5_421661.jpg" alt="">
        <p class="b-title">武道霸主</p>
        <p class="b-author">署狂人</p>
      </div>
      <div class="b-item">
        <img src="../../../public/imgs/choice/t5_11315975.jpg" alt="">
        <p class="b-title">邪神旌旗</p>
        <p class="b-author">楚白</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
p{
  padding: 0;
  margin: 0;
}
.pw-page{
  padding: 1rem;
  background-color: #fff;
}
.pw-page .pw-b-list{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* 每一小块的设置 */
.pw-page .b-item{
  width: 27%;
  margin-bottom: 0.9rem;
}
.pw-page .b-item>img{
  width: 100%;
  border-radius: 0.2rem; 
}
.pw-page .b-title{
  margin-top: 0.4rem;
  color: #000;
}
.pw-page .b-author{
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: #9a9a9a;
}
</style>


