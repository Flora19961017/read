<template>
    <!-- 轮播图 -->
    <div>
        <mt-swipe :auto="4000" class="carouselStyle">
            <mt-swipe-item>
                <img src="../../../public/imgs/index/carousel1.jpg" alt="" class="indexImg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../../public/imgs/index/carousel2.jpg" alt="" class="indexImg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../../public/imgs/index/carousel3.jpg" alt="" class="indexImg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../../public/imgs/index/carousel4.jpg" alt="" class="indexImg">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .carouselStyle{
        width: 100%;
        height: 100px;
        padding: 8px 16px 0;
        background: #fff;
        box-sizing: border-box;
    }
    .mint-swipe .indexImg{
        width:100%;
        height: 100%;
    }
    /* 圆点样式 */
    .mint-swipe>>>.mint-swipe-indicators{
        bottom: 2px;
        left: 12%;
    }
    .mint-swipe>>>.mint-swipe-indicator{
        width:5px;
        height:5px;
        opacity: 0.5;
    }
    .mint-swipe>>>.mint-swipe-indicators.is-active{
        background-color: #fff;
    }
</style>
