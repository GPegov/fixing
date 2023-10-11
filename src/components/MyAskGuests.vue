<template>
    

    <div class="askWillGuestsCome">
        <label >
            <input type="radio" name="askGuests[willbe]" value="yes" checked>
            Подтверждаю присутствие
        </label>
        <label >
                <input type="radio" name="askGuests[willbe]" value="no">
            К сожалению, присутствовать не смогу
        </label>
    </div>
    <div class="extraGuests" data-type="checkbox" data-value="1">
        <div class="pair">
            <label>
                <input type="radio" checked>Буду один / одна
            </label>
            <label>
                <input type="radio">Буду с парой
            </label>
        </div>
        <div class="childrenAndCars">
            <label>
                <input type="radio" checked>С детьми
            </label>
            <label>
                <input type="radio">На машине
            </label>
        </div>
        <div class="Food">
            <label>
                <input type="radio" checked>Не важно
            </label>
            <label>
                <input type="radio">Мясо
            </label>
            <label>
                <input type="radio">Рыба
            </label>
        </div>

        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>