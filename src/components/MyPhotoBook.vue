<template>
    <h2 class="pbHeader">Фотокнига</h2>
    <div class="photoBook">
        <div class="row1">
            <img class="pbPhoto" src="./img/photoBook/pb1.jpg"/>
            <img class="pbPhoto" src="./img/photoBook/pb2.jpg" alt=""/>
            <img class="pbPhoto" src="./img/photoBook/pb3.png" alt=""/>
            <img class="pbPhoto" src="./img/photoBook/pb4.jpg" alt=""/>
            <img class="pbPhoto" src="./img/photoBook/pb5.jpg" alt=""/>
            <img class="pbPhoto" src="./img/photoBook/pb6.jpg" alt=""/>
        </div>
        
    </div>
</template>


<script>
import VueExpandableImage from 'vue-expandable-image';

export default {
    name: 'my-photoBook',
    components: { VueExpandableImage }

}
</script>


<style scoped>
.row1 {
    display: flex;
    flex-wrap: wrap;
    max-width: 50%;
    padding-left: 10px;
    padding-right: 10px;

    
}


.photoBook {
    display: flex;
    flex-direction: row;
    
    
    
}
.pbPhoto{
   max-width: 100%;
   padding-top: 15px;
   
   
    
}
.pbHeader{
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    font-size: 22pt;
    font-family:'Circe Light', sans-serif !important;
    
}

@media screen and (max-width: 500px){
.photoBook {
    flex-direction: column;
}
.row1 {
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
}
.row2 {
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
}
}
</style>