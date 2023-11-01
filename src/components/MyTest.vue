<template>
    <Swiper
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
    <SwiperSlide v-for="n in 10" :key="n">
      <img :src="`https://placehold.co/800x400`">
    </SwiperSlide>;
    
    </Swiper>
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
      
      
      
      
      
   