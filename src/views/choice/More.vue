<template>
  <div class="m-page">
    <mt-header fixed title="特异功能">
      <mt-button icon="back" slot="left" @click="goChoice"></mt-button>
    </mt-header>
    <div class="m-main-part">
      <more-book/>
      <more-book/>
      <more-book/>
      <more-book/>
      <more-book/>
      <more-book/>
      <more-book/>
    </div>
  </div>
</template>
<script>
import MoreBook from '../../components/choice/subPage/MoreBook'
export default {
  data(){
    return{

    }
  },
  components:{
    "more-book":MoreBook,
  },
  methods:{
    goChoice(){
      this.$router.push("/MyChoice");
    }
  }
}
</script>
<style scoped>
.m-page{
  padding: 0 1rem;
}
.m-page .mint-header{
  background-color: #fff;
  color: #000; 
  border-bottom: 1px solid #ddd;
}
.m-page .m-main-part{
  margin-top: 2.5rem;
}

</style>
