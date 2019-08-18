<template>
  <div class="book-detail">
    <!-- 头部button -->
    <div class="header-box">
      <mt-header>
        <mt-button icon="back" slot="left"></mt-button>
        <mt-button slot="right">分享</mt-button>
        <mt-button slot="right">评论</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <!-- 加入书架按钮 -->
    <mt-badge size="large" color="#59dae3">加入书架&nbsp;&nbsp;&nbsp;</mt-badge>
    <!-- 书本内容展示区 -->
    <div class="cantainer">
          <!-- 按钮 -->
    <div class="left" @click="leftPageNum"></div>
    <div class="right" @click="rightPageNum"></div>
      <div class="content">
        <div class="small-title" v-text="booklist[0].blist[crtList].cname"></div>
        <h3 class="title" v-text="booklist[0].blist[crtList].cname"></h3>
        <p class="real-con" v-for="(item,i) of crtContent" :key="i">
         {{item}}
        </p>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="btm-nav">
      <mt-range v-model="rangeValue">
        <div slot="start">0</div>
        <div class="all" slot="end">100</div>
      </mt-range>
      <div class="btm-btm">
        <div class="book-list">
          <span></span>
          <span>目录</span>
        </div>
        <div class="book-list">
          <span></span>
          <span>夜间</span>
        </div>
        <div class="book-list">
          <span></span>
          <span>自动翻页</span>
        </div>
        <div class="book-list">
          <span></span>
          <span>设置</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bookc from "../../assets/js/bookC";
import bookd from "../../assets/js/bookD";
export default {
  data() {
    return {
      booklist: [],
      bookdetail: [],
      rangeValue:0,
      // 一行显示字数
      fontCont:23,  
      bookCont:[],
      // 每页显示行数
      pageNum:17,
      // 当前所在页数
      crtPage:0,
      // 当前页内容
      crtContent:[],
      // 当前章节
      crtList:0
    };
  },
  created() {
    this.booklist = bookc;
    this.bookdetail = bookd;
    this.getNum(this.crtList);
    this.rightPageNum();
    console.log(this.booklist)
  },
  methods:{
    getNum(a,flag){
      //获取段落数组
      var dataArr=this.bookdetail[a].content.split("\n");
      // console.log(data);
      this.bookCont=[]
      //遍历段落数组
      dataArr.forEach(ele=>{
        for(var i=0;i<ele.length/this.fontCont;i++){
          // rowArr[i]=ele.slice(i*22,(i+1)*22);
          this.bookCont.push(ele.slice(i*this.fontCont,(i+1)*this.fontCont))
        }
      });
      if(flag=="go"){
        this.crtPage=0
      }else{
        this.crtPage=Math.ceil(this.bookCont.length/this.pageNum)
      }
      
      // console.log(this.bookCont);
    },
    rightPageNum(){
      if(!(this.crtPage*this.pageNum<this.bookCont.length)){
        // console.log("不能向后");
        this.crtList++;
        this.getNum(this.crtList,'go');
      }
        this.crtContent=this.bookCont.slice(this.crtPage*this.pageNum,(this.crtPage+1)*this.pageNum);
        this.crtPage++;
    },
    leftPageNum(){
      // 如果是第一张第一页不能走
      if(this.crtList==0 && this.crtPage==0){
        console.log("不能回去");
      }else if(this.crtPage==0){//如果是其他的第一页，回到上一张最后一页
        this.crtList--;
        this.getNum(this.crtList,"back");
      }        
      this.crtPage--;
      this.crtContent=this.bookCont.slice(this.crtPage*this.pageNum,(this.crtPage+1)*this.pageNum);
      console.log(this.crtContent)
    }
  }
};
</script>
<style scoped>
h3{padding: 0;margin: 0}
  .book-detail{
    position: relative;
  }
  /* 加入书架按钮 */
  .book-detail .mint-badge.is-size-large{
    font-size: 1rem;
  }
  /* 头部导航 */
  .book-detail .header-box{
    height: 2.8rem;
  }
  .book-detail .mint-header{
    background-color: #fff;
    color: #333;
    border-bottom: 1px solid #ddd;
    padding: 0.8rem 1rem;
    display: none
  }
  .book-detail .mint-header .mint-button+.mint-button{
    padding-left: 0.5rem
  }
  .book-detail .mint-badge.is-primary{
    position: fixed;
    top: 7rem;
    right: -0.8rem;
  }
  /* 底部按钮 */
  .book-detail .btm-nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    background-color: #fff;
    display: none;
  }
  .book-detail .btm-btm{
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
  /* 滑块 */
  .book-detail .mt-range{
    padding: 0.5rem 1rem
  }
  .book-detail >>> .mt-range-thumb{
    width: 1rem;
    height: 1rem;
    top: 0.5rem;
  }
  .book-detail .btm-btm{
    padding: 0.5rem 1rem;
  }
  /* 书的内容 */
  .book-detail .cantainer{
    padding: 0.5rem 1rem;
    margin-top: -2.5rem;
  }
  .book-detail .content{
    height: 37rem;
    /* overflow: hidden; */
  }
  .book-detail .small-title{
    font-size: 0.8rem;
    color:#666;
  }
  .book-detail .title{
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .book-detail .real-con{
    line-height: 1.8rem;
    font-size: 1rem;
  }
  .book-detail .left{
    width: 40%;
    /* background-color: #0f0; */
    height: 39rem;
    position: absolute;
  }
  .book-detail .right{
    width: 40%;
    /* background-color: #ff0; */
    height: 39rem;
    position: absolute;
    right: 0;
  }
</style>