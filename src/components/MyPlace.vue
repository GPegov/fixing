<template>
    <h2 class="mainHeader">Место проведения мероприятия</h2>
        <div class="placeDescription">
            <div class="placeDescription1">
                <h3>Сбор Гостей</h3>
                <p></p>
                <p></p> 
            </div>
            <div class="placeDescription2">
                <h3>Торжество</h3>
                <p>{{ storePersonification.baquetPlaceName }}</p>
                <p>{{ storePersonification.banquetAddress }}</p> 
            </div>
        </div>
</template>

<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>

<style lang="scss" scoped>
.header_place {
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    font-size: 22pt;
    font-family:'Circe Light', sans-serif !important;
}
.placeDescription {
    display: flex;
    flex-direction: row;
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    justify-content: center;
    
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