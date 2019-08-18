<template>
  <div class="m-page">
    <mt-header fixed title="特异功能">
      <mt-button icon="back" slot="left" @click="goChoice"></mt-button>
    </mt-header>
    <div class="m-main-part">
      <more-book :list="list.slice(0,10)"/>
      
    </div>
  </div>
</template>
<script>
import MoreBook from '../../components/choice/subPage/MoreBook'
export default {
  data(){
    return{
      list:[],
      active:""
    }
  },
  components:{
    "more-book":MoreBook,
  },
  created(){
    this.getData();
  },
  methods:{
    goChoice(){
      //window.history.go(-1);
       this.$router.push("/MyChoice");
      // this.$emit("upt",this.active);
    },
    getData(){
      this.list=this.$route.query.list;
      this.active=this.$route.query.active;
    },
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
