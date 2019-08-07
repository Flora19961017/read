<template>
  <div class="wc-page">
    <mt-header fixed title="精选">
      <mt-button icon="back" slot="left" ></mt-button>
      <mt-button class="close" slot="left">x</mt-button>
      <mt-button slot="right">发表</mt-button>
    </mt-header>
    <div class="wc-main-part">
      <div class="wc-star">
        <img src="../../../public\imgs\choice\comment.png" alt=""><br/>
        (必填)
      </div>
      <div>
        <textarea class="form-control" placeholder="速速发表您的看法吧" ></textarea>
      </div>
      <div class="wc-book">
        <div>
          <img src="../../../public\imgs\choice\t5_295037.jpg" alt="">
        </div>
        <div class="b-info">
          <p>最强兵王</p>
          <span>丛林狼</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wc-page{
  padding: 1rem;
}
.wc-page .mint-header{
  background-color: #fff;
  color: #000; 
  border-bottom: 1px solid #ddd;
  z-index: 9999;
}
.wc-page .close{
  font-size: 1.4rem;
  padding-left: 1rem;
}
.wc-page .wc-main-part{
  margin-top: 2.5rem;
}
.wc-page .wc-star{
  text-align: center;
}
.wc-page .form-control{
  width: 98%;
  height: 10rem;
  border-color: #eee;
  outline: none;
}
.wc-page .wc-book{
  display: flex;
  border: 1px solid #eee;
  padding: 0.5rem;
  margin-top: 0.8rem;
}
/* 图片 */
.wc-page .wc-book>div:first-child{
  width: 12%
}
.wc-page .wc-book>div>img{
  width: 100%
}
.wc-page .b-info{
  padding-left: 1rem;
  padding-top:0.8rem;
  padding-bottom: 0.8rem; 
  display: flex;
  justify-content: space-between;
  flex-direction: column
}
.wc-page .b-info>p{
  color: #000
}
.wc-page .b-info>span{
  color: #999;
  font-size: 0.8rem
}
</style>

