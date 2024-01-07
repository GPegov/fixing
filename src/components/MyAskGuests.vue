<script setup>
import { ref } from 'vue'
import { useVariables } from '@/stores/Variables.js'

const storeVariables = useVariables()

let guests = ref([])
const guest = {name: '', surname: ''}
const saveGuest = ()=>{
    guests.value.push({id:Date.now(), 
    name: guest.name,
    surname: guest.surname
    })
    guest.name = ''
    guest.surname = ''
    
}
const askGuestsResult = ()=>{
    guests.value.push({
    id:Date.now(),
    properties: familyProperties.value})
}

const familyProperties = ref({
  alone: false,
  couple: false,
  withChildren: false,
  withoutChildren: false,
  onCar: false,
  needTransfer: false,
  foodDoesntMatter: false,
  foodMeat: false,
  foodFish: false,
  })
const formResults = ref([])  

let deleteGuest = () => {
  guests.value = guests.value.filter(guest => guest.id !== guest.id)
  if (guests.value.length === 0) {
        familyProperties.value = {
            alone: false,
            couple: false,
            withChildren: false,
            withoutChildren: false,
            onCar: false,
            needTransfer: false,
            foodDoesntMatter: false,
            foodMeat: false,
            foodFish: false,
        }
  }
}



</script>
 


<template>
    <div
    class="guestForm"
    >
        <div class="addGuestsForm">
            <div class="inputField">
                <input 
                    class="inputs"
                    v-model="guest.name" 
                    type="text" 
                    placeholder="Имя Гостя"
                >
                <input 
                    class="inputs"
                    v-model="guest.surname" 
                    type="text" 
                    placeholder="Фамилия Гостя"
                >
            </div>
        
            <button
               class="btn addGuestbtn"
               @click="saveGuest"
            >
                Добавить гостя
            </button>

        </div>



        <div class="askGuests">
            
            <div class="guestsList">
                <div 
                    class="guestItem" 
                    v-for = 'guest in guests'
                    :key="guest.id"
                    >
                        <div class="guestName">
                            <div class="name">Имя: {{ guest.name }}</div>     
                            <div class="surname">Фамилия: {{ guest.surname }}</div> 
                        </div>
                        <div class="removeGuestDiv">
                            <button 
                            class="removeGuestBtn" 
                            @click="deleteGuest"
                            >
                            Удалить
                            </button>
                        </div>
                </div>
            </div>

            <div class="askGuestsMore"
                v-if="(guests.length > 0)"
                >
                <div>
                    <button

                    class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.alone}"
                    @click="familyProperties.alone = !familyProperties.alone,
                            familyProperties.couple = false,
                            familyProperties.withChildren = false,
                            familyProperties.withoutChildren = false,
                            familyProperties.onCar = false,
                            familyProperties.needTransfer = false,
                            familyProperties.foodDoesntMatter = false,
                            familyProperties.foodMeat = false,
                            familyProperties.foodFish = false
                            "
                    >
                        Буду один / одна
                    </button>
                </div>
                <div>
                    <button

                class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.couple}"
                    @click="familyProperties.couple = !familyProperties.couple,
                            familyProperties.alone = false,
                            familyProperties.withChildren = false,
                            familyProperties.withoutChildren = false,
                            familyProperties.onCar = false,
                            familyProperties.needTransfer = false,
                            familyProperties.foodDoesntMatter = false,
                            familyProperties.foodMeat = false,
                            familyProperties.foodFish = false
                            "
                    >
                        Буду с парой
                    </button>
                </div>
            </div>

            <div class="askGuestsMore"
                v-if="((guests.length > 0) && (familyProperties.alone || familyProperties.couple))"
                >

                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.withChildren}" 
                    @click="familyProperties.withChildren = !familyProperties.withChildren,
                            familyProperties.withoutChildren = false,
                            familyProperties.onCar = false,
                            familyProperties.needTransfer = false,
                            familyProperties.foodDoesntMatter = false,
                            familyProperties.foodMeat = false,
                            familyProperties.foodFish = false
                            "

                    >
                        С детьми
                    </button>
                </div>
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.withoutChildren}"
                    @click="familyProperties.withoutChildren = !familyProperties.withoutChildren,
                            familyProperties.withChildren = false,
                            familyProperties.onCar = false,
                            familyProperties.needTransfer = false,
                            familyProperties.foodDoesntMatter = false,
                            familyProperties.foodMeat = false,
                            familyProperties.foodFish = false
                            "
                    >
                        Без детей
                    </button>
                </div>
            </div>
            <div class="askGuestsMore"
                v-if="((guests.length > 0) && (familyProperties.withChildren || familyProperties.withoutChildren))"
            >
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.onCar}"
                    @click="familyProperties.onCar = !familyProperties.onCar,
                            familyProperties.needTransfer = false,
                            familyProperties.foodDoesntMatter = false,
                            familyProperties.foodMeat = false,
                            familyProperties.foodFish = false
                            ">
                        На машине
                    </button>
                </div> 
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.needTransfer}"
                    @click="familyProperties.needTransfer = !familyProperties.needTransfer,
                            familyProperties.onCar = false,
                            familyProperties.foodDoesntMatter = false,
                            familyProperties.foodMeat = false,
                            familyProperties.foodFish = false
                            "
                            >
                        Нужен трансфер
                    </button>
                </div> 
            
            </div>
            <div 
                v-if="((guests.length > 0) && (familyProperties.onCar || familyProperties.needTransfer))" 
                class="askGuestsMore" 
                name="Food">
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.foodDoesntMatter}"
                    @click="familyProperties.foodDoesntMatter = !familyProperties.foodDoesntMatter,
                            familyProperties.foodMeat = false,
                            familyProperties.foodFish = false
                            "
                    >
                        Не важно
                    </button>
                </div>
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.foodMeat}"
                    @click="familyProperties.foodDoesntMatter = false,
                            familyProperties.foodMeat = !familyProperties.foodMeat,
                            familyProperties.foodFish = false
                            "
                    >
                        Мясо
                    </button>
                </div>
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: familyProperties.foodFish}"
                    @click="familyProperties.foodDoesntMatter = false,
                            familyProperties.foodMeat = false,
                            familyProperties.foodFish = !familyProperties.foodFish
                            "
                    >
                        Рыба
                    </button>
                </div> 
            </div>

            <button 
            v-if="((familyProperties.foodDoesntMatter || familyProperties.foodMeat || familyProperties.foodFish) && (guests.length > 0))"
            class="btn send"
            @click="askGuestsResult,
            formResults.push(guests, familyProperties),
            guests = [],
            familyProperties = {
                alone: false,
                couple: false,
                withChildren: false,
                withoutChildren: false,
                onCar: false,
                needTransfer: false,
                foodDoesntMatter: false,
                foodMeat: false,
                foodFish: false,
            }
            "
            >
                Отправить
            </button>
        </div>

        
    </div>
    
    <div
    class="stats"
    >
        Statistics:
        <br/>
        {{ guests }}
        <br/>
        <br/>
        Form Results: {{ formResults }}
    </div>
    

</template>

<style scoped>

.guestForm {

    border: 1px solid rgb(24, 93, 133);
    max-width: 800px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    
}
.addGuestsForm {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    min-width: 290px;
}
.name {
    text-align: left;
    padding-left: 10px;
}
.surname {
    text-align: left;
    padding-left: 10px;
}
.guestsList{
    width: 100%;
    padding-left: 7px;
    padding-right: 7px;
    

    
}
.guestItem {
    border-radius: 5px;
    text-align: center;
    background: #c9ffe8;
    color: rgb(24, 93, 133);
    padding: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
    
    
}
.guestName {
    width: 80%;
    max-width: 510px;
    
    
}
.removeGuestDiv {
    padding-left: 20px;
}
.removeGuestBtn {
    padding: 5px 10px 5px 10px;
    border: 1px solid rgb(24, 93, 133);
    border-radius: 5px;
    background-color: white;
    color: rgb(24, 93, 133);
    box-shadow: 0 0 5px #000000;
    cursor:pointer;
    
    
}
.inputField {
    display: flex;
    flex-direction: column;
    
}
.stats {
    margin-top: 40px;
    padding: 10px 15px;
    background: white;
    color: rgb(24, 93, 133);
    border: 1px solid rgb(24, 93, 133);
    border-radius: 10px;
    cursor:pointer;
}
.inputs {
    width: 100%;
    border: 1px solid rgb(24, 93, 133);
    padding: 10px 15px;
    margin-top: 15px;
    border-radius: 10px;
}

.btn {
    background-color: #fff;
    padding: 10px 15px;
    color: rgb(24, 93, 133);
    border: 1px solid rgb(24, 93, 133);
    border-radius: 5px;
    cursor:pointer;
}
.addGuestbtn {
    margin-top: 30px;
    
    margin-bottom: 30px;
    background: #c9ffe8;
    color: rgb(24, 93, 133);

}
.askGuests {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 495.8px;
    justify-content: flex-start;
    
    
    
}
.askGuestsMore {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 100%;
    padding-bottom: 20px;
}

.askGuestsMoreButton {
    border: 1px solid teal;
    
    padding: 15px 20px 15px 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    border-radius: 5px;
    background-color: #f9d8ff;
    cursor: pointer;

    
}
.send {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 14pt;
    box-shadow: 0 0 30px #9effd7;

}
.pressed {
    background:#a2fdd7;
    box-shadow: 0 0 40px #9effd7;
    color: black;
}


@media screen and (max-width: 800px) {
    .guestForm {
    flex-direction: column;
    
}
.inputField {
    
    justify-content: center;
}
.guestsList{
    min-width: 345px;
    max-width: 80%;
    padding-bottom: 30px;
    
}
.askGuests {
    min-width: 290px;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
}
.askGuestsMoreButton {
    margin: 5px;
}

}







</style>
