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
                    <p>10书币</p>
                </div>
                <div>
                    <div>去完成</div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>完成一次充值</p>
                    <p>500书币</p>
                </div>
                <div>
                    <div>去完成</div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>完善偏好资料</p>
                    <p>300书币</p>
                </div>
                <div>
                    <div>去完成</div>
                </div>
            </div>
            <div class="maskdetail bordertop">
                <div>
                    <p>关注微信公众号</p>
                    <p>5书币</p>
                </div>
                <div>
                    <div>去完成</div>
                </div>
            </div>
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
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        padding: 20px 10px 10px;
        margin-bottom: 10px;
    }
    .mask .bordertop{
        border-top: 1px solid #f1f1f1;
    }
</style>

