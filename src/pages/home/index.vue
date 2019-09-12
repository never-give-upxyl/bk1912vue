<template>
    <div class="home">
        <div class="search">{{text}}</div>
        <Header/>
        <Channel/>
        <Banner/>
        <Sliderbanner/>
        <Morelist/>
    </div>
</template>
<script>
import Header from "./header"
import Channel from "./channel";
import Banner from "./banner";
import Sliderbanner from "./sliderbanner";
import Morelist from "./morelist";
export default {
    name:"HomeIndex",
    data(){
        return{
           text: "热门  '999元三件'"
        }
    },
    components:{
        Header,
        Channel,
        Banner,
        Sliderbanner,
        Morelist
    }
}
</script>
<style>
 .search {
    font-size: 0.1333rem;
    background: url("http://s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png")
    no-repeat 0.0833rem center;
    line-height: 0.2792rem;
    border: 0px solid #cccccc;
    width: 2.875rem;
    height: 0.2792rem;
    background-color: #f5f5f5;
    background-size: 20px 20px;
    color: #ccc;
     margin: 5px auto;
    padding-left: 0.3333rem;
}
</style>