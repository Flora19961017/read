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
          男生
        </mt-tab-container-item>
        <mt-tab-container-item id="girl">
          女生
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:"boy"
    }
  }
}
</script>
<style scoped>
html{
  font-size: 15px;
}
.choice-page .title{
  border-bottom:1px solid #ddd;
  position: fixed;
  top:0;
  height: 4rem;
  width: 100%;
  line-height: 4rem;
  text-align: center;
}
.choice-page .main-part{
  margin-top: 4rem;
}
.choice-page .nav-bar{
  background-color: #F9F9F9;
}
.choice-page .mint-navbar{
  width: 6rem;
  background-color: #F9F9F9;
}
.choice-page .mint-navbar .mint-tab-item.is-selected{
    border-color: #5DC7D3;
    color:#5DC7D3;
}
</style>

