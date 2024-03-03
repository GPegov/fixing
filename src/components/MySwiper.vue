<template>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
      
      :effect="'fade'"
      :loop="true"
      :autoplay="true"
      :lazy="true"
      :autoHeight="true"
      

      
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >

    <swiper-slide>
      <img src="./img/photoBook/pb1.jpg" loading="lazy"/>
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>;
    <swiper-slide>
      <img src="./img/photoBook/pb2.jpg" loading="lazy"/>
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>;
    <swiper-slide>
      <img src="./img/photoBook/pb3.jpg" loading="lazy"/>
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>;
    <swiper-slide>
      <img src="./img/photoBook/pb4.jpg" loading="lazy"/>
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>;
    <swiper-slide>
      <img src="./img/photoBook/pb5.jpg" loading="lazy"/>
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>;
    <swiper-slide>
      <img src="./img/photoBook/pb6.jpg" loading="lazy"/>
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>;
    <swiper-slide>
      <img src="./img/photoBook/pb7.jpg" loading="lazy"/>
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>;
    <swiper-slide>
      <img src="./img/photoBook/pb8.jpg" loading="lazy"/>
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>;
    
      ...
    </swiper>
  </template>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css/effect-fade';
    import { A11y, Autoplay, EffectFade } from 'swiper/modules';
    import 'swiper/css';
    

    export default {
      components: {
        Swiper,
        SwiperSlide,
        
      },
      setup() {
        return {
          modules: [ A11y, Autoplay, EffectFade],
        };
      },
    };
    
  </script>
<style scoped>
img {
  width: 100%;
}
.swiper {
    overflow: hidden;
}
@media screen and (max-width: 500px) {
img {
  width: 150%;
  
}
}
</style>