<template>
  <div class="book-detail">
    <!-- 头部button -->
    <div class="header-box">
      <mt-header v-if="myshow">
        <mt-button icon="back" slot="left"></mt-button>
        <mt-button slot="right">分享</mt-button>
        <mt-button slot="right">评论</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <!-- 加入书架按钮 -->
    <mt-badge size="large" color="#59dae3" v-if="myshow">加入书架&nbsp;&nbsp;&nbsp;</mt-badge>
    <!-- 书本内容展示区 -->
    <div class="cantainer">
    <!-- 按钮 -->
    <div class="left" @click="leftPageNum"></div>
    <div class="center" @click="showTD"></div>
    <div class="right" @click="rightPageNum"></div>
      <div class="content">
        <div class="small-title" v-text="booklist[0].blist[crtList].cname"></div>
        <h3 class="title" v-text="booklist[0].blist[crtList].cname"></h3>
        <p class="real-con" v-for="(item,i) of crtContent" :key="i">
         {{item}}
        </p>
      </div>
    </div>
    <!-- 评论按钮 -->
    <div class="addCom" v-if="myshow">评论</div>
    <!-- 底部按钮 -->
    <div class="btm-nav" v-if="myshow">
      <mt-range :value.sync="rangeValue">
        <div slot="start">0</div>
        <div slot="end">100</div>
      </mt-range>
      <div class="btm-btm">
        <div class="book-list" @click="goList">
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
import { constants } from 'crypto';
export default {
  data() {
    return {
      myshow:false,//控制元素的显示隐藏
      booklist: [],//图书章节
      bookdetail: [],//图书内容
      rangeValue:20,//亮度的默认值
      fontCont:23,// 一行显示字数  
      bookCont:[],// 一章的数组
      pageNum:17,// 每页显示行数     
      crtPage:0,// 当前所在页数
      crtContent:[],// 当前页内容
      crtList:0,// 当前章节
      times:0//点击次数
    };
  },
  created() {
    this.booklist = bookc;
    this.bookdetail = bookd;
    this.$route.query.crenList!==undefined&&this.tolist();//从目录跳转回来，所获参数不为undefined才执行，获取所点章节,一定要在获取页面数据前边执行，否则
    this.getNum(this.crtList,"go");
    this.init();
    // console.log(this.booklist)
  },
  methods:{
    goList(){
      // 将当前所在章节传递给目录页面
      this.$router.push({path:'/Booklist',query:{dangqian:this.crtList}})
    },
    tolist(){
    // 功能：接受目录页面传递的当前章
     // if(this.$route.query.crenList){//存在参数才让他执行
        this.crtList=this.$route.query.crenList
        // this.getNum(crtList,go)
     // }
    },
    showTD(){
      // 功能：控制页面按钮出现隐藏
      this.times++;
      this.times%2==0?this.myshow=false:this.myshow=true;
      console.log(this.myshow)
    },
    getNum(a,flag){//功能：提供一章内容
      //获取段落数组
      var dataArr=this.bookdetail[a].content.split("\n");
      // console.log(data);
      // 获取章节数组
      this.bookCont=[]
      //遍历段落数组
      dataArr.forEach(ele=>{
        for(var i=0;i<ele.length/this.fontCont;i++){
          // rowArr[i]=ele.slice(i*22,(i+1)*22);
          this.bookCont.push(ele.slice(i*this.fontCont,(i+1)*this.fontCont))
        }
      });
      if(flag=="go"){
        this.crtPage=-1//因为rightPageNum()执行后会给页数++，为了保持页面在第0页
      }else{
        this.crtPage=Math.ceil(this.bookCont.length/this.pageNum)//页面--。所以需要给他一个较大值
      }
      
      // console.log(this.bookCont);
    },
    init(){
      //初始页面,因为先执行了 getNum(this.crtList,go),crtPage==-1
      if(this.crtPage==-1){
        this.crtPage=0
      }
      this.crtContent=this.bookCont.slice(this.crtPage*this.pageNum,(this.crtPage+1)*this.pageNum);
    },
    rightPageNum(){//向后移动
      if(this.crtPage>=Math.floor(this.bookCont.length/this.pageNum)){//当我在最后一页时
        if(this.crtList==this.bookdetail.length-1){//若已经是最后一章，退出
          this.$toast("已是最后一页")
          return;
        }else{//否则,去到下一章
          this.crtList++;//当前章节
          //重新渲染，获取下一章的数据
          this.getNum(this.crtList,'go');
        }
      }
      // 去往下一页面
      this.crtPage++;
      // 获取当前文本内容
      this.crtContent=this.bookCont.slice(this.crtPage*this.pageNum,(this.crtPage+1)*this.pageNum);
    },
    leftPageNum(){//向前移动
      if(this.crtPage==0){
        if(this.crtList==0){
          this.$toast("已是第一页")
          return;
        }else{
          this.crtList--;
          this.getNum(this.crtList,"back");
        }
      }// 去往前一页面      
      this.crtPage--;
      this.crtContent=this.bookCont.slice(this.crtPage*this.pageNum,(this.crtPage+1)*this.pageNum);      
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
    /* display: none; */
  }
  .book-detail .mint-header .mint-button+.mint-button{
    padding-left: 0.5rem
  }
  .book-detail .mint-badge.is-primary{
    position: fixed;
    top: 7rem;
    right: -0.8rem;
  }
  /* 评论按钮 */
  .book-detail .addCom{
    position: absolute;
    right: 0;
    top: 30rem;
    background-color: rgb(89, 218, 227);
    color: #fff;
    padding: 0.6rem 0.3rem;
    border-radius: 50%;
  }
  /* 底部按钮 */
  .book-detail .btm-nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    background-color: #fff;
    /* display: none; */
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
    width: 43%;
    /* background-color: #0f0; */
    height: 39rem;
    position: absolute;
  }
  .book-detail .right{
    width: 43%;
    /* background-color: #ff0; */
    height: 39rem;
    position: absolute;
    right: 0;
  }
  .book-detail .center{
    height: 39rem;
    position: absolute;
    left: 44%;
    width:12%;
  }
</style>