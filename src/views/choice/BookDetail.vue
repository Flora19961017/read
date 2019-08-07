<template>
  <div class="book-detl">
    <mt-header fixed title="最强兵王">
      <mt-button icon="back" slot="left" ></mt-button>
      <mt-button icon="more" slot="right" ></mt-button>
    </mt-header>
    <div class="summarize">
      <div class="s-img">
        <img src="../../../public/imgs/choice/t5_295037.jpg" alt="">
      </div>
      <div class="s-right">
        <p class="s-title">最强兵王</p>
        <p><span class="s-author">丛林王</span>&nbsp;|&nbsp;<span class="s-end">完结</span></p>
        <div class="s-hot">
          <div>
            <p>369<span>万字</span></p>
            <p>字数</p>
          </div>
          <div>
            <p>213<span>万</span></p>
            <p>点击</p>
          </div>
          <div>
            <p>1<span>万</span></p>
            <p>收藏</p>
          </div>
        </div>
      </div>
    </div>
    <div class="b-details">
      <p class="bd-detl">【特种兵第一神书】最强兵王，虎视群雄，为国而战，为民出鞘，只有站死，绝不跪生，无怨无悔！<br/>这是一本男人的书！<br/>这是一部热血的故事！</p>
      <div class="bd-flag">
        <div class="f-btns">
          <span>奇遇</span>
          <span>武装</span>
          <span>扮猪吃老虎</span>
        </div>
        <span></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.book-detl .mint-header{
  background-color: #fff;
  color: #000; 
  border-bottom: 1px solid #ddd;
  z-index: 9999;
}
/* 概述 */
.book-detl .summarize{
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  background-color: rgba(0,0,0,.5);
  color: #fff;
}
.book-detl .s-img{
  width: 27%;
  height: 10rem;
  position: relative;
}
.book-detl .s-img>img{
  width: 100%;
  position: absolute;
  top: 1.5rem;
}
.book-detl .s-right{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1.5rem;
  padding-left: 1rem;
}
.book-detl .s-title{
  font-size: 1.2rem;
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  width: 10rem;/*需要配合宽度来使用*/
}
.book-detl .s-hot{
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  text-align: center;
}
.book-detl .s-hot>div:not(:first-child){
  border-left: 1px solid #eee;
  margin-left: 1rem;
  padding-left: 1rem;
}
/* 书本详细介绍 */
.book-detl .b-details{
  padding-top: 2rem;
}
.book-detl .bd-detl{
  overflow: hidden;
  text-overflow: ellipsis;/*省略号*/
  display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 3;/*行数*/
  -webkit-box-orient: vertical;
}
.book-detl .f-btns>span{
  display: inline-block;
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  width: 3.5rem;/*需要配合宽度来使用*/
  text-align: center;
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 0.2rem 0;
  margin-right: 0.5rem;
  border-radius: 35% 
}
.book-detl .bd-flag>span{
  display: block;
  border: 0.8rem;
  width: 0.8rem;
}
</style>

