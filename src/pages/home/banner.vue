<template>
    <div class="banner">
        
            <img v-for="(item,index) in bannerimg" :key="index" 
            :src="item.icon" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            bannerimg:[
                {icon:"https://pic12.secooimg.com/res/topic/d9e7f5fd3e2f4a7488989c42847f86ea.gif"},
                {icon:"https://pic12.secooimg.com/res/topic/d9d7fb713b094273a30b27fc7cd49c78.jpg_!!0x0.webp"},
            ]
        }
    }
}
</script>
<style>
.banner{
    padding:0.0625rem 0; 
    background: #f5f5f5;
}
.banner img{
   width: 100%;
   margin-bottom:0.0625rem; 
}
.banner img:nth-of-type(2){
    margin-bottom:0; 
}
</style>