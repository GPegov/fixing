<template>
    <div class="Parents">
        <h2 class="parentsTitle">Родители</h2>
            <div class="parentsPhotos">
                <div class="husbandsParents">
                    <div class="parentPhotoAndText">
                        <img class="parentPhoto" src="./img/Parents/husbandsFather1.jpg"/>
                        <h4>Сергей Виталиевич Огурцов</h4>
                        <p>Сварщик VI разряда. Почётный работник ОАО "Воркутинский механический завод"</p>
                    </div>
                    <div class="parentPhotoAndText">
                        <img class="parentPhoto" src="./img/Parents/husbandsMother1.jpg"/>
                        <h4>Екатерина Андреевна Огурцова</h4>
                        <p>Швея высшей категории. Сотрудница ОАО "Воркутинская швейная фабрика"</p>
                    </div>
                </div>
                <div class="wifesParents">
                    <div class="parentPhotoAndText">
                        <img class="parentPhoto" src="./img/Parents/wifesFather1.jpg"/>
                        <h4>Олег Вениаминович Трубецкой</h4>
                        <p>Генеральный директор ООО «Газпром трансгаз Санкт-Петербург»</p>
                    </div>
                    <div class="parentPhotoAndText">
                        <img class="parentPhoto" src="./img/Parents/wifesMother1.jpg"/>
                        <h4>Марианна Владимировна Трубецкая</h4>
                        <p>Владелица сети салонов цветов "Гортензия"</p>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
export default {
    name: 'my-parents'
}
</script>


<style scoped>

.parentsTitle {
    color: rgb(68, 68, 68);
    margin-top: 35px;
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    font-size: 22pt;
    font-family:'Circe Light', sans-serif !important;
}
.parentPhotoAndText {
    
    padding-right: 20px;
    text-align: center;
}


@media screen and (min-width: 500px) {
.parentsPhotos {
    display: flex;
    flex-direction: row;
}
.husbandsParents {
    display: flex;
    flex-direction: column;
}
.wifesParents {
    display: flex;
    flex-direction: column;
}
}
</style>