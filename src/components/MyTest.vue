<template>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
    
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
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
    
    import { Swiper, SwiperSlide,  } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  
    
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
  
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
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
    };
  </script>
  <style scoped>
  img {
    max-width: 100%;
  }
  
  </style>
      
      
      
      
      
   