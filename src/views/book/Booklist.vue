<template>
  <div class="list-page">
    <mt-header title="目录">
      <mt-button icon="back" slot="left" @click="goBook"></mt-button>
      <mt-button slot="right">倒序</mt-button>
    </mt-header>
    <div class="blist">
      <p class="one-list" v-for="(item,i) of mulu" :key="i" @click="goto(item)" :class="{'cur-list':item.cid-1==xzlist}">{{item.cname}}</p>
    </div>
  </div>
</template>
<script>
import bookc from '../../assets/js/bookC'
export default {
  data(){
    return{
      mulu:[],//目录
      xzlist:0,//当前选中章
    }
  },
  created(){
    this.mulu=bookc[0].blist;
    // console.log(this.mulu);
    this.getList();
  },
  methods:{
    goto(i){
      // 将点击的章节传递给看书页面
      this.$router.push({path:'/BookContent',query:{crenList:(i.cid)-1}})////目录页从1开始，crtList从0开始。需要减一 
    },
    getList(){
    // 将看书页面章节接收，以改变样式
      this.xzlist=this.$route.query.dangqian
    },
    goBook(){
      this.$router.push({path:'/BookContent',query:{crenList:this.xzlist}});
    }
  }
}
</script>
<style scoped>
  .list-page .mint-header{
    background-color: #fff;
    color: #333;
    border-bottom:1px solid #ddd;
  }
  .list-page .one-list{
    margin: .5rem 1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: .5rem;
    color: #666;
  }
  .list-page .cur-list{
    color: #0ef;
    font-weight: 600;
  }
</style>