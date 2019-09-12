<template>
  <header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </header>
</template>
<script>
name: "Header";
export default {
  data() {
    return {
     
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop:true, // 循环模式选项
      autoplay: true, 
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style >

.swiper-container {
    width: 100%;
    background: #ccc;
    height: 2.7083rem;
}  
</style>