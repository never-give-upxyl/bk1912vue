<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">{{url[0]}}</div>
        <div class="swiper-slide">{{url[1]}}</div>
 
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        url:["https://pic12.secooimg.com/res/topic/fef795c33d4f491e89dedeb314fe489c.jpg_!!0x0.webp",
            "https://pic12.secooimg.com/res/topic/1d6ee4e5c8954020a3e998f5c27a6797.jpg_!!0x0.webp"
        ]
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
}

</script>
<style scoped>
.swiper-container {
    width: 100%;
    background: #ccc;
    height: 2.7083rem;
}
</style>