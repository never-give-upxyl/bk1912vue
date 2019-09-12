<template>
    <div id="more_body">
         <div class="head">
             <div class="content">
                <router-link :to="path" class="backBtn" tag="div">
                        <img src="../../../public/img/backBtn.png" alt />
              </router-link>
              <div class="search">
                  <input type="text" :value="goodsType">
             </div>
             <p @click="chooseGoods(goodsType)">筛选</p>
             </div>
             <div id="afterContent">
                 <div id="swiper-container">
                        <div class="swiper-slide" v-for="(item,index) in nav" :key="index" 
                         :class="activeIndex == index?'active':''"
                          @click="handleActive(index)"
                        >{{item}}</div>
                 </div> 
             </div>
         </div>
         <div class="mod-list">
             <ul class="mod-list-goods">
                 <router-link 
                :to="{name:'details',params:{info:item}}"
                 v-for="(item,index) in goodslist" :key="index"
                tag="li"
                 >
                     <div class="imgContainer">
                         <img :src="item.imgUrl" alt="" :id="(index+1)%2==0 ? 'bor':''">
                     </div>
                     <div class="txtContent">
                         <div class="text-first">{{item.brandCnName}}</div>
                        <p class="text-second">{{item.name}}</p>
                        <p class="text-price">￥{{item.refPrice}}</p>
                        <p class="text-vipprice" :id="item.tipTag ? '':'vipprice'">￥{{item.tipPrice}}
                            <span>{{item.tipTag}}</span>
                        </p>
                        <p class="text-selfsell">{{item.tags[1]}}</p>
                     </div>
                 </router-link>
             </ul>
         </div>
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
    name:"More",
    
    created(){
        this.handleGetgoods();
        this.chooseGoods();
        let {name} =this.$route.query;
        this.goodsType=name;
        console.log(this.goodsType)
    },
    data(){
        return{
            activeIndex:'',
            goodsType:"",
            path:"/brand",
            val:"goodsName",
            nav:["综合","销量","价格","折扣","潮奢节","优惠","材质","开合"],
            list:
            [
                {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic11.secooimg.com/product/374/374/49/54/16bc89b1b6cd49ffba1293eb52876e25.jpg_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】Louis Vuitton/路易威登 女士老花经典款帆布水桶NOE BB单肩包 M40817 老花",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic12.secooimg.com/product/374/374/97/48/a0dbd202a23c4b588167c6b00cee39bb.jpg_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】Louis Vuitton/路易威登 19年新款 女士锁头包帆布/配皮 斜跨包，单肩包【预定商品 2-3周发货】 M44141",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic13.secooimg.com/product/374/374/2019/0520/87c618631d2c418ab94d5bf4b3ee4c47.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"路易威登/路易威登 Shoulder Bag m58009 POCHETTE ACCESSOIRES",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic14.secooimg.com/product/374/374/2019/0527/22cec4b2ab0347baae08e999b3606f8e.jpg_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】Louis Vuitton/路易威登 爆款 粉桶 女士NEONOE水桶包、单肩包，芭蕾粉色M44022 帆布/配皮 芭蕾粉 【预售商品 2-3周发货】",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic15.secooimg.com/product/374/374/2019/0526/4fa4d82a5f5740f2a43059fd3b21f889.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】Louis Vuitton/路易威登 女士水桶包 Speedy 25 老花带肩带 单肩斜跨包 m41113",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic16.secooimg.com/product/374/374/54/57/69c100484dab4cd8b1665b1a2c54ab00.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"LouisVuitton/路易威登女士老花经典款水桶包NOEBB单肩包M40817",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic17.secooimg.com/product/374/374/2019/0611/c85a95abb8cf4a6da97cd63e6023ff06.jpg_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】预定款2-3周发货 Louis Vuitton/路易威登 爆款NEO NOE女士棕色老花帆布水桶手提单肩包 （3色可选）M44020",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                }
            ]      
        }
    },
    computed:{
        ...mapState({
            goodslist:state=>state.more.goodslist,    
        })
    },
    methods: {
        ...mapActions({
            handleGetgoods:"more/handleGetgoods",
            chooseGoods:"more/chooseGoods",
            sortArr:"more/sortArr"
        }),
        handleActive(index){
            this.activeIndex = index;
            this.sortArr();
        },
    },
}
</script>

<style scoped>
    .head{
        top:0;
        width:3.125rem;
        height:0.7917rem;
       position: fixed;
       background:white;
       z-index:2;
    }
    .content{
        width:100%;
        height:0.4167rem;
        display: flex;
        align-items: center;
    }
    .backBtn{
        width:0.4183rem;
        padding-top:0.0853rem;
        padding-bottom: 0.0833rem;
        height:0.4167rem;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .backBtn.img{
        width:0.3167rem;
        height: 0.3167rem;
    }
    .search{
        width:2.2rem;
        height:0.2667rem;
        background:thistle;
        padding-right:0rem;
    }
    .content p{
        text-decoration: none;
        font-size: 0.125rem;
        color: #f8a120;
        font-family:"Helvetica Neue", Tahoma, Arial, PingFangSC-Regular, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
        margin-left: 0.1142rem;
    }
    .search input{
       width:2.2rem;
        height:0.2667rem;
        outline:none ;
        background:#ccc;
        border:none;
        text-indent: 0.0833rem;
        font-size: 0.1267rem;
    }
    #swiper-container{
        width:100%;
        height:0.3583rem;
        padding-bottom: 0.0833rem;
        overflow-x: scroll;
        position: relative;
        display: flex; 
       /* box-sizing: border-box; */
    }
    #swiper-container::-webkit-scrollbar {
    display: none;
    }
   .swiper-slide{
        width:0.6167rem !important;
        text-align: center;
        /* display: flex; */
        float:left;
        height:0.2667rem;
        border:0.0083rem solid #e1e1e1;
        font-size: 0.125rem;
        line-height: 0.2667rem;
        text-align: center;
        padding-left:0.0417rem;
        padding-right: 0.0417rem;
        margin-right:0.0417rem;
        font-family:"Helvetica Neue", Tahoma, Arial, PingFangSC-Regular, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
    }
    .active{
        border:0.0083rem solid #f8a120;
        color:#f8a120;
    }
    .mod-list{
  
      margin-top:0.7917rem;
        width:100%;
        overflow: hidden;
        padding-bottom: 0.8333rem;
    }
    .mod-list-goods{
        width:100%;
        list-style:none;
    }
    .mod-list-goods li{
        width:1.5625rem;
        height:2.725rem;
        padding-bottom:0.25rem;
        float:left;
    }
    #bor{
        border-right:none ;
    }
    .imgContainer{
        width:1.5583rem;
        height:1.5583rem;
       
    }
    .imgContainer img{
       width:1.5625rem;
       height:1.5583rem;
         border-bottom:0.0167rem solid black;
        border-right:0.0167rem solid black;
    }
    .txtContent{
        width:1.3083rem;
        padding-left:0.125rem;
        padding-right: 0.125rem;
        height:0.9583rem;
    }
    .text-first{
        width:1.3083rem;
        height:0.1292rem;
        margin-top:0.2083rem;
        font-size:100%;
    }
    .text-second{
        width:1.3083rem;
        height:0.1375rem;
        font-size: 100%;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.0333rem;
    }
    .text-price{
        width:1.3083rem;
        height:0.2rem;
        margin-top:0.0833rem;
        font-size: 0.1375rem;
        color:#1c1717;
    }
    #vipprice{
        color:#ccc;
    }
    .text-vipprice{
        width:1.3083rem;
        height:0.1667rem;
        margin-top:0.0083rem;
        color:#1c1717;
    }
    .text-vipprice span{
        color:#8b572a;
    }
    .text-selfsell{
        width:1.3083rem;
        height:0.1417rem;
       
        font-size: 0.1rem;
        color:#8b572a;
    }
</style>