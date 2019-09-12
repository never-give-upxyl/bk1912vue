<template>
    <div class="channel">
        <router-link :to="item.path" tag="ul"
        v-for="(item,index) in channel" :key="index">
            <li>{{item.text}}</li>
            <li>{{item.title}}</li> 
        </router-link>
   <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            channel:[
                {text:"热门打牌",title:"New Arrival",path:"/home/europe"},
                {text:"热门打牌",title:"New Arrival",path:"/home/europe"},
                {text:"热门打牌",title:"New Arrival",path:"/home/europe"},
                {text:"热门打牌",title:"New Arrival",path:"/home/europe"},
                {text:"二手捡漏",title:"New Arrival",path:"/oldgoods"},
                {text:"欧洲直邮",title:"New Arrival",path:"/europe"},
            ]
        }       
    }
}
</script>
<style>
    .channel{
        padding: 0.2083rem 0.125rem;
        display: flex;
        flex-wrap: wrap;
        /* margin-bottom:0.0833rem;  */
    }
    .channel ul{
        width:33%;
        text-align: center;
    }
    .channel ul:nth-of-type(n+4){
        margin-top:0.225rem; 
    }
    .channel ul li:nth-of-type(1){
        height: 0.1667rem;
        font-size: 0.1167rem;
    }
    .channel ul li:nth-of-type(2){
        margin-top: 0.0208rem;
        font-size: 0.0833rem;
    }
</style>