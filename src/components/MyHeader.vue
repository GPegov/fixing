<template>
    
    <div class="invitation">
        <img class="invitHeader" src="./img/7.png" alt="">
        <h2 class="theDate">{{ storePersonification.dateOfMarriage }}</h2>
        
        <p class="invitationText">{{ storePersonification.headingParagraphSugaryIntro_1 }}</p>
        <p class="invitationText">{{ storePersonification.headingParagraphSugaryIntro_2 }}</p>
        <p class="invitationText">{{ storePersonification.headingParagraphSugaryIntro_3 }}</p>
        

    </div>

</template>


<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>


<style scoped>
.invitation {
color: rgb(68, 68, 68);
display: flex;
flex-direction: column;

}
.theDate {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    font-size: 16pt;
    font-family:'Circe Light', sans-serif !important;
    text-align: center;
}
.invitationText {
    text-align: center;
    -webkit-font-smoothing: antialiased;
    font-family:'Segoe UI', Tahoma, Verdana, sans-serif;
    padding-left: 15px;
    padding-right: 15px;

}
.invitHeader {
    padding-top: 50px;
    padding-bottom: 50px;
}
</style>