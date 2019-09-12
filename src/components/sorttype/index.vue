<template>
    <div class="sort">
        <dl v-for="(item,index) in names" :key="index">
            <dt>{{item}}</dt>
            <dd v-for="(item1,index1) in sortList[index] " :key="index1">{{item1}}</dd>
        </dl>
    </div>
    
</template>
<script>

export default {
    data(){
        return{
            names:["包装袋&Bags","服装宝石&clothes","玩具乐高&games","吃喝玩乐"],
            sortList:[
                ["danjianb","danjianb","danjianb","danjianb","danjianb","danjianb","danjianb","danjianb"],
                ["danji12anb","da23njianb","da43nanb","danjia5nb","danji65anb","dan67jianb","danji8b","danjianb"],
                ["danjianb","danjianb","danjianb","danjianb","danjianb","danjianb","danjianb"],
                ["danjianb","danjianb","danjianb","danjianb","danjianb","danjianb","danjianb"],
                ["danjianb","danjianb","danjianb","danjianb","danjianb","danjianb","danjianb"],
            ]
        }
    },
    // async created(){
    //     let data=await sorttypeApi();
    //     console.log(data);
    // },
}
</script>
<style scoped>
    .sort{
        width: 100%;
        padding-top: 0.375rem;
        background-color:#e0dede;
    }
    dl{
        
        margin-bottom: 0.8rem;;
    }
    .sort dt{
        width: 100%;
        height: 0.266rem;
        text-align: center;
        line-height: 0.266rem;
        font-size: 0.116rem;
       color: #474747;
      
       margin-bottom:0.071rem; 
    }
    .sort dd{
        width:25%;
        
        height: 0.333rem;
        float: left;
        text-align: center;
        background-color: white;
        line-height: 0.333rem;
    }
</style>