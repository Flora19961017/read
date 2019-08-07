<template>
  <div class="choice-page">
    <div class="title">精选</div>
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
          <my-carousel/>
          <!-- 第二部分 -->
          <h3>特异功能
            <span class="more">更多&nbsp;<i>&gt;</i></span>
          </h3>
          <part-two/>
          <!-- 轮播图 -->
          <my-carousel/>
        </mt-tab-container-item>
        <mt-tab-container-item id="girl">
          <!-- 轮播图 -->
          <my-carousel/>
          <!-- 第二部分 -->
          <part-two/>
          <!-- 轮播图 -->
          <my-carousel/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import PartTwo from '../components/choice/PartTwo'
export default {
  data(){
    return{
      active:"boy"
    }
  },
  components:{
    "part-two":PartTwo
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
.choice-page .title{
  border-bottom:1px solid #ddd;
  position: fixed;
  top:0;
  height: 4rem;
  width: 100%;
  line-height: 4rem;
  text-align: center;
  z-index: 9999;
  background-color: #fff;
}
.choice-page .main-part{
  margin-top: 4rem;
}
/* nav */
.choice-page .nav-bar{
  background-color: #F9F9F9;
  padding-left: 1rem;
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
</style>

