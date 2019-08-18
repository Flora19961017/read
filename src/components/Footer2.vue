<template>
    <div class="foot">
        <!-- 点击底部按钮跳转至页面 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="shelf">
                <!-- 跳转至书架页面 -->
            </mt-tab-container-item>
            <mt-tab-container-item id="bookcity">
                <!-- 跳转至书城页面 -->
                <bookcity></bookcity>
            </mt-tab-container-item>
            <mt-tab-container-item id="goodsel">
                <!-- 跳转至精选页面 -->
                <!-- <mychoice></mychoice> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                <!-- 跳转至我的页面 -->
                <!-- <mine></mine> -->
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
// 注册书城子组件
import IndexBody from './index/IndexBody.vue'
// 注册精选子组件
import MyChoice from "../views/MyChoice.vue"
// 注册我的子组件
import Mine from "../views/mine/Mine.vue"
export default {
    data(){
        return {
            active:"me",
            state:[
                {isselect:false},
                {isselect:false},
                {isselect:false},
                {isselect:true}
            ],
        }
    },
    components:{
        "footericon":FooterIcon,
        "bookcity":IndexBody,
        "mychoice":MyChoice,
        "mine":Mine,
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
                if(ui==0){
                    this.$router.push("/Shelf");
                    this.active="shelf"
                }else if(ui==1){
                    this.$router.push("/Index");
                    this.active="bookcity"
                }else if(ui==2){
                    this.$router.push("/MyChoice");
                    this.active="goodsel";
                }else{
                    this.$router.push("/Mine");
                    this.active="me"
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
