<template>
  <div>
    <!-- 上半部分 -->
    <div class="priority">
      <div class="float-right">
        <i class="bg-icon bg-icon-search" @click="search"></i>
        <div class="manage" @click="admin">
          <span>...</span>
        </div>
        <div class="admin move">
          <!-- 设置三角小箭头 -->
          <span class="trangle1"></span>
          <!-- 绑定一个书架管理事件 -->
          <div class="admin-top">
            <i class="bg-icon icon-i1"></i>
            <span>书架管理</span>
          </div>
          <!-- 绑定一个云端同步事件 -->
          <div class="admin-bottom">
            <i class="bg-icon icon-i2"></i>
            <span>云端同步</span>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <!-- 弹性 列 -->
      <div class="d-flex-col">
        <i class="bg-icon-books"></i>
        <span class="d-flex-col-span">最近阅读的书放在这里</span>
      </div>
    </div>
    <!--  -->
    <div id="check">
      <div class="check-bg">
       <div class="check-bg-l">
         <span class="bg-icon"></span>
         <i>签到7日，送纪念T恤、马克杯</i>
       </div>
       <!-- 绑定签到 -->
       <span class="check-bg-r" @click="signIn">签到领书币</span>
      </div>
    </div>
    <!-- 推荐+正在阅读 书架部分 -->
    <div>
      <ul class="bookrack">
        <li class="bookrack-li" v-for="(item,i) in list" :key="i">
          <div class="bookrack-div">
            <img class="bookrack-img" :src="`http://127.0.0.1:5050/imgs/${item.cover_img}`" alt="">
            <i class="bookrack-i" v-text="item.title"></i>
          </div>
        </li>
        <!-- 添加按钮 -->
        <li class="bookrack-li" @click="addBook">
          <div class="add-div">
            <span class="add-span">+</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    data(){
      return{
        // 1.保存书架书籍图片和书名
        list:0
      }
    },
    // 1.跳转到搜索页面
    search(){
      this.$router.push("/SearchHot");
    },
    // 2.打开管理书架的面板
    admin(e){
      // 1.获取开关要控制的元素
      var div = e.currentTarget.nextElementSibling;
      // 2.如果元素有该属性 d-none
      var list = div.classList;
      var bool = list.contains("move");
      if(bool){
        // 3.移除该属性(显示)
        list.remove("move");
        
      }else{
        // 4.否则添加该属性 (隐藏)
        list.add("move");
      }
    },
    // 3.添加书籍
    addBook(){
      // 3.1跳转到书城
      this.$router.push("/Index");
    },
    // 4.签到
    signIn(){
      this.$router.push("/Welfare")
    },
    // 5.将服务器请求的数据放到list
    load(){
      // 5.1判断判断vuex中是否存放有数据
      if(this.$store.getters.books!="0"){
        this.list = this.$store.getters.books;
      }
    }
  },
  created(){
    // 1.调用加载数据函数，加载书架信息
    this.load();
  },
  mounted(){
    this.load();
    
  }

}
</script>
<style scoped>
  /* 清除浮动 */
  .clear{
    clear:both;
  }
  /* 设置上部分背景 */
  .priority{
    background:linear-gradient(#085069,#095e73);
    padding-bottom:37px;
    overflow:hidden;
  }
  .float-right{
    float:right;
    display: flex;
    position: relative;
    align-items: center;
    margin:10px 8px;
  }
  .bg-icon{
    display: inline-block;
    width:15px;
    height:15px;
  }
  /* 管理书籍 */
  .manage{
    color:#fff;
    font-size:13px;
    margin:-8px 9px 0 5px;
    vertical-align: bottom;
  }
  .manage>span{
    font-size:31px;
    line-height: 14px;
  }
  .bg-icon-search{
    width:18px;
    height:18px;
    background: url(../../../public/imgs/mine/search.png) no-repeat;
    background-size:100%;
    margin:7px 10px 0 0;
    vertical-align: top;
  }
  /* 设置小图标 */
  .bg-icon-books{
    display: inline-block;
    width: 30px;
    height:30px;
    background:url(../../../public/imgs/bookrack/books.png) no-repeat;
    background-size:100%;
    margin:5px auto 0 auto;
  }
  /* 设置弹性布局 */
  .d-flex-col{
    display:flex;
    flex-direction: column;
    
    text-align:center;
    color:#fff;
  }
  /* 设置字体 */
  .d-flex-col-span{
    font-size:12px;
    margin:11px;
    letter-spacing: 1px;
    font-weight: 100;
  }
   /* 设置管理面板  */
   .admin{
     position: absolute;
     background:#fff;
     top:2rem;
     left:-1.5rem;
     padding:0px 0px;
     border-radius: 2px;
     transition:all 180ms linear;
    
   }
   /* 设置小三角 */
   
   .trangle1{
     position:absolute;
     width:0;
     border-width:5px;
     border-style:solid;
     border-color:transparent transparent #fff transparent  ;
     top:-10px;
     left:62px;
   }
   .admin-top{
     margin-bottom: 25px;
   }
   /* 上面部分 */
   .admin-top,.admin-bottom{
     display: flex;
     align-items: center;
     font-size:12px;
     margin:12px 9px;
   }
   .admin-top{
     margin-bottom: 17px;
   }
   /* 小图标1 */
   .icon-i1{
     background:url(../../../public/imgs/bookrack/admin.png);
     background-size: 100%;
     margin:0 5px 0 0;
   }
   /* 下面部分 */
   /* 小图标2 */
   .icon-i2{
     background:url(../../../public/imgs/bookrack/sync.png);
     background-size: 100%;
     margin:0 5px 0 0;
   }
  /* 设置书架部分 */
  .bookrack{
    margin-top:15px;
    text-align: left;
  }
  .bookrack::after{
    display: block;
    content:"";
    clear:both;
  }
  /* li浮动 */
  .bookrack-li{
    float:left;
  }
  .bookrack-div{
    width:78px;
    display:flex;
    flex-direction: column;
    padding:0 17px 0 11px;
  }
  .bookrack-img{
    width:72px;
    height:92px;
    
  }
  /* 设置字体 */
  .bookrack-b{
    font-size:13px;
    font-weight:normal;
    letter-spacing: 1px;
  }
  /* 设置未读样式 */
  .bookrack-i{
    font-size:12px;
    margin:15px 0 11px 0;
    opacity: .6;
    white-space: nowrap;
  }
  /* 添加书籍 */
  .add-div{
    width:72px;
    height:92px;
    background:#dedede;
    text-align:center;
    margin:0 17px 0 11px;
  }
  .add-span{
    font-size:78px;
    line-height:92px;
    font-weight: lighter;
    color:rgba(0,0,0,.2);
  }
  /* 设置中间签到部分 */
  #check{
    margin:10px 12px;
  }
  .check-bg{
    border-radius: 18px;
    background:#f9f7f8;
    display: flex;
    justify-content: space-between;
  }
  /*左边部分 */
  .check-bg-l>i{
    font-size:12px;
    color:#757374
  }
  /* 右边部分 */
  .check-bg-r{
    display: inline-block;
    background:#61ded6;
    border-radius: 18px;
    color:#fff;
    font-size:12px;
    padding:0 5px;
    line-height: 24px;
  }
  /* 设置元素隐藏 */
  .move{
    transform: translateX(95px);
    
  }
</style>