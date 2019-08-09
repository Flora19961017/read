<template>
    <div class="mask">
        <!-- 顶部固定标题 -->
        <mt-header fixed title="签到&任务">
            <mt-button icon="back" slot="left"></mt-button>
        </mt-header>
        <!-- 滚动条公告 -->
        <div class="scorll">
            <img src="../../../public/imgs/sign_mask/public.png" alt="">
            <marquee><span class="g-txt">即日起除购买的书币外，其他书币将限时，请尽量在有效期内使用，避免不必要的损失</span></marquee>
        </div>
        <!-- 签到块 -->
        <div class="sign-in">
            <div class="rules">
                <img src="../../../public/imgs/sign_mask/awardrule.png" alt="">
                <span>奖励规则</span>
            </div>
            <div class="signin">
                <div class="signin-txt">
                    <p>签到</p>
                    
                </div> 
            </div>
            <!-- 签到天数 -->
            <div class="days">
                <div class="day-bu">补</div>
                <div>2天</div>
                <div>3天</div>
                <div>4天</div>
                <div>5天</div>
                <div>6天</div>
            </div>
        </div>
         <!-- 新手任务 -->
        <div class="new-mask">
            <div class="new-mask-title">新手任务</div>
            <div class="maskdetail">
                <div>
                    <p>选择一本小说加入书架</p>
                    <p class="txtstyle">10书币</p>
                </div>
                <div>
                    <div><img src="../../../public/imgs/sign_mask/achive.png" alt=""></div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>完成一次充值</p>
                    <p class="txtstyle">500书币</p>
                </div>
                <div>
                    <div><img src="../../../public/imgs/sign_mask/achive.png" alt=""></div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>完善偏好资料</p>
                    <p class="txtstyle">300书币</p>
                </div>
                <div>
                    <div><img src="../../../public/imgs/sign_mask/achive.png" alt=""></div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>关注微信公众号</p>
                    <p class="txtstyle">5书币</p>
                </div>
                <div>
                   <div><img src="../../../public/imgs/sign_mask/achive.png" alt=""></div>
                </div>
            </div>
        </div>
        <!-- 日常任务 -->
        <div class="new-mask">
            <div class="new-mask-title">日常任务</div>
            <div class="maskdetail">
                <div>
                    <p>累计阅读小说30分钟</p>
                    <p class="txtstyle">10书币</p>
                </div>
                <div>
                    <div><img src="../../../public/imgs/sign_mask/achive.png" alt=""></div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>累计阅读小说60分钟</p>
                    <p class="txtstyle">15书币</p>
                </div>
                <div>
                    <div><img src="../../../public/imgs/sign_mask/achive.png" alt=""></div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>累计阅读小说120分钟</p>
                    <p class="txtstyle">30书币</p>
                </div>
                <div>
                    <div><img src="../../../public/imgs/sign_mask/achive.png" alt=""></div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>累计阅读小说180分钟</p>
                    <p class="txtstyle">35书币</p>
                </div>
                <div>
                   <div><img src="../../../public/imgs/sign_mask/achive.png" alt=""></div>
                </div>
            </div>
        </div>
        <!-- 首充超级福利 -->
        <div class="add">
            <div>首充超级福利</div>
            <div class="addtxt">
                <i>充值30元额外赠送</i>
                <span>1500书币</span>
            </div>
            <div class="addtxt">
                <i>充值50元额外赠送</i>
                <span>3000书币</span>
            </div>
            <div class="addtxt">
                <i>充值98元额外赠送</i>
                <span>8000书币和7天VIP月卡</span>
            </div>
            <div class="addtxt">
                <i>充值198元额外赠送</i>
                <span>19800书币和30天VIP</span>
            </div>
             <!-- 去充值按钮 -->
            <button class="btn">去充值</button>
        </div>
        <!-- 意见反馈 -->
        <div class="advice">
            <div class="advicetit">意见反馈</div>
            <p class="ptxt">猫扑小说读友群火热招募中！</p>
            <p class="ptxt">这里有志同道合的书友，让你畅谈人生</p>
            <p class="ptxt">这里有可爱的产品经理/运营小姐姐</p>
            <p class="ptxt">这里还有各种读书福利/红包福利，让你收福利收到手软！</p>
            <p class="ptxt">快来加入我们吧，据说错过会让你后悔一年哦！</p>
            <p class="ptxt pcall">QQ1群：678322520</p>
            <p class="ptxt pcall">QQ2群：677793929(满)</p>
            <p class="ptxt pcall">QQ3群：662636906(满)</p>
            <p class="ptxt pcall">QQ4群：791742258(新)</p>
            <p class="ptxt">等你哟!</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .mask{
        background: #f1f1f1;
    }
    .mask .mint-header{
        background: #fff;
        color: #333;
        border-bottom: 1px solid #f1f1f1;
    }
    /* 滚动文字背景 */
    .mask .scorll{
        margin-top: 40px;
        background: #FCF8ED;
    }
    .mask .scorll marquee{
        width: 93%;
    }
    .mask .g-txt{
        font-size: 12px;
        width: 100%;
        color: #E4B162;
    }
    /* 签到 */
    .mask .sign-in{
        background: #fff;
        padding: 8px 16px;
        margin-bottom:3px;
    }
    .mask .signin{
        background: #11D0D3;
        width: 23%;
        height: 80px;
        border-radius: 50%;
        margin: 0 auto;
        position: relative;
    }
    .mask .sign-in .rules span{
        font-size: 12px;
        color: #9F9F9F;
    }
    .mask .sign-in .rules img{
        vertical-align: middle;
    }
    .mask .signin-txt{
        font-size: 12px;
        text-align: center;
        position: absolute;
        top: 32%;
        left: 25%;
        color: #fff;
    }
    /* 已签到 */
    .mask .signin-txt p:first-child{
        font-weight: bold;
        margin-bottom: 3px;
    }
    /* 天数 */
    .mask .days{
        display: flex;
        justify-content: space-between;
        padding: 23px 0;
    }
    /* 新手任务 */
    .mask .new-mask{
        background: #fff;
        padding: 10px 16px;
    }
    .mask .maskdetail{
        border: 1px solid #f1f1f1;
        display: flex;
        /* font-size: 12px; */
        justify-content: space-between;
        padding: 20px 10px 10px;
        margin: 10px 0;
    }
    .mask .bordertop{
        border-top: 1px solid #f1f1f1;
    }
    .mask .txtstyle{
        color: #FF9709
    }
    /* 首充 */
    .mask .add{
        background: #fff;
        margin-top: 3px;
        padding: 10px 16px;
    }
    .mask .addtxt{
        margin:8px 0;
    }
    .mask .addtxt>span{
        color: #FF9709;
    }
    /* 去充值按钮 */
    .mask .btn{
        background: #13CAD6;
        width: 100%;
        outline: none;
        border-radius: 50px;
        border: none;
        padding: 6px;
        color: #fff;
        font-size: 16px;
    }
    /* 意见反馈 */
    .mask .advice{
        background: #fff;
        padding: 10px 16px;
        margin-top: 3px;
    }
    .mask .advicetit{
        margin-bottom: 10px;
        font-size: 16px;
    }
    .mask .ptxt{
        font-size: 14px;
    }
    .mask .pcall{
        font-weight: bold;
    }
</style>

