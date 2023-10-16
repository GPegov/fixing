<template>
    <div class="participation">
            <label >
                <input type="radio" name="askGuests[willbe]" value="yes" checked>
                Подтверждаю присутствие
            </label>
            <label >
                <input type="radio" name="askGuests[willbe]" value="no">
                К сожалению, присутствовать не смогу
            </label>
        </div>

    <div class="askWillGuestsCome" data-type="checkbox" data-value="1">
        
        <div class="pair">
            <div>
                <label>
                    <input type="radio" name="askGuests[askPair]" value="no">Буду один / одна
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="askGuests[askPair]" value="yes" checked>Буду с парой
                </label>
            </div>
        </div>
        <div class="childrenAndCars" >
            <div>
                <label>
                    <input type="radio" name="askGuests[childrenCar]" value="no">С детьми
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="askGuests[childrenCar]" value="yes" checked>Без детей
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="askGuests[childrenCar]" value="no">На машине
                </label>
            </div> 
        </div>
        <div class="Food">
            <div>
                <label>
                    <input type="radio" name="askGuests[askFood]" value="yes" checked>Не важно
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="askGuests[askFood]" value="no">Мясо
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="askGuests[askFood]" value="no">Рыба
                </label>
            </div> 
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'my-askGuests'
    }
</script>

<style scoped>
.askWillGuestsCome {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
}
.participation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    max-width: 400px;
}
.pair {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.childrenAndCars {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.Food {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>