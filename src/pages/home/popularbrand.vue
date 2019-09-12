<template>
    <div class="popularbrand">
        <ul>
            <h3>{{title}}</h3>
            <h4>{{text}}</h4>
            <div>
                 <li v-for="(item,index) in list" :key="index"><img :src="item.icon" alt="" ><span>{{item.text}}</span></li>
            </div>
           
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"人气品牌榜",
            text:" 每 | 周 | 排 | 行 ",
            list:[
                {text:"NEIL BARRETT",icon:"https://pic12.secooimg.com/res/topic/6fea14ee5a8d48db8b74f97f192d3e0f.jpg_!!0x0.webp"},
                {text:"NEIL BARRETT",icon:"https://pic12.secooimg.com/res/topic/6fea14ee5a8d48db8b74f97f192d3e0f.jpg_!!0x0.webp"},
                {text:"NEIL BARRETT",icon:"https://pic12.secooimg.com/res/topic/6fea14ee5a8d48db8b74f97f192d3e0f.jpg_!!0x0.webp"},
                {text:"NEIL BARRETT",icon:"https://pic12.secooimg.com/res/topic/6fea14ee5a8d48db8b74f97f192d3e0f.jpg_!!0x0.webp"},
                {text:"NEIL BARRETT",icon:"https://pic12.secooimg.com/res/topic/6fea14ee5a8d48db8b74f97f192d3e0f.jpg_!!0x0.webp"},
                {text:"NEIL BARRETT",icon:"https://pic12.secooimg.com/res/topic/6fea14ee5a8d48db8b74f97f192d3e0f.jpg_!!0x0.webp"},
            ]        
        }
    }
}
</script>
<style >

.popularbrand{
        margin-top:0.0833rem; 
        background: #f5f5f5;
    }
     .popularbrand >ul{
     padding: 0.1667rem 0.125rem ;
     background: white;
     margin-bottom:0.0833rem; 
    }
    
    .popularbrand>ul div{
        height: 2.0833rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .popularbrand>ul div li{
        text-align: center;
        width: 0.875rem;
        height: 0.9167rem;

    }
    .popularbrand>ul li img{
        width: 0.75rem;
        height: 0.75rem;
    }

    .popularbrand h3{
        width: 2.1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bolder;
        font-size: 0.1583rem;
        margin-bottom: 0.0167rem;
    }
    .morpopularbrandelist h4{
        margin-bottom:0.125rem; 
    }
</style>