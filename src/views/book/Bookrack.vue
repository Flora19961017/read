<template>
  <div>
    <!-- 上半部分 -->
    <div class="priority">
      <div class="float-right">
        <i class="bg-icon bg-icon-search"></i>
        <span class="manage">管理</span>
      </div>
      <div class="clear"></div>
      <!-- 弹性 列 -->
      <div class="d-flex-col">
        <i class="bg-icon-books"></i>
        <span class="d-flex-col-span">您还没有阅读的书籍</span>
        <a href="javascript:;" class="d-flex-col-a">去书城看看</a>
      </div>
    </div>
    <!-- 推荐+正在阅读 书架部分 -->
    <div>
      <ul class="bookrack">
        <li class="bookrack-li">
          <div class="bookrack-div">
            <span class="bg-icon bookrack-bgImg"></span>
            <b class="bookrack-b">涅槃重生</b>
            <i class="bookrack-i">未读</i>
          </div>
        </li>
        <li class="bookrack-li">
          <div class="bookrack-div">
            <span class="bg-icon bookrack-bgImg"></span>
            <b class="bookrack-b">涅槃重生</b>
            <i class="bookrack-i">未读</i>
          </div>
        </li>
        <li class="bookrack-li">
          <div class="bookrack-div">
            <span class="bg-icon bookrack-bgImg"></span>
            <b class="bookrack-b">涅槃重生</b>
            <i class="bookrack-i">未读</i>
          </div>
        </li>
        <li class="bookrack-li">
          <div class="bookrack-div">
            <span class="bg-icon bookrack-bgImg"></span>
            <b class="bookrack-b">涅槃重生</b>
            <i class="bookrack-i">未读</i>
          </div>
        </li>
        <li class="bookrack-li">
          <div class="bookrack-div">
            <span class="bg-icon bookrack-bgImg"></span>
            <b class="bookrack-b">涅槃重生</b>
            <i class="bookrack-i">未读</i>
          </div>
        </li>
        <!-- 添加按钮 -->
        <li class="bookrack-li">
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
  
}
</script>
<style scoped>
  /* 清除浮动 */
  .clear{
    clear:both;
  }
  /* 设置上部分背景 */
  .priority{
    background:rgba(255,0,0,.8);
  }
  .float-right{
    float:right;
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
    margin:1px 9px 0 5px;
    vertical-align: bottom;
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
    margin:5px;
    letter-spacing: 1px;
    font-weight: 100;
  }
  .d-flex-col-a{
    font-size:14px;
    color:#fff;
    font-weight:300;
    letter-spacing: 1px;
    margin:5px 0 24px 0;
  }
  /* 设置书架部分 */
  .bookrack{
  
    margin-top:15px;
   
    text-align: left;
  }
  /* li浮动 */
  .bookrack-li{
    float:left;
  }
  .bookrack-div{
    display:flex;
    flex-direction: column;
    padding:0 17px 0 11px;
  }
  .bookrack-bgImg{
    width:72px;
    height:92px;
    background:url(../../../public/imgs/bookrack/npcs.jpg) no-repeat;
    background-size:100%;
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
</style>