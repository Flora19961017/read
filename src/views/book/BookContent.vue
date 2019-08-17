<template>
  <div class="book-detail">
    <!-- 头部button -->
    <mt-header>
      <mt-button icon="back" slot="left"></mt-button>
      <mt-button slot="right">分享</mt-button>
      <mt-button slot="right">评论</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 加入书架按钮 -->
    <mt-badge size="large" color="#59dae3">加入书架&nbsp;&nbsp;&nbsp;</mt-badge>
    <!-- 书本内容展示区 -->
    <div class="cantainer">
      <div class="content">
        <div class="small-title">第一章惊人的记忆</div>
        <h3 class="title">第一章惊人的记忆</h3>
        <p>
          1991年，深秋。西伯利亚北部，无名港。<br/>港口坐落在西伯利亚的最北部，面对着浩瀚的北冰洋。海图上是找不到这个港口的美国人的间谍卫星都扫描不到它，它跟周围的永久冻土带一样都是灰白色的，热信号很微弱。<br/>这里本不该有港口，周围都是无人区。离这里最近的城市是维尔霍扬斯克，它在沙皇年代是关押政治犯的流放地，是一座让人用来绝望的城市，在漫长的寒冬中，政治犯们往往因为熬不下去而自杀。而维尔霍扬斯克还在无名港以南340公里的地方，从维尔霍扬斯克乘坐狗拉雪橇来这座港口都需要五天时间。这是片被神都遗忘的地方，植物只有地衣和苔藓，偶尔的访客是饥饿的北极熊。<br/>锈迹斑斑的铸铁码头通往冰封的海面，年轻的哨兵站在码头尽处，肩扛“波波沙冲锋枪”，熊皮帽上嵌着五角星。从领章可以看出他是一位苏联红军的中士。<br/>天边的太阳温吞吞的，像一枚水煮蛋，怎么也温暖不了地面。可这就是今年最后的阳光了，极夜很快就要开始了，接下来的几个月里太阳不会再升起。哨兵向着冰海尽头眺望，海面上刮着寂寥的寒风，船还是没有来。通常来说这片海域是不通航的海面上有危险的浮冰，海底还有犬牙般的暗礁，随便哪一样都能让试图接近这里的船长眠在海床上。但不是没有例外，夏季时海冰会融化开裂，这时熟悉航路的水手可以驾驶破冰船绕过暗礁抵达无名港。这条时断时续的危险航线是无名港的生命线，所有补给都靠它。<br/>每年列宁号都会来，时间有先后但从未失约。它是一艘有年头的核动力破冰船，白色船头上嵌着红五星。无论它在哪一天出现，那天就是无名港的节日，士兵们挥舞着熊皮帽子奔走相告，大家都聚集到码头上眺望，看着巨大的船影在海平面上升起！列宁号以帝王般的姿态冲破浮冰，身后留下湛蓝色的水道。那是苏维埃的力量，钢铁之拳，无坚不摧。可今年它迟到得太晚了，海面已经封冻，冰层正向下方不断生长，几星期之后航线就会彻底消失，即便列宁号也打不开通道了。<br/>难道莫斯科那边出了什么问题？哨兵叼着一根“莫斯科人”牌香烟若有所思，打火机打不着了，大概是里面的煤油冻住了。<br/>“见鬼！”哨兵脱下手套，把打火机放在手心里暖着。<br/>他忽然扭过头，警觉地看向冰海尽头。起风了，墨色的卷云层从北边俯冲过来。在这种高纬度地区，降雨量比撒哈拉沙漠还少，可一旦出现黑色积雨云，就会瞬间变天，积雪会把港口都掩埋。海面上的雪尘被卷了起来，像是一场白色的沙尘暴，尘头足有几十米高。云层覆盖的区域是漆黑的，而另一半则是冰的惨白色，黑与白的分界线如此锋利。哨兵跌跌撞撞地扑到铁架旁敲响铜钟，钟声在寂寥的雪原上四散开去。<br/>这是暴风雪来袭的预警。发出预警之后，哨兵捂着熊皮帽就往回跑，这时他的视野中出现了不可思议的目标。一个模煳的影子在云下的阴影中滑行，敏捷地绕开处处冰礁，正高速逼近。<br/>一个滑雪的人？<br/>
        </p>
        
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="btm-nav">
      <mt-range v-model="rangeValue">
        <div slot="start">0</div>
        <div class="all" slot="end">100</div>
      </mt-range>
      <div class="btm-btm">
        <div class="book-list">
          <span></span>
          <span>目录</span>
        </div>
        <div class="book-list">
          <span></span>
          <span>夜间</span>
        </div>
        <div class="book-list">
          <span></span>
          <span>自动翻页</span>
        </div>
        <div class="book-list">
          <span></span>
          <span>设置</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bookc from "../../assets/js/bookC";
import bookd from "../../assets/js/bookD";
export default {
  data() {
    return {
      booklist: [],
      bookdetail: [],
      rangeValue:0
    };
  },
  created() {
    this.booklist = bookc;
    this.bookdetail = bookd;
    console.log(this.booklist);
    console.log(this.bookdetail);
  }
};
</script>
<style scoped>
h3{padding: 0;margin: 0}
  .book-detail{
    position: relative;
  }
  /* 加入书架按钮 */
  .book-detail .mint-badge.is-size-large{
    font-size: 1rem;
  }
  .book-detail .mint-header{
    background-color: #fff;
    color: #333;
    border-bottom: 1px solid #ddd;
    padding: 0.8rem 1rem;
  }
  .book-detail .mint-header .mint-button+.mint-button{
    padding-left: 0.5rem
  }
  .book-detail .mint-badge.is-primary{
    position: fixed;
    top: 7rem;
    right: -0.8rem;
  }
  /* 底部按钮 */
  .book-detail .btm-nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    background-color: #fff
  }
  .book-detail .btm-btm{
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
  /* 滑块 */
  .book-detail .mt-range{
    padding: 0.5rem 1rem
  }
  .book-detail >>> .mt-range-thumb{
    width: 1rem;
    height: 1rem;
    top: 0.5rem;
  }
  .book-detail .btm-btm{
    padding: 0.5rem 1rem;
  }
  /* 书的内容 */
  .book-detail .cantainer{
    padding: 0.5rem 1rem;
    margin-top: -2.5rem;
  }
  .book-detail .content{
    height: 36rem;
    overflow: hidden;
  }
  .book-detail .small-title{
    font-size: 0.8rem;
    color:#666;
  }
  .book-detail .title{
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
</style>