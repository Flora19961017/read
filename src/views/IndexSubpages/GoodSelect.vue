<template>
  <div class="m-page">
    <mt-header fixed title="精品小说">
      <mt-button icon="back" slot="left" @click="goCity"></mt-button>
    </mt-header>
    <div class="m-main-part">
      <more-book :list="list"/>
    </div>
  </div>
</template>
<script>
import MoreBook from '../../components/choice/subPage/MoreBook'
export default {
  data(){
    return{
        list:[],
    }
  },
  created(){
      this.getRouterData();
  },
  components:{
    "more-book":MoreBook,
  },
  methods:{
    goCity(){//点击小于符号回到书城页
      this.$router.push("/index");
    },
    // 获取index.vue页面传来的参数
    getRouterData(){
      this.list=this.$route.query.list;
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
