<template>
  <div class="com-part">
    <div class="cm-title">
      <div>
        <span>书友评论</span>
        <span class="com-num">共25846条</span>
      </div>
      <img src="../../../../public\imgs\choice\write-com.png" alt="">
    </div>
    <!-- 评论内容 -->
    <div class="c-comm">
      <div class="c-img"><img src="../../../../public\imgs\choice\user.png" alt=""></div>
      <!-- 用户评论 -->
      <div class="user-com">
        <!-- 用户信息 -->
        <div class="com-info">
          <p class="user-name">书友喵喵</p>
          <img src="../../../../public\imgs\choice\comment.png">
        </div>
        <div class="com-content">看的热血沸腾</div>
        <!-- 评论时间等信息 -->
        <div class="com-infm">
          <span class="com-time">2019-9-8 19:07</span>
          <!-- 评论回复和点赞 -->
          <div class="ci-rep-like">
            <span class="ci-replay">
              <img src="../../../../public\imgs\choice\replay.png" alt="">
              16
            </span>
            <span class="ci-like">
              <img src="../../../../public\imgs\choice\like.png" alt="">
              16
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 查看全部书评 -->
    <p class="c-lookall">
      查看全部书评
    </p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.com-part .cm-title{
  display: flex;
  justify-content: space-between;
}
.com-part .cm-title>div>span:first-child{
  color: #000;
}
.com-part .cm-title>div>span:last-child{
  color: #999;
  font-size: 0.8rem;
  padding-left: 0.8rem;
}
.com-part .cm-title>img{
  width: 20%;
  height: 20%;
}
/* 评论内容 */
.com-part .c-comm{
  display: flex;
  height: 7rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
}
.com-part .com-infm{
  display: flex;
  justify-content: space-between;
}
.com-part .user-com{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 用户头像 */
.c-comm .c-img{
  width:25%;
}
.c-comm .c-img>img{
  width: 90%;
}
/* 用户评论内容 */
.com-part .user-name{
  font-size: 0.9rem;
  width: 19rem;
}
.c-comm .com-info>img{
  height: 0.8rem;
}
.c-comm .com-content{
  color: #000;
}
.c-comm .com-infm{
  width: 100%;
  color:#999;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 0.8rem;
}
.c-comm .ci-rep-like{
  font-size: 0.9rem;
}
.c-comm .ci-rep-like>span{
  margin-left: 1.5rem;
}
.c-comm .ci-rep-like>span>img{
  vertical-align: middle;
  width: 1rem;
}
/* 查看全部书评 */
.c-comm .c-lookall{
  text-align: center;
  padding: 0.5rem 0;
  color: #5DC7D3;
}
</style>

