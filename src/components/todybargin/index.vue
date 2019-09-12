<template>
  <div>
      <header>
          <ul>
              <li>
                  <span>奢侈大牌</span>
                  <span>特价三折起</span>
              </li>
              <li>
                  <span>9.11</span>
                  <span>抢购中</span>
              </li>
              <li>
                  <span>奢侈大牌</span>
                  <span>特价三折起</span>
              </li>
              <li>
                  <span>奢侈大牌</span>
                  <span>特价三折起</span>
              </li>
              <li>
                  <span>奢侈大牌</span>
                  <span>特价三折起</span>
              </li>
             
          </ul>
      </header>
    <div v-for="(item,index) in goodslist" :key="index" class="todybargin">
      <ul class="tody">
        <img :src="item.icon" alt />
        <li class="text">
          <p>{{item.title}}</p>
          <p>{{item.text}}</p>
          <p>{{item.price}}</p>
          <p>{{item.vip}}</p>
          <p>{{item.oldprice}}<span>{{11111}}</span> </p>
          <p>马上抢</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodslist: [
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        },
        {
          icon:
            "https://pic12.secooimg.com/product/374/374/2019/0909/9a041cd713cb462985f482d2bda8afc8.jpg",
          title: "Alexander McQueen",
          text:
            "亚历山大麦昆/Alexander McQueen 19年秋冬 百搭 男性 红色 男士短POLO 575484 QNZ82 0905",
          price: "省￥830",
          oldprice: "1,737",
          vip: "2567"
        }
      ]
    };
  }
};
</script>
<style scoped>
header{
    height: 0.4833rem;
    background: #e50000;
}
header ul{
    display: flex;
    height: 100%;

}
header ul li{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: rgba(255, 255, 255, 0.66)
}
header ul li span:nth-of-type(1){
    font-size: 0.1417rem;
}
header ul li span:nth-of-type(2){
    font-size:0.1rem 
}
.tody {
    background: white;
   padding: 0.0833rem;
  display: flex;
  position: relative;
}
.todybargin {
     background: #f5f5f5;
    padding: 0.0833rem 0.0833rem 0;
 
  
}
.todybargin img {
  width: 0.8833rem;
  margin-right:0.0833rem;
}
.todybargin li {
  background: white;
}
.tody .text p:nth-of-type(1){
    font-size: 0.1167rem;
}
.tody .text p:nth-of-type(2){
    font-size: 0.1083rem;
    width: 1.7833rem;
    height: 0.15rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}
.tody .text p:nth-of-type(3){
    margin-top:0.1625rem; 
    font-size: 0.1167rem;
    width: 0.3958rem;
    height: 0.1167rem;
    line-height: 0.1167rem;
    font-size:12px; 
    color: white;
    background: #ff3700;
    border-radius:14px/7px 14px 14px 0 ; 
}
.tody .text p:nth-of-type(4){
    font-size: 0.1583rem;
    color: #e50000;

}
.tody .text p:nth-of-type(5){
    font-size: 0.0917rem;
    color: #888;
    text-decoration: line-through;
}
.tody .text p:nth-of-type(6){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.625rem;
    height: 0.25rem;
    background: #ff6700;
    color: white;
    position: absolute;
    right: 0.0817rem;
    bottom:0.225rem
}
.tody .text p:nth-of-type(5) span{
    display: inline-block;
    width: 0.625rem;
    height: 0.125rem;
    text-align: center;
    margin-left:0.97rem 
}
</style>