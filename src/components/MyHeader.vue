<template>
    
    <div class="invitation">
        <img class="invitHeader" src="./img/7.png" alt="">
        <h2 class="theDate">Торжество состоится 30 февраля 2024г. в 15.00</h2>
        
        <p class="invitationText">Все вы знаете их как любимых родственников, верных друзей и надёжных коллег но наступит день, и мы больше не сможем воспринимать их отдельно друг от друга!</p>
        <p class="invitationText">В этот день два любящих сердца соединятся воедино, и появится новая, счастливая семья!</p>
        <p class="invitationText">Они будут рады видеть Вас и Ваших спутников на своём свадебном торжестве!</p>
        

    </div>

</template>


<script>
export default {
    name: 'my-header',
    
}
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