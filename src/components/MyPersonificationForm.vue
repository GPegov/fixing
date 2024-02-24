<template>
    <h2>Форма для персонификации сайта</h2>
    
    <div class="BrideAndGroom">
        <input 
        v-model="storePersonification.bridesName"
        type="text" 
        placeholder="Имя невесты">

        <input 
        v-model="storePersonification.groomsName"
        type="text" 
        placeholder="Имя жениха">
    </div>

<!--Parents-->

    <div class="Parents">
        <input 
        v-model="storePersonification.bridesFatherFullName"
        type="text" 
        placeholder="Полное имя отца невесты">
        <input 
        v-model="storePersonification.bridesFatherWithMiddleName"
        type="text" 
        placeholder="Имя-отчество отца невесты">
        <input 
        v-model="storePersonification.bridesFatherOccupation"
        type="text" 
        placeholder="Род занятий отца невесты">

        <input 
        v-model="storePersonification.bridesMotherFullName"
        type="text" 
        placeholder="Полное имя матери невесты">
        <input 
        v-model="storePersonification.bridesMotherWithMiddleName"
        type="text" 
        placeholder="Имя-отчество матери невесты">
        <input 
        v-model="storePersonification.bridesMotherOccupation"
        type="text" 
        placeholder="Род занятий матери невесты">

        <input 
        v-model="storePersonification.groomsFatherFullName"
        type="text" 
        placeholder="Полное имя отца жениха">
        <input 
        v-model="storePersonification.groomsFatherWithMiddleName"
        type="text" 
        placeholder="Имя-отчество отца жениха">
        <input 
        v-model="storePersonification.groomsFatherOccupation"
        type="text" 
        placeholder="Род занятий отца жениха">

        <input 
        v-model="storePersonification.groomsMotherFullName"
        type="text" 
        placeholder="Полное имя матери жениха">
        <input 
        v-model="storePersonification.groomsMotherWithMiddleName"
        type="text" 
        placeholder="Имя-отчество матери жениха">
        <input 
        v-model="storePersonification.groomsMotherOccupation"
        type="text" 
        placeholder="Род занятий матери жениха">
    </div>

<!--Nephews-->

    <div class="Nephews">
        <input 
        v-model="storePersonification.nephew_1"
        type="text" 
        placeholder="Имя родственика №1">

        <input 
        v-model="storePersonification.nephew_2"
        type="text" 
        placeholder="Имя родственика №2">

        <input 
        v-model="storePersonification.nephew_3"
        type="text" 
        placeholder="Имя родственика №3">

        <input 
        v-model="storePersonification.nephew_4"
        type="text" 
        placeholder="Имя родственика №4">

        <input 
        v-model="storePersonification.nephew_5"
        type="text" 
        placeholder="Имя родственика №5">

        <input 
        v-model="storePersonification.nephew_6"
        type="text" 
        placeholder="Имя родственика №6">

        <input 
        v-model="storePersonification.nephew_7"
        type="text" 
        placeholder="Имя родственика №7">

        <input 
        v-model="storePersonification.nephew_8"
        type="text" 
        placeholder="Имя родственика №8">
    </div>

<!--Friends-->

    <div class="Friends">
        <input 
        v-model="storePersonification.friend_1"
        type="text" 
        placeholder="Имя друга №1">

        <input 
        v-model="storePersonification.friend_2"
        type="text" 
        placeholder="Имя друга №2">

        <input 
        v-model="storePersonification.friend_3"
        type="text" 
        placeholder="Имя друга №3">

        <input 
        v-model="storePersonification.friend_4"
        type="text" 
        placeholder="Имя друга №4">

        <input 
        v-model="storePersonification.friend_5"
        type="text" 
        placeholder="Имя друга №5">

        <input 
        v-model="storePersonification.friend_6"
        type="text" 
        placeholder="Имя друга №6">

        <input 
        v-model="storePersonification.friend_7"
        type="text" 
        placeholder="Имя друга №7">

        <input 
        v-model="storePersonification.friend_8"
        type="text" 
        placeholder="Имя друга №8">
    </div>

<!--Heading-->

    <div class="Heading">
        <input 
        v-model="storePersonification.namesOfBrideAndGroomHeading"
        type="text" 
        placeholder="Имена жениха и невесты красивым шрифтом">

        <input 
        v-model="storePersonification.dateOfMarriage"
        type="text" 
        placeholder="Дата мероприятия">

        <input 
        v-model="storePersonification.headingParagraphSugaryIntro_1"
        type="text" 
        placeholder="Вступительный параграф №1">

        <input 
        v-model="storePersonification.headingParagraphSugaryIntro_2"
        type="text" 
        placeholder="Вступительный параграф №2">

        <input 
        v-model="storePersonification.headingParagraphSugaryIntro_3"
        type="text" 
        placeholder="Вступительный параграф №3">

    </div>

<!--Ceremony-->

    <div class="Ceremony">
        <input 
        v-model="storePersonification.ceremonyPlaceName"
        type="text" 
        placeholder="Название места церемонии">

        <input 
        v-model="storePersonification.ceremonyAddress"
        type="text" 
        placeholder="Адрес места церемонии">
    </div>

<!--Banquet-->

    <div class="Banquet">
        <input 
        v-model="storePersonification.baquetPlaceName"
        type="text" 
        placeholder="Название места банкета">

        <input 
        v-model="storePersonification.banquetAddress"
        type="text" 
        placeholder="Адрес места банкета">
    </div>

</template>

<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>