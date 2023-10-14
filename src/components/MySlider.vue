<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="./img/photoBook/pb1.jpg">
            </div>
            <div class="swiper-slide">
                <img src="./img/photoBook/pb2.jpg">
            </div>
            <div class="swiper-slide">
                <img src="./img/photoBook/pb3.jpg">
            </div>
            <div class="swiper-slide">
                <img src="./img/photoBook/pb4.jpg">
            </div>
            <div class="swiper-slide">
                <img src="./img/photoBook/pb5.jpg">
            </div>
            <div class="swiper-slide">
                <img src="./img/photoBook/pb6.jpg">
            </div>
            <div class="swiper-slide">
                <img src="./img/photoBook/pb7.jpg">
            </div>
            <div class="swiper-slide">
                <img src="./img/photoBook/pb8.jpg">
            </div>
        </div>
    </div>
</template>

<script>
    import MySlider from './MySlider'
    export default {
        components: {MySlider},
        name: 'my-slider',
        modules: [Navigation, Pagination],
         
        }
    

    
    
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
.swiper-slide {
    text-align: center;
}
</style>