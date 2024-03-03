<template>

    <h1 class="mainHeader">План рассадки гостей</h1>

    <div class="TableRows">
        <div class="row1">
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
        </div>
        <div class="row2">
            <div class="table">
                <h2 class="tableHeader">
                    Стол №3
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
                    Стол №4
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
        </div>
    </div>

    
    

</template>

<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>

<style>
.table {
    border: 1px solid teal;
    border-radius: 7px;
    margin: 20px;
    padding: 20px;
    max-width: 200px;
    
}

.tableHeader {
    color: rgb(31, 24, 24);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.tableDescription {
    font-size: 14pt;
    color: rgb(13, 119, 133);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
}
.TableRows{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.row1 {
    display: flex;
    flex-direction: column;
}
.row2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
@media screen and (max-width: 500px) {
.TableRows{
display: flex;
flex-direction: column;
justify-content: space-around;
}
}
</style>