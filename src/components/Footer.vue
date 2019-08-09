<template>
    <div class="foot">
        <!-- 点击底部按钮跳转至页面 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="shelf">
                <!-- 跳转至指定页面 -->
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="active" fixed>
            <!-- 第1个按钮 书架 -->
            <mt-tab-item id="shelf" @click.native="changeState(0)">
                <footericon :selectedImage="require('../../public/imgs/index/shelf_isselected.png')" :normalImage="require('../../public/imgs/index/shelf_normal.png')" :focused="state[0].isselect"></footericon>
                书架
            </mt-tab-item>
            <!-- 第2个按钮 书城 -->
            <mt-tab-item id="bookcity" @click.native="changeState(1)">
                <footericon :selectedImage="require('../../public/imgs/index/bookcity_isselected.png')" :normalImage="require('../../public/imgs/index/bookcity_normal.png')" :focused="state[1].isselect"></footericon>
                书城
            </mt-tab-item>
            <!-- 第3个按钮 精选 -->
            <mt-tab-item id="goodsel" @click.native="changeState(2)">
                <footericon :selectedImage="require('../../public/imgs/index/goodsel_isselected.png')" :normalImage="require('../../public/imgs/index/goodsel_normal.png')" :focused="state[2].isselect"></footericon>
                精选
            </mt-tab-item>
            <!-- 第4个按钮 我的 -->
            <mt-tab-item id="me" @click.native="changeState(3)">
                <footericon :selectedImage="require('../../public/imgs/index/me_isselected.png')" :normalImage="require('../../public/imgs/index/me_normal.png')" :focused="state[3].isselect"></footericon>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import FooterIcon from '../components/FooterIcon.vue'
export default {
    data(){
        return {
            active:"bookcity",
            state:[
                {isselect:false},
                {isselect:true},
                {isselect:false},
                {isselect:false}
            ],
        }
    },
    components:{
        "footericon":FooterIcon,
    },
    methods:{
        // 改变底部图标状态
        changeState(index){
            // 遍历数组state
            for(var i=0;i<this.state.length;i++){
                var ui=index;
                if(ui==i){
                    this.state[i].isselect=true;
                }else{
                    this.state[i].isselect=false;
                }
            }
        }
    }
}
</script>
<style scoped>
    .foot .mint-tabbar > .mint-tab-item.is-selected {
        background: #fff;
        color: #13CAD6;
    }
</style>
