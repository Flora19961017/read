<template>
  <div>
    <!-- 头部分 -->
   <div class="dis">
      <head-view></head-view>
      <span class="posi-text">我的余额</span>
   </div>
    <div class="float-left margin"><i class="bg-littleImg bg-img-data"></i>查看明细</div>
    <div class="clear"></div>
    <div class="text-align d-clear">
      <div>
        <span class="font-size"><i class="bg-littleImg bg-img-ingot"></i>70</span>
        <div>
          <span class="line-x"></span>
          <b class="font-yue">账号余额</b>
          <span class="line-x"></span>
        </div>
        <p class="font-hint">猫豆可兑换无广告阅读哟</p>
      </div>
      
    </div>
    <!-- 下面部分，背景为灰色 -->
     <div class="bg-color">
      <div class="board">
       免广告兑换
      </div>
      <!-- 给一个ul ul背景为#,三个li 里的div背景为#fff -->
      <ul class="ulStyle">
        <li>
          <div class="li-div">
            <span class="bg-littleImg bg-img-stock"></span>
            <div class="d-flex">
              <span class="f-s1">免1小时广告券</span>
              <i class="f-s2">近30天已兑换1209件</i>
            </div>
            <div class="d-flex-s3">
              <span class="f-s3"><i class="bg-littleImg bg-img-ingot-sml"></i>298猫豆</span>
              <div class="posi">
                <span class="circle-f3 circle-posi1"></span>
                <span class="f-bg-s3">去兑换</span>
                <span class="circle-f3 circle-posi2"></span>
              </div>
              
            </div>
          </div>
        </li>
        <li></li>
        <div class="li-div">
            <span class="bg-littleImg bg-img-stock"></span>
            <div class="d-flex">
              <span class="f-s1">免1小时广告券</span>
              <i class="f-s2">近30天已兑换1209件</i>
            </div>
            <div class="d-flex-s3">
              <span class="f-s3"><i class="bg-littleImg bg-img-ingot-sml"></i>298猫豆</span>
              <div class="posi">
                <span class="circle-f3 circle-posi1"></span>
                <span class="f-bg-s3">去兑换</span>
                <span class="circle-f3 circle-posi2"></span>
              </div>
              
            </div>
          </div>
        <li></li>
        <div class="li-div">
            <span class="bg-littleImg bg-img-stock"></span>
            <div class="d-flex">
              <span class="f-s1">免1小时广告券</span>
              <i class="f-s2">近30天已兑换1209件</i>
            </div>
            <div class="d-flex-s3">
              <span class="f-s3"><i class="bg-littleImg bg-img-ingot-sml"></i>298猫豆</span>
              <div class="posi">
                <span class="circle-f3 circle-posi1"></span>
                <span class="f-bg-s3">去兑换</span>
                <span class="circle-f3 circle-posi2"></span>
              </div>
              
            </div>
          </div>
      </ul>
    </div>
  </div>
  
</template>
<script>
import Header from "../../components/mine/Head.vue"
export default {
  components:{
    "head-view":Header,
  },
  methods:{}

}
</script>
<style scoped>
  .dis{
    display:flex;
    border-bottom:1px solid rgba(0,0,0,.1);
  }
  .posi{
    position:relative;
  }
 .posi-text{
   margin-left:127px;
   margin-top:7px;
   font-size:14px;
 }
 /* 给背景图片设置基本样式*/
 .bg-littleImg{
   display: inline-block;
   width: 17px;
   height:17px;
   background:url(../../../public/imgs/mine/arr-left.png)no-repeat;
   
  }
 /* 设置清除浮动 */
 .clear{
   clear:both;
 }
 .text-align{
   text-align: center;
 }
 .float-left{
   float:right;
 }
 .margin{
  margin-top:10px;
  margin-right:12px;
}
.bg-img-data{
  width: 14px;
  height:14px;
  background:url(../../../public/imgs/mine/data.png) no-repeat;
  background-size:100%;
  margin-right:5px;
  vertical-align: middle;
  opacity: .7;
}
/* 设置元宝 */
.bg-img-ingot{
  width:45px;
  height:45px;
  background:url(../../../public/imgs/mine/ingot.png) no-repeat;
  background-size:100%;
  vertical-align: middle;
}
.font-size{
  font-size:33px;
}
/* 小横线 */
.line-x{
  display: inline-block;
  width:30px;
  height:1px;
  background-color:rgba(0,0,0,.3);
  margin-bottom:5px;
}
/* 字体样式 */
.font-yue{
  font-weight:normal;
  font-size:13px;
  margin:10px;
  letter-spacing: 2px;
  opacity: .7;
}
.font-hint{
  color:#f00;
  margin:13px 0;
  font-size:14px;
  letter-spacing:1px;
}
/* 设置下面部分 */
.bg-color{
  background-color:#dedede;
}
/* 公告 */
.board{
  margin-left:10px;
  padding:15px 0;
  font-size:14px;
}
/* 设置ul样式 */
.ulStyle{
  margin:0;
  padding:10px 15px;
  list-style: none;
}
/* 设置li及li里面样式 */
.li-div{
  background:#fff;
  display:flex;
  margin-bottom:15px;
}
.bg-img-stock{
  width:64px;
  height:40px;
  background:url(../../../public/imgs/mine/stock.png) no-repeat;
  background-size:100%;
  vertical-align: middle;
  margin:25px 5px;
}
.d-flex{
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
}
/* 设置字体 */
.f-s1{
  font-size:15px;
  margin-top:15px;
}
.f-s2{
  font-size:12px;
  color:orange;
  margin-bottom:18px;
}
.bg-img-ingot-sml{
  width:20px;
  height:20px;
  background:url(../../../public/imgs/mine/ingot.png)no-repeat;
  background-size:100%;
  vertical-align: middle;
}
/* 设置字体 */
.f-s3{
  font-size:12px;
  color:#f00;
}
.d-flex-s3{
  display: flex;
  flex-direction: column;
  margin:15px 0 0 15px;
  text-align: center;
}
/* 设置背景以及字体 */
.f-bg-s3{
  display: inline-block;
  width:67px;
  height:23px;
  background-color:#f00;
  color:#fff;
  position: absolute;
  left:6px;
  z-index: 1;
  line-height:23px;
  font-size:13px;
  letter-spacing: 1px;
}
.circle-f3{
  display: inline-block;
  position: absolute;
  width:25px;
  height:23px;
  background-color:#f00;
  border-radius:50%;
  
}
.circle-posi1{
right:43px;
}
.circle-posi2{
right:-17px;
}
</style>
