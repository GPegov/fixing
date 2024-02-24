<template>

    <h1 class="mainHeader">План рассадки гостей</h1>
    <div class="table">
        <h2 class="tableHeader">
            Стол №1
        </h2>
        <div class="tableGuests">
            <p class="tableDescription">Стол молодожёнов</p>
            <p>{{ storePersonification.bridesName }}</p>
            <p>{{ storePersonification.groomsName }}</p>
        </div>
    </div>

    <div class="table">
        <h2 class="tableHeader">
            Стол №2
        </h2>
        <div class="tableGuests">
            <p class="tableDescription">Стол родителей</p>
            <p>{{ storePersonification.bridesFatherWithMiddleName }}</p>
            <p>{{ storePersonification.bridesMotherWithMiddleName }}</p>
            <p>{{ storePersonification.groomsFatherWithMiddleName }}</p>
            <p>{{ storePersonification.groomsMotherWithMiddleName }}</p>
        </div>
    </div>

    <div class="table">
        <h2 class="tableHeader">
            Стол №4
        </h2>
        <div class="tableGuests">
            <p class="tableDescription">Стол родственников</p>
            <p>{{ storePersonification.nephew_1 }}</p>
            <p>{{ storePersonification.nephew_2 }}</p>
            <p>{{ storePersonification.nephew_3 }}</p>
            <p>{{ storePersonification.nephew_4 }}</p>
            <p>{{ storePersonification.nephew_5 }}</p>
            <p>{{ storePersonification.nephew_6 }}</p>
            <p>{{ storePersonification.nephew_7 }}</p>
            <p>{{ storePersonification.nephew_8 }}</p>
        </div>
    </div>

    <div class="table">
        <h2 class="tableHeader">
            Стол №5
        </h2>
        <div class="tableGuests">
            <p class="tableDescription">Стол друзей</p>
            <p>{{ storePersonification.friend_1 }}</p>
            <p>{{ storePersonification.friend_2 }}</p>
            <p>{{ storePersonification.friend_3 }}</p>
            <p>{{ storePersonification.friend_4 }}</p>
            <p>{{ storePersonification.friend_5 }}</p>
            <p>{{ storePersonification.friend_6 }}</p>
            <p>{{ storePersonification.friend_7 }}</p>
            <p>{{ storePersonification.friend_8 }}</p>
        </div>
    </div>

    
</template>

<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>

<style>

</style>