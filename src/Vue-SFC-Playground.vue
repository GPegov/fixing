<script setup>
import { ref } from 'vue'

const guests = ref([])
const guest = {name: '', surname: ''}






const saveGuest = ()=>{
    guests.value.push({id:guests.value.length +1, 
    name: guest.name,
    surname: guest.surname
    })
    guest.name = ''
    guest.surname = ''
    
}
const askGuestsResult = ()=>{
    guests.value.push({
    id:guests.value.length +1,
    properties: familyProperties.value})
}

let counter = ref(0)
let isActive = ref(false)
const familyProperties = ref({
  alone: false,
  couple: false,
  withChildren: false,
  withoutChildren: false,
  onCar: false,
  foodDoesntMatter: false,
  foodMeat: false,
  foodFish: false,
  })
const formResults = ref([])





</script>
 


<template>
    
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
        <div class="askGuestsMore"
            v-if="(guests.length > 0)"
            >
            <div>
                <button
                
                class="askGuestsMoreButton"
                :class="{pressed: familyProperties.alone}"
                @click="familyProperties.couple = false,
                        familyProperties.alone = !familyProperties.alone"
                >
                    Буду один / одна
                </button>
            </div>
            <div>
                <button
                
                class="askGuestsMoreButton"
                :class="{pressed: familyProperties.couple}"
                @click="familyProperties.couple = !familyProperties.couple,
                familyProperties.alone = false"
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
                        familyProperties.withoutChildren = false"

                >
                    С детьми
                </button>
            </div>
            <div>
                <button
                class="askGuestsMoreButton"
                :class="{pressed: familyProperties.withoutChildren}"
                @click="familyProperties.withChildren = false,
                        familyProperties.withoutChildren = !familyProperties.withoutChildren"
                >
                    Без детей
                </button>
            </div>
            <div>
                <button
                class="askGuestsMoreButton"
                :class="{pressed: familyProperties.onCar}"
                @click="familyProperties.onCar = !familyProperties.onCar">
                    На машине
                </button>
            </div> 
        </div>
        <div 
            v-if="((guests.length > 0) && (familyProperties.withChildren || familyProperties.withoutChildren))" 
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
        v-if="(familyProperties.foodDoesntMatter || familyProperties.foodMeat || familyProperties.foodFish)"
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
            foodDoesntMatter: false,
            foodMeat: false,
            foodFish: false,
        }
        "
        >
            Отправить
        </button>
    </div>
    
    



      <ul>
        <li v-for="{id, name, surname } in guests" :key="id">
            {{ name }} {{ surname }}

        </li>
    </ul>
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

<style>
* {
    margin-left: 20px;
}
.inputField {
    display: flex;
    flex-direction: column;
    max-width: 300px;
}
.stats {
    padding: 10px 15px;
    background: white;
    color: rgb(33, 109, 153);
    border: 2px solid rgb(33, 109, 153);
    border-radius: 10px;
    cursor:pointer;
}
.inputs {
    width: 100%;
    border: 1px solid rgb(33, 109, 153); 
    padding: 10px 15px;
    margin-top: 15px;
    border-radius: 10px;
}

.btn {
    margin-left: 20px;
    padding: 10px 15px;
    background: white;
    color: rgb(33, 109, 153);
    border: 2px solid rgb(33, 109, 153);
    border-radius: 10px;
    cursor:pointer;
}
.addGuestbtn {
margin-top: 30px;

}
.askGuests {
    display: flex;
    flex-direction: column;
}
.askGuestsMore {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.askGuestsMoreButton {
    box-shadow: 0 0 20px #9e68e6;
    padding: 15px 20px 15px 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    cursor: pointer;


}
.send {
    margin-top: 30px;
}
.pressed {
    background:#a676e6;
    color: white;
}
.pressed1 {
    background-color:'#a676e6';
    color:'white'
}

</style>