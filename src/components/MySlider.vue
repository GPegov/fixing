<template>
    <swiper
      :slides-per-view="1.2"
      :space-between="30"
      
    >
    <swiper-slide><img src="./img/photoBook/pb1.jpg"></swiper-slide>;
    <swiper-slide><img src="./img/photoBook/pb2.jpg"></swiper-slide>;
    <swiper-slide><img src="./img/photoBook/pb3.jpg"></swiper-slide>;
    <swiper-slide><img src="./img/photoBook/pb4.jpg"></swiper-slide>;
    <swiper-slide><img src="./img/photoBook/pb5.jpg"></swiper-slide>;
    <swiper-slide><img src="./img/photoBook/pb6.jpg"></swiper-slide>;
    <swiper-slide><img src="./img/photoBook/pb7.jpg"></swiper-slide>;
    <swiper-slide><img src="./img/photoBook/pb8.jpg"></swiper-slide>;
      ...
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
    };
  </script>