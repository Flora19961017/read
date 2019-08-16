<template>
  <div class="choice-page">
    <mt-header fixed title="精选">
    </mt-header>
    <div class="main-part">
      <div class="nav-bar">
        <mt-navbar v-model="active">
          <mt-tab-item id="boy">男生</mt-tab-item>
          <mt-tab-item id="girl">女生</mt-tab-item>
        </mt-navbar>
      </div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="boy">
          <!-- 轮播图 -->
          <my-carousel :list="list.slice(0,9)"/>
          <!-- 第二部分 -->
          <h3>特异功能
            <span class="more" @click="goMore">更多&nbsp;<i>&gt;</i></span>
          </h3>
          <part-two :list="list.slice(0,6)"/>
          <!-- 轮播图 -->
          <my-carousel :list="list.slice(9,18)"/>
          <!-- 第四部分 -->
          <h3>废柴逆袭
            <span class="more">更多&nbsp;<i>&gt;</i></span>
          </h3>
          <!-- <part-four/> -->
          <div class="pf-page">
            <book-comm :list="list.slice(1,2)"/>
            <two-rows :list="list.slice(6,9)"/>
          </div>
          <!-- 轮播图 -->
          <my-carousel :list="list.slice(9,18)"/>
          <!-- 第六部分 -->
          <h3>夜场欢场
            <span class="more">更多&nbsp;<i>&gt;</i></span>
          </h3>
          <div class="part-six">
            <book-comm :list="list.slice(0,10)"/>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="girl">
          <!-- 轮播图 -->
          <my-carousel :list="list.slice(3,12)"/>
          <!-- 第二部分 -->
          <h3>报复渣男
            <span class="more">更多&nbsp;<i>&gt;</i></span>
          </h3>
          <part-two :list="list.slice(6,12)"/>
          <!-- 轮播图 -->
          <my-carousel :list="list.slice(20,29)"/>
          <!-- 第四部分 -->
          <h3>虐恋情深
            <span class="more">更多&nbsp;<i>&gt;</i></span>
          </h3>
          <!-- <part-four/> -->
          <div class="pf-page">
            <book-comm :list="list.slice(1,2)"/>
            <two-rows :list="list.slice(6,9)"/>
          </div>
          <!-- 轮播图 -->
          <my-carousel :list="list.slice(0,9)"/>
          <!-- 第六部分 -->
          <h3>鬼夫来袭
            <span class="more">更多&nbsp;<i>&gt;</i></span>
          </h3>
          <div class="part-six">
            <book-comm :list="list.slice(0,12)"/>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- <myfooter></myfooter> -->
  </div>
</template>
<script>
// 注册底部导航栏
// import Footer from "../components/Footer"
import Carousel from "../components/choice/Carousel"
import TwoRows from '../components/choice/TwoRows'
import PartTwo from '../components/choice/PartTwo'
import PartFour from '../components/choice/ParFour'
import BookComm from '../components/choice/BookComm'
export default {
  data(){
    return{
      active:"boy",
      list:[],
    }
  },
  components:{
    // "myfooter":Footer,
    "my-carousel":Carousel,
    "two-rows":TwoRows,
    "part-two":PartTwo,
    "part-four":PartFour,
    "book-comm":BookComm
  },
  created(){
    this.loadDate();
  },
  methods:{
    goMore(){
      this.$router.push('/More');
    },
     // 页面加载完成时获取数据
      loadDate(){
        var url="index";
        this.axios.get(url).then(res=>{
          this.list=res.data.data;
        });
      },
  }
}
</script>
<style scoped>
html{
  font-size: 15px;
}
h3{margin: 0;padding: 0}
.choice-page{
  background: #F6F6F6
}
.choice-page .mint-header{
  background-color: #fff;
  color: #000; 
  border-bottom: 1px solid #ddd;
  z-index: 9999;
}
.choice-page .main-part{
  margin-top: 2rem;
}
/* nav */
.choice-page .nav-bar{
  background-color: #F9F9F9;
  padding-left: 1rem;
  padding-bottom: 0.2rem;
}
.choice-page .mint-navbar{
  width: 6rem;
  background-color: #F9F9F9;
}
.choice-page .mint-navbar .mint-tab-item.is-selected{
    border-color: #5DC7D3;
    color:#5DC7D3;
}

/* 第二部分 */
.choice-page h3{
  color: #000;
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  padding: 1rem 1rem 0 1rem;
  background-color: #fff;
  margin-top: 0.5rem;
}
.choice-page h3 .more{
  color: #9a9a9a;
  font-size: 1rem;
}
.choice-page h3 .more>i{
  color: #ccc;
}
.choice-page .pf-page{
  margin-bottom: 0.5rem;
}
/* 第六部分 */
.choice-page .part-six{
  padding: 1rem;
  background: #fff;
}
.choice-page .book-comm+.book-comm{
  margin-top: 1rem;
}
.pf-page{
  padding: 1rem;
  background: #fff;
}
</style>

