<template>
    <div>
        <ul>
            <li v-for="(item,index) in mans" :key="index">
                <img :src="item.imgUrl" alt="">
                <p>{{item.brandEnName}}</p>
                <p class="title">{{item.name}}</p>
                <p>￥{{item.refPrice}}</p>
                
            </li>
        </ul>
    </div>
</template>
<script>
import {europeManApi,europeShoeApi} from "@api/europe"
export default {
    data(){
        return{
            man:[
                {enm:"IUSIUIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0815/035821959160468db1911ec825c7d4c4.jpg_!!0x0.webp"},
                {enm:"IUSIUIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0815/035821959160468db1911ec825c7d4c4.jpg_!!0x0.webp"},
                {enm:"IUSIUIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0815/035821959160468db1911ec825c7d4c4.jpg_!!0x0.webp"},
                {enm:"IUSIUIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0815/035821959160468db1911ec825c7d4c4.jpg_!!0x0.webp"},
                {enm:"IUSIUIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0815/035821959160468db1911ec825c7d4c4.jpg_!!0x0.webp"},
            ],
            mans:[],
        }
    },
    async created(){
        let data =await europeManApi();
        this.mans=data.productList;
        //console.log(this.mans);
        // let data1 =await europeShoeApi();
        
        // console.log(data1);
    },
}
</script>
<style scoped>
li{
    float:left;
    width: 1.554rem;
    height:2.983rem;
    margin-bottom: 0.125rem;
}
li img {
    width: 1.558rem;
    height: 1.558rem;
    margin-bottom: 0.208rem;
}
li p{
    width: 1.554rem;
    padding-left:0.375rem;
    height: 0.183rem;
    font-size: 16px;
}
li .title{
     width: 1.554rem;
      height: 0.366rem;
      overflow: hidden;
}
</style>