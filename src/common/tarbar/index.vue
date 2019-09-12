<template>
    <div class="footer" >
        <ul>
            <router-link v-for="(item,index) in tags" :key="index"
            :to="item.path"
            tag="li"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Tabbarindex",
    data(){
        return{
            tags:[
                { icon:"&#xe508;",text:"首页",path:"/home" },
                { icon:"&#xe62c;",text:"品牌",path:"/brand" },
                { icon:"&#xe604;",text:"我的",path:"/sort" },
                { icon:"&#xe6d7;",text:"购物袋",path:"/shoppingbag" },
                { icon:"&#xe616;",text:"我的",path:"/mine" },

            ]
        }
    }
}
</script>
<style>
    .footer{
        position: fixed;
        width: 100%;
        height: 0.4083rem;
        bottom: 0px;
        background: #ccc;
        border-top:1px solid #ccc; 
    }
    .footer ul{
        display: flex;
        justify-content: space-around;
        /* align-items: center; */
        height: 100%;
    }
    .footer ul .router-link-active{
        color: orange;
    }
    .footer ul li{
        width: 100%;
        font-size: 0.0667rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
      
</style>