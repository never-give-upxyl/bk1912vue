<template>
  <div>
    <div id="head">
      <router-link to="/details" class="backBtn" tag="div">
        <img src="../../../public/img/backBtn.png" alt />
      </router-link>
      <p>品牌优选</p>
      <div class="list">
        <p>编辑</p>
      </div>
    </div>
    <div class="center">
        <div class="content">
          <div class="sigleChoose"><label  for="" ><input type="checkbox" name="" ></label></div>
          <div class="imgContainer">
              <img src="https://pic.secoo.com/product/240/240/2019/0525/c49b25e1827448e880b4458bf8a5328c.png" alt="">
          </div>
          <div class="txt">
             <div class="goodsName">Louis Vuitton/路易威登</div>
             <div class="introduce">【包邮包税】Louis Vuitton/路易威登  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021</div>
             <div class="colorName">颜色: 红色系</div>
             <div class="tags">
              <span>仅剩一件</span>
              <span>海外</span>
           </div>
 <div class="num">
   <div class="price">￥13,702</div>
   <div class="borderline">
        <div class="leftDiv">-</div>
        <input type="text" :value="1" class="inputBox"/>
        <div class="leftDiv">+</div>
   </div>
      </div>
          </div>
        </div>
        <div class="bottomColor"></div>
    </div>
    <div class="bottom">
        <div class="selectAll">
          <input type="checkbox">
          <span>全选</span>
        </div>
        <div class="priceArea">￥0</div>
        <div class="buy">去结算</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

#head {
  width: 100%;
  height: 0.3667rem;

  display: flex;
  top: 0rem;
  padding-bottom: 0.3667rem;
  background: white;
  /* background:rgb(109, 105, 105); */
}
.backBtn {
  width: 0.4583rem;
  height: 0.3667rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backBtn img {
  width: 0.1917rem;
  height: 0.1917rem;
}
#head p {
  width: 2.2083rem;
  height: 0.3667rem;
  text-align: center;
  font-size: 0.1417rem;
  line-height: 0.3667rem;
  color: black;
  font-family: STHeiti, Helvetica Neue;
}
.list {
  width: 0.4583rem;
  height: 0.3667rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list img {
  width: 0.1917rem;
  height: 0.1917rem;
}
.center{
    width:100%;
    
    overflow:hidden;
}
.content{
    width:3rem;
    height:1.3333rem;
    color:black;
     display: flex;
     align-items: center;
}
.sigleChoose{
  width:0.3333rem;
  height:1.3333rem;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 0.125rem;
}
.imgContainer img{
  width:0.9167rem;
  height:0.9167rem;
  background:#ccc;
  margin-left:0.0833rem;
  margin-right:0.0533rem;
}
.txt{
  width:1.7917rem;
  height:0.9167rem;
}
.goodsName{
  width:1.7917rem;
  height:0.1417rem;
}
.introduce{
  width:1.7917rem;
  height:0.1417rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.colorName{
   width:1.7917rem;
  height:0.1417rem;
}
.tags{
  width:1.7917rem;
  height:0.125rem;
  margin-top:0.0417rem;
  margin-bottom:0.0917rem;
}
.tags span{
  padding-left:0.025rem;
  padding-right: 0.025rem;
  margin-right:0.0417rem;
  background-color:#f8a120;
}
.price{
  font-size: 0.1417rem;
  color:#000b0b;
  margin-right:0.3333rem;
}
.num{
  display: flex;
  height:0.2083rem;
  /* justify-content: space-between; */
}
.borderline{
  width:0.7667rem;
  height:0.2083rem;
  display: flex;
  border:solid 0.0042rem #ccc;
}
.leftDiv{
  width:0.1917rem;
  height:0.1917rem;
  line-height:0.1917rem;
  background:white;
  text-align: center;
}
.inputBox{
  width:0.3333rem;
  height:0.1917rem;
  border:none;
  text-align: center;
  margin:0;
}
.bottomColor{
  width:100%;
  height:0.1267rem;
  background:#ccc;
}
.bottom{
  width:100%;
  height:0.4167rem;
  position:fixed;
  bottom:0;
  background:yellow;
  display: flex;
}
.selectAll{
  width:0.4167rem;
  height:0.4167rem;
  padding-left:0.0958rem;
  padding-right:0.0958rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.priceArea{
  width:1.5667rem;
  height:0.4167rem;
  padding-right: 0.0833rem;
  display: flex;
  justify-content: flex-end;
  font-size: 0.125rem;
  align-items: center;
  font-size: 0.1417rem;
}
.buy{
  width:1.0833rem;
  height:0.4167rem;
  background:#ccc;
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
}
</style>