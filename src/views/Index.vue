<template>
  <div>
    <div class="title" fixed>
      <input type="text" name="" id="" class="search">
      <img src="../assets/index_search.jpg" alt="" class="imgstyle">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">男频</mt-tab-item>
        <mt-tab-item id="3">女频</mt-tab-item>
        <mt-tab-item id="4">免费</mt-tab-item>
      </mt-navbar>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:"",
    }
  },
}
</script>
<style scoped>
/* 顶部导航 */
  html{
    font-size: 10px;
  }
  .title{
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 7px;
  }
  .search{
    background-color:#f2f2f2;
    border-radius: 5rem;
    margin: 0 auto;
    width:100%;
    height: 1.5rem;
    outline: none;
    padding:0 6px;
    box-sizing: border-box;
    border: none;
  }
  .imgstyle{
    height: 0.95rem;
    position: absolute;
    top: 2.5%;
    left: 5%;
  }
  .mint-navbar .mint-tab-item{
    padding: 12px 0 5px;
    margin-right:20px; 
  }
  /* 选中样式 */
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #5DC7D3;
    color: #5DC7D3;
    /* margin-bottom: 0px; */
}
</style>
