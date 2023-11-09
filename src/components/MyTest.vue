<template>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
      
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :loop="true"
      
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      
    >
    <swiper-slide v-for="photo in photos">
      <img :src="`/src/components/img/photoBook/${photo}`">
    </swiper-slide>;
    
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
  const photos = [
    "pb1.jpg",
    "pb2.jpg",
    "pb3.jpg",
    "pb4.jpg",
    "pb5.jpg",
    "pb6.jpg",
    "pb7.jpg",
    "pb8.jpg",
    
  ];
  </script>
  <style scoped>
  img {
    max-width: 100%;
    
  }
 

  </style>
      
      
      
      
      
   