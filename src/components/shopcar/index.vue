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
        <div class="content">"地方撒的发生发大水发的说法的说法是防守打法"</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
    height:1.425rem;
    overflow:hidden;
}
.content{
    width:3.75rem;
    background:yellow;
    height:2.0833rem;
    overflow-x: scroll;
    color:black;
}
</style>