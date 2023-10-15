<template>
    <h2 class="pbHeader">Фотокнига</h2>
    <div class="photoBook">
        <div class="photoBookRow">
            <img class="pbPhoto" src="./img/photoBook/pb1.jpg"/>
            <img class="pbPhoto" src="./img/photoBook/pb2.jpg" alt=""/>
        </div>
        <div class="photoBookRow">
            <img class="pbPhoto" src="./img/photoBook/pb4.jpg" alt=""/>
            <img class="pbPhoto" src="./img/photoBook/pb5.jpg" alt=""/>
        </div>
        <div class="photoBookRow">
            <img class="pbPhoto" src="./img/photoBook/pb3.jpg" alt=""/>
            <img class="pbPhoto" src="./img/photoBook/pb6.jpg" alt=""/>
        </div>
        <div class="photoBookRow">
            <img class="pbPhoto" src="./img/photoBook/pb7.jpg" alt=""/>
            <img class="pbPhoto" src="./img/photoBook/pb8.jpg" alt=""/>
        </div>
        
    </div>
</template>


<script>


export default {
    name: 'my-photoBook',
    

}
</script>


<style scoped>
.photoBookRow {
    display: flex;
    flex-direction: row;
    max-width: 50%;

}


.photoBook {
    display: flex;
    flex-direction: column;

}
.pbPhoto{
   max-width: 100%;
   
}
img {
    box-sizing: border-box;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
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
.photoBookRow {
    max-width: 100%;
    flex-direction: column;
}

}
</style>