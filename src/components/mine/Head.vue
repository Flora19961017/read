<template>
  <div>
    <div class="head">
      <span class="bg-pic" @click="backMine"></span>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    backMine(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
  .head{
    height:35px;
    position: relative;
  }
  .bg-pic{
    display: inline-block;
    width:24px;
    height:24px;
    background:url(../../../public/imgs/mine/arr-left.png) no-repeat;
    background-size:100%;
    position: absolute;
    top:5.5px;
    left:5px;  
    opacity:0.7;
    }
</style>
