<template>
    <div class="head">
        <div class="title-border">
            <div class="title" fixed>
                <input type="text" name="" id="" class="search" @click="goSearch">
                <img src="../assets/index_search.jpg" alt="" class="imgstyle">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="recommend">推荐</mt-tab-item>
                    <mt-tab-item id="boy">男频</mt-tab-item>
                    <mt-tab-item id="girl">女频</mt-tab-item>
                    <mt-tab-item id="free">免费</mt-tab-item>
                </mt-navbar>
            </div>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="recomend">
                    <!-- 跳转到的页面 -->
                </mt-tab-container-item>
                <mt-tab-container-item id="boy">
                    <!-- 跳转到的页面 -->
                </mt-tab-container-item>
                <mt-tab-container-item id="girl">
                    <!-- 跳转到的页面 -->
                </mt-tab-container-item>
                <mt-tab-container-item id="free">
                    <!-- 跳转到的页面 -->
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:"recommend",
        }
    },
    methods:{
        goSearch(){
            this.$router.push("/SearchHot")
        }
    }
}
</script>
<style scoped>
    .head{
        height: 75px;
    }
    .head .title-border{
    border-bottom: 1px solid #F1F1F1;
    position: fixed;
    width: 100%;
    z-index: 9999;
  }
  .head .title{
    background: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:10px 16px;
  }
  .head .search{
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
 .head .imgstyle{
    height: 0.95rem;
    position: absolute;
    top: 20.5%;
    left: 7%;
  }
  .head .mint-navbar .mint-tab-item{
    padding: 12px 0 5px;
    margin-right:20px; 
  }
  /* 导航标签选中样式 */
  .head .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #5DC7D3;
    color: #5DC7D3;
    /* margin-bottom: 0px; */
}
</style>
