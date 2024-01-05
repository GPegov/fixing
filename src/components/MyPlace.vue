<template>
    <h2 class="header_place">Место проведения мероприятия</h2>
        <div class="placeDescription">
            <div class="placeDescription1">
                <h3>Сбор Гостей</h3>
                <p>Территориальный отдел ЗАГСа г. Воркуты</p>
                <p>Адрес: г. Воркута, ул. Ленина д. 54</p> 
            </div>
            <div class="placeDescription2">
                <h3>Торжество</h3>
                <p>Ресторан "Додо Пицца"</p>
                <p>Адрес: г. Воркута, ул. Ленина д. 35</p> 
            </div>
        </div>
</template>

<script setup>
    
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