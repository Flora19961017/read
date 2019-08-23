<template>
  <div>
    <!-- 头部分 -->
   <div class="dis">
      <head-view></head-view>
      <span class="posi-text">我的余额</span>
   </div>
   <!-- 大背景 -->
    <div id="big-bg" class="posi">
      <!-- 绝对定位部分 -->
      <div class="big-text">
        <i class="big-text1">账户余额</i>
        <span class="big-text2"><i class="big-text3" v-text="list.money"></i>书币</span>
        <span class="big-text4">
          <i class="posi-icon icon-i1"></i>
          哪些书币会到期
          <i class="posi-icon icon-i2"></i>
        </span>
      </div>
      <!-- 绝对定位右边部分 -->
      <div class="big-bg-right">
        <div class="bg-right">
          <i class="posi-icon icon-i3"></i>
          <small class="bg-right-text">去充值</small>
          <i class="posi-icon icon-i4"></i>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cut-off"></div>
    <!-- 主要内容部分 -->
    <div id="main">
      <!-- 标题可点击部分 -->
      <div class="main-tit d-flex">
        <div class="main-tit1 d-flex active" @click="tit1">
          <span>收入</span>
        </div>
        <div class="d-flex main-tit2" @click="tit2">
          <span>消费</span>
        </div>
      </div>
      <!-- 面板1 收入 -->
      <div class="income">
        <ul>
          <li>
            <div class="income-con">
              <!-- 左 -->
              <div class="income-left">
                <b>倒计时翻牌</b>
                <i>有效期:2019.08.22-2019.08.29</i>
              </div>
              <!-- 右 -->
              <span class="income-right">+2书币</span>
            </div>
          </li>
          <li>
            <div class="income-con">
              <!-- 左 -->
              <div class="income-left">
                <b>签到奖励书币</b>
                <i>有效期:2019.08.22-2019.08.29</i>
              </div>
              <!-- 右 -->
              <span class="income-right">+5书币</span>
            </div>
          </li>
          <li>
            <div class="income-con">
              <!-- 左 -->
              <div class="income-left">
                <b>签到奖励书币</b>
                <i>有效期:2019.08.22-2019.08.29</i>
              </div>
              <!-- 右 -->
              <span class="income-right">+5书币</span>
            </div>
          </li>
          <li>
            <div class="income-con">
              <!-- 左 -->
              <div class="income-left">
                <b>倒计时翻牌</b>
                <i>有效期:2019.08.22-2019.08.29</i>
              </div>
              <!-- 右 -->
              <span class="income-right">+3书币</span>
            </div>
          </li>
          <li>
            <div class="income-con">
              <!-- 左 -->
              <div class="income-left">
                <b>新人专享-注册</b>
                <i>有效期:2019.08.22-2019.08.29</i>
              </div>
              <!-- 右 -->
              <span class="income-right">+300书币</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 面板2 消费 -->
      <div class="consume d-none">
        <div>
          <i class="posi-icon icon-i5"></i>
          <span>暂无消费记录</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Header from "../../components/mine/Head.vue"
export default {
  data(){
    return{
      // 1.保存服务器返回过来数据
      list:{money:0}
    }
  },
  components:{
    "head-view":Header,
  },
  mounted(){
    // 1.如果vuex中不是初始化数据
    if(this.$store.getters.result!=0){
      // 2.将值给list
      this.list = this.$store.getters.result.result[0];
    }
  },
  methods:{
    // 1.点击切换面板
    tit1(e){
      // 1.1获取绑定事件元素
      var div1 = e.currentTarget;
      var div2 =  div1.nextElementSibling;
      var div3 = document.getElementsByClassName("income")[0];
      var div4 = document.getElementsByClassName("consume")[0];
      console.log(div3);
      // 1.2判断是否含有 active 类，用变量接收bool值
      var bool = div1.classList.contains("active");
      // 1.3进行判断,如果没有 
      if(!bool){
        // 1.4为自己添加该类名,并为其绑定的组件移除类名
        div1.classList.toggle("active",!bool);
        div3.classList.toggle("d-none",bool);
        // 1.5为其下一个兄弟元素移除该类名,并为另一个元素添加类名
        div2.classList.toggle("active",bool);
        div4.classList.toggle("d-none",!bool);
        
      }
    },
    tit2(e){
      // 1.1获取绑定事件元素
      var div2 = e.currentTarget;
      var div1 =  div2.previousElementSibling;
      var div3 = document.getElementsByClassName("income")[0];
      var div4 = document.getElementsByClassName("consume")[0];
      // 1.2判断是否含有 active 类，用变量接收bool值
      var bool = div2.classList.contains("active");
      // 1.3进行判断,如果没有 
      if(!bool){
        // 1.4为自己添加该类名,并且为其绑定元素移除类名
        div2.classList.toggle("active",!bool);
        div4.classList.toggle("d-none",bool);
        // 1.5为其下一个兄弟元素移除该类名,并且为另一个元素添加类名
        div1.classList.toggle("active",bool);
        div3.classList.toggle("d-none",!bool);
      }
    }
  }

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
/* 设置弹性 */
.d-flex{
  display: flex;
}

/* 背景图基础样式 */
.posi-icon{
  display: inline-block;
  width:15px;
  height:15px;
  vertical-align: middle;
}

/* 设置大背景部分 */
#big-bg{
  height:130px;
  background:linear-gradient(#31a7eb, #24d0e8);
  margin:12px 14px;
  border-radius: 10px;
}
/* 左边文字部分 */
.big-text{
  position: absolute;
  display: flex;
  flex-direction: column;
  color:#fff;
  top:20px;
  left:15px;
  
}
/* 文字样式微调 */
.big-text1{
  font-size:12px;
  color:#bbebf2;
}
.big-text2{
  font-size:13px;
  color:#bbebf2;
}
.big-text3{
  font-size:35px;
  font-weight: 700;
  color:#fff;
}
.big-text4{
  color:#bbebf2;
  margin-top:10px;
  font-size:12px;
}
/* 背景图片 */
.icon-i1{
  background:url(../../../public/imgs/mine/quesion.png) no-repeat;
  background-size:100%;
}
.icon-i2{
  background:url(../../../public/imgs/mine/anrik.png) no-repeat;
  background-size:100%;
}
.icon-i3{
  background:url(../../../public/imgs/mine/money.png) no-repeat;
  background-size:100%;
  position: absolute;
  top:7px;
  left:6px;
}
.icon-i4{
  background:url(../../../public/imgs/mine/arr-right.png) no-repeat;
  background-size:100%;
  
}
/* 右边样式 定位 */
.big-bg-right{
  position: absolute;
  left:212px;
  top:36px;
  color:#fff;
}
/* 右边文字部分 */
.bg-right-text{
  line-height: 30px;
  padding-left:24px;
}
/* 设置背景 */
.bg-right{
  width:80px;
  position:relative;
  background:#46e7f9;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}
/* 分割线 */
.cut-off{
  height:6px;
  background:#f1f1f1;
  margin:5px 0;
}
/* 访问时的样式 */
.active{
  color:#47cfd3;
  
}
.active::after{
  background:#3bd0cf;
}
/* 下面主体部分 */
.main-tit{
  border-bottom:1px solid #f1f1f1;
 
}
/* 标题左右部分 */
.main-tit1,.main-tit2{
  margin:0 auto;
  flex-direction: column;
  align-items: center;
}
.main-tit1>span,.main-tit2>span{
  letter-spacing: 1px;
  font-size:14px;
  line-height: 30px;
}
.main-tit1::after,.main-tit2::after{
  display: inline-block;
  content: "";
  width:19px;
  height:2px;
  margin-top:5px;
  /* #6a6a6a */
}
/* 内容 收入部分 */
.income{
  margin:0 15px;
  padding-bottom: 100px;
}
/* 信息部分 */
.income-con{
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f1f1;
}
/* 信息 左边 */
.income-left{
  display:flex;
  flex-direction:column;
}
/* 左边字体样式微调 */
.income-left>b{
  font-size:15px;
  font-weight: normal;
  margin-top: 12px;
}
.income-left>i{
  font-size:12px;
  font-weight: normal;
  margin-top: 8px;
  color:#a2a2a2;
}
/* 信息 右边 */
.income-right{
  align-self: center;
  color:#47c8c4;
  font-weight: 500;
}
/* 消费面板 */
.consume{
  display: flex;
}
.consume>div{
  margin:100px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.consume>div>span{
  color:#b2b2b2;
  font-weight: 500;
}
/* 设置背景图片 */
.icon-i5{
  width:75px;
  height:83px;
  background:url(../../../public/imgs/mine/books.png) no-repeat;
  background-size: 100%;
}
/* 隐藏元素 */
.d-none{
  display: none;
}
</style>
