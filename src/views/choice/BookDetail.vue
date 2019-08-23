<template>
  <div class="book-detl">
    <mt-header fixed :title="`${list.title}`">
      <mt-button icon="back" slot="left" @click="goBack"></mt-button>
      <mt-button icon="more" slot="right" ></mt-button>
    </mt-header>
    <!-- 最上方描述 -->
    <div class="summarize">
      <div class="s-img">
        <img :src="`http://127.0.0.1:5050/imgs/${list.pic}`" alt="">
      </div>
      <div class="s-right">
        <p class="s-title">{{list.title}}</p>
        <p><span class="s-author">{{list.author}}</span>&nbsp;|&nbsp;<span class="s-end">完结</span></p>
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
    <!-- 简介 -->
    <div class="b-details">
      <p class="bd-detl">{{list.intr}}</p>
      <div class="bd-flag">
        <div class="f-btns">
          <span>奇遇</span>
          <span>武装</span>
          <span>扮猪吃老虎</span>
        </div>
        <span></span>
      </div>
    </div>
    <!-- 简介下方的目录、会员 -->
    <div class="to-other">
      <div class="t-directory">
        <span class="t-title">目录</span>
        <span class="t-contents">共500章</span>
        <span class="t-arrow">&gt;</span>
      </div>
      <div class="t-vip">
        <div class="t-title">
          <img src="../../../public\imgs\choice\vip.jpg" alt="">
          开通vip，畅通各种包月专区小说
        </div>
        <span class="t-arrow">&gt;</span>
      </div>
    </div>
    <!-- 书评 -->
    <comment/>
    <!-- 类别 -->
    <h3>特异功能
      <span class="more">更多&nbsp;<i>&gt;</i></span>
    </h3>
    <two-rows/>
    <div class="btn-btm">
      <span class="addBook">
        <img src="../../assets/imgs/detail/addbook.png" alt="">
      </span>
      <span class="readBook">
        <img src="../../assets/imgs/detail/readbook.png" alt="">
      </span>
      <span class="download">
        <img src="../../assets/imgs/detail/download.png" alt="">
      </span>
    </div>
  </div>
</template>
<script>
import Comm from '../../components/choice/subPage/Comment'
import TwoRows from '../../components/choice/TwoRows'
export default {
  data(){
    return{
      list:[],
      bid:"",
      title:""
    }
  },
  created() {
    this.details();
  },
  components:{
    "comment":Comm,
    "two-rows":TwoRows
  },
  methods:{
    // 返回上一级页面
    goBack(){
      window.history.go(-1);
    },
    details(){
      // this.bid=this.$route.query.bookid;
      // console.log(this.bid);
      // var url="bookdetail"
      // var obj={bookid:this.bid}
      // this.axios.get(url,{params:{obj}}).then(res=>{
      //   this.list=res.data.data;
      // })
      this.list=this.$route.query.book;
      // console.log(this.list)
    }
  },
}
</script>
<style scoped>
.book-detl{
  background-color: #f5f5f5;
}
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
  padding: 0 1rem;
  box-sizing: border-box;
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
  padding: 2rem 1rem 0 1rem;
  background-color: #fff;
}
.book-detl .bd-detl{
  overflow: hidden;
  text-overflow: ellipsis;/*省略号*/
  display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 3;/*行数*/
  -webkit-box-orient: vertical;
}
/* 标签 */
.book-detl .bd-flag{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.7rem;
}
.book-detl .f-btns>span{
  display: inline-block;
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
  width: 3.5rem;/*需要配合宽度来使用*/
  text-align: center;
  border: 1px solid #f5f5f5;
  background-color: #f6f6f6;
  padding: 0.2rem 0;
  margin-right: 0.5rem;
  border-radius: 35% ;
  color: #999;
  font-size: 0.9rem;
}
/* span小三角 */
.book-detl .bd-flag>span{
  border-top: 0.3rem solid #666;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-bottom: 0.3rem solid transparent;
}
/* 简介下方的目录、会员 */
.book-detl .to-other{
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  background-color: #fff;
}
.book-detl .to-other>div{
  border-top: 1px solid #ddd;
  padding: 0.2rem 0;
}
.book-detl .t-directory{
  display: flex;
  justify-content: space-between;
  padding-top: 0.3rem;
}
.book-detl .to-other .t-title{
  color: #000;
}
.book-detl .t-contents{
  width: 80%;
  padding-left: 0.7rem;
  border-left: 1px solid #ddd;
  color: #999;
  font-size: 0.8rem;
}
.book-detl .to-other .t-arrow{
  color: #aaa;
  font-size: 1.1rem;
}
.book-detl .to-other .t-vip{
  display: flex;
  justify-content: space-between;
}
.book-detl .t-title>img{
  width: 1rem;
}
/* 评论 */
.book-detl .com-part{
  margin-top: 0.3rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
}
/* 类别 */
.book-detl h3{
  color: #000;
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  padding: 1rem 1rem 0 1rem;
  background-color: #fff;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.book-detl h3 .more{
  color: #9a9a9a;
  font-size: 1rem;
}
.book-detl h3 .more>i{
  color: #ccc;
}
.book-detl .tr-other{
  border: 0;
  margin-top: 0;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 1rem;
}
.book-detl .btn-btm{
  border-top: 1px solid #ddd;
  width: 100%;
  padding:0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  bottom: 0;
  background:#fff;
}
.book-detl .btn-btm>span{
  width: 33.33%;
  padding: .5rem 0;
}
.book-detl .readBook{
  background-color: #5dc8d4;
}
.book-detl .btn-btm img{
  width: 3.5rem;
  vertical-align: middle;
}
</style>

