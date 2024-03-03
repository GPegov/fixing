<template>
    <div class="app">
        <my-swiper />
        <my-header />
        <MyAskGuests />
        <my-parents />
        <MySeatingPlan/>
        <my-place />
    </div>
</template>

<script setup>

import MyHeader from '@/components/MyHeader.vue';
import MyPlace from '@/components/MyPlace.vue';
import MyParents from '@/components/MyParents.vue';
import MyAskGuests from '@/components/MyAskGuests.vue';
import MySwiper from './components/MySwiper.vue';     
import MySeatingPlan from './components/MySeatingPlan.vue';


</script>



<style>
* {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
}
.app {
    width: 100%;
    
    margin-left: auto;
    margin-right: auto;
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


}
.app__btns {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 20px;
}
.addGuest {
    font-size: 18pt;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 10px;
}
.header_place {
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    display: flex;
    text-align: center;
    font-size: 22pt;
    font-family:'Circe Light', sans-serif !important;
}
.placeDescription {
    display: flex;
    flex-direction: row;
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    display: flex;
    text-align: center;
    font-family:'Circe Light', sans-serif !important;

}
.placeDescription1 {
    display: flex;
    flex-direction: column;
    max-width: 50%
}
.placeDescription2 {
    display: flex;
    flex-direction: column;
}

</style>